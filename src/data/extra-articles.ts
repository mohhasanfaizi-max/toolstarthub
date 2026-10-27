import type { Article } from "./articles.ts";

/**
 * Guides added after the main lists in articles.ts. Appended to `articles`,
 * so the guides index, sitemap, share images and tool pages pick them up.
 */
export const extraArticles: Article[] = [
  {
    id: "free-digital-tools",
    title: "Free Digital Tools",
    slug: "free-digital-tools",
    primaryKeyword: "free digital tools",
    secondaryKeywords: [
      "free online tools",
      "free tools for work and study",
      "browser tools",
    ],
    searchIntent: "informational",
    toolSlug: "word-counter",
    siblingToolSlugs: ["pdf-merger", "image-compressor", "utm-builder"],
    cluster: "free-digital-tools",
    articleType: "overview",
    status: "PUBLISHED",
    publishedAt: "2026-10-23",
    metaTitle: "Free Digital Tools: 102 Free Online Tools for Work and Study",
    metaDescription:
      "Free digital tools for work, study and content: 102 free online tools for PDFs, images, text, links, AI and calculators, explained one by one. No signup.",
    excerpt:
      "They're small web utilities that do one job — compress an image, count words, merge a PDF — and cost nothing. No signup here, and most of them run right in your browser.",
    content: null,
    faq: [],
    relatedTools: [
      "word-counter",
      "pdf-merger",
      "image-compressor",
      "utm-builder",
      "json-formatter",
      "password-generator",
    ],
    relatedArticles: [
      "how-to-work-with-pdfs-in-your-browser",
      "how-to-compress-an-image-without-losing-quality",
      "how-to-create-a-utm-url",
    ],
    category: "seo-utilities",
  },
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
  {
    id: "significant-figures-calculator",
    title: "Significant Figures Calculator: Count, Round, and Solve Sig Figs",
    slug: "significant-figures-calculator",
    primaryKeyword: "significant figures calculator",
    secondaryKeywords: [
      "sig fig calculator",
      "significant figures rules",
      "rounding significant figures",
      "scientific notation significant figures",
    ],
    searchIntent: "informational",
    toolSlug: "significant-figures-calculator",
    siblingToolSlugs: ["percentage-calculator", "average-calculator", "unit-converter"],
    cluster: "significant-figures-calculator",
    articleType: "overview",
    status: "PUBLISHED",
    publishedAt: "2026-10-27T16:00:00Z",
    metaTitle: "Significant Figures Calculator: Count, Round, and Solve Sig Figs",
    metaDescription:
      "Count and round significant figures, then add or multiply with the matching rule. 150, 80, and 1200 stay ambiguous.",
    excerpt:
      "Count and round significant figures, then add or multiply with the matching rule. 150, 80, and 1200 stay ambiguous.",
    content: null,
    faq: [],
    relatedTools: [
      "significant-figures-calculator",
      "percentage-calculator",
      "average-calculator",
      "unit-converter",
    ],
    relatedArticles: [
      "how-to-calculate-percentage",
      "how-to-find-the-mean-median-and-mode",
      "how-to-convert-units",
    ],
    category: "calculators",
  },
];
