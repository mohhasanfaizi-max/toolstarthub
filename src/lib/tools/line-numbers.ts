import { parseNumber } from "./numbers.ts";

export type LineNumberResult =
  | { ok: true; text: string; lineCount: number }
  | { ok: false; error: string };

export function addLineNumbers(
  source: string,
  startRaw: string,
  separator: string,
): LineNumberResult {
  if (source === "") {
    return { ok: false, error: "Paste the lines you want to number." };
  }

  const start = parseNumber(startRaw, { field: "starting number", allowNegative: true });
  if (!start.ok) {
    return start;
  }
  if (!Number.isInteger(start.value)) {
    return { ok: false, error: "Enter a whole number for the starting line." };
  }

  const normalized = source.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n");
  const text = lines
    .map((line, index) => `${start.value + index}${separator}${line}`)
    .join("\n");

  return { ok: true, text, lineCount: lines.length };
}
