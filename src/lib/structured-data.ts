/**
 * Schema.org builders shared by the homepage, guides, collection pages and the
 * about page. Every node uses a stable @id so search and answer engines can
 * join the Organization, WebSite, pages and tools into one graph.
 *
 * Only facts that are published on the site are used: no ratings, reviews,
 * people, addresses, or social profiles are invented here.
 */
import {
  defaultLocale,
  localeInfo,
  localizePath,
  type Locale,
} from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig, siteContact } from "@/lib/site";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const EDITORIAL_TEAM_ID = `${siteConfig.url}/about#editorial-team`;
export const EDITORIAL_TEAM_NAME = `${siteConfig.name} Editorial Team`;

export function websiteId(locale: Locale = defaultLocale): string {
  return `${absoluteUrl(localizePath("/", locale))}#website`;
}

const logo = {
  "@type": "ImageObject",
  "@id": `${siteConfig.url}/#logo`,
  url: `${siteConfig.url}/icons/icon-512.png`,
  contentUrl: `${siteConfig.url}/icons/icon-512.png`,
  width: 512,
  height: 512,
  caption: siteConfig.name,
};

/** Short reference to the publisher, for use inside other nodes. */
export const publisherRef = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: siteConfig.name,
  url: siteConfig.url,
  logo,
};

/** Guides are written and maintained by the site's editorial team. */
export const editorialTeam = {
  "@type": "Organization",
  "@id": EDITORIAL_TEAM_ID,
  name: EDITORIAL_TEAM_NAME,
  url: absoluteUrl("/about#editorial-team"),
  parentOrganization: { "@id": ORGANIZATION_ID },
};

function organizationData() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo,
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    email: siteContact.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteContact.email,
      url: absoluteUrl("/contact"),
      availableLanguage: ["English"],
    },
  };
}

export function organizationNode() {
  return { "@context": "https://schema.org", ...organizationData() };
}

export function websiteNode(
  locale: Locale = defaultLocale,
  description: string = siteConfig.description,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(locale),
    name: siteConfig.name,
    url: absoluteUrl(localizePath("/", locale)),
    description,
    inLanguage: localeInfo[locale].tag,
    publisher: { "@id": ORGANIZATION_ID },
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

export type GuideArticleInput = {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  section?: string;
  tools?: Array<{ name: string; path: string }>;
  wordCount?: number;
};

export function guideArticleJsonLd(input: GuideArticleInput) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.title.slice(0, 110),
    description: input.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(`${input.path}/opengraph-image`),
      width: 1200,
      height: 630,
    },
    inLanguage: "en",
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ?? input.datePublished
      ? { dateModified: input.dateModified ?? input.datePublished }
      : {}),
    author: editorialTeam,
    publisher: publisherRef,
    isPartOf: { "@id": websiteId() },
    ...(input.section ? { articleSection: input.section } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    ...(input.tools?.length
      ? {
          mentions: input.tools.map((tool) => ({
            "@type": "WebApplication",
            "@id": `${absoluteUrl(tool.path)}#webapp`,
            name: tool.name,
            url: absoluteUrl(tool.path),
          })),
        }
      : {}),
  };
}

export function howToJsonLd(input: {
  name: string;
  description?: string;
  path: string;
  steps: Array<{ name?: string; text: string }>;
  toolName?: string;
  /** The page has #step-1, #step-2… anchors on its numbered steps. */
  stepAnchors?: boolean;
}) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    url,
    inLanguage: "en",
    ...(input.toolName
      ? { tool: [{ "@type": "HowToTool", name: input.toolName }] }
      : {}),
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      ...(step.name ? { name: step.name } : {}),
      text: step.text,
      ...(input.stepAnchors ? { url: `${url}#step-${index + 1}` } : {}),
    })),
  };
}

export function collectionPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
  items: Array<{ name: string; path: string; description?: string }>;
}) {
  const url = absoluteUrl(input.path);
  const locale = input.locale ?? defaultLocale;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: input.name,
    description: input.description,
    url,
    inLanguage: localeInfo[locale].tag,
    isPartOf: { "@id": websiteId(locale) },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
        ...(item.description ? { description: item.description } : {}),
      })),
    },
  };
}

export function aboutPageJsonLd(input: { description: string }) {
  const url = absoluteUrl("/about");
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#page`,
    name: `About ${siteConfig.name}`,
    description: input.description,
    url,
    inLanguage: "en",
    isPartOf: { "@id": websiteId() },
    about: { "@id": ORGANIZATION_ID },
    mainEntity: [organizationData(), editorialTeam],
  };
}
