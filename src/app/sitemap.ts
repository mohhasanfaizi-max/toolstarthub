import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/data/guides";
import { tools } from "@/data/tools";
import { localizePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { indexableLocales } from "@/i18n/indexing";
import {
  indexableLocalesForCategory,
  indexableLocalesForTool,
} from "@/i18n/tool-pages/server";
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

/** One entry per listed language, with hreflang limited to those languages. */
function localizedEntriesFor(
  path: string,
  base: Omit<Entry, "url" | "alternates">,
  locales: Locale[],
): Entry[] {
  const languages = languageAlternates(path || "/", locales);
  return locales.map((locale) => ({
    ...base,
    url: absoluteUrl(localizePath(path || "/", locale)),
    ...(languages ? { alternates: { languages } } : {}),
  }));
}

/** One entry per indexable language. Noindex translations are left out. */
function localizedEntries(
  path: string,
  base: Omit<Entry, "url" | "alternates">,
): Entry[] {
  return localizedEntriesFor(path, base, indexableLocales());
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

  // List a tool in every indexable language that already has a complete page.
  // Incomplete translations stay out, and other finished languages stay in.
  const toolPages: MetadataRoute.Sitemap = tools.flatMap((tool) => {
    const base = {
      changeFrequency: "monthly" as const,
      priority: tool.featured ? 0.8 : 0.6,
    };
    return localizedEntriesFor(tool.route, base, indexableLocalesForTool(tool.slug));
  });

  const categoryPages: MetadataRoute.Sitemap = categories.flatMap((category) =>
    localizedEntriesFor(category.route, {
      changeFrequency: "weekly",
      priority: 0.7,
    }, indexableLocalesForCategory(category.slug)),
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
