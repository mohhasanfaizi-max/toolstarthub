/**
 * Title, description, closer-share, disclaimer, intro-length, and near-duplicate checks.
 *
 *   npm run check:meta
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../src/data/articles.ts";
import { categories } from "../src/data/categories.ts";
import { tools } from "../src/data/tools.ts";
import { siteConfig } from "../src/lib/site.ts";

export const TITLE_SUFFIX = " | Tools Star Hub";
const TITLE_MIN = 25;
const TITLE_MAX = 58;
const DESC_MIN = 120;
const DESC_MAX = 155;
const INTRO_MIN = 60;
const INTRO_MAX = 110;
const CLOSER_MAX_SHARE = 0.08;
const DISCLAIMER =
  /\bthis is not\b|\bthis does not\b|\bnot a breach\b|\bnot an xss\b|\btransparency is not stored\b|\bnot an authorship verdict\b|\bnot a tax-table\b|\bnot a lottery\b|\bnot a lender\b|\bnot encryption\b|\bnot a quote\b|\bnot an approval\b|\bnot a promise\b|\bnot a unix\b|\bfree, instant\b|\bno sign-up needed\b/i;

type Row = { kind: string; slug: string; title: string; fullTitle: string; description: string };

function lastSentence(text: string): string {
  const parts = text.trim().split(/(?<=[.!?])\s+/);
  return (parts.at(-1) ?? text).replace(/[.!?]+$/g, "").trim().toLowerCase();
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function csvCell(value: string | number): string {
  const text = String(value);
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

const rows: Row[] = [
  ...tools.map((tool) => ({
    kind: "tool",
    slug: tool.slug,
    title: tool.metaTitle ?? tool.name,
    fullTitle: `${tool.metaTitle ?? tool.name}${TITLE_SUFFIX}`,
    description: tool.description,
  })),
  ...articles.map((article) => ({
    kind: "guide",
    slug: article.slug,
    title: article.metaTitle || article.title,
    fullTitle: `${article.metaTitle || article.title}${TITLE_SUFFIX}`,
    description: article.metaDescription,
  })),
  ...categories.map((category) => ({
    kind: "category",
    slug: category.slug,
    title: category.metaTitle,
    fullTitle: `${category.metaTitle}${TITLE_SUFFIX}`,
    description: category.metaDescription,
  })),
  {
    kind: "home",
    slug: "/",
    title: siteConfig.metaTitle,
    fullTitle: siteConfig.metaTitle,
    description: siteConfig.description,
  },
];

let failed = 0;
const seenTitle = new Map<string, string>();
const seenDesc = new Map<string, string>();
const closers = new Map<string, number>();

for (const row of rows) {
  const label = `${row.kind} ${row.slug}`;
  if (row.fullTitle.length < TITLE_MIN || row.fullTitle.length > TITLE_MAX) {
    console.error(`FAIL  title length ${row.fullTitle.length} ${label}: ${row.fullTitle}`);
    failed += 1;
  }
  if (row.description.length < DESC_MIN || row.description.length > DESC_MAX) {
    console.error(`FAIL  description length ${row.description.length} ${label}: ${row.description}`);
    failed += 1;
  }
  const prevTitle = seenTitle.get(row.fullTitle);
  if (prevTitle) {
    console.error(`FAIL  duplicate title of ${prevTitle}: ${label}`);
    failed += 1;
  } else {
    seenTitle.set(row.fullTitle, label);
  }
  const prevDesc = seenDesc.get(row.description);
  if (prevDesc) {
    console.error(`FAIL  duplicate description of ${prevDesc}: ${label}`);
    failed += 1;
  } else {
    seenDesc.set(row.description, label);
  }
  if (DISCLAIMER.test(row.description)) {
    console.error(`FAIL  disclaimer-style ${label}: ${row.description}`);
    failed += 1;
  }
  const closer = lastSentence(row.description);
  closers.set(closer, (closers.get(closer) ?? 0) + 1);
}

const NGRAM = 8;
const ngramOwners = new Map<string, string>();
const overlapPairs = new Set<string>();
for (const row of rows) {
  const words = normalizeWords(row.description);
  const label = `${row.kind} ${row.slug}`;
  for (let i = 0; i <= words.length - NGRAM; i += 1) {
    const gram = words.slice(i, i + NGRAM).join(" ");
    const owner = ngramOwners.get(gram);
    if (owner && owner !== label) {
      const pair = [owner, label].sort().join(" | ");
      if (!overlapPairs.has(pair)) {
        overlapPairs.add(pair);
        console.error(`FAIL  ${NGRAM}-word overlap "${gram}" on ${owner} and ${label}`);
        failed += 1;
      }
    } else if (!owner) {
      ngramOwners.set(gram, label);
    }
  }
}

const maxCloser = Math.floor(rows.length * CLOSER_MAX_SHARE);
for (const [closer, count] of closers) {
  if (count > maxCloser) {
    console.error(`FAIL  closer "${closer}" on ${count}/${rows.length} pages (max ${maxCloser})`);
    failed += 1;
  }
}

const intros: Array<{ slug: string; text: string }> = [
  { slug: "home", text: siteConfig.intro },
  ...categories.map((category) => ({ slug: category.slug, text: category.intro })),
];
for (const intro of intros) {
  const count = wordCount(intro.text);
  if (count < INTRO_MIN || count > INTRO_MAX) {
    console.error(`FAIL  intro words ${count} ${intro.slug}`);
    failed += 1;
  }
}

const csvPath = join(dirname(fileURLToPath(import.meta.url)), "meta-export.csv");
const csv = [
  ["slug", "type", "title", "title length", "description", "description length"].map(csvCell).join(","),
  ...rows.map((row) =>
    [row.slug, row.kind, row.fullTitle, row.fullTitle.length, row.description, row.description.length]
      .map(csvCell)
      .join(","),
  ),
].join("\n");
writeFileSync(csvPath, `${csv}\n`);

console.log(`Checked ${rows.length} pages (${tools.length} tools, ${articles.length} guides, ${categories.length} categories, 1 home).`);
console.log(`Wrote ${csvPath}`);
if (failed > 0) {
  console.error(`${failed} check(s) failed`);
  process.exit(1);
}
console.log("All title, description, uniqueness, closer-share, disclaimer, intro, and near-duplicate checks passed.");
console.log("\n10 most common closers:");
[...closers.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([closer, count]) => {
    console.log(`  ${(count / rows.length * 100).toFixed(1)}% (${count}) ${closer}`);
  });
