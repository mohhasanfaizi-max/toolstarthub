import { articlePath, articles, getArticleBySlug } from "../../data/articles.ts";
import { getGuideContent } from "../../data/guide-content.ts";
import { getGuidesForTool, getPublicArticles, getPublicGuides, getRelatedPublicArticles } from "../../data/guides.ts";
import { getToolBySlug } from "../../data/tools.ts";
import { siteConfig } from "../site.ts";
import {
  isPubliclyVisible,
  publicationInstantForQueueIndex,
  publishSchedule,
} from "./publication.ts";

const LIVE_GUIDE_SLUGS = [
  "how-to-calculate-percentage",
  "how-to-calculate-age",
  "how-to-compress-an-image-without-losing-quality",
  "what-is-json",
  "how-to-create-a-utm-url",
  "how-to-work-with-pdfs-in-your-browser",
  "how-to-clean-and-compare-text",
];

export function runPublicationChecks(assert: (condition: unknown, message: string) => void): void {
  const now = new Date("2026-09-25T12:00:00.000Z");
  const slugs = articles.map((article) => article.slug);
  assert(new Set(slugs).size === slugs.length, "Article slugs are unique");
  assert(articles.filter((article) => article.status === "DRAFT").length === 0, "No articles remain in DRAFT");
  assert(articles.filter((article) => article.status === "READY").length === 0, "No articles remain in READY");
  assert(
    !articles.some((article) =>
      ["word-count-vs-character-count", "how-to-merge-pdfs", "how-to-extract-text-from-a-pdf"].includes(article.slug),
    ),
    "Superseded queue stubs are removed",
  );
  assert(
    LIVE_GUIDE_SLUGS.every((slug) => getArticleBySlug(slug)?.status === "PUBLISHED"),
    "The seven existing guides stay published",
  );

  const published = getArticleBySlug("how-to-calculate-percentage");
  assert(published && isPubliclyVisible(published, now), "PUBLISHED guide is public");
  const draft = { ...published!, slug: "status-check-fixture", status: "DRAFT" as const };
  assert(!isPubliclyVisible(draft, now), "DRAFT article is not public");
  assert(!getPublicGuides(now).some((guide) => guide.slug === draft.slug), "DRAFT article is not listed");

  const ready = { ...draft, status: "READY" as const };
  assert(!isPubliclyVisible(ready, now), "READY article is not public");

  const future = {
    ...draft,
    status: "SCHEDULED" as const,
    publishAt: "2026-09-26T09:00:00.000Z",
  };
  assert(!isPubliclyVisible(future, now), "Future SCHEDULED article is not public");
  assert(
    !getPublicArticles(now).some((article) => article.slug === future.slug && article.status === "SCHEDULED"),
    "Future SCHEDULED article is not in the public sitemap set",
  );

  const due = { ...future, publishAt: "2026-09-25T09:00:00.000Z" };
  assert(isPubliclyVisible(due, now), "Due SCHEDULED article is public");

  const paused = { ...draft, status: "PAUSED" as const, publishAt: "2020-01-01T00:00:00.000Z" };
  assert(!isPubliclyVisible(paused, now), "PAUSED article is not indexable");
  const publicRoutes = getPublicGuides(now).map((guide) => `${siteConfig.url}${guide.route}`);
  assert(new Set(publicRoutes).size === publicRoutes.length, "Public guide canonicals are unique");
  assert(
    publicRoutes.every((url) => url.startsWith("https://www.toolstarhub.com/guides/")),
    "Public guide canonicals use the www host",
  );
  assert(publicRoutes.length === 76, "Seventy-six written guides are public");
  assert(
    getRelatedPublicArticles({ ...published!, relatedArticles: [draft.slug] }, now).length === 0,
    "Unpublished articles are not related links",
  );

  const schedule = publishSchedule({ ARTICLE_PUBLISH_TIMEZONE: "UTC", ARTICLE_PUBLISH_SLOTS: "09:00,18:00" });
  const first = publicationInstantForQueueIndex(0, "2026-09-26", schedule);
  const second = publicationInstantForQueueIndex(1, "2026-09-26", schedule);
  const third = publicationInstantForQueueIndex(2, "2026-09-26", schedule);
  assert(first.toISOString() === "2026-09-26T09:00:00.000Z", "First queue slot is 09:00 UTC");
  assert(second.toISOString() === "2026-09-26T18:00:00.000Z", "Second queue slot is 18:00 UTC");
  assert(third.toISOString() === "2026-09-27T09:00:00.000Z", "Third article moves to the next day");
  assert(
    publicationInstantForQueueIndex(4, "2026-09-26", schedule).toISOString() ===
      publicationInstantForQueueIndex(4, "2026-09-26", schedule).toISOString(),
    "Queue order is deterministic",
  );

  const queued = articles.filter((article) => article.queueIndex !== undefined).sort((a, b) => a.queueIndex! - b.queueIndex!);
  assert(
    queued.map((article) => article.queueIndex).join(",") === Array.from({ length: 22 }, (_, index) => index).join(","),
    "Queue indexes are 0 through 21",
  );
  const writtenSlugs = [
    "how-compound-interest-works",
    "how-a-loan-payment-is-calculated",
    "how-a-mortgage-payment-is-estimated",
    "how-to-estimate-a-car-loan-payment",
    "how-a-home-price-estimate-works",
    "how-much-to-save-for-a-goal",
    "what-is-base64",
    "what-is-a-uuid",
    "how-to-compare-renting-and-buying",
    "how-to-plan-a-debt-payoff",
    "how-long-to-pay-off-a-credit-card",
    "how-to-convert-salary-to-hourly",
    "what-a-paycheck-estimate-includes",
    "how-to-calculate-gpa",
    "how-to-calculate-square-footage",
    "how-to-count-business-days",
    "how-to-read-a-jwt",
    "how-to-convert-time-zones",
    "how-to-read-a-url",
    "what-is-robots-txt",
    "how-to-write-an-image-prompt",
    "what-a-writing-pattern-check-can-tell-you",
  ];
  assert(
    queued.every((article) => writtenSlugs.includes(article.slug)),
    "Every remaining queue article is published",
  );
  for (const slug of writtenSlugs) {
    const article = getArticleBySlug(slug);
    const body = getGuideContent(slug);
    assert(article?.status === "PUBLISHED", `${slug} is published`);
    assert(isPubliclyVisible(article!, now), `${slug} is public`);
    assert(getPublicGuides(now).some((guide) => guide.slug === slug), `${slug} is on the guides index`);
    assert(
      getRelatedPublicArticles({ ...published!, relatedArticles: [slug] }, now).some((guide) => guide.slug === slug),
      `${slug} can appear as a public related article`,
    );
    assert(
      getGuidesForTool(article!.toolSlug, now).some((guide) => guide.slug === slug),
      `${slug} is a published guide on its tool page`,
    );
    assert(article?.content && article.content.length > 500, `${slug} has a written body`);
    assert(article?.faq && article.faq.length >= 3 && article.faq.length <= 5, `${slug} has 3 to 5 FAQs`);
    assert(body && body.faqs.length === article?.faq.length, `${slug} FAQ text is the visible guide FAQ`);
    assert(!article?.publishAt && !article?.publishedAt, `${slug} has no publication date`);
  }
  assert(!articles.some((article) => article.slug.includes("sale-price") || article.primaryKeyword === "sales tax calculator" || article.primaryKeyword === "tip calculator"), "Waiting sale, tax, and tip articles are absent");

  const keywords = new Set<string>();
  for (const article of articles) {
    assert(!keywords.has(article.primaryKeyword), `Primary keyword is unique: ${article.primaryKeyword}`);
    keywords.add(article.primaryKeyword);
    assert(getToolBySlug(article.toolSlug), `Article tool exists: ${article.toolSlug}`);
    assert(articlePath(article) === `/guides/${article.slug}`, "Canonical guide path is /guides/{slug}");
  }

  assert(
    getToolBySlug("word-counter")?.metaTitle === "Word Counter — Count Words Online",
    "Word Counter title owns word count",
  );
  assert(
    getToolBySlug("image-converter")?.metaTitle === "Image Converter — JPG and PNG in Your Browser",
    "Image Converter title covers both directions",
  );
  assert(
    getToolBySlug("character-counter")?.metaTitle?.toLowerCase().includes("character"),
    "Character Counter keeps character-count intent",
  );
}
