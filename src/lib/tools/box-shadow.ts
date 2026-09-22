import { parseCssColor } from "./color.ts";

export type BoxShadowOptions = {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
};

export const BOX_SHADOW_DEFAULT: BoxShadowOptions = {
  offsetX: 0,
  offsetY: 8,
  blur: 24,
  spread: 0,
  color: "#0f2744",
  opacity: 0.2,
  inset: false,
};

export function buildBoxShadowCss(
  options: BoxShadowOptions,
): { ok: true; css: string; value: string } | { ok: false; error: string } {
  const color = parseCssColor(options.color);
  if (!color.ok) {
    return { ok: false, error: color.error };
  }

  const alpha = Math.max(0, Math.min(1, options.opacity));
  const rgba = `rgba(${color.color.rgb.r}, ${color.color.rgb.g}, ${color.color.rgb.b}, ${formatAlpha(alpha)})`;
  const inset = options.inset ? "inset " : "";
  const value = `${inset}${px(options.offsetX)} ${px(options.offsetY)} ${px(options.blur)} ${px(options.spread)} ${rgba}`;
  return { ok: true, css: `box-shadow: ${value};`, value };
}

function px(value: number): string {
  const rounded = Math.round(value);
  return rounded === 0 ? "0" : `${rounded}px`;
}

function formatAlpha(value: number): string {
  if (value === 0 || value === 1) {
    return String(value);
  }
  return value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}
