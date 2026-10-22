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

const QUOTE_PAIRS: Record<string, string> = {
  '"': '"',
  "“": "”",
  "«": "»",
};

function sentenceEndsAtQuote(source: string, periodIndex: number, closer: string): boolean {
  let cursor = periodIndex + 1;
  while (cursor < source.length && ".!?".includes(source[cursor])) cursor += 1;
  if (source[cursor] !== closer) return false;
  cursor += 1;
  return cursor >= source.length || /\s/.test(source[cursor]);
}

function takeSentence(sentences: string[], source: string, start: number, end: number, count: number): { start: number; done: boolean } {
  const sentence = source.slice(start, end).trim();
  if (sentence) sentences.push(sentence);
  if (sentences.length >= count) return { start: end, done: true };
  let next = end;
  while (next < source.length && /\s/.test(source[next])) next += 1;
  return { start: next, done: false };
}

/** First `count` sentences. A period inside a quotation ends a sentence only when the quote closes there. */
export function firstSentences(text: string, count: number): string {
  const source = text.trim();
  if (!source || count <= 0) return "";
  const sentences: string[] = [];
  let start = 0;
  let closer: string | null = null;
  for (let index = 0; index <= source.length; index += 1) {
    const char = source[index] ?? "";
    if (closer) {
      const quoteSentence = (char === "." || char === "!" || char === "?") && sentenceEndsAtQuote(source, index, closer);
      if (!quoteSentence) {
        if (char === closer) closer = null;
        continue;
      }
      let end = index + 1;
      while (end < source.length && ".!?".includes(source[end])) end += 1;
      if (source[end] === closer) end += 1;
      const taken = takeSentence(sentences, source, start, end, count);
      start = taken.start;
      closer = null;
      if (taken.done) break;
      index = start - 1;
      continue;
    }
    if (QUOTE_PAIRS[char]) {
      closer = QUOTE_PAIRS[char];
      continue;
    }
    const ended = char === "." || char === "!" || char === "?" || index === source.length;
    if (!ended) continue;
    let end = index;
    if (index < source.length) {
      end = index + 1;
      while (end < source.length && ".!?".includes(source[end])) end += 1;
      while (end < source.length && `"”»`.includes(source[end])) end += 1;
    }
    const taken = takeSentence(sentences, source, start, end, count);
    start = taken.start;
    if (taken.done || index === source.length) break;
    index = start - 1;
  }
  if (sentences.length < count && start < source.length) {
    const rest = source.slice(start).trim();
    if (rest) sentences.push(rest);
  }
  return sentences.slice(0, count).join(" ");
}

export function trimWords(text: string, max: number): { text: string; trimmed: boolean } {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= max) return { text: words.join(" "), trimmed: false };
  return { text: words.slice(0, max).join(" "), trimmed: true };
}
