const FORMULAIC = [
  "in conclusion",
  "it is important to note",
  "in today's",
  "delve",
  "let's dive",
  "unlock the power",
  "whether you're a beginner",
  "not only",
  "ultimately",
];

export type WritingPatternReport = {
  words: number;
  sentences: number;
  paragraphs: number;
  averageSentenceWords: number;
  sentenceVariation: "Low" | "Moderate" | "Varied";
  vocabulary: "Narrow" | "Mixed" | "Broad";
  repeatedPhrases: string[];
  formulaicPhrases: string[];
  note: string;
};

function sentencesOf(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
}

function wordsOf(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9']+/g) ?? [];
}

export function analyzeWritingPatterns(
  text: string,
): { ok: true; report: WritingPatternReport } | { ok: false; error: string } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { ok: false, error: "Paste some writing first." };
  }

  const words = wordsOf(trimmed);
  if (words.length < 40) {
    return {
      ok: false,
      error: "Paste at least 40 words. A short snippet does not show a pattern.",
    };
  }

  const sentences = sentencesOf(trimmed);
  const lengths = (sentences.length > 0 ? sentences : [trimmed]).map(
    (sentence) => wordsOf(sentence).length,
  );
  const average = lengths.reduce((sum, length) => sum + length, 0) / lengths.length;
  const variance =
    lengths.reduce((sum, length) => sum + (length - average) ** 2, 0) / lengths.length;
  const ratio = average === 0 ? 0 : Math.sqrt(variance) / average;
  const sentenceVariation: WritingPatternReport["sentenceVariation"] =
    ratio < 0.25 ? "Low" : ratio < 0.5 ? "Moderate" : "Varied";

  const unique = new Set(words).size / words.length;
  const vocabulary: WritingPatternReport["vocabulary"] =
    unique < 0.35 ? "Narrow" : unique < 0.55 ? "Mixed" : "Broad";

  const counts = new Map<string, number>();
  for (let index = 0; index < words.length - 3; index += 1) {
    const phrase = words.slice(index, index + 4).join(" ");
    counts.set(phrase, (counts.get(phrase) ?? 0) + 1);
  }
  const repeatedPhrases = [...counts.entries()]
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([phrase, count]) => `"${phrase}" appears ${count} times`);

  const lower = trimmed.toLowerCase();
  const formulaicPhrases = FORMULAIC.filter((phrase) => lower.includes(phrase));
  const paragraphs = trimmed.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).length;

  return {
    ok: true,
    report: {
      words: words.length,
      sentences: sentences.length,
      paragraphs,
      averageSentenceWords: Math.round(average * 10) / 10,
      sentenceVariation,
      vocabulary,
      repeatedPhrases,
      formulaicPhrases,
      note: "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.",
    },
  };
}
