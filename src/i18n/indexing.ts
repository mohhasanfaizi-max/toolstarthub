import {
  defaultLocale,
  prefixedLocales,
  type Locale,
  type PrefixedLocale,
} from "./config";

/**
 * Search indexing for translated URLs.
 *
 * `false` means every prefixed locale (`/ar`, `/es`, `/pt-br`, and the rest)
 * is noindex, follow, omitted from the sitemap, and omitted from hreflang.
 * English URLs stay indexed. The language switcher still links to the
 * prefixed pages for visitors.
 *
 * To index one language later, replace `false` with a map and set that
 * locale to `true`. Locales absent from the map stay noindex. English is
 * always indexed and is not listed here.
 *
 *   export const INDEX_TRANSLATIONS = { es: true };
 */
export const INDEX_TRANSLATIONS: false | Partial<Record<PrefixedLocale, boolean>> =
  false;

/** English is always indexable. A prefixed locale is indexable only when the flag allows it. */
export function isTranslationIndexable(locale: Locale): boolean {
  if (locale === defaultLocale) {
    return true;
  }
  if (INDEX_TRANSLATIONS === false) {
    return false;
  }
  return INDEX_TRANSLATIONS[locale] === true;
}

/** Locales that may appear in the sitemap and in hreflang. */
export function indexableLocales(): Locale[] {
  return [
    defaultLocale,
    ...prefixedLocales.filter((locale) => isTranslationIndexable(locale)),
  ];
}
