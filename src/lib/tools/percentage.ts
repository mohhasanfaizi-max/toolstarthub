import { parseNumber, roundTo } from "./numbers.ts";

export type PercentageMode = "of" | "is-what" | "change-by";
export type PercentageDirection = "increase" | "decrease";

export type PercentageInput = {
  mode: PercentageMode;
  x: string;
  y: string;
  direction?: PercentageDirection;
};

export type PercentageSuccess = {
  ok: true;
  result: number;
  amount?: number;
  label: string;
  detail: string;
};

export type PercentageFailure = {
  ok: false;
  error: string;
};

export function calculatePercentage(
  input: PercentageInput,
): PercentageSuccess | PercentageFailure {
  const x = parseNumber(input.x, { field: "first number" });
  if (!x.ok) {
    return x;
  }

  const y = parseNumber(input.y, { field: "second number" });
  if (!y.ok) {
    return y;
  }

  if (input.mode === "of") {
    const result = roundTo((x.value / 100) * y.value);
    return {
      ok: true,
      result,
      label: `${formatPlain(x.value)}% of ${formatPlain(y.value)}`,
      detail: `${formatPlain(x.value)} ÷ 100 × ${formatPlain(y.value)}`,
    };
  }

  if (input.mode === "is-what") {
    if (y.value === 0) {
      return {
        ok: false,
        error: "The second number cannot be 0 when finding a percentage.",
      };
    }

    const result = roundTo((x.value / y.value) * 100);
    return {
      ok: true,
      result,
      label: `${formatPlain(x.value)} is this percent of ${formatPlain(y.value)}`,
      detail: `${formatPlain(x.value)} ÷ ${formatPlain(y.value)} × 100`,
    };
  }

  const direction = input.direction ?? "increase";
  const amount = roundTo((x.value / 100) * y.value);
  const result =
    direction === "increase"
      ? roundTo(y.value + amount)
      : roundTo(y.value - amount);

  return {
    ok: true,
    result,
    amount,
    label:
      direction === "increase"
        ? `${formatPlain(y.value)} increased by ${formatPlain(x.value)}%`
        : `${formatPlain(y.value)} decreased by ${formatPlain(x.value)}%`,
    detail:
      direction === "increase"
        ? `${formatPlain(y.value)} + (${formatPlain(x.value)} ÷ 100 × ${formatPlain(y.value)})`
        : `${formatPlain(y.value)} − (${formatPlain(x.value)} ÷ 100 × ${formatPlain(y.value)})`,
  };
}

function formatPlain(value: number): string {
  return String(roundTo(value));
}
