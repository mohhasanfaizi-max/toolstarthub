#!/usr/bin/env node
/**
 * Production URL checker. Does not run against https://www.toolstarhub.com unless you
 * pass that URL. Safe for local development:
 *
 *   node scripts/verify-production.mjs http://localhost:3000
 *   npm run verify:production -- https://www.toolstarhub.com
 */

const baseInput = process.argv[2] || process.env.BASE_URL;

if (!baseInput) {
  console.error(
    "Usage: node scripts/verify-production.mjs <base-url>\n" +
      "Example: node scripts/verify-production.mjs http://localhost:3000",
  );
  process.exit(1);
}

let origin;
try {
  origin = new URL(baseInput).origin;
} catch {
  console.error(`Invalid base URL: ${baseInput}`);
  process.exit(1);
}

const expectedOk = [
  "/",
  "/tools",
  "/categories",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/icon.svg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/tools/percentage-calculator",
  "/tools/word-counter",
  "/tools/image-compressor",
  "/tools/pdf-compressor",
  "/tools/qr-code-generator",
  "/tools/text-diff",
  "/categories/calculators",
  "/guides/how-to-calculate-percentage",
];

const expectedMissing = ["/this-page-does-not-exist-toolstarhub"];

async function fetchStatus(path) {
  const url = new URL(path, `${origin}/`).href;
  const response = await fetch(url, { redirect: "manual" });
  return { url, status: response.status, headers: response.headers, body: response };
}

function fail(message) {
  console.error(`FAIL  ${message}`);
}

function ok(message) {
  console.log(`OK    ${message}`);
}

async function main() {
  let errors = 0;

  for (const path of expectedOk) {
    try {
      const result = await fetchStatus(path);
      if (result.status >= 200 && result.status < 400) {
        ok(`${path} → ${result.status}`);
      } else {
        errors += 1;
        fail(`${path} → ${result.status}`);
      }
    } catch (error) {
      errors += 1;
      fail(`${path} → ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  for (const path of expectedMissing) {
    try {
      const result = await fetchStatus(path);
      if (result.status === 404) {
        ok(`${path} → 404`);
      } else {
        errors += 1;
        fail(`${path} expected 404, got ${result.status}`);
      }
    } catch (error) {
      errors += 1;
      fail(`${path} → ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  try {
    const robots = await fetchStatus("/robots.txt");
    const text = await robots.body.text();
    if (!text.includes("Sitemap:")) {
      errors += 1;
      fail("robots.txt is missing a Sitemap line");
    } else if (text.toLowerCase().includes("localhost")) {
      errors += 1;
      fail("robots.txt unexpectedly mentions localhost");
    } else {
      ok("robots.txt includes a sitemap reference");
    }
    if (/disallow:\s*\/tools\s*$/im.test(text)) {
      errors += 1;
      fail("robots.txt blocks /tools");
    }
  } catch (error) {
    errors += 1;
    fail(`robots.txt parse → ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const sitemap = await fetchStatus("/sitemap.xml");
    const xml = await sitemap.body.text();
    if (xml.toLowerCase().includes("localhost") || xml.includes("127.0.0.1")) {
      errors += 1;
      fail("sitemap.xml contains a localhost URL");
    }
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    if (!xml.includes("<urlset") || !locs.some((url) => url.includes("/tools/percentage-calculator"))) {
      errors += 1;
      fail("sitemap.xml is missing expected tool URLs");
    } else {
      ok(`sitemap.xml has ${locs.length} loc entries`);
    }
    if (locs.some((url) => url.includes("?"))) {
      errors += 1;
      fail("sitemap.xml contains query-string URLs");
    } else {
      ok("sitemap loc URLs have no query strings");
    }
  } catch (error) {
    errors += 1;
    fail(`sitemap.xml parse → ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const home = await fetchStatus("/");
    const nosniff = home.headers.get("x-content-type-options");
    if (nosniff !== "nosniff") {
      errors += 1;
      fail(`X-Content-Type-Options is ${nosniff ?? "missing"}`);
    } else {
      ok("security header X-Content-Type-Options: nosniff");
    }
    if (home.headers.get("x-powered-by")) {
      errors += 1;
      fail("X-Powered-By is present");
    }
  } catch (error) {
    errors += 1;
    fail(`home headers → ${error instanceof Error ? error.message : String(error)}`);
  }

  if (errors > 0) {
    console.error(`\n${errors} check(s) failed for ${origin}`);
    process.exit(1);
  }

  console.log(`\nAll production URL checks passed for ${origin}`);
}

main();
