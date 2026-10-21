const QUOTE_MARKS = /["“”«»]/g;

/** Count straight quotes, curly quotes, and guillemets. */
export function countQuoteMarks(text: string): number {
  return text.match(QUOTE_MARKS)?.length ?? 0;
}
