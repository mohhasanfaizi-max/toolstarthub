#!/usr/bin/env node
// Builds the Cloudflare (free plan) version of the site:
//   1. Copies the project to .cf-export/ and applies small, asserted patches
//      that make every page static (no change to the real source tree).
//   2. Runs `next build` there with output: "export".
//   3. Copies the export to dist/cloudflare/static and writes _headers.
// API routes and /admin/comments are served by cloudflare/worker.ts instead.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { securityHeaders, cacheRules } from "../../src/config/headers.mjs";

const root = resolve(import.meta.dirname, "../..");
const work = join(root, ".cf-export");
const dist = join(root, "dist/cloudflare/static");
const skip = new Set(["node_modules", "cloudflare", ".next", ".open-next", ".git", ".cf-export", "dist", ".wrangler", ".vercel"]);

rmSync(work, { recursive: true, force: true });
mkdirSync(work, { recursive: true });
for (const entry of readdirSafe(root)) {
  if (skip.has(entry)) continue;
  cpSync(join(root, entry), join(work, entry), { recursive: true });
}
symlinkSync(join(root, "node_modules"), join(work, "node_modules"), "dir");

function readdirSafe(dir) {
  return execSync(`ls -A "${dir}"`).toString().split("\n").filter(Boolean);
}

function patch(rel, from, to) {
  const file = join(work, rel);
  const src = readFileSync(file, "utf8");
  if (!src.includes(from)) throw new Error(`cf build: patch target not found in ${rel}: ${from}`);
  writeFileSync(file, src.replace(from, to));
}

// Dynamic server-only parts live in the Worker.
rmSync(join(work, "src/app/api"), { recursive: true, force: true });
rmSync(join(work, "src/app/admin"), { recursive: true, force: true });

// Guides and the sitemap are rendered per request on Vercel only so scheduled
// guides appear on time; here they are rendered at build time (rebuild to publish).
patch("src/app/guides/page.tsx", 'export const dynamic = "force-dynamic";', 'export const dynamic = "force-static";');
patch("src/app/sitemap.ts", 'export const dynamic = "force-dynamic";', 'export const dynamic = "force-static";');
patch(
  "src/app/guides/[slug]/page.tsx",
  'export const dynamic = "force-dynamic";',
  `export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() {
  return __cfPublicGuides().map((guide) => ({ slug: guide.route.split("/").pop()! }));
}`,
);
patch("src/app/guides/[slug]/page.tsx", 'import { getPublicGuideBySlug,', 'import { getPublicGuides as __cfPublicGuides, getPublicGuideBySlug,');
// /tools?q=... gets its noindex robots tag from the Worker (HTMLRewriter).
patch("src/app/tools/page.tsx", "await searchParams", "({} as Record<string, string>)");
patch("src/app/[locale]/tools/page.tsx", "await searchParams", "({} as Record<string, string>)");
patch("src/app/[locale]/tools/page.tsx", "  searchParams,\n", "");
patch("src/app/tools/page.tsx", "{ searchParams }: PageProps<\"/tools\">", "_props: PageProps<\"/tools\">");

// Route handlers and metadata images must say force-static for output: export.
const metaFile = /(?:^|\/)(?:route\.tsx?|opengraph-image\.tsx|twitter-image\.tsx|apple-icon\.tsx|icon\.tsx|manifest\.ts|robots\.ts|sitemap\.ts)$/;
for (const rel of readdirSync(join(work, "src/app"), { recursive: true })) {
  if (!metaFile.test(rel)) continue;
  const file = join(work, "src/app", rel);
  const src = readFileSync(file, "utf8");
  if (/export const dynamic\s*=/.test(src)) continue;
  writeFileSync(file, `${src}\nexport const dynamic = "force-static";\n`);
}

execSync("npx next build", { cwd: work, stdio: "inherit", env: { ...process.env, CF_STATIC_EXPORT: "1", NEXT_TELEMETRY_DISABLED: "1" } });

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(work, "out"), dist, { recursive: true });

// Headers that next.config.ts sends on Vercel, for static assets.
const lines = [];
lines.push("/*", ...securityHeaders.map((h) => `  ${h.key}: ${h.value}`), "");
for (const rule of cacheRules) lines.push(rule.source, ...rule.headers.map((h) => `  ${h.key}: ${h.value}`), "");
// Build-hashed Next.js files are immutable (same as next start / Vercel).
lines.push("/_next/static/*", "  Cache-Control: public, max-age=31536000, immutable", "");
// Metadata images are exported without a file extension; keep their PNG type.
for (const name of ["opengraph-image", "twitter-image"]) {
  for (const prefix of ["", "/:a", "/:a/:b"]) lines.push(`${prefix}/${name}`, "  Content-Type: image/png", "");
}
lines.push("/apple-icon", "  Content-Type: image/png", "");
writeFileSync(join(dist, "_headers"), lines.join("\n"));
// Next.js answers any path ending in "/" with a 308 to the path without it.
writeFileSync(join(dist, "_redirects"), "/*/ /:splat 308\n");
if (!existsSync(join(dist, "404.html"))) throw new Error("cf build: 404.html missing");
console.log("cf build: static site written to dist/cloudflare/static");
