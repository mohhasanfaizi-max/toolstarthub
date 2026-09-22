export type TextStats = {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  readingMinutes: number;
};

const WORD_PATTERN = /\S+/g;
const SENTENCE_PATTERN = /[.!?…]+(?:\s+|$)|[^.!?…\s][^.!?…]*$/g;

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
