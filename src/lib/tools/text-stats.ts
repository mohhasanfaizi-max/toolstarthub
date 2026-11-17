export type TextStats = {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  readingMinutes: number;
};

export type DensityItem = {
  term: string;
  count: number;
  /** Percentage of all words in the text, including stop words. */
  density: number;
  kind: "word" | "phrase";
};

export type SpeakingTime = {
  wordsPerMinute: number;
  totalSeconds: number;
  minutes: number;
  seconds: number;
};

const WORD_PATTERN = /\S+/g;
const SENTENCE_PATTERN = /[.!?…]+(?:\s+|$)|[^.!?…\s][^.!?…]*$/g;
const TOKEN_PATTERN = /[\p{L}\p{N}]+/gu;

/** Common English function words used only by the optional density filter. */
export const ENGLISH_STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from",
  "had", "has", "have", "he", "her", "his", "i", "in", "is", "it", "its",
  "of", "on", "or", "she", "that", "the", "their", "them", "there", "they",
  "this", "to", "was", "we", "were", "with", "you", "your",
]);

function countCodePoints(text: string): number {
  return Array.from(text).length;
}

export function getTextStats(text: string): TextStats {
  const characters = countCodePoints(text);
  const charactersNoSpaces = countCodePoints(text.replace(/\s/g, ""));
  const words = text.match(WORD_PATTERN)?.length ?? 0;
  const sentences =
    text.trim() === "" ? 0 : text.trim().match(SENTENCE_PATTERN)?.length ?? 0;
  const paragraphs =
    text.trim() === ""
      ? 0
      : text
          .split(/\n+/)
          .filter((paragraph) => paragraph.trim() !== "").length;
  const lines = text === "" ? 0 : text.split(/\n/).length;
  const readingMinutes = words === 0 ? 0 : Math.max(1, Math.ceil(words / 225));

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    lines,
    readingMinutes: words === 0 ? 0 : readingMinutes,
  };
}

export function tokenizeWords(text: string): string[] {
  return (text.toLowerCase().match(TOKEN_PATTERN) ?? []).map((token) => token);
}

export function getKeywordDensity(
  text: string,
  options?: { ignoreStopWords?: boolean; maxItems?: number },
): { words: DensityItem[]; phrases: DensityItem[]; tokenCount: number } {
  const tokens = tokenizeWords(text);
  const tokenCount = tokens.length;
  const ignore = Boolean(options?.ignoreStopWords);
  const maxItems = options?.maxItems ?? 10;
  const counted = ignore
    ? tokens.filter((token) => !ENGLISH_STOP_WORDS.has(token))
    : tokens;

  function top(
    items: string[],
    kind: "word" | "phrase",
  ): DensityItem[] {
    const counts = new Map<string, number>();
    for (const item of items) {
      counts.set(item, (counts.get(item) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, maxItems)
      .map(([term, count]) => ({
        term,
        count,
        density: tokenCount === 0 ? 0 : (count / tokenCount) * 100,
        kind,
      }));
  }

  const phrases: string[] = [];
  for (let i = 0; i < tokens.length - 1; i += 1) {
    const left = tokens[i];
    const right = tokens[i + 1];
    if (ignore && (ENGLISH_STOP_WORDS.has(left) || ENGLISH_STOP_WORDS.has(right))) {
      continue;
    }
    phrases.push(`${left} ${right}`);
  }

  return {
    words: top(counted, "word"),
    phrases: top(phrases, "phrase"),
    tokenCount,
  };
}

export function parseWordsPerMinute(raw: string): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter a speaking speed in words per minute." };
  }
  const value = Number(trimmed);
  if (!Number.isFinite(value) || value <= 0) {
    return { ok: false, error: "Enter a speaking speed greater than 0." };
  }
  if (value < 50 || value > 250) {
    return { ok: false, error: "Enter a speaking speed between 50 and 250 words per minute." };
  }
  return { ok: true, value };
}

/** Speaking time from a word count and a words-per-minute pace. */
export function getSpeakingTime(words: number, wordsPerMinute: number): SpeakingTime {
  if (words <= 0 || wordsPerMinute <= 0 || !Number.isFinite(wordsPerMinute)) {
    return { wordsPerMinute, totalSeconds: 0, minutes: 0, seconds: 0 };
  }
  const totalSeconds = Math.round((words / wordsPerMinute) * 60);
  return {
    wordsPerMinute,
    totalSeconds,
    minutes: Math.floor(totalSeconds / 60),
    seconds: totalSeconds % 60,
  };
}
