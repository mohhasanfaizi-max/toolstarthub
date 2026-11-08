import { cpsTestDescription, cpsTestName } from "../i18n/cps-test/content/en.ts";
import cpsTestPage from "../i18n/cps-test/content/en.ts";
import type { Tool } from "./types.ts";

/**
 * Tools added after the main registry in tools.ts. They are appended to
 * `tools`, so search, categories, related tools, the sitemap and the
 * share images pick them up automatically.
 */
export const extraTools: Tool[] = [
  {
    slug: "paint-calculator", name: "Paint Calculator",
    description: "Estimate paint for walls, rooms and ceilings with editable coverage, coats, waste, prices and container sizes. Explore approximate colours and export your plan.",
    category: "calculators", icon: "calculator", route: "/tools/paint-calculator",
    featured: false, new: true, status: "available",
    keywords: ["paint calculator", "how much paint", "wall paint", "room paint", "paint coverage", "ceiling paint", "paint cost"],
    metaTitle: "Free Paint Calculator – Calculate Paint Needed for Walls, Rooms & Ceilings",
    relatedSlugs: ["square-footage-calculator", "unit-converter", "percentage-calculator", "sales-tax-calculator"],
  },
  {
    slug: "urdu-news-translator",
    name: "Urdu News Translator",
    description:
      "Paste Urdu news and get Brief, Medium, and Full English drafts, with a fact check. An editor reviews the draft before it is published.",
    category: "ai-tools",
    icon: "globe",
    route: "/tools/urdu-news-translator",
    featured: false,
    new: false,
    keywords: [
      "urdu news translator",
      "urdu to english",
      "urdu news",
      "english news draft",
      "news translation",
    ],
    status: "available",
    metaTitle: "Urdu News Translator — English Drafts from Urdu News",
    relatedSlugs: ["ai-article-compressor", "ai-text-humanizer", "word-counter", "ai-prompt-generator"],
  },
  {
    slug: "cps-test",
    name: cpsTestName,
    description: cpsTestDescription,
    category: "seo-utilities",
    icon: "bolt",
    route: "/tools/cps-test",
    featured: false,
    new: true,
    keywords: [
      "cps test",
      "click speed test",
      "clicks per second test",
      "cps tester",
      "click test 10 seconds",
      "click counter",
      "spacebar test",
      "how to click faster",
      "jitter clicking",
      "butterfly clicking",
      "average cps",
    ],
    status: "available",
    metaTitle: cpsTestPage.metaTitle,
    relatedSlugs: ["random-number-generator", "time-calculator", "average-calculator"],
  },
];
