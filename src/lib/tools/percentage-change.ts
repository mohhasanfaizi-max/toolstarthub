import { parseNumber, roundTo } from "./numbers.ts";

export type PercentageChangeResult =
  | {
      ok: true;
      change: number;
      direction: "increase" | "decrease" | "unchanged";
      difference: number;
    }
  | { ok: false; error: string };

export function calculatePercentageChange(
  originalRaw: string,
  newRaw: string,
): PercentageChangeResult {
  const original = parseNumber(originalRaw, { field: "original value" });
  if (!original.ok) {
    return original;
  }

  const next = parseNumber(newRaw, { field: "new value" });
  if (!next.ok) {
    return next;
  }

  if (original.value === 0) {
    if (next.value === 0) {
      return {
        ok: true,
        change: 0,
        direction: "unchanged",
        difference: 0,
      };
    }

    return {
      ok: false,
      error: "Percentage change cannot be calculated when the original value is 0.",
    };
  }

  const difference = roundTo(next.value - original.value);
  const change = roundTo((difference / original.value) * 100);
  const direction =
    difference > 0 ? "increase" : difference < 0 ? "decrease" : "unchanged";

  return {
    ok: true,
    change,
    direction,
    difference,
  };
}
