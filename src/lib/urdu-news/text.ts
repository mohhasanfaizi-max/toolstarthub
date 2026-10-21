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
