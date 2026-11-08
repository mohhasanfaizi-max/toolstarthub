import type { NextConfig } from "next";
import { cacheRules, securityHeaders } from "./src/config/headers.mjs";

const ogFont = ["./src/lib/og/Inter-Bold.ttf"];
const ogImageRoutes = [
  "/opengraph-image",
  "/twitter-image",
  "/guides/opengraph-image",
  "/guides/twitter-image",
  "/guides/[slug]/opengraph-image",
  "/guides/[slug]/twitter-image",
  "/tools/opengraph-image",
  "/tools/twitter-image",
  "/tools/[slug]/opengraph-image",
  "/tools/[slug]/twitter-image",
  "/categories/opengraph-image",
  "/categories/twitter-image",
  "/categories/[slug]/opengraph-image",
  "/categories/[slug]/twitter-image",
  "/about/opengraph-image",
  "/about/twitter-image",
  "/contact/opengraph-image",
  "/contact/twitter-image",
  "/privacy/opengraph-image",
  "/privacy/twitter-image",
  "/terms/opengraph-image",
  "/terms/twitter-image",
  "/disclaimer/opengraph-image",
  "/disclaimer/twitter-image",
];

async function headers() {
  return [
    { source: "/:path*", headers: securityHeaders },
    ...cacheRules.map((rule) => ({ ...rule, source: rule.source.replace(/\/\*$/, "/:path*") })),
  ];
}

// CF_STATIC_EXPORT=1 is set only by scripts/cf/build-static.mjs.
const cfStatic = process.env.CF_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(cfStatic ? { output: "export" as const, images: { unoptimized: true } } : {}),
  poweredByHeader: false,
  serverExternalPackages: ["pdfjs-dist", "terser"],
  outputFileTracingIncludes: Object.fromEntries(ogImageRoutes.map((route) => [route, ogFont])),
  ...(cfStatic ? {} : { headers }),
};

export default nextConfig;
