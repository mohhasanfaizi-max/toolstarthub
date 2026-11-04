import type { Article } from "../articles.ts";
import type { CategorySlug } from "../types.ts";

/** Builds the article record for a tool's own guide with the shared defaults. */
export function toolGuideArticle(input: {
  slug: string;
  title: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  toolSlug: string;
  siblingToolSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  relatedArticles: string[];
  category: CategorySlug;
  publishedAt: string;
}): Article {
  return {
    id: input.slug,
    title: input.title,
    slug: input.slug,
    primaryKeyword: input.primaryKeyword,
    secondaryKeywords: input.secondaryKeywords,
    searchIntent: "informational",
    toolSlug: input.toolSlug,
    siblingToolSlugs: input.siblingToolSlugs,
    cluster: input.toolSlug,
    articleType: "overview",
    status: "PUBLISHED",
    publishedAt: input.publishedAt,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    excerpt: input.excerpt,
    content: null,
    faq: [],
    relatedTools: [input.toolSlug, ...input.siblingToolSlugs],
    relatedArticles: input.relatedArticles,
    category: input.category,
  };
}
