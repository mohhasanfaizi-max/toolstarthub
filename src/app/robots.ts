import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const canonicalHost = new URL(siteConfig.url).host;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/tools?"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: canonicalHost,
  };
}
