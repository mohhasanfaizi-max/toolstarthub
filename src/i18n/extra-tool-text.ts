/**
 * Tool names and short descriptions for tools added after the per-locale
 * dictionaries in ./tools/*.ts were written. Merged in server.ts and in the
 * search loaders, so those dictionaries do not need to change.
 */
import { prefixedLocales, type PrefixedLocale } from "./config.ts";
import { cpsTestNames } from "./cps-test/names.ts";
import type { ToolTranslations } from "./types.ts";

function build(): Record<PrefixedLocale, ToolTranslations> {
  const result = {} as Record<PrefixedLocale, ToolTranslations>;
  for (const locale of prefixedLocales) {
    result[locale] = {
      "cps-test": cpsTestNames[locale],
    };
  }
  return result;
}

export const extraToolText = build();
