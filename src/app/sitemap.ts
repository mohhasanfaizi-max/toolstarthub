import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import {
  isToolPageIndexable,
  localizePath,
  locales,
  toolContentLocales,
} from "@/i18n/config";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

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

/** Pages that exist in every language (hreflang alternates). */
const localizedRoutes = new Set(["", "/tools", "/categories"]);

type Entry = MetadataRoute.Sitemap[number];

/** One entry per language for a page that is translated, with alternates. */
function localizedEntries(
  path: string,
  base: Omit<Entry, "url" | "alternates">,
): Entry[] {
  const languages = languageAlternates(path || "/");
  return locales.map((locale) => ({
    ...base,
    url: absoluteUrl(localizePath(path || "/", locale)),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.flatMap((path) => {
    const base = {
      changeFrequency: (path === ""
        ? "weekly"
        : "monthly") as Entry["changeFrequency"],
      priority: path === "" ? 1 : 0.7,
    };
    return localizedRoutes.has(path)
      ? localizedEntries(path, base)
      : [{ url: `${siteConfig.url}${path}`, ...base }];
  });

  // Tool pages are listed only in languages whose full tool content is
  // translated (English for now; see toolContentLocales).
  const toolPages: MetadataRoute.Sitemap = tools.flatMap((tool) => {
    const base = {
      changeFrequency: "monthly" as const,
      priority: tool.featured ? 0.8 : 0.6,
    };
    if (toolContentLocales.length > 1) {
      return localizedEntries(tool.route, base).filter((_, index) =>
        isToolPageIndexable(locales[index]),
      );
    }
    return [{ url: `${siteConfig.url}${tool.route}`, ...base }];
  });

  const categoryPages: MetadataRoute.Sitemap = categories.flatMap((category) =>
    localizedEntries(category.route, {
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  const guidePages: MetadataRoute.Sitemap = getPublicGuides(new Date()).map(
    (guide) => ({
      url: `${siteConfig.url}${guide.route}`,
      changeFrequency: "monthly",
      priority: 0.5,
    }),
  );

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
