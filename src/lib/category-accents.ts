import type { CategorySlug, Tool } from "@/data/types";

/** Pastel accent palette per tool category (reference: soft category cards). */
export type CategoryAccent = {
  /** Colored title */
  title: string;
  /** Rounded-square icon tile */
  tile: string;
  /** Thin pastel card border */
  border: string;
  /** Soft hover wash */
  hover: string;
  /** Checkmark color for highlight bullets */
  check: string;
};

export const categoryAccents: Record<CategorySlug, CategoryAccent> = {
  calculators: {
    title: "text-[#2563eb] dark:text-[#60a5fa]",
    tile: "bg-[#eff6ff] text-[#2563eb] dark:bg-[#172554]/60 dark:text-[#60a5fa]",
    border: "border-[#bfdbfe]/90 dark:border-[#1e3a8a]/70",
    hover: "hover:border-[#93c5fd] hover:bg-[#eff6ff]/50 dark:hover:bg-[#172554]/35",
    check: "text-[#2563eb] dark:text-[#60a5fa]",
  },
  "text-tools": {
    title: "text-[#16a34a] dark:text-[#4ade80]",
    tile: "bg-[#f0fdf4] text-[#16a34a] dark:bg-[#14532d]/50 dark:text-[#4ade80]",
    border: "border-[#bbf7d0]/90 dark:border-[#166534]/70",
    hover: "hover:border-[#86efac] hover:bg-[#f0fdf4]/50 dark:hover:bg-[#14532d]/35",
    check: "text-[#16a34a] dark:text-[#4ade80]",
  },
  "developer-tools": {
    title: "text-[#ea580c] dark:text-[#fb923c]",
    tile: "bg-[#fff7ed] text-[#ea580c] dark:bg-[#7c2d12]/45 dark:text-[#fb923c]",
    border: "border-[#fed7aa]/90 dark:border-[#9a3412]/70",
    hover: "hover:border-[#fdba74] hover:bg-[#fff7ed]/50 dark:hover:bg-[#7c2d12]/30",
    check: "text-[#ea580c] dark:text-[#fb923c]",
  },
  "image-tools": {
    title: "text-[#db2777] dark:text-[#f472b6]",
    tile: "bg-[#fdf2f8] text-[#db2777] dark:bg-[#831843]/45 dark:text-[#f472b6]",
    border: "border-[#fbcfe8]/90 dark:border-[#9d174d]/70",
    hover: "hover:border-[#f9a8d4] hover:bg-[#fdf2f8]/50 dark:hover:bg-[#831843]/30",
    check: "text-[#db2777] dark:text-[#f472b6]",
  },
  "seo-utilities": {
    title: "text-[#0d9488] dark:text-[#2dd4bf]",
    tile: "bg-[#f0fdfa] text-[#0d9488] dark:bg-[#134e4a]/50 dark:text-[#2dd4bf]",
    border: "border-[#99f6e4]/90 dark:border-[#115e59]/70",
    hover: "hover:border-[#5eead4] hover:bg-[#f0fdfa]/50 dark:hover:bg-[#134e4a]/35",
    check: "text-[#0d9488] dark:text-[#2dd4bf]",
  },
  "ai-tools": {
    title: "text-[#7c3aed] dark:text-[#c4b5fd]",
    tile: "bg-[#f5f3ff] text-[#7c3aed] dark:bg-[#4c1d95]/45 dark:text-[#c4b5fd]",
    border: "border-[#ddd6fe]/90 dark:border-[#6b21a8]/70",
    hover: "hover:border-[#c4b5fd] hover:bg-[#f5f3ff]/50 dark:hover:bg-[#4c1d95]/30",
    check: "text-[#7c3aed] dark:text-[#c4b5fd]",
  },
};

const GENERIC_KEYWORDS = new Set([
  "calculator",
  "calculators",
  "tool",
  "tools",
  "online",
  "free",
  "generator",
  "converter",
  "utility",
  "utilities",
  "app",
  "check",
  "test",
]);

/**
 * Short highlight bullets for tool cards, derived only from existing keywords
 * (no new marketing copy). Returns [] when nothing useful remains.
 */
export function toolHighlightBullets(tool: Tool, limit = 3): string[] {
  const nameTokens = new Set(
    tool.name
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(Boolean),
  );

  const seen = new Set<string>();
  const out: string[] = [];

  for (const raw of tool.keywords) {
    const key = raw.trim().toLowerCase();
    if (!key || key.length < 4 || GENERIC_KEYWORDS.has(key) || seen.has(key)) {
      continue;
    }
    // Skip keywords that are just the tool name or a single name token.
    if (key === tool.name.toLowerCase() || nameTokens.has(key)) {
      continue;
    }
    // Prefer multi-word / phrase-like keywords; allow longer single words.
    const words = key.split(/\s+/);
    if (words.length === 1 && key.length < 6) {
      continue;
    }
    seen.add(key);
    out.push(raw.trim().replace(/\b\w/g, (c) => c.toUpperCase()));
    if (out.length >= limit) {
      break;
    }
  }

  return out;
}

export function getCategoryAccent(category: CategorySlug): CategoryAccent {
  return categoryAccents[category];
}
