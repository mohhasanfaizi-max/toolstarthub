const MARKDOWN_FORMATTING = /(?:^|\n)\s*(?:#{1,6}\s+|[-*]\s+)/;

const BANNED_PHRASES = [
  "in today's digital world",
  "ever-evolving landscape",
  "whether you're a beginner or an expert",
  "unlock the power of",
  "revolutionize your workflow",
  "let's dive into",
  "understanding the importance of",
  "here's everything you need to know",
  "let's explore",
  "let's take a closer look",
  "in conclusion",
  "it is important to note",
  "experts agree",
  "studies show",
  "millions of users",
];

export function collectText(value: unknown): string[] {
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap(collectText);
  }
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectText);
  }
  return [];
}

export function markdownFormattingIssues(text: string): string | null {
  if (MARKDOWN_FORMATTING.test(text)) {
    return "visible markdown heading or bullet marker";
  }
  return null;
}

export function bannedPhraseIssues(text: string): string | null {
  const lower = text.toLowerCase();
  const hit = BANNED_PHRASES.find((phrase) => lower.includes(phrase));
  return hit ? `banned phrase: ${hit}` : null;
}
