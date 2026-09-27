import { parseNumber } from "./numbers.ts";

export const TEXT_REPEAT_MIN = 1;
export const TEXT_REPEAT_MAX = 200;
export const TEXT_REPEAT_MAX_CHARS = 5_000;
export const TEXT_REPEAT_MAX_OUTPUT = 100_000;

export type TextRepeatSeparator = "none" | "space" | "newline";

export type TextRepeatResult = { ok: true; text: string } | { ok: false; error: string };

const SEPARATORS: Record<TextRepeatSeparator, string> = {
  none: "",
  space: " ",
  newline: "\n",
};

export function repeatText(source: string, countRaw: string, separator: TextRepeatSeparator): TextRepeatResult {
  if (source === "") {
    return { ok: false, error: "Enter the text to repeat." };
  }
  if (source.length > TEXT_REPEAT_MAX_CHARS) {
    return { ok: false, error: `Keep the text under ${TEXT_REPEAT_MAX_CHARS.toLocaleString()} characters.` };
  }

  const parsed = parseNumber(countRaw, { field: "repeat count", allowNegative: false });
  if (!parsed.ok) return parsed;
  if (!Number.isInteger(parsed.value)) {
    return { ok: false, error: "Enter a whole number of repeats." };
  }
  if (parsed.value < TEXT_REPEAT_MIN || parsed.value > TEXT_REPEAT_MAX) {
    return { ok: false, error: `Choose a repeat count from ${TEXT_REPEAT_MIN} to ${TEXT_REPEAT_MAX}.` };
  }

  const joiner = SEPARATORS[separator];
  const outputLength = source.length * parsed.value + joiner.length * Math.max(0, parsed.value - 1);
  if (outputLength > TEXT_REPEAT_MAX_OUTPUT) {
    return { ok: false, error: "That repeat is too long for this page. Use a shorter text or a smaller count." };
  }

  return { ok: true, text: Array.from({ length: parsed.value }, () => source).join(joiner) };
}
