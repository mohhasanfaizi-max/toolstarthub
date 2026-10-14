import { existsSync } from "node:fs";
import { categories } from "../../data/categories.ts";
import { popularToolSlugs } from "../../data/popular-tool-slugs.ts";
import { getToolBySlug, tools } from "../../data/tools.ts";
import type { CategorySlug } from "../../data/types.ts";
import { pwaCopy } from "../../i18n/pwa-en.ts";
import { PWA_ATTR, standaloneDetectScript } from "./standalone.ts";

type Assert = (condition: unknown, message: string) => void;

export function runPwaChecks(assert: Assert): void {
  assert(tools.length >= 101, `Registry still has at least 101 tools (${tools.length})`);
  for (const slug of popularToolSlugs) {
    assert(getToolBySlug(slug), `Popular tool ${slug} exists in the registry`);
  }
  assert(popularToolSlugs.length === 6, "Popular list has six existing tools");

  const slugs = new Set(categories.map((category) => category.slug));
  const shortcutSlugs: CategorySlug[] = [
    "calculators",
    "image-tools",
    "text-tools",
    "developer-tools",
    "seo-utilities",
    "ai-tools",
  ];
  for (const slug of shortcutSlugs) {
    assert(slugs.has(slug), `Category shortcut ${slug} exists`);
  }

  assert(pwaCopy.tagline === "Your everyday tools, all in one place", "Installed home uses the specified banner");
  assert(pwaCopy.installTitle === "Enjoy Tools Star Hub Like an App!", "Install notice uses the specified title");
  assert(
    pwaCopy.installReassurance === "Lightweight, convenient, and ready when you need it.",
    "Install notice includes the reassurance line",
  );
  assert(pwaCopy.installStorage.includes("website resources"), "Install copy mentions stored website resources");
  assert(pwaCopy.installStorage.includes("browser data"), "Install copy mentions browser data");
  assert(pwaCopy.installTools.includes("{count}"), "Install copy uses the live tool count");
  assert(pwaCopy.installButton === "Install App", "Install notice keeps an Install App control");

  const installBlob = [
    pwaCopy.installTitle,
    pwaCopy.installLead,
    pwaCopy.installStorage,
    pwaCopy.installReassurance,
    pwaCopy.installClose,
    pwaCopy.installTools,
  ]
    .join(" ")
    .toLowerCase();
  assert(!installBlob.includes("offline"), "Install copy does not claim offline support");
  assert(!installBlob.includes("zero"), "Install copy does not claim zero storage");
  assert(!installBlob.includes("never stores"), "Install copy does not claim data is never stored");

  assert(standaloneDetectScript.includes(`setAttribute("${PWA_ATTR}"`), "Detect script marks the document for CSS");
  assert(standaloneDetectScript.includes("display-mode: standalone"), "Standalone detection uses display-mode");
  assert(standaloneDetectScript.includes("n.standalone"), "Standalone detection includes iOS navigator.standalone");
  assert(!standaloneDetectScript.includes("userAgent"), "Standalone detection is not a device-type redirect");

  assert(!existsSync("public/sw.js"), "No competing public service worker was added");
  assert(!existsSync("src/app/sw.ts"), "No App Router service worker was added");
  assert(
    !pwaCopy.tagline.toLowerCase().includes("offline"),
    "Install copy does not claim offline support",
  );
}
