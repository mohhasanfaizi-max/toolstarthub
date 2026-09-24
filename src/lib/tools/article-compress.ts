export type CompressionLevel = "light" | "medium" | "strong";

const LIGHT: Array<[RegExp, string]> = [
  [/\bin order to\b/gi, "to"],
  [/\bdue to the fact that\b/gi, "because"],
  [/\bat this point in time\b/gi, "now"],
  [/\bit is important to note that\b/gi, ""],
  [/\ba large number of\b/gi, "many"],
  [/\bthe vast majority of\b/gi, "most"],
  [/\bin the event that\b/gi, "if"],
  [/\bfor the purpose of\b/gi, "to"],
  [/\bhas the ability to\b/gi, "can"],
];

const MEDIUM: Array<[RegExp, string]> = [
  ...LIGHT,
  [/\bbasically,?\s*/gi, ""],
  [/\bactually,?\s*/gi, ""],
  [/\bvery\s+/gi, ""],
  [/\breally\s+/gi, ""],
  [/\bin conclusion,?\s*/gi, ""],
];

const STRONG: Array<[RegExp, string]> = [
  ...MEDIUM,
  [/\bjust\s+/gi, ""],
  [/\bsimply\s+/gi, ""],
  [/\bthere is a need to\b/gi, ""],
  [/\bit should be noted that\b/gi, ""],
];

function replacements(level: CompressionLevel): Array<[RegExp, string]> {
  if (level === "light") {
    return LIGHT;
  }
  if (level === "medium") {
    return MEDIUM;
  }
  return STRONG;
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function sentencesOf(paragraph: string): string[] {
  return paragraph
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function dedupeSentences(sentences: string[], strong: boolean): string[] {
  const seen = new Set<string>();
  const openings = new Set<string>();
  const kept: string[] = [];

  for (const sentence of sentences) {
    const key = sentence.toLowerCase().replace(/\s+/g, " ");
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    if (strong) {
      const opening = key.split(" ").slice(0, 6).join(" ");
      if (opening.split(" ").length >= 6 && openings.has(opening)) {
        continue;
      }
      openings.add(opening);
    }
    kept.push(sentence);
  }

  return kept;
}

export function compressArticle(
  text: string,
  level: CompressionLevel,
):
  | { ok: true; text: string; beforeWords: number; afterWords: number }
  | { ok: false; error: string } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { ok: false, error: "Paste an article first." };
  }

  const beforeWords = wordCount(trimmed);
  if (beforeWords < 12) {
    return { ok: false, error: "Paste a longer article. A few words is not enough to shorten." };
  }

  let next = trimmed.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n");
  for (const [pattern, replacement] of replacements(level)) {
    next = next.replace(pattern, replacement);
  }

  if (level !== "light") {
    next = next
      .split(/\n\s*\n/)
      .map((paragraph) => dedupeSentences(sentencesOf(paragraph), level === "strong").join(" "))
      .filter((paragraph) => paragraph.trim())
      .join("\n\n");
  }

  next = next
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/[ ]{2,}/g, " ")
    .replace(/\s+\n/g, "\n")
    .trim();

  if (!next) {
    return { ok: false, error: "Nothing was left after compression. Try a lighter setting." };
  }

  return { ok: true, text: next, beforeWords, afterWords: wordCount(next) };
}
