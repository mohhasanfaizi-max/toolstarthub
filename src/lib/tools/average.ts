import { parseNumber, roundTo } from "./numbers.ts";

export const MAX_AVERAGE_VALUES = 1000;

export type AverageCalculation =
  | {
      ok: true;
      count: number;
      mean: number;
      median: number;
      modes: number[];
    }
  | { ok: false; error: string };

export function parseNumberList(raw: string): { ok: true; values: number[] } | { ok: false; error: string } {
  const tokens = raw
    .split(/[\s,]+/)
    .map((token) => token.trim())
    .filter((token) => token !== "");
  if (tokens.length === 0) {
    return { ok: false, error: "Enter at least one number." };
  }
  if (tokens.length > MAX_AVERAGE_VALUES) {
    return { ok: false, error: `Enter up to ${MAX_AVERAGE_VALUES} numbers.` };
  }

  const values: number[] = [];
  for (const token of tokens) {
    const parsed = parseNumber(token, { field: "number", allowNegative: true });
    if (!parsed.ok) {
      return { ok: false, error: `"${token}" is not a number.` };
    }
    values.push(parsed.value);
  }
  return { ok: true, values };
}

export function calculateAverage(raw: string): AverageCalculation {
  const parsed = parseNumberList(raw);
  if (!parsed.ok) return parsed;
  const values = parsed.values;
  const sorted = [...values].sort((left, right) => left - right);
  const count = sorted.length;
  const mean = roundTo(sorted.reduce((sum, value) => sum + value, 0) / count, 10);
  const mid = Math.floor(count / 2);
  const median = count % 2 === 1 ? sorted[mid] : roundTo((sorted[mid - 1] + sorted[mid]) / 2, 10);

  const counts = new Map<number, number>();
  for (const value of sorted) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  const highest = Math.max(...counts.values());
  const distinct = counts.size;
  const modes =
    highest === 1 && distinct > 1
      ? []
      : [...counts.entries()]
          .filter(([, times]) => times === highest)
          .map(([value]) => value)
          .sort((left, right) => left - right);

  return { ok: true, count, mean, median, modes };
}
