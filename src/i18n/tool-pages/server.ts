import { getToolBySlug } from "@/data/tools";
import type { Locale } from "@/i18n/config";
import type { ToolTextDictionary } from "@/i18n/tool-text";
import {
  commonToolText,
  toolPageTranslations,
  translatedToolCategories,
} from "./index";
import type { ToolPageTranslation } from "./types";
import { hasLocalizedToolPage } from "@/i18n/localized-tool-content";
import { locales } from "@/i18n/config";

/** True when the tool page is fully translated into `locale` (English always is). */
export function isToolPageIndexable(locale: Locale, slug: string): boolean {
  if (locale === "en") {
    return true;
  }
  return (
    getToolPageTranslation(slug, locale) !== undefined ||
    hasLocalizedToolPage(slug, locale)
  );
}

/** True when every language has the full tool page (hreflang + sitemap alternates). */
export function isToolTranslatedEverywhere(slug: string): boolean {
  const category = getToolBySlug(slug)?.category;
  if (category && translatedToolCategories.includes(category)) {
    return true;
  }
  // Tools that ship their own page translations (e.g. CPS Test).
  return locales.every(
    (locale) => locale === "en" || hasLocalizedToolPage(slug, locale),
  );
}

export function getToolPageTranslation(
  slug: string,
  locale: Locale,
): ToolPageTranslation | undefined {
  if (locale === "en") {
    return undefined;
  }
  const category = getToolBySlug(slug)?.category;
  if (!category || !translatedToolCategories.includes(category)) {
    return undefined;
  }
  return toolPageTranslations[locale]?.[slug];
}

/** Workspace strings for one tool: shared strings plus the tool's own. */
export function getToolText(
  slug: string,
  locale: Locale,
): ToolTextDictionary | undefined {
  const page = getToolPageTranslation(slug, locale);
  if (!page) {
    return undefined;
  }
  return { ...commonToolText[locale], ...page.ui };
}
