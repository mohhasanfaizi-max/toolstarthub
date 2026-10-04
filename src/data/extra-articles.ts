import type { Article } from "./articles.ts";

/**
 * Guides added after the main lists in articles.ts. Appended to `articles`,
 * so the guides index, sitemap, share images and tool pages pick them up.
 */
export const extraArticles: Article[] = [
  {
    id: "how-to-click-faster",
    title: "How to Click Faster: Average CPS, Jitter and Butterfly Clicking",
    slug: "how-to-click-faster",
    primaryKeyword: "how to click faster",
    secondaryKeywords: [
      "cps test",
      "average cps",
      "jitter clicking",
      "butterfly clicking",
      "drag clicking",
      "click speed test",
    ],
    searchIntent: "informational",
    toolSlug: "cps-test",
    siblingToolSlugs: ["average-calculator", "time-calculator"],
    cluster: "cps-test",
    articleType: "overview",
    status: "PUBLISHED",
    publishedAt: "2026-10-04T09:00:00.000Z",
    metaTitle: "How to Click Faster: Average CPS, Jitter and Butterfly Clicking",
    metaDescription:
      "How to click faster: the average CPS, a CPS rating table, and how regular, jitter, butterfly, and drag clicking compare, plus mouse tips and wrist safety.",
    excerpt:
      "How to click faster: the average CPS, a CPS rating table, and how regular, jitter, butterfly, and drag clicking compare, plus mouse tips and wrist safety.",
    content: null,
    faq: [],
    relatedTools: ["cps-test", "average-calculator", "time-calculator"],
    relatedArticles: [],
    category: "seo-utilities",
  },
];
