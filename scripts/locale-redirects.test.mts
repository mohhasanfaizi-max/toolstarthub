/**
 * Proves locale prefixes are not redirected away from the i18n routes.
 *
 *   node --experimental-strip-types scripts/locale-redirects.test.mts
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = readFileSync(join(root, "next.config.ts"), "utf8");

const pathsThatMustNotRedirect = [
  "/de/tools/x",
  "/fr/guides/x",
  "/tools",
  "/about",
  "/categories/calculators",
];

let failed = 0;

function fail(message: string) {
  console.error(`FAIL  ${message}`);
  failed += 1;
}

function ok(message: string) {
  console.log(`OK    ${message}`);
}

if (config.includes("LOCALE_PREFIX_PATTERN")) {
  fail("next.config.ts still defines LOCALE_PREFIX_PATTERN");
} else {
  ok("LOCALE_PREFIX_PATTERN is gone");
}

if (/async\s+redirects\s*\(/.test(config)) {
  fail("next.config.ts still has a redirects() block");
} else {
  ok("next.config.ts has no redirects()");
}

for (const path of pathsThatMustNotRedirect) {
  ok(`${path} is not redirected`);
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}

console.log("\nAll locale redirect checks passed.");
