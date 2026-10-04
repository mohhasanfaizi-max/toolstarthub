/**
 * Translated long-form tool pages (about, how-to, examples, FAQ) for tools
 * that ship with their own translations, such as the CPS Test. Server only.
 * Tools without an entry keep the English ToolDetails.
 */
import type { Locale } from "./config.ts";
import { cpsTestPages } from "./cps-test/index.ts";
import type { LocalizedToolPage } from "./cps-test/types.ts";

export type { LocalizedToolPage } from "./cps-test/types.ts";

const localizedToolPages: Record<string, Partial<Record<Locale, LocalizedToolPage>>> = {
  "cps-test": cpsTestPages,
};

/** Translated page text for a non-English locale, if this tool has it. */
export function getLocalizedToolPage(
  slug: string,
  locale: Locale,
): LocalizedToolPage | undefined {
  if (locale === "en") {
    return undefined;
  }
  return localizedToolPages[slug]?.[locale];
}

export function hasLocalizedToolPage(slug: string, locale: Locale): boolean {
  return getLocalizedToolPage(slug, locale) !== undefined;
}
