import type { PrefixedLocale } from "./config";
import type { ToolTranslations } from "./types";

type Loader = () => Promise<{ default: ToolTranslations }>;

/**
 * Per-locale chunks with tool names and descriptions, loaded by the search box
 * only when someone searches on a localized page.
 */
const baseLoaders: Record<PrefixedLocale, Loader> = {
  "pt-br": () => import("./tools/pt-br"),
  nl: () => import("./tools/nl"),
  ar: () => import("./tools/ar"),
  es: () => import("./tools/es"),
  fr: () => import("./tools/fr"),
  id: () => import("./tools/id"),
  de: () => import("./tools/de"),
  it: () => import("./tools/it"),
  tr: () => import("./tools/tr"),
  ru: () => import("./tools/ru"),
  hi: () => import("./tools/hi"),
  ur: () => import("./tools/ur"),
  ja: () => import("./tools/ja"),
  ko: () => import("./tools/ko"),
};

/**
 * Same chunks plus names of tools registered in extra-tool-text.ts (loaded
 * lazily too, so nothing is added to the initial page bundle).
 */
export const toolTextLoaders = Object.fromEntries(
  (Object.keys(baseLoaders) as PrefixedLocale[]).map((locale) => [
    locale,
    async () => {
      const [base, extra] = await Promise.all([
        baseLoaders[locale](),
        import("./extra-tool-text"),
      ]);
      return { default: { ...extra.extraToolText[locale], ...base.default } };
    },
  ]),
) as Record<PrefixedLocale, Loader>;
