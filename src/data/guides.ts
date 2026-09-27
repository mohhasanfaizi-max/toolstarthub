import { isPubliclyVisible } from "../lib/content/publication.ts";
import { articlePath, articles, getArticleBySlug, type Article } from "./articles.ts";
import type { CategorySlug, Guide } from "./types.ts";

export function getPublicArticles(now = new Date()): Article[] {
  return articles.filter((article) => isPubliclyVisible(article, now));
}

export function toGuide(article: Article): Guide {
  return {
    slug: article.slug,
    title: article.title,
    description: article.excerpt,
    route: articlePath(article),
    relatedToolSlugs: article.relatedTools,
    category: article.category,
  };
}

export function getPublicGuides(now = new Date()): Guide[] {
  return getPublicArticles(now).map(toGuide);
}

export function getPublicGuideBySlug(slug: string, now = new Date()): Guide | undefined {
  const article = getArticleBySlug(slug);
  if (!article || !isPubliclyVisible(article, now)) return undefined;
  return toGuide(article);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return getPublicGuideBySlug(slug);
}

export function getGuidesForTool(toolSlug: string, now = new Date()): Guide[] {
  return getPublicArticles(now)
    .filter((article) => article.toolSlug === toolSlug || article.relatedTools.includes(toolSlug))
    .map(toGuide);
}

export function getGuidesByCategory(category: CategorySlug, now = new Date()): Guide[] {
  return getPublicArticles(now)
    .filter((article) => article.category === category)
    .map(toGuide);
}

export function getRelatedPublicArticles(article: Article, now = new Date()): Article[] {
  const visible = new Set(getPublicArticles(now).map((item) => item.slug));
  return article.relatedArticles
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is Article => item !== undefined && item.slug !== article.slug && visible.has(item.slug))
    .slice(0, 3);
}
