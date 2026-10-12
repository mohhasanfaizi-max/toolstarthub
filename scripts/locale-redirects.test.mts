/**
 * Proves locale redirects match only the nine language prefixes.
 *
 *   node --experimental-strip-types scripts/locale-redirects.test.mts
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { LOCALE_PREFIX_PATTERN } from "../next.config.ts";

const PREFIX = new RegExp(`^(?:${LOCALE_PREFIX_PATTERN})$`);

function applyLocaleRedirect(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;
  if (!PREFIX.test(segments[0] ?? "")) return null;
  const rest = segments.slice(1);
  return rest.length === 0 ? "/" : `/${rest.join("/")}`;
}

const cases: Array<{ path: string; expected: string | null }> = [
  { path: "/tools", expected: null },
  { path: "/about", expected: null },
  { path: "/guides/x", expected: null },
  { path: "/categories/calculators", expected: null },
  { path: "/de", expected: "/" },
  { path: "/de/tools/x", expected: "/tools/x" },
  { path: "/fr/guides/x", expected: "/guides/x" },
];

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = readFileSync(join(root, "next.config.ts"), "utf8");
const redirectBlock = config.slice(config.indexOf("async redirects()"), config.indexOf("async headers()"));

const requiredSources = [
  `/:prefix(\${LOCALE_PREFIX_PATTERN})`,
  `/:prefix(\${LOCALE_PREFIX_PATTERN})/:path*`,
];

let failed = 0;

for (const source of requiredSources) {
  if (!redirectBlock.includes(source)) {
    console.error(`FAIL  next.config.ts redirects() missing source ${source}`);
    failed += 1;
  } else {
    console.log(`OK    redirect source ${source}`);
  }
}

if (/source:\s*["'`]\/:path\*/.test(redirectBlock)) {
  console.error("FAIL  redirects() still has a catch-all /:path* source");
  failed += 1;
} else {
  console.log("OK    redirects() has no catch-all /:path*");
}

if (LOCALE_PREFIX_PATTERN !== "de|fr|it|tr|ru|ko|id|es|nl") {
  console.error(`FAIL  LOCALE_PREFIX_PATTERN is ${LOCALE_PREFIX_PATTERN}`);
  failed += 1;
} else {
  console.log(`OK    prefix regex ${LOCALE_PREFIX_PATTERN}`);
}

for (const row of cases) {
  const got = applyLocaleRedirect(row.path);
  if (got !== row.expected) {
    console.error(`FAIL  ${row.path} → ${JSON.stringify(got)} (expected ${JSON.stringify(row.expected)})`);
    failed += 1;
  } else {
    const note = got === null ? "not redirected" : `→ ${got}`;
    console.log(`OK    ${row.path} ${note}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}

console.log("\nAll locale redirect checks passed.");
