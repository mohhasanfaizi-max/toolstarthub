import { getToolBySlug, tools } from "@/data/tools";
import type { Locale } from "@/i18n/config";
import type { ToolTextDictionary } from "@/i18n/tool-text";
import {
  commonToolText,
  toolPageTranslations,
  translatedToolCategories,
} from "./index";
import type { ToolPageTranslation } from "./types";
import { localeToolFaqExtras } from "./faq-extra";
import { calculatorWorkspaceText } from "./calculators/ui";
import { imageWorkspaceText } from "./image-tools/ui";
import { developerWorkspaceText } from "./developer-tools/ui";
import { getLocalizedToolPage } from "@/i18n/localized-tool-content";
import { indexableLocales } from "@/i18n/indexing";
import { getFaqsForTool } from "@/components/tools/ToolDetails";
import type { ToolContent } from "@/data/tool-content";

/** True when localized FAQs match the English count, including the shared mobile FAQ. */
function hasFaqParity(slug: string, content: ToolContent): boolean {
  const englishCount = getFaqsForTool(slug, slug).length;
  const localizedCount = getFaqsForTool(slug, slug, content).length;
  return englishCount > 0 && localizedCount === englishCount;
}

/** True when the tool page is fully translated into `locale` (English always is). */
export function isToolPageIndexable(locale: Locale, slug: string): boolean {
  if (locale === "en") {
    return true;
  }
  const page = getToolPageTranslation(slug, locale);
  if (page?.content) {
    return hasFaqParity(slug, page.content);
  }
  const localized = getLocalizedToolPage(slug, locale);
  if (localized?.content) {
    return hasFaqParity(slug, localized.content);
  }
  return false;
}

/** True when every currently indexable language has the full tool page. */
export function isToolTranslatedEverywhere(slug: string): boolean {
  return indexableLocales().every((locale) => isToolPageIndexable(locale, slug));
}

/** Indexable locales that already have a complete page for this tool. */
export function indexableLocalesForTool(slug: string) {
  return indexableLocales().filter((locale) => isToolPageIndexable(locale, slug));
}

/** True when every available tool in the category has FAQ parity in `locale`. */
export function isCategoryPageIndexable(locale: Locale, slug: string): boolean {
  if (locale === "en") {
    return true;
  }
  const inCategory = tools.filter((tool) => tool.category === slug);
  if (inCategory.length === 0) {
    return false;
  }
  return inCategory.every((tool) => isToolPageIndexable(locale, tool.slug));
}

/** Indexable locales that already have a complete category page. */
export function indexableLocalesForCategory(slug: string) {
  return indexableLocales().filter((locale) =>
    isCategoryPageIndexable(locale, slug),
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
  const page = toolPageTranslations[locale]?.[slug];
  if (!page?.content) {
    return page;
  }
  const extra = localeToolFaqExtras[locale]?.[slug];
  if (!extra?.length) {
    return page;
  }
  return {
    ...page,
    content: {
      ...page.content,
      faqs: [...page.content.faqs, ...extra],
    },
  };
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
  const category = getToolBySlug(slug)?.category;
  const categoryText =
    category === "calculators"
      ? calculatorWorkspaceText[locale]
      : category === "image-tools"
        ? imageWorkspaceText[locale]
        : category === "developer-tools"
          ? developerWorkspaceText[locale]
          : undefined;
  return { ...commonToolText[locale], ...categoryText, ...page.ui };
}
