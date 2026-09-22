import { limitText, splitLines } from "./duplicate-lines.ts";

export type LineSortMode =
  | "az"
  | "za"
  | "num-asc"
  | "num-desc"
  | "short"
  | "long";

export type LineSortOptions = {
  mode: LineSortMode;
  caseInsensitive: boolean;
  trim: boolean;
  ignoreEmpty: boolean;
  removeDuplicates: boolean;
};

export type LineSortResult =
  | {
      ok: true;
      output: string;
      originalLines: number;
      resultLines: number;
    }
  | { ok: false; error: string };

export function sortLines(input: string, options: LineSortOptions): LineSortResult {
  const limited = limitText(input);
  if (!limited.ok) {
    return limited;
  }

  const original = splitLines(input);
  let rows = original.map((text, index) => ({ text, index }));

  if (options.ignoreEmpty) {
    rows = rows.filter((row) => row.text.trim() !== "");
  }

  if (options.removeDuplicates) {
    const seen = new Set<string>();
    rows = rows.filter((row) => {
      const key = options.caseInsensitive
        ? (options.trim ? row.text.trim() : row.text).toLowerCase()
        : options.trim
          ? row.text.trim()
          : row.text;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  rows.sort((a, b) => {
    const cmp = compareLines(a.text, b.text, options);
    return cmp === 0 ? a.index - b.index : cmp;
  });

  return {
    ok: true,
    output: rows.map((row) => row.text).join("\n"),
    originalLines: original.length,
    resultLines: rows.length,
  };
}

function compareLines(left: string, right: string, options: LineSortOptions): number {
  const a = options.trim ? left.trim() : left;
  const b = options.trim ? right.trim() : right;
  switch (options.mode) {
    case "az":
      return localeCompare(a, b, options.caseInsensitive);
    case "za":
      return localeCompare(b, a, options.caseInsensitive);
    case "num-asc":
      return numericCompare(a, b);
    case "num-desc":
      return numericCompare(b, a);
    case "short":
      return a.length - b.length || localeCompare(a, b, options.caseInsensitive);
    case "long":
      return b.length - a.length || localeCompare(a, b, options.caseInsensitive);
    default:
      return 0;
  }
}

function localeCompare(a: string, b: string, caseInsensitive: boolean): number {
  const left = caseInsensitive ? a.toLowerCase() : a;
  const right = caseInsensitive ? b.toLowerCase() : b;
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  return 0;
}

function numericCompare(a: string, b: string): number {
  const left = parseLeadingNumber(a);
  const right = parseLeadingNumber(b);
  const leftOk = Number.isFinite(left);
  const rightOk = Number.isFinite(right);
  if (leftOk && rightOk) {
    return left - right;
  }
  if (leftOk) {
    return -1;
  }
  if (rightOk) {
    return 1;
  }
  return localeCompare(a, b, true);
}

function parseLeadingNumber(value: string): number {
  const match = value.trim().match(/^-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : Number.NaN;
}
