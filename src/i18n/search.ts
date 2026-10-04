import type { Tool } from "../data/types.ts";

function normalize(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
}

function tokens(query: string): string[] {
  return normalize(query)
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

/**
 * Search for localized tool lists. Works with any script (Latin, Cyrillic,
 * Arabic, Devanagari, CJK) and also matches English names and keywords.
 */
export function searchToolsLocalized(items: Tool[], query: string): Tool[] {
  const parts = tokens(query);
  if (parts.length === 0) {
    return items;
  }
  const scored: Array<{ tool: Tool; score: number }> = [];
  for (const tool of items) {
    const name = normalize(tool.name);
    const keywords = normalize(
      tool.keywords.join(" ") + " " + tool.slug.replaceAll("-", " "),
    );
    const description = normalize(tool.description);
    let total = 0;
    let matchedAll = true;
    for (const part of parts) {
      let score = 0;
      if (name === part) score = 300;
      else if (name.startsWith(part)) score = 180;
      else if (name.includes(part)) score = 120;
      else if (keywords.includes(part)) score = 60;
      else if (description.includes(part)) score = 25;
      if (score === 0) {
        matchedAll = false;
        break;
      }
      total += score;
    }
    if (matchedAll) {
      scored.push({ tool, score: total });
    }
  }
  return scored
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .map((entry) => entry.tool);
}
