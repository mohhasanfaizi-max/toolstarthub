export const RANDOM_COUNT_MAX = 200;
export const RANDOM_DECIMAL_PLACES = 6;

export type RandomMode = "integer" | "decimal";

export type RandomOptions = {
  min: number;
  max: number;
  count: number;
  mode: RandomMode;
  unique: boolean;
};

export function parseRandomBound(
  raw: string,
  field: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: `Enter a ${field}.` };
  }
  const value = Number(trimmed);
  if (!Number.isFinite(value)) {
    return { ok: false, error: `Enter a valid ${field}.` };
  }
  if (Math.abs(value) > 1_000_000_000) {
    return { ok: false, error: `${field} must stay within ±1,000,000,000.` };
  }
  return { ok: true, value };
}

export function parseRandomCount(
  raw: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter how many numbers to generate." };
  }
  const value = Number(trimmed);
  if (!Number.isInteger(value)) {
    return { ok: false, error: "Count must be a whole number." };
  }
  if (value < 1 || value > RANDOM_COUNT_MAX) {
    return {
      ok: false,
      error: `Generate between 1 and ${RANDOM_COUNT_MAX} numbers.`,
    };
  }
  return { ok: true, value };
}

export function generateRandomNumbers(
  options: RandomOptions,
): { ok: true; values: number[] } | { ok: false; error: string } {
  if (options.min > options.max) {
    return { ok: false, error: "Minimum must be less than or equal to maximum." };
  }

  if (options.mode === "integer") {
    if (!Number.isInteger(options.min) || !Number.isInteger(options.max)) {
      return { ok: false, error: "Integer mode needs whole-number bounds." };
    }
    const span = options.max - options.min + 1;
    if (options.unique && options.count > span) {
      return {
        ok: false,
        error: `There are only ${span} unique integers in that range.`,
      };
    }
    const values = options.unique
      ? sampleUniqueIntegers(options.min, options.max, options.count)
      : Array.from({ length: options.count }, () => randomIntInclusive(options.min, options.max));
    return { ok: true, values };
  }

  if (options.unique) {
    return {
      ok: false,
      error: "Unique mode is only available for integers.",
    };
  }

  const values = Array.from({ length: options.count }, () =>
    randomDecimal(options.min, options.max),
  );
  return { ok: true, values };
}

export function formatRandomValue(value: number, mode: RandomMode): string {
  if (mode === "integer") {
    return String(value);
  }
  return value.toFixed(RANDOM_DECIMAL_PLACES).replace(/0+$/, "").replace(/\.$/, "");
}

function sampleUniqueIntegers(min: number, max: number, count: number): number[] {
  const span = max - min + 1;
  if (count === span) {
    return shuffle(Array.from({ length: span }, (_, index) => min + index));
  }
  const picked = new Set<number>();
  while (picked.size < count) {
    picked.add(randomIntInclusive(min, max));
  }
  return [...picked];
}

function shuffle(values: number[]): number[] {
  const next = [...values];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = randomIntInclusive(0, index);
    const current = next[index] ?? 0;
    next[index] = next[swap] ?? 0;
    next[swap] = current;
  }
  return next;
}

function randomIntInclusive(min: number, max: number): number {
  return min + randomInt(max - min + 1);
}

function randomDecimal(min: number, max: number): number {
  const buffer = new Uint32Array(1);
  crypto.getRandomValues(buffer);
  const unit = (buffer[0] ?? 0) / 2 ** 32;
  const value = min + unit * (max - min);
  const factor = 10 ** RANDOM_DECIMAL_PLACES;
  return Math.round(value * factor) / factor;
}

function randomInt(max: number): number {
  if (max <= 0) {
    throw new Error("Invalid random range");
  }
  const limit = 2 ** 32 - ((2 ** 32) % max);
  const buffer = new Uint32Array(1);
  do {
    crypto.getRandomValues(buffer);
  } while ((buffer[0] ?? 0) >= limit);
  return (buffer[0] ?? 0) % max;
}
