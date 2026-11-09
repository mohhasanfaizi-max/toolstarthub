import type { CategorySlug, IconName, Tool } from "@/data/types";

/**
 * Soft pastel card palette matching the reference image:
 * tinted card fill, stronger pastel border, solid icon tile (white glyph),
 * coloured title, and circular check accents.
 */
export type CategoryAccent = {
  /** Soft pastel card background (full fill / light gradient) */
  card: string;
  /** Slightly stronger pastel border */
  border: string;
  /** Hover wash */
  hover: string;
  /** Solid rounded-square icon tile (white icon on top) */
  tile: string;
  /** Title colour */
  title: string;
  /** Solid fill for circular checks / mini preview accents */
  solid: string;
  /** Soft bar tint inside the mini preview */
  bar: string;
  /** Soft bar secondary */
  barMuted: string;
};

export const categoryAccents: Record<CategorySlug, CategoryAccent> = {
  calculators: {
    card: "bg-[linear-gradient(180deg,#eef4ff_0%,#f7faff_100%)] dark:bg-[linear-gradient(180deg,#13203a_0%,#101827_100%)]",
    border: "border-[#b7cffc] dark:border-[#1e3a8a]",
    hover: "hover:border-[#8fb6fb] dark:hover:border-[#2563eb]/70",
    tile: "bg-[#2563eb] text-white dark:bg-[#3b82f6]",
    title: "text-[#1d4ed8] dark:text-[#93c5fd]",
    solid: "bg-[#2563eb] dark:bg-[#3b82f6]",
    bar: "bg-[#bfdbfe] dark:bg-[#1e3a8a]",
    barMuted: "bg-[#e2e8f0] dark:bg-[#243044]",
  },
  "text-tools": {
    card: "bg-[linear-gradient(180deg,#ecfaf2_0%,#f6fdf9_100%)] dark:bg-[linear-gradient(180deg,#0f291c_0%,#101827_100%)]",
    border: "border-[#a7e9c3] dark:border-[#166534]",
    hover: "hover:border-[#6fd6a0] dark:hover:border-[#22c55e]/70",
    tile: "bg-[#16a34a] text-white dark:bg-[#22c55e]",
    title: "text-[#15803d] dark:text-[#86efac]",
    solid: "bg-[#16a34a] dark:bg-[#22c55e]",
    bar: "bg-[#bbf7d0] dark:bg-[#166534]",
    barMuted: "bg-[#e2e8f0] dark:bg-[#243044]",
  },
  "developer-tools": {
    card: "bg-[linear-gradient(180deg,#fff3ea_0%,#fffaf5_100%)] dark:bg-[linear-gradient(180deg,#3a1d0d_0%,#101827_100%)]",
    border: "border-[#fdc89a] dark:border-[#9a3412]",
    hover: "hover:border-[#fbab68] dark:hover:border-[#f97316]/70",
    tile: "bg-[#ea580c] text-white dark:bg-[#f97316]",
    title: "text-[#c2410c] dark:text-[#fdba74]",
    solid: "bg-[#ea580c] dark:bg-[#f97316]",
    bar: "bg-[#fed7aa] dark:bg-[#9a3412]",
    barMuted: "bg-[#e2e8f0] dark:bg-[#243044]",
  },
  "image-tools": {
    card: "bg-[linear-gradient(180deg,#fff0f5_0%,#fff7fa_100%)] dark:bg-[linear-gradient(180deg,#3a1024_0%,#101827_100%)]",
    border: "border-[#f9b4d0] dark:border-[#9d174d]",
    hover: "hover:border-[#f472b6] dark:hover:border-[#ec4899]/70",
    tile: "bg-[#db2777] text-white dark:bg-[#ec4899]",
    title: "text-[#be185d] dark:text-[#f9a8d4]",
    solid: "bg-[#db2777] dark:bg-[#ec4899]",
    bar: "bg-[#fbcfe8] dark:bg-[#9d174d]",
    barMuted: "bg-[#e2e8f0] dark:bg-[#243044]",
  },
  "seo-utilities": {
    card: "bg-[linear-gradient(180deg,#ebf9fb_0%,#f5fcfd_100%)] dark:bg-[linear-gradient(180deg,#0f2a2a_0%,#101827_100%)]",
    border: "border-[#9ee3e8] dark:border-[#115e59]",
    hover: "hover:border-[#5eead4] dark:hover:border-[#14b8a6]/70",
    tile: "bg-[#0d9488] text-white dark:bg-[#14b8a6]",
    title: "text-[#0f766e] dark:text-[#5eead4]",
    solid: "bg-[#0d9488] dark:bg-[#14b8a6]",
    bar: "bg-[#99f6e4] dark:bg-[#115e59]",
    barMuted: "bg-[#e2e8f0] dark:bg-[#243044]",
  },
  "ai-tools": {
    card: "bg-[linear-gradient(180deg,#f4efff_0%,#faf8ff_100%)] dark:bg-[linear-gradient(180deg,#2a1848_0%,#101827_100%)]",
    border: "border-[#d0c0fb] dark:border-[#6b21a8]",
    hover: "hover:border-[#c4b5fd] dark:hover:border-[#a855f7]/70",
    tile: "bg-[#7c3aed] text-white dark:bg-[#8b5cf6]",
    title: "text-[#6d28d9] dark:text-[#ddd6fe]",
    solid: "bg-[#7c3aed] dark:bg-[#8b5cf6]",
    bar: "bg-[#ddd6fe] dark:bg-[#6b21a8]",
    barMuted: "bg-[#e2e8f0] dark:bg-[#243044]",
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
  "counter",
]);

function titleCase(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b([a-z])/g, (c) => c.toUpperCase());
}

function overlapsName(phrase: string, nameTokens: Set<string>): boolean {
  const tokens = phrase
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1);
  if (tokens.length === 0) return true;
  // Reject phrases that are basically the tool name restated.
  const overlap = tokens.filter((t) => nameTokens.has(t)).length;
  if (tokens.length === 1) return nameTokens.has(tokens[0]!);
  return overlap === tokens.length;
}

function isUsefulPhrase(phrase: string, nameTokens: Set<string>): boolean {
  const cleaned = phrase.trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length < 2) return false;
  // Multi-word keywords can be short ("uuid v4"); description clauses stay longer.
  if (cleaned.length < 7 || cleaned.length > 48) return false;
  if (overlapsName(cleaned, nameTokens)) return false;
  const lower = cleaned.toLowerCase();
  if (GENERIC_KEYWORDS.has(lower)) return false;
  return true;
}

/**
 * 2–3 short highlight phrases from existing keywords / description clauses.
 * Returns [] when fewer than 2 meaningful phrases exist (never weak single words).
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

  const push = (raw: string) => {
    const key = raw.trim().toLowerCase().replace(/\s+/g, " ");
    if (!key || seen.has(key) || !isUsefulPhrase(raw, nameTokens)) return;
    seen.add(key);
    out.push(titleCase(raw));
  };

  for (const raw of tool.keywords) {
    push(raw);
    if (out.length >= limit) break;
  }

  if (out.length < 2) {
    // Pull short clauses from the existing description (no new marketing copy).
    const fluff = /(in your browser|on this page|on the page|when configured)$/i;
    const clauses = tool.description
      .split(/[.;]/)
      .flatMap((chunk) => chunk.split(/,(?=\s)/))
      .map((part) =>
        part
          .replace(/\band\b/gi, ",")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      )
      .flat()
      .map((clause) => clause.replace(fluff, "").trim())
      .filter(Boolean);

    for (const clause of clauses) {
      if (/\brejected\b|\bnot\b|\bcannot\b|\bdon.?t\b/i.test(clause)) {
        continue;
      }
      const words = clause.split(/\s+/);
      if (words.length >= 3 && words.length <= 7 && clause.length >= 12) {
        push(clause);
      } else if (words.length === 2 && clause.length >= 12) {
        push(clause);
      }
      if (out.length >= limit) break;
    }
  }

  return out.length >= 2 ? out.slice(0, limit) : [];
}

export function getCategoryAccent(category: CategorySlug): CategoryAccent {
  return categoryAccents[category];
}

export function categoryPreviewIcon(category: CategorySlug): IconName {
  switch (category) {
    case "calculators":
      return "calculator";
    case "text-tools":
      return "text";
    case "developer-tools":
      return "code";
    case "image-tools":
      return "image";
    case "seo-utilities":
      return "search";
    case "ai-tools":
      return "bolt";
  }
}
