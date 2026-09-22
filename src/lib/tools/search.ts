import type { Tool } from "../../data/types.ts";
import { getCategoryBySlug } from "../../data/categories.ts";

const SYNONYMS: Record<string, string> = {
  colour: "color",
  colours: "color",
  colors: "color",
  jpeg: "jpg",
  combine: "merge",
  merger: "merge",
  barcode: "qr",
  wifi: "qr",
  guid: "uuid",
  percent: "percentage",
  compare: "diff",
  dedupe: "duplicate",
  spaces: "whitespace",
  md: "markdown",
  meta: "metadata",
};

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => SYNONYMS[token] ?? token);
}

function scoreField(field: string, token: string): number {
  const value = field.toLowerCase();
  if (!value) {
    return 0;
  }
  if (value === token) {
    return 100;
  }
  if (value.startsWith(token)) {
    return 60;
  }
  if (value.includes(token)) {
    return 35;
  }
  return 0;
}

export function scoreToolMatch(tool: Tool, query: string): number {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return 1;
  }

  const category = getCategoryBySlug(tool.category);
  let total = 0;

  for (const token of tokens) {
    const nameScore = scoreField(tool.name, token) * 3;
    const slugScore = scoreField(tool.slug.replaceAll("-", " "), token) * 2.4;
    const keywordScore = Math.max(
      0,
      ...tool.keywords.map((keyword) => scoreField(keyword, token) * 2),
    );
    const categoryScore = scoreField(category?.name ?? "", token) * 1.8;
    const descriptionScore = scoreField(tool.description, token);

    const best = Math.max(
      nameScore,
      slugScore,
      keywordScore,
      categoryScore,
      descriptionScore,
    );

    if (best === 0) {
      return 0;
    }

    total += best;
  }

  if (tool.name.toLowerCase() === query.trim().toLowerCase()) {
    total += 80;
  }

  return total;
}

export function rankTools(items: Tool[], query: string): Tool[] {
  const normalized = query.trim();
  if (!normalized) {
    return items;
  }

  return items
    .map((tool) => ({ tool, score: scoreToolMatch(tool, normalized) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.tool.name.localeCompare(b.tool.name);
    })
    .map((entry) => entry.tool);
}
