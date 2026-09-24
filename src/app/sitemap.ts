import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/tools",
  "/categories",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${siteConfig.url}${tool.route}`,
    changeFrequency: "monthly",
    priority: tool.featured ? 0.8 : 0.6,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteConfig.url}${category.route}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}${guide.route}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const all = [...pages, ...toolPages, ...categoryPages, ...guidePages];
  const seen = new Set<string>();

  return all.filter((entry) => {
    if (seen.has(entry.url)) {
      return false;
    }
    seen.add(entry.url);
    return true;
  });
}
