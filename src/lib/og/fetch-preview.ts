import { lookup } from "node:dns/promises";
import type { LookupOptions } from "node:dns";
import http from "node:http";
import https from "node:https";
import { isIP } from "node:net";
import { Readable } from "node:stream";
import { isBlockedAddress } from "./blocked-address.ts";
import { extractPreview, type OpenGraphPreview } from "./extract-preview.ts";
import { readCappedBody } from "./read-body.ts";

export const OG_TIMEOUT_MS = 8000;
export const OG_HOP_LIMIT = 5;

const BAD_URL = "Enter an http or https page URL.";
const BLOCKED = "That address cannot be fetched.";
const FAILED = "That page could not be previewed.";
const TIMEOUT = "The preview request timed out.";
const TOO_MANY = "That page redirected too many times.";
const NOT_HTML = "That page is not HTML.";

export type ResolvedAddress = { address: string; family: number };

export type AddressLookup = (hostname: string) => Promise<ResolvedAddress[]>;

export type PageResponse = {
  status: number;
  headers: Record<string, string>;
  body: Readable;
};

export type PageRequest = (
  target: URL,
  address: string,
  family: number,
  deadline: number,
) => Promise<{ ok: true; response: PageResponse } | { ok: false; error: string }>;

export function parsePreviewUrl(raw: string): { ok: true; url: URL } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (trimmed === "" || trimmed.length > 2048) return { ok: false, error: BAD_URL };
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return { ok: false, error: BAD_URL };
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return { ok: false, error: BAD_URL };
  if (url.username !== "" || url.password !== "") return { ok: false, error: BAD_URL };
  if (url.hostname === "") return { ok: false, error: BAD_URL };
  return { ok: true, url };
}

function pinnedLookup(address: string, family: number) {
  return (
    _hostname: string,
    options: LookupOptions | ((error: NodeJS.ErrnoException | null, address: string, family: number) => void),
    callback?: (error: NodeJS.ErrnoException | null, address: string | ResolvedAddress[], family?: number) => void,
  ) => {
    if (typeof options === "function") {
      options(null, address, family);
      return;
    }
    if (options.all) {
      callback?.(null, [{ address, family }]);
      return;
    }
    callback?.(null, address, family);
  };
}

export function requestPinnedPage(
  target: URL,
  address: string,
  family: number,
  deadline: number,
): Promise<{ ok: true; response: PageResponse } | { ok: false; error: string }> {
  const remaining = deadline - Date.now();
  if (remaining <= 0) return Promise.resolve({ ok: false, error: TIMEOUT });

  const transport = target.protocol === "https:" ? https : http;
  const port = target.port === "" ? (target.protocol === "https:" ? 443 : 80) : Number(target.port);
  const hostname = target.hostname.replace(/^\[|\]$/g, "");

  return new Promise((resolve) => {
    let settled = false;
    let request: http.ClientRequest;
    const fail = (error: string) => {
      if (settled) return;
      settled = true;
      request.destroy();
      resolve({ ok: false, error });
    };

    try {
      request = transport.request(
        {
          protocol: target.protocol,
          hostname,
          port,
          method: "GET",
          path: `${target.pathname}${target.search}`,
          headers: {
            Host: target.host,
            Accept: "text/html",
            "Accept-Encoding": "identity",
            "User-Agent": "ToolsStarHub-LinkPreview/1.0",
          },
          servername: hostname,
          lookup: pinnedLookup(address, family),
          autoSelectFamily: false,
          agent: false,
          timeout: remaining,
        },
        (response) => {
          if (settled) {
            response.destroy();
            return;
          }
          settled = true;
          const headers: Record<string, string> = {};
          for (const [key, value] of Object.entries(response.headers)) {
            if (typeof value === "string") headers[key.toLowerCase()] = value;
            else if (Array.isArray(value) && value[0]) headers[key.toLowerCase()] = value[0];
          }
          resolve({
            ok: true,
            response: { status: response.statusCode ?? 0, headers, body: response },
          });
        },
      );

      request.setTimeout(remaining, () => fail(TIMEOUT));
      request.on("error", () => fail(FAILED));
      request.end();
    } catch {
      resolve({ ok: false, error: FAILED });
    }
  });
}

async function lookupAll(hostname: string): Promise<ResolvedAddress[]> {
  const results = await lookup(hostname, { all: true, verbatim: true });
  return results.map((item) => ({ address: item.address, family: item.family }));
}

async function publicAddresses(
  hostname: string,
  resolveHost: AddressLookup,
): Promise<{ ok: true; addresses: ResolvedAddress[] } | { ok: false; error: string }> {
  const bare = hostname.replace(/^\[|\]$/g, "");
  const version = isIP(bare);
  let addresses: ResolvedAddress[];
  if (version === 4 || version === 6) {
    addresses = [{ address: bare, family: version }];
  } else {
    try {
      addresses = await resolveHost(bare);
    } catch {
      return { ok: false, error: FAILED };
    }
  }
  if (addresses.length === 0) return { ok: false, error: FAILED };
  if (addresses.some((item) => isBlockedAddress(item.address))) return { ok: false, error: BLOCKED };
  return { ok: true, addresses };
}

function contentLengthOf(headers: Record<string, string>): number | undefined {
  const raw = headers["content-length"];
  if (!raw || !/^\d+$/.test(raw)) return undefined;
  const value = Number(raw);
  return Number.isSafeInteger(value) ? value : undefined;
}

function isHtml(contentType: string | undefined): boolean {
  const mediaType = contentType?.split(";")[0]?.trim().toLowerCase() ?? "";
  return mediaType === "text/html";
}

function isRedirect(status: number): boolean {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

function redirectTarget(location: string | undefined, current: URL): { ok: true; url: URL } | { ok: false; error: string } {
  if (!location) return { ok: false, error: FAILED };
  let resolved: URL;
  try {
    resolved = new URL(location, current);
  } catch {
    return { ok: false, error: BAD_URL };
  }
  return parsePreviewUrl(resolved.href);
}

export async function fetchOpenGraph(
  rawUrl: string,
  now: number,
  deps: { lookup?: AddressLookup; request?: PageRequest } = {},
): Promise<{ ok: true; preview: OpenGraphPreview } | { ok: false; error: string }> {
  const parsed = parsePreviewUrl(rawUrl);
  if (!parsed.ok) return parsed;

  const resolveHost = deps.lookup ?? lookupAll;
  const request = deps.request ?? requestPinnedPage;
  const deadline = now + OG_TIMEOUT_MS;
  let current = parsed.url;

  for (let hop = 0; hop < OG_HOP_LIMIT; hop += 1) {
    if (Date.now() > deadline) return { ok: false, error: TIMEOUT };
    const addresses = await publicAddresses(current.hostname, resolveHost);
    if (!addresses.ok) return addresses;
    const chosen = addresses.addresses[0];
    if (!chosen) return { ok: false, error: FAILED };

    const response = await request(current, chosen.address, chosen.family, deadline);
    if (!response.ok) return response;

    if (isRedirect(response.response.status)) {
      response.response.body.destroy();
      if (hop === OG_HOP_LIMIT - 1) return { ok: false, error: TOO_MANY };
      const next = redirectTarget(response.response.headers.location, current);
      if (!next.ok) return next;
      current = next.url;
      continue;
    }

    if (response.response.status !== 200) {
      response.response.body.destroy();
      return { ok: false, error: FAILED };
    }
    if (!isHtml(response.response.headers["content-type"])) {
      response.response.body.destroy();
      return { ok: false, error: NOT_HTML };
    }

    const body = await readCappedBody(
      response.response.body,
      response.response.headers["content-encoding"],
      contentLengthOf(response.response.headers),
    );
    if (!body.ok) return body;
    const html = new TextDecoder("utf-8", { fatal: false }).decode(body.bytes);
    return { ok: true, preview: extractPreview(html, parsed.url.href, current.href) };
  }

  return { ok: false, error: TOO_MANY };
}
