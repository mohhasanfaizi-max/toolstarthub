import { getArticleBySlug } from "../../data/articles.ts";
import { filterToolsByDiscovery } from "../../data/discovery.ts";
import { getGuideContent } from "../../data/guide-content.ts";
import { getGuidesForTool, getPublicGuides } from "../../data/guides.ts";
import { toolQuickAnswers } from "../../data/tool-answers.ts";
import { getToolContent } from "../../data/tool-content.ts";
import { getNewTools, getRelatedTools, getToolBySlug, searchTools, tools } from "../../data/tools.ts";
import { locales, prefixedLocales } from "../../i18n/config.ts";
import { cpsTestPages } from "../../i18n/cps-test/index.ts";
import { cpsUi } from "../../i18n/cps-test/ui.ts";
import { extraToolText } from "../../i18n/extra-tool-text.ts";
import { getLocalizedToolPage } from "../../i18n/localized-tool-content.ts";
import {
  CPS_DURATIONS,
  CPS_TIERS,
  bestKey,
  calculateCps,
  getCpsTier,
  getCpsTierMax,
  keyCounts,
  liveCps,
  pointerCounts,
  recordBestScore,
  sanitizeBestScores,
} from "./cps-test.ts";

type Assert = (condition: unknown, message: string) => void;

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

function placeholders(value: string): string {
  return (value.match(/\{\w+\}/g) ?? []).sort().join(",");
}

export function runCpsTestChecks(assert: Assert): void {
  // Calculation
  assert(calculateCps(72, 10) === 7.2, "72 clicks in 10 s is 7.2 CPS");
  assert(calculateCps(1, 3) === 0.33, "CPS rounds to two decimals");
  assert(calculateCps(0, 10) === 0 && calculateCps(5, 0) === 0, "No clicks or no time is 0 CPS");
  assert(liveCps(1, 10) === 4, "Live CPS pads the first quarter second");
  assert(liveCps(20, 2000) === 10, "Live CPS uses elapsed time");
  assert(CPS_DURATIONS.join(",") === "1,5,10,15,30,60", "Six test lengths");

  // Tiers
  assert(getCpsTier(0).id === "turtle" && getCpsTier(4.99).id === "turtle", "Under 5 is Turtle");
  assert(getCpsTier(5).id === "cat" && getCpsTier(7.2).id === "rabbit", "Tier boundaries are inclusive");
  assert(getCpsTier(10).id === "horse" && getCpsTier(13.99).id === "cheetah", "Horse and Cheetah tiers");
  assert(getCpsTier(14).id === "lightning" && getCpsTier(40).id === "lightning", "14 or more is Lightning");
  assert(getCpsTierMax("turtle") === 5 && getCpsTierMax("lightning") === undefined, "Tier upper bounds");
  assert(
    CPS_TIERS.every((tier, index) => index === 0 || tier.min > CPS_TIERS[index - 1].min),
    "Tiers are sorted",
  );

  // Best scores
  const first = recordBestScore({}, "left", 10, 72);
  assert(first.isNewBest && first.scores[bestKey("left", 10)]?.cps === 7.2, "First run is a best score");
  const lower = recordBestScore(first.scores, "left", 10, 60);
  assert(!lower.isNewBest && lower.scores === first.scores, "A lower run keeps the best");
  const other = recordBestScore(first.scores, "left", 5, 30);
  assert(other.isNewBest && Object.keys(other.scores).length === 2, "Best scores are per duration");
  assert(!recordBestScore({}, "left", 1, 0).isNewBest, "Zero clicks is never a best score");
  assert(!recordBestScore({}, "left", 1, 500).isNewBest, "An implausible score is not saved");
  const cleaned = sanitizeBestScores({
    "left:10": { cps: 7.2, clicks: 72 },
    "left:7": { cps: 5, clicks: 35 },
    "middle:10": { cps: 5, clicks: 50 },
    "space:5": { cps: "9", clicks: 45 },
    "right:1": { cps: 999, clicks: 999 },
  });
  assert(Object.keys(cleaned).join(",") === "left:10", "Stored best scores are validated");
  assert(Object.keys(sanitizeBestScores("nope")).length === 0, "Malformed storage is ignored");

  // Inputs (anti-cheat)
  assert(pointerCounts("left", 0) && !pointerCounts("left", 2), "Left mode counts the primary button only");
  assert(pointerCounts("right", 2) && !pointerCounts("right", 0), "Right mode counts the secondary button only");
  assert(!pointerCounts("space", 0), "Pointer presses do not count in spacebar mode");
  assert(keyCounts("space", " ", false), "Space counts in spacebar mode");
  assert(!keyCounts("space", " ", true), "Held Space (auto-repeat) never counts");
  assert(!keyCounts("left", " ", false) && !keyCounts("left", "Enter", false), "Keys do not count in click mode");
  assert(!keyCounts("space", "Enter", false), "Enter does not count in spacebar mode");

  // Registry, content and search
  const tool = getToolBySlug("cps-test");
  assert(tool && tool.route === "/tools/cps-test" && tool.status === "available", "CPS Test is registered");
  assert(tools[tools.length - 1]?.slug === "cps-test", "CPS Test is appended after the original tools");
  assert(getNewTools().some((item) => item.slug === "cps-test"), "CPS Test is in Recently added");
  assert(getToolContent("cps-test")?.faqs.length === 6, "CPS Test has six FAQs");
  assert(toolQuickAnswers["cps-test"], "CPS Test has a quick answer");
  assert(searchTools("cps test")[0]?.slug === "cps-test", "cps test search ranks CPS Test first");
  assert(searchTools("click speed test").some((item) => item.slug === "cps-test"), "click speed test search");
  assert(searchTools("clicks per second").some((item) => item.slug === "cps-test"), "clicks per second search");
  assert(tool && getRelatedTools(tool).length >= 3, "CPS Test has related tools");
  assert(
    !["pdf", "qr", "color"].some((filter) =>
      filterToolsByDiscovery(tools, filter as "pdf").some((item) => item.slug === "cps-test"),
    ),
    "CPS Test stays out of the PDF, QR and color filters",
  );
  const englishMeta = cpsTestPages.en.metaTitle.toLowerCase();
  assert(
    englishMeta.includes("cps test") && englishMeta.includes("click speed test") && englishMeta.includes("clicks per second"),
    "English title targets cps test, click speed test and clicks per second",
  );

  // Translations
  for (const locale of locales) {
    const ui = cpsUi[locale];
    assert(ui, `${locale} has CPS workspace strings`);
    assert(strings(ui).every((text) => text.trim().length > 0), `${locale} CPS strings are not empty`);
    assert(placeholders(ui.finished) === placeholders(cpsUi.en.finished), `${locale} finished message keeps placeholders`);
    assert(placeholders(ui.bestFor) === placeholders(cpsUi.en.bestFor), `${locale} best label keeps placeholders`);
    assert(ui.seconds.includes("{n}") && ui.scaleBelow.includes("{max}") && ui.scaleFrom.includes("{min}"), `${locale} unit placeholders`);
    const page = cpsTestPages[locale];
    assert(page.content.howTo.length === 4 && page.content.faqs.length === 6, `${locale} CPS page has how-to and FAQ`);
    assert(page.content.features.length === 6 && page.content.examples.length === 2, `${locale} CPS page has features and examples`);
    assert(page.headings.disclaimer.includes("{link}"), `${locale} disclaimer keeps {link}`);
    assert(strings(page).every((text) => text.trim().length > 0), `${locale} CPS page text is not empty`);
  }
  for (const locale of prefixedLocales) {
    assert(getLocalizedToolPage("cps-test", locale) === cpsTestPages[locale], `${locale} CPS page is wired`);
    const names = extraToolText[locale]["cps-test"];
    assert(names && names[0].includes("CPS") && names[1].length > 40, `${locale} has a CPS Test name and description`);
    assert(cpsTestPages[locale].content.about !== cpsTestPages.en.content.about, `${locale} CPS page is translated`);
  }
  assert(getLocalizedToolPage("cps-test", "en") === undefined, "English uses the standard ToolDetails");
  assert(getLocalizedToolPage("word-counter", "de") === undefined, "Other tools are unchanged");

  // Guide
  const article = getArticleBySlug("how-to-click-faster");
  assert(article?.status === "PUBLISHED" && article.toolSlug === "cps-test", "Click faster guide is published");
  assert(getPublicGuides().some((guide) => guide.slug === "how-to-click-faster"), "Click faster guide is public");
  assert(getGuidesForTool("cps-test").some((guide) => guide.slug === "how-to-click-faster"), "CPS Test links to its guide");
  const guide = getGuideContent("how-to-click-faster");
  assert(guide?.cta.href === "/tools/cps-test", "Guide links to the CPS Test");
  assert((guide?.sections ?? []).filter((section) => section.table).length === 2, "Guide has the two tables");
  assert((guide?.sections ?? []).every((section) => section.heading.endsWith("?")), "Guide section headings are questions");
  const words = strings(guide).join(" ").split(/\s+/).filter(Boolean).length;
  assert(words >= 1000 && words <= 1600, `Guide is about 1,000 to 1,500 words (${words})`);
}
