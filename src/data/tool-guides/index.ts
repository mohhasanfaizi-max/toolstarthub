import type { Article } from "../articles.ts";
import type { GuideContent } from "../guide-content.ts";
import { batch1Guides } from "./batch-1.ts";
import { batch2Guides } from "./batch-2.ts";
import { batch3Guides } from "./batch-3.ts";
import { batch4Guides } from "./batch-4.ts";
import { batch5Guides } from "./batch-5.ts";
import { batch6Guides } from "./batch-6.ts";

/** One tool guide: the article record plus the visible guide body. */
export type ToolGuide = { article: Article; content: GuideContent };

/** Guides written for tools that had no guide of their own (10 FAQs each). */
export const toolGuides: ToolGuide[] = [...batch1Guides, ...batch2Guides, ...batch3Guides, ...batch4Guides, ...batch5Guides, ...batch6Guides];

export const toolGuideArticles: Article[] = toolGuides.map((guide) => guide.article);

export const toolGuideContent: Record<string, GuideContent> = Object.fromEntries(
  toolGuides.map((guide) => [guide.article.slug, guide.content]),
);

export const TOOL_GUIDE_SLUGS: readonly string[] = toolGuides.map((guide) => guide.article.slug);
