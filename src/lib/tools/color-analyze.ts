import { colorFromRgb, type ColorResult } from "./color.ts";

export const ANALYZE_MIN_COLORS = 3;
export const ANALYZE_MAX_COLORS = 10;
export const ANALYZE_SAMPLE_EDGE = 96;

export type DominantColor = {
  color: ColorResult;
  count: number;
  share: number;
};

export function parseColorCount(
  raw: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const value = Number(raw.trim());
  if (!Number.isInteger(value)) {
    return { ok: false, error: "Choose how many colors to extract." };
  }
  if (value < ANALYZE_MIN_COLORS || value > ANALYZE_MAX_COLORS) {
    return {
      ok: false,
      error: `Choose between ${ANALYZE_MIN_COLORS} and ${ANALYZE_MAX_COLORS} colors.`,
    };
  }
  return { ok: true, value };
}

export function analyzePixels(
  data: Uint8ClampedArray,
  count: number,
): DominantColor[] {
  const buckets = new Map<number, { r: number; g: number; b: number; n: number }>();

  for (let index = 0; index < data.length; index += 4) {
    const alpha = data[index + 3] ?? 0;
    if (alpha < 16) {
      continue;
    }
    const r = data[index] ?? 0;
    const g = data[index + 1] ?? 0;
    const b = data[index + 2] ?? 0;
    const key = pack(quantize(r), quantize(g), quantize(b));
    const current = buckets.get(key);
    if (current) {
      current.r += r;
      current.g += g;
      current.b += b;
      current.n += 1;
    } else {
      buckets.set(key, { r, g, b, n: 1 });
    }
  }

  const total = [...buckets.values()].reduce((sum, bucket) => sum + bucket.n, 0);
  if (total === 0) {
    return [];
  }

  return [...buckets.values()]
    .sort((a, b) => b.n - a.n)
    .slice(0, count)
    .map((bucket) => ({
      color: colorFromRgb(
        Math.round(bucket.r / bucket.n),
        Math.round(bucket.g / bucket.n),
        Math.round(bucket.b / bucket.n),
      ),
      count: bucket.n,
      share: (bucket.n / total) * 100,
    }));
}

function quantize(value: number): number {
  return Math.round(value / 17) * 17;
}

function pack(r: number, g: number, b: number): number {
  return (r << 16) | (g << 8) | b;
}
