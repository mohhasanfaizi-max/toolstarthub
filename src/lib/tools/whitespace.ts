import { limitText, splitLines } from "./duplicate-lines.ts";

export type WhitespaceOptions = {
  trimLines: boolean;
  trimLeading: boolean;
  trimTrailing: boolean;
  collapseSpaces: boolean;
  tabsToSpaces: boolean;
  tabWidth: 2 | 4;
  removeBlankLines: boolean;
  collapseBlankLines: boolean;
  trimDocument: boolean;
};

export const DEFAULT_WHITESPACE_OPTIONS: WhitespaceOptions = {
  trimLines: true,
  trimLeading: false,
  trimTrailing: false,
  collapseSpaces: false,
  tabsToSpaces: false,
  tabWidth: 2,
  removeBlankLines: false,
  collapseBlankLines: false,
  trimDocument: true,
};

export type WhitespaceResult =
  | {
      ok: true;
      output: string;
      originalLines: number;
      resultLines: number;
      originalChars: number;
      resultChars: number;
    }
  | { ok: false; error: string };

export function cleanWhitespace(input: string, options: WhitespaceOptions): WhitespaceResult {
  const limited = limitText(input);
  if (!limited.ok) {
    return limited;
  }

  let text = input.replace(/\r\n/g, "\n");
  if (options.trimDocument) {
    text = text.trim();
  }

  let lines = splitLines(text);
  const originalLines = splitLines(input.replace(/\r\n/g, "\n")).length;
  const originalChars = input.length;

  lines = lines.map((line) => transformLine(line, options));

  if (options.removeBlankLines) {
    lines = lines.filter((line) => line.trim() !== "");
  } else if (options.collapseBlankLines) {
    const collapsed: string[] = [];
    let blank = false;
    for (const line of lines) {
      const isBlank = line.trim() === "";
      if (isBlank && blank) {
        continue;
      }
      collapsed.push(line);
      blank = isBlank;
    }
    lines = collapsed;
  }

  let output = lines.join("\n");
  if (options.trimDocument) {
    output = output.trim();
  }

  return {
    ok: true,
    output,
    originalLines,
    resultLines: output === "" ? 0 : output.split("\n").length,
    originalChars,
    resultChars: output.length,
  };
}

function transformLine(line: string, options: WhitespaceOptions): string {
  let next = line;
  if (options.tabsToSpaces) {
    next = next.replaceAll("\t", " ".repeat(options.tabWidth));
  }
  if (options.collapseSpaces) {
    next = next.replace(/ {2,}/g, " ");
  }
  if (options.trimLines) {
    return next.trim();
  }
  if (options.trimLeading) {
    next = next.replace(/^[ \t]+/, "");
  }
  if (options.trimTrailing) {
    next = next.replace(/[ \t]+$/, "");
  }
  return next;
}
