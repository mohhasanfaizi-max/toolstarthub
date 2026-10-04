import type { Metadata } from "next";
import {
  defaultLocale,
  localeInfo,
  localizePath,
  locales,
  type Locale,
} from "@/i18n/config";
import { siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  /**
   * Route that has its own opengraph-image and twitter-image files
   * (tool, category and guide pages). Other pages use the default image.
   */
  shareImage?: { route: string; alt: string };
  /** Page language. `path` is always the English path; it is localized here. */
  locale?: Locale;
  /** Emit hreflang alternates for all locales (page exists in every language). */
  hreflang?: boolean;
  /** noindex but keep following links (pages whose content is not translated yet). */
  noIndexFollow?: boolean;
};

/** hreflang map for an English path: every locale plus x-default (English). */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[localeInfo[locale].tag] = absoluteUrl(localizePath(path, locale));
  }
  languages["x-default"] = absoluteUrl(localizePath(path, defaultLocale));
  return languages;
}

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

/**
 * Share image generated at build time. Defaults to the branded image from
 * src/app/opengraph-image.tsx; pass a route to use that page's own image.
 */
export function shareImage(
  route = "",
  alt = `${siteConfig.name} — ${siteConfig.tagline}`,
  kind: "opengraph-image" | "twitter-image" = "opengraph-image",
) {
  return {
    url: absoluteUrl(`${route}/${kind}`),
    width: 1200,
    height: 630,
    alt,
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
  shareImage: pageImage,
  locale = defaultLocale,
  hreflang = false,
  noIndexFollow = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(localizePath(path, locale));
  const ogImage = pageImage
    ? shareImage(pageImage.route, pageImage.alt)
    : shareImage();
  const twitterImage = pageImage
    ? shareImage(pageImage.route, pageImage.alt, "twitter-image")
    : shareImage();

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(hreflang && !noIndex && !noIndexFollow
        ? { languages: languageAlternates(path) }
        : {}),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : noIndexFollow
        ? {
            index: false,
            follow: true,
          }
        : {
            index: true,
            follow: true,
          },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: localeInfo[locale].og,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  };
}

export function websiteJsonLd(
  locale: Locale = defaultLocale,
  description: string = siteConfig.description,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl(localizePath("/", locale)),
    description,
    inLanguage: localeInfo[locale].tag,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl(localizePath("/tools", locale))}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon-512.png`,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function toolJsonLd(input: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: localeInfo[input.locale ?? defaultLocale].tag,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function itemListJsonLd(
  name: string,
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
