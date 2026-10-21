const SMALL_WORDS = new Set([
  "a",
  "an",
  "the",
  "of",
  "in",
  "on",
  "at",
  "to",
  "for",
  "and",
  "or",
  "but",
  "nor",
  "as",
  "by",
  "is",
  "are",
  "was",
  "were",
  "with",
  "from",
]);

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

const FIELD_LABEL = "title|subtitle|permalink|meta[\\s_-]?title|meta[\\s_-]?description|headline|seo title|slug|body";
const FIELD_LINE = new RegExp(`^(?:#{1,6}\\s*)?(${FIELD_LABEL})\\s*[:：]\\s*(.*)$`, "i");
const FIELD_SPLIT = new RegExp(`(?<=^|[.!?])\\s*(?=(?:${FIELD_LABEL})\\s*[:：])`, "i");
const DROPPED_LINES = new Set(["brief", "medium", "full", "expanded article", "english draft"]);

/** Remove a leading "Title:" style label from one SEO field. */
export function stripFieldLabel(value: string): string {
  const text = plainText(value);
  const match = text.match(FIELD_LINE);
  if (!match) return text;
  return match[2].trim();
}

/**
 * News prose only. Drops title, subtitle, permalink, meta title, meta description,
 * and headline lines the model sometimes pastes into the body.
 */
export function cleanNewsBody(value: string): string {
  const source = value.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").replace(/\u0000/g, "");
  const kept: string[] = [];
  for (const rawLine of source.split(/\n+/)) {
    const pieces = rawLine
      .trim()
      .replace(/[ \t]+/g, " ")
      .split(FIELD_SPLIT)
      .map((part) => part.trim())
      .filter(Boolean);
    for (const line of pieces) {
      if (DROPPED_LINES.has(line.toLowerCase().replace(/:$/, ""))) continue;
      const match = line.match(FIELD_LINE);
      if (!match) {
        kept.push(line);
        continue;
      }
      const label = match[1].toLowerCase().replace(/[\s_-]+/g, " ");
      const rest = match[2].trim();
      if (label === "body" && rest) kept.push(rest);
    }
  }
  return kept.join("\n\n");
}

/** Drop tags so model output is shown as text, never as HTML. */
export function plainText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function cutAtWord(input: string, max: number): string {
  const text = input.trim().replace(/\s+/g, " ");
  if (text.length <= max) return text;
  const slice = text.slice(0, max + 1);
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > 0) return slice.slice(0, lastSpace).trim();
  return text.slice(0, max).trim();
}

export function toTitleCase(input: string): string {
  const words = input.trim().split(/\s+/).filter(Boolean);
  return words
    .map((word, index) => {
      if (/^[A-Z0-9]{2,6}$/.test(word)) return word;
      const lower = word.toLowerCase();
      const edge = index === 0 || index === words.length - 1;
      if (!edge && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

export function trimWords(text: string, max: number): { text: string; trimmed: boolean } {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= max) return { text: words.join(" "), trimmed: false };
  return { text: words.slice(0, max).join(" "), trimmed: true };
}
