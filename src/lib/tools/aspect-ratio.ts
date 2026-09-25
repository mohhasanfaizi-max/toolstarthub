import { parseNumber } from "./numbers.ts";

export type AspectMode = "simplify" | "from-width" | "from-height";

export type AspectResult =
  | { ok: true; ratioWidth: number; ratioHeight: number; width: number | null; height: number | null }
  | { ok: false; error: string };

function gcd(left: number, right: number): number {
  let a = Math.abs(left);
  let b = Math.abs(right);
  while (b !== 0) {
    const next = a % b;
    a = b;
    b = next;
  }
  return a || 1;
}

function simplify(width: number, height: number): { ratioWidth: number; ratioHeight: number } {
  const scale = 10000;
  const scaledWidth = Math.round(width * scale);
  const scaledHeight = Math.round(height * scale);
  const divisor = gcd(scaledWidth, scaledHeight);
  return { ratioWidth: scaledWidth / divisor, ratioHeight: scaledHeight / divisor };
}

function positive(raw: string, field: string): { ok: true; value: number } | { ok: false; error: string } {
  const parsed = parseNumber(raw, { field, allowNegative: false });
  if (!parsed.ok) return parsed;
  if (parsed.value <= 0) return { ok: false, error: `Enter a ${field} greater than 0.` };
  if (parsed.value > 1_000_000) return { ok: false, error: `Enter a smaller ${field}.` };
  return parsed;
}

export function calculateAspectRatio(input: {
  mode: AspectMode;
  widthRaw: string;
  heightRaw: string;
  ratioWidthRaw: string;
  ratioHeightRaw: string;
}): AspectResult {
  if (input.mode === "simplify") {
    const width = positive(input.widthRaw, "width");
    if (!width.ok) return width;
    const height = positive(input.heightRaw, "height");
    if (!height.ok) return height;
    const ratio = simplify(width.value, height.value);
    return { ok: true, ...ratio, width: width.value, height: height.value };
  }

  const ratioWidth = positive(input.ratioWidthRaw, "ratio width");
  if (!ratioWidth.ok) return ratioWidth;
  const ratioHeight = positive(input.ratioHeightRaw, "ratio height");
  if (!ratioHeight.ok) return ratioHeight;
  const ratio = simplify(ratioWidth.value, ratioHeight.value);

  if (input.mode === "from-width") {
    const width = positive(input.widthRaw, "width");
    if (!width.ok) return width;
    return { ok: true, ...ratio, width: width.value, height: (width.value * ratio.ratioHeight) / ratio.ratioWidth };
  }

  const height = positive(input.heightRaw, "height");
  if (!height.ok) return height;
  return { ok: true, ...ratio, width: (height.value * ratio.ratioWidth) / ratio.ratioHeight, height: height.value };
}
