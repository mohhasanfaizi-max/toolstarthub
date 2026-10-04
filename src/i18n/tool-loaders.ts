import type { PrefixedLocale } from "./config";
import type { ToolTranslations } from "./types";

type Loader = () => Promise<{ default: ToolTranslations }>;

/**
 * Per-locale chunks with tool names and descriptions, loaded by the search box
 * only when someone searches on a localized page.
 */
export const toolTextLoaders: Record<PrefixedLocale, Loader> = {
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
