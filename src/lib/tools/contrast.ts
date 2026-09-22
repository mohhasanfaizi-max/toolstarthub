import { parseCssColor, type ColorResult } from "./color.ts";

export type WcagLevel = "pass" | "fail";

export type ContrastResult = {
  ratio: number;
  ratioLabel: string;
  normalAa: WcagLevel;
  normalAaa: WcagLevel;
  largeAa: WcagLevel;
  largeAaa: WcagLevel;
  foreground: ColorResult;
  background: ColorResult;
};

export function relativeLuminance(r: number, g: number, b: number): number {
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(
  foreground: { r: number; g: number; b: number },
  background: { r: number; g: number; b: number },
): number {
  const lighter = Math.max(
    relativeLuminance(foreground.r, foreground.g, foreground.b),
    relativeLuminance(background.r, background.g, background.b),
  );
  const darker = Math.min(
    relativeLuminance(foreground.r, foreground.g, foreground.b),
    relativeLuminance(background.r, background.g, background.b),
  );
  return (lighter + 0.05) / (darker + 0.05);
}

export function evaluateContrast(
  foregroundHex: string,
  backgroundHex: string,
): { ok: true; result: ContrastResult } | { ok: false; error: string } {
  const foreground = parseCssColor(foregroundHex);
  const background = parseCssColor(backgroundHex);
  if (!foreground.ok) {
    return { ok: false, error: `Foreground: ${foreground.error}` };
  }
  if (!background.ok) {
    return { ok: false, error: `Background: ${background.error}` };
  }

  const ratio = contrastRatio(foreground.color.rgb, background.color.rgb);
  const rounded = Math.round(ratio * 100) / 100;

  return {
    ok: true,
    result: {
      ratio: rounded,
      ratioLabel: `${formatRatio(rounded)}:1`,
      normalAa: rounded >= 4.5 ? "pass" : "fail",
      normalAaa: rounded >= 7 ? "pass" : "fail",
      largeAa: rounded >= 3 ? "pass" : "fail",
      largeAaa: rounded >= 4.5 ? "pass" : "fail",
      foreground: foreground.color,
      background: background.color,
    },
  };
}

function channel(value: number): number {
  const srgb = value / 255;
  return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
}

function formatRatio(value: number): string {
  if (Number.isInteger(value)) {
    return String(value);
  }
  return value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}
