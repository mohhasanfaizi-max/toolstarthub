/**
 * Locale configuration shared by server and client code.
 * English is the default and keeps the existing unprefixed URLs.
 * Every other locale lives under /<locale>/... with English slugs.
 */
export const locales = [
  "en",
  "pt-br",
  "nl",
  "ar",
  "es",
  "fr",
  "id",
  "de",
  "it",
  "tr",
  "ru",
  "hi",
  "ur",
  "ja",
  "ko",
] as const;

export type Locale = (typeof locales)[number];
export type PrefixedLocale = Exclude<Locale, "en">;

export const defaultLocale: Locale = "en";

export const prefixedLocales = locales.filter(
  (locale): locale is PrefixedLocale => locale !== "en",
);

type LocaleInfo = {
  /** Name in its own language, shown in the language switcher. */
  name: string;
  /** BCP 47 tag for html lang, hreflang and Intl. */
  tag: string;
  /** Open Graph locale. */
  og: string;
  dir: "ltr" | "rtl";
};

export const localeInfo: Record<Locale, LocaleInfo> = {
  en: { name: "English", tag: "en", og: "en_US", dir: "ltr" },
  "pt-br": {
    name: "Português (Brasil)",
    tag: "pt-BR",
    og: "pt_BR",
    dir: "ltr",
  },
  nl: { name: "Nederlands", tag: "nl", og: "nl_NL", dir: "ltr" },
  ar: { name: "العربية", tag: "ar", og: "ar_AR", dir: "rtl" },
  es: { name: "Español", tag: "es", og: "es_ES", dir: "ltr" },
  fr: { name: "Français", tag: "fr", og: "fr_FR", dir: "ltr" },
  id: { name: "Bahasa Indonesia", tag: "id", og: "id_ID", dir: "ltr" },
  de: { name: "Deutsch", tag: "de", og: "de_DE", dir: "ltr" },
  it: { name: "Italiano", tag: "it", og: "it_IT", dir: "ltr" },
  tr: { name: "Türkçe", tag: "tr", og: "tr_TR", dir: "ltr" },
  ru: { name: "Русский", tag: "ru", og: "ru_RU", dir: "ltr" },
  hi: { name: "हिन्दी", tag: "hi", og: "hi_IN", dir: "ltr" },
  ur: { name: "اردو", tag: "ur", og: "ur_PK", dir: "rtl" },
  ja: { name: "日本語", tag: "ja", og: "ja_JP", dir: "ltr" },
  ko: { name: "한국어", tag: "ko", og: "ko_KR", dir: "ltr" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Paths that exist in every locale. Everything else is English-only for now. */
const LOCALIZED_PATH = /^\/(?:(?:tools|categories)(?:\/[a-z0-9-]+)?)?\/?$/;

function splitSuffix(path: string): [string, string] {
  const index = path.search(/[?#]/);
  return index === -1 ? [path, ""] : [path.slice(0, index), path.slice(index)];
}

export function isLocalizedPath(path: string): boolean {
  const [pathname] = splitSuffix(path || "/");
  return LOCALIZED_PATH.test(pathname || "/");
}

/**
 * Returns the URL of `path` in `locale`. English-only paths (guides, about,
 * legal pages) stay unprefixed.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale || !isLocalizedPath(path)) {
    return path;
  }
  const [pathname, suffix] = splitSuffix(path);
  const clean =
    pathname === "/" || pathname === "" ? "" : pathname.replace(/\/$/, "");
  return `/${locale}${clean}${suffix}`;
}

/** Splits a pathname into its locale and the English (unprefixed) path. */
export function splitLocale(pathname: string): {
  locale: Locale;
  path: string;
} {
  const match = /^\/([a-z]{2}(?:-[a-z]{2})?)(?=\/|$)(.*)$/.exec(pathname);
  if (match && isLocale(match[1]) && match[1] !== defaultLocale) {
    return { locale: match[1], path: match[2] || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/** Target of the language switcher for the current page. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const { path } = splitLocale(pathname);
  if (isLocalizedPath(path)) {
    return localizePath(path, target);
  }
  // English-only page (for example a guide): English stays put, other
  // languages go to their localized homepage.
  return target === defaultLocale ? path : localizePath("/", target);
}

export function formatMessage(
  template: string,
  values: Record<string, string | number> = {},
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/**
 * Locale-aware number formatting. Western digits are forced (nu-latn) so the
 * server and every browser render identical text (no hydration mismatch).
 */
export function formatNumber(locale: Locale, value: number): string {
  return new Intl.NumberFormat(`${localeInfo[locale].tag}-u-nu-latn`).format(
    value,
  );
}

export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export function formatPlural(
  locale: Locale,
  count: number,
  forms: PluralForms,
  values: Record<string, string | number> = {},
): string {
  const category = new Intl.PluralRules(localeInfo[locale].tag).select(count);
  const template = forms[category] ?? forms.other;
  return formatMessage(template, {
    count: formatNumber(locale, count),
    ...values,
  });
}
