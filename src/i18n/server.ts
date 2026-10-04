/**
 * Server-side translation access. All dictionaries are imported here, so this
 * module must only be used from Server Components, route handlers and
 * metadata functions. Client components receive the strings they need as props
 * (see I18nProvider), which keeps per-locale text out of the client bundles.
 */
import {
  categories as baseCategories,
  getCategoryBySlug,
} from "@/data/categories";
import { getToolBySlug, tools as baseTools } from "@/data/tools";
import type { Category, Tool } from "@/data/types";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, localizePath, type Locale } from "./config";
import type { ToolTranslations } from "./types";
import { extraToolText } from "./extra-tool-text";
import { en, type Messages } from "./messages/en";
import ar from "./messages/ar";
import de from "./messages/de";
import es from "./messages/es";
import fr from "./messages/fr";
import hi from "./messages/hi";
import id from "./messages/id";
import it from "./messages/it";
import ja from "./messages/ja";
import ko from "./messages/ko";
import nl from "./messages/nl";
import ptBr from "./messages/pt-br";
import ru from "./messages/ru";
import tr from "./messages/tr";
import ur from "./messages/ur";
import arTools from "./tools/ar";
import deTools from "./tools/de";
import esTools from "./tools/es";
import frTools from "./tools/fr";
import hiTools from "./tools/hi";
import idTools from "./tools/id";
import itTools from "./tools/it";
import jaTools from "./tools/ja";
import koTools from "./tools/ko";
import nlTools from "./tools/nl";
import ptBrTools from "./tools/pt-br";
import ruTools from "./tools/ru";
import trTools from "./tools/tr";
import urTools from "./tools/ur";

const messages: Record<Locale, Messages> = {
  en,
  "pt-br": ptBr,
  nl,
  ar,
  es,
  fr,
  id,
  de,
  it,
  tr,
  ru,
  hi,
  ur,
  ja,
  ko,
};

const toolText: Partial<Record<Locale, ToolTranslations>> = {
  "pt-br": ptBrTools,
  nl: nlTools,
  ar: arTools,
  es: esTools,
  fr: frTools,
  id: idTools,
  de: deTools,
  it: itTools,
  tr: trTools,
  ru: ruTools,
  hi: hiTools,
  ur: urTools,
  ja: jaTools,
  ko: koTools,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

function localizeTool(tool: Tool, locale: Locale): Tool {
  if (locale === "en") {
    return tool;
  }
  const text =
    toolText[locale]?.[tool.slug] ??
    extraToolText[locale as keyof typeof extraToolText]?.[tool.slug];
  return {
    ...tool,
    name: text?.[0] ?? tool.name,
    description: text?.[1] ?? tool.description,
    // Keep the English name searchable on localized pages.
    keywords: [...tool.keywords, tool.name.toLowerCase()],
    metaTitle: undefined,
    route: localizePath(tool.route, locale),
  };
}

const toolCache = new Map<Locale, Tool[]>();

export function getTools(locale: Locale): Tool[] {
  let list = toolCache.get(locale);
  if (!list) {
    list = baseTools.map((tool) => localizeTool(tool, locale));
    toolCache.set(locale, list);
  }
  return list;
}

export function getTool(slug: string, locale: Locale): Tool | undefined {
  const tool = getToolBySlug(slug);
  return tool ? localizeTool(tool, locale) : undefined;
}

export function getToolsInCategory(category: string, locale: Locale): Tool[] {
  return getTools(locale).filter((tool) => tool.category === category);
}

export function getRelatedToolsFor(
  tool: Tool,
  locale: Locale,
  limit = 6,
): Tool[] {
  const selected = new Set<string>([tool.slug]);
  const related: Tool[] = [];
  for (const slug of tool.relatedSlugs ?? []) {
    const match = getTool(slug, locale);
    if (match && !selected.has(match.slug)) {
      related.push(match);
      selected.add(match.slug);
    }
    if (related.length >= limit) {
      return related;
    }
  }
  const extras = getTools(locale).filter(
    (item) =>
      !selected.has(item.slug) &&
      item.category === tool.category &&
      item.status === "available",
  );
  return [...related, ...extras].slice(0, limit);
}

function localizeCategory(category: Category, locale: Locale): Category {
  if (locale === "en") {
    return category;
  }
  const text = messages[locale].categories[category.slug];
  return {
    ...category,
    ...text,
    route: localizePath(category.route, locale),
  };
}

export function getCategories(locale: Locale): Category[] {
  return baseCategories.map((category) => localizeCategory(category, locale));
}

export function getCategory(
  slug: string,
  locale: Locale,
): Category | undefined {
  const category = getCategoryBySlug(slug);
  return category ? localizeCategory(category, locale) : undefined;
}

/** Validates the [locale] route param; unknown or unprefixed values 404. */
export function requireLocale(value: string): Locale {
  if (!isLocale(value) || value === defaultLocale) {
    notFound();
  }
  return value;
}
