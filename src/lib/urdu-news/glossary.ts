import glossaryJson from "../../data/urdu-news-glossary.json" with { type: "json" };

export type GlossaryEntry = {
  urdu: string;
  english: string;
  kind: "person" | "party" | "place" | "institution";
};

export const URDU_GLOSSARY = glossaryJson as GlossaryEntry[];

export function matchingGlossary(urdu: string): GlossaryEntry[] {
  return URDU_GLOSSARY.filter((entry) => entry.urdu && urdu.includes(entry.urdu)).sort(
    (a, b) => b.urdu.length - a.urdu.length,
  );
}

export function glossaryPromptLines(urdu: string): string {
  const matches = matchingGlossary(urdu);
  if (matches.length === 0) return "No glossary entries matched this article.";
  return matches.map((entry) => `- ${entry.urdu} = ${entry.english}`).join("\n");
}

export function missingGlossaryNames(urdu: string, english: string): GlossaryEntry[] {
  const haystack = english.toLowerCase();
  return matchingGlossary(urdu).filter((entry) => !haystack.includes(entry.english.toLowerCase()));
}
