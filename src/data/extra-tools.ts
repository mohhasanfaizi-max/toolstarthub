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
