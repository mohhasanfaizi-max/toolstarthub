import { Readable } from "node:stream";
import { gzipSync } from "node:zlib";
import { consumeRateLimit, resetRateLimits } from "../ai/rate-limit.ts";
import { isBlockedAddress } from "./blocked-address.ts";
import { fetchOpenGraph, OG_TIMEOUT_MS, type PageRequest } from "./fetch-preview.ts";
import { handleOgPreview } from "./handle-preview.ts";
import { OG_MAX_BODY_BYTES, readCappedBody } from "./read-body.ts";

type Assert = (condition: unknown, message: string) => void;

const BLOCKED = "That address cannot be fetched.";

function htmlResponse(status: number, headers: Record<string, string>, body: Buffer | string): Awaited<ReturnType<PageRequest>> {
  return {
    ok: true,
    response: {
      status,
      headers,
      body: Readable.from([Buffer.isBuffer(body) ? body : Buffer.from(body)]),
    },
  };
}

export async function runOgChecks(assert: Assert): Promise<void> {
  assert(isBlockedAddress("127.0.0.1"), "Loopback IPv4 is blocked");
  assert(isBlockedAddress("10.1.2.3"), "Private 10/8 is blocked");
  assert(isBlockedAddress("172.16.0.1") && !isBlockedAddress("172.15.255.255"), "Private 172.16/12 is blocked");
  assert(isBlockedAddress("192.168.1.20"), "Private 192.168/16 is blocked");
  assert(isBlockedAddress("169.254.169.254"), "Link-local metadata address is blocked");
  assert(isBlockedAddress("0.1.2.3") && isBlockedAddress("255.255.255.255"), "Reserved and broadcast IPv4 are blocked");
  assert(isBlockedAddress("100.64.0.1") && isBlockedAddress("100.127.255.255") && !isBlockedAddress("100.128.0.1"), "Carrier-grade NAT range is blocked");
  assert(isBlockedAddress("192.0.0.8") && !isBlockedAddress("192.0.1.1"), "IETF protocol assignments are blocked");
  assert(isBlockedAddress("192.0.2.1") && isBlockedAddress("198.51.100.1") && isBlockedAddress("203.0.113.1"), "Documentation ranges are blocked");
  assert(isBlockedAddress("198.18.0.1") && isBlockedAddress("224.0.0.1") && isBlockedAddress("240.0.0.1"), "Benchmark, multicast, and reserved ranges are blocked");
  assert(!isBlockedAddress("8.8.8.8") && !isBlockedAddress("1.1.1.1"), "Public IPv4 addresses are allowed");
  assert(isBlockedAddress("::1") && isBlockedAddress("::") && isBlockedAddress("fe80::1"), "IPv6 loopback and link-local are blocked");
  assert(isBlockedAddress("fc00::1") && isBlockedAddress("fd12::1") && isBlockedAddress("ff02::1"), "Unique-local and multicast IPv6 are blocked");
  assert(isBlockedAddress("2001:db8::1") && isBlockedAddress("100::1"), "IPv6 documentation and discard ranges are blocked");
  assert(!isBlockedAddress("2001:4860:4860::8888"), "Public IPv6 addresses are allowed");
  assert(isBlockedAddress("::ffff:127.0.0.1") && isBlockedAddress("::ffff:7f00:1"), "Mapped loopback addresses are blocked");
  assert(!isBlockedAddress("::ffff:8.8.8.8"), "A mapped public IPv4 address is allowed");
  assert(isBlockedAddress("not-an-ip"), "An unparseable address is blocked");

  const literal = await fetchOpenGraph("http://127.0.0.1/admin", Date.now(), {
    lookup: async () => {
      throw new Error("lookup should not run");
    },
  });
  assert(!literal.ok && literal.error === BLOCKED && !literal.error.includes("127.0.0.1"), "A literal loopback URL is rejected");

  const decimal = await fetchOpenGraph("http://2130706433/", Date.now());
  assert(!decimal.ok && decimal.error === BLOCKED, "A decimal loopback URL is rejected");

  const fileUrl = await fetchOpenGraph("file:///etc/passwd", Date.now());
  assert(!fileUrl.ok && fileUrl.error === "Enter an http or https page URL.", "A file URL is rejected");

  const credentials = await fetchOpenGraph("http://user:pass@8.8.8.8/secret", Date.now());
  assert(!credentials.ok && credentials.error === "Enter an http or https page URL.", "A URL with userinfo is rejected");

  let mixedRequests = 0;
  const mixed = await fetchOpenGraph("http://public.example/start", Date.now(), {
    lookup: async () => [
      { address: "8.8.8.8", family: 4 },
      { address: "10.0.0.1", family: 4 },
    ],
    request: async () => {
      mixedRequests += 1;
      return htmlResponse(200, { "content-type": "text/html" }, "<title>No</title>");
    },
  });
  assert(!mixed.ok && mixed.error === BLOCKED && mixedRequests === 0, "One private DNS answer rejects the host");

  let redirectRequests = 0;
  const redirect = await fetchOpenGraph("https://public.example/start", Date.now(), {
    lookup: async (hostname) => {
      if (hostname === "public.example") return [{ address: "8.8.8.8", family: 4 }];
      return [{ address: "127.0.0.1", family: 4 }];
    },
    request: async (target) => {
      redirectRequests += 1;
      assert(target.hostname === "public.example", "The first hop uses the public host");
      return htmlResponse(302, { location: "http://127.0.0.1/admin" }, "");
    },
  });
  assert(!redirect.ok && redirect.error === BLOCKED && redirectRequests === 1, "A redirect to loopback is rejected before the next request");
  assert(!JSON.stringify(redirect).includes("127.0.0.1"), "A blocked redirect error hides the resolved address");

  const fileRedirect = await fetchOpenGraph("https://public.example/start", Date.now(), {
    lookup: async () => [{ address: "8.8.8.8", family: 4 }],
    request: async () => htmlResponse(301, { location: "file:///etc/passwd" }, ""),
  });
  assert(!fileRedirect.ok && fileRedirect.error === "Enter an http or https page URL.", "A redirect to a file URL is rejected");

  let hops = 0;
  const tooMany = await fetchOpenGraph("https://public.example/start", Date.now(), {
    lookup: async () => [{ address: "8.8.8.8", family: 4 }],
    request: async () => {
      hops += 1;
      return htmlResponse(302, { location: "https://public.example/again" }, "");
    },
  });
  assert(!tooMany.ok && tooMany.error === "That page redirected too many times." && hops === 5, "Redirects stop after five hops");

  const preview = await fetchOpenGraph("https://public.example/docs", Date.now(), {
    lookup: async () => [{ address: "1.1.1.1", family: 4 }],
    request: async () =>
      htmlResponse(
        200,
        { "content-type": "text/html; charset=utf-8" },
        `<!doctype html><title>Doc &amp; Co</title><meta name="description" content="About">` +
          `<meta content="Share" property="og:title"><meta property="og:image" content="/cover.png">` +
          `<meta name="twitter:card" content="summary">` +
          `<meta name="twitter:image" content="javascript:alert(1)">`,
      ),
  });
  assert(preview.ok && preview.preview.title === "Doc & Co", "The document title is decoded");
  assert(preview.ok && preview.preview.description === "About" && preview.preview.openGraph.title === "Share", "Description and Open Graph title are read");
  assert(preview.ok && preview.preview.openGraph.image === "https://public.example/cover.png", "A relative image URL is resolved");
  assert(preview.ok && preview.preview.twitter.card === "summary" && preview.preview.twitter.image === "", "A script image URL is dropped");

  const packed = gzipSync(Buffer.from(`<title>Kept</title>${"A".repeat(OG_MAX_BODY_BYTES * 2)}`));
  assert(packed.length < OG_MAX_BODY_BYTES, "The sample gzip payload is smaller than the cap");
  const inflated = await readCappedBody(Readable.from([packed]), "gzip", packed.length);
  assert(
    inflated.ok && inflated.truncated && inflated.bytes.length === OG_MAX_BODY_BYTES,
    "The size cap applies to decompressed bytes",
  );
  assert(inflated.ok && inflated.bytes.subarray(0, 20).toString().includes("<title>Kept</title>"), "Truncation keeps the start of the page");

  let oversizedReads = 0;
  const oversized = new Readable({
    read() {
      oversizedReads += 1;
      this.push(null);
    },
  });
  const rejected = await readCappedBody(oversized, undefined, OG_MAX_BODY_BYTES + 1);
  assert(!rejected.ok && rejected.error === "That page is too large to preview." && oversizedReads === 0, "An oversized content length is rejected before reading");

  let lookups = 0;
  const timedOut = await fetchOpenGraph("https://public.example/", Date.now() - OG_TIMEOUT_MS - 1, {
    lookup: async () => {
      lookups += 1;
      return [{ address: "8.8.8.8", family: 4 }];
    },
  });
  assert(!timedOut.ok && timedOut.error === "The preview request timed out." && lookups === 0, "An expired deadline does not resolve the host");

  const previousMax = process.env.AI_RATE_LIMIT_MAX;
  process.env.AI_RATE_LIMIT_MAX = "1";
  resetRateLimits();
  const malformed = await handleOgPreview({ url: "" }, "og-shape", Date.now());
  assert(malformed.status === 400, "A missing preview URL is rejected");
  const now = Date.now();
  const allowed = await handleOgPreview({ url: "https://public.example/" }, "og-visitor", now, {
    lookup: async () => [{ address: "1.1.1.1", family: 4 }],
    request: async () => htmlResponse(200, { "content-type": "text/html" }, "<title>Ok</title>"),
  });
  const limited = await handleOgPreview({ url: "https://public.example/" }, "og-visitor", now + 100, {
    lookup: async () => [{ address: "1.1.1.1", family: 4 }],
    request: async () => htmlResponse(200, { "content-type": "text/html" }, "<title>Ok</title>"),
  });
  const otherRoute = consumeRateLimit("og-visitor", now + 200);
  assert(allowed.status === 200 && allowed.body.success === true, "A preview request returns the extracted fields");
  assert(limited.status === 429 && limited.retryAfterSeconds !== undefined, "The preview route returns HTTP 429");
  assert(limited.body.success === false && limited.body.error.includes("Wait a minute"), "The preview rate-limit error is public");
  assert(otherRoute.ok, "The preview bucket does not consume the Gemini bucket");
  if (previousMax === undefined) delete process.env.AI_RATE_LIMIT_MAX;
  else process.env.AI_RATE_LIMIT_MAX = previousMax;
  resetRateLimits();
}
