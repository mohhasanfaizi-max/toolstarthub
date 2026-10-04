import { parseCssColor } from "./color.ts";

export type GradientType = "linear" | "radial" | "conic";
export type RadialShape = "circle" | "ellipse";
export type GradientMode = "box" | "text";
export type TextAlign = "left" | "center" | "right";
export type FontFamilyKey = "sans" | "serif" | "mono" | "rounded";
export type HtmlFormat = "class" | "inline";

export type GradientStop = {
  id: string;
  color: string;
  position: number;
};

export type GradientOptions = {
  type: GradientType;
  /** Linear direction, or the conic start angle ("from"). Radial has no angle in CSS. */
  angle: number;
  stops: GradientStop[];
  /** Radial only. */
  shape?: RadialShape;
  /** Center for radial and conic, in percent. */
  positionX?: number;
  positionY?: number;
};

export type TextStyleOptions = {
  text: string;
  fontSize: number;
  fontWeight: number;
  fontFamily: FontFamilyKey;
  align: TextAlign;
};

export const GRADIENT_TEXT_MAX_LENGTH = 80;
export const FONT_SIZE_MIN = 16;
export const FONT_SIZE_MAX = 160;
export const FONT_WEIGHTS = [400, 500, 600, 700, 800, 900] as const;

export const FONT_FAMILIES: Record<FontFamilyKey, { label: string; css: string }> = {
  sans: {
    label: "Sans-serif",
    css: "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
  },
  serif: { label: "Serif", css: "Georgia, 'Times New Roman', Times, serif" },
  mono: {
    label: "Monospace",
    css: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  },
  rounded: {
    label: "Rounded",
    css: "ui-rounded, 'SF Pro Rounded', 'Nunito', system-ui, sans-serif",
  },
};

export function createStop(color: string, position: number, id?: string): GradientStop {
  return {
    id: id ?? `stop-${Math.round(position)}-${color.replace("#", "")}`,
    color,
    position,
  };
}

export function defaultGradient(): GradientOptions {
  return {
    type: "linear",
    angle: 90,
    stops: [createStop("#336699", 0, "a"), createStop("#ffffff", 100, "b")],
  };
}

export function defaultTextStyle(): TextStyleOptions {
  return {
    text: "Gradient text",
    fontSize: 64,
    fontWeight: 800,
    fontFamily: "sans",
    align: "center",
  };
}

export function parseAngle(
  raw: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const value = Number(raw.trim());
  if (!Number.isFinite(value)) {
    return { ok: false, error: "Enter an angle in degrees." };
  }
  const normalized = ((Math.round(value) % 360) + 360) % 360;
  return { ok: true, value: normalized };
}

function clampPercent(value: number | undefined): number {
  if (value === undefined || !Number.isFinite(value)) {
    return 50;
  }
  return Math.max(0, Math.min(100, Math.round(value)));
}

function positionSuffix(options: GradientOptions): string {
  const x = clampPercent(options.positionX);
  const y = clampPercent(options.positionY);
  return x === 50 && y === 50 ? "" : `at ${x}% ${y}%`;
}

export type BuiltGradient =
  | {
      ok: true;
      /** The gradient function, e.g. linear-gradient(90deg, ...). */
      gradient: string;
      /** The background declaration for a box. */
      css: string;
      /** Comma-separated color stops. */
      preview: string;
      /** First color by position, used as a solid fallback. */
      fallbackColor: string;
    }
  | { ok: false; error: string };

export function buildGradientCss(options: GradientOptions): BuiltGradient {
  if (options.stops.length < 2) {
    return { ok: false, error: "A gradient needs at least two color stops." };
  }

  const stops: string[] = [];
  let fallbackColor = "";
  for (const stop of [...options.stops].sort((a, b) => a.position - b.position)) {
    const color = parseCssColor(stop.color);
    if (!color.ok) {
      return { ok: false, error: color.error };
    }
    const position = Math.max(0, Math.min(100, Math.round(stop.position)));
    if (!fallbackColor) {
      fallbackColor = color.color.hex;
    }
    stops.push(`${color.color.hex} ${position}%`);
  }

  const preview = stops.join(", ");
  const angle = ((Math.round(options.angle) % 360) + 360) % 360;
  let gradient: string;

  if (options.type === "radial") {
    const shape = options.shape === "ellipse" ? "ellipse" : "circle";
    const at = positionSuffix(options);
    gradient = `radial-gradient(${[shape, at].filter(Boolean).join(" ")}, ${preview})`;
  } else if (options.type === "conic") {
    const at = positionSuffix(options);
    gradient = `conic-gradient(${[`from ${angle}deg`, at].filter(Boolean).join(" ")}, ${preview})`;
  } else {
    gradient = `linear-gradient(${angle}deg, ${preview})`;
  }

  return { ok: true, gradient, css: `background: ${gradient};`, preview, fallbackColor };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function normalizeTextStyle(style: TextStyleOptions): TextStyleOptions {
  const fallback = defaultTextStyle();
  const text = style.text.replace(/\s+/g, " ").slice(0, GRADIENT_TEXT_MAX_LENGTH);
  return {
    text: text.trim() ? text : fallback.text,
    fontSize: Math.max(FONT_SIZE_MIN, Math.min(FONT_SIZE_MAX, Math.round(style.fontSize))),
    fontWeight: (FONT_WEIGHTS as readonly number[]).includes(style.fontWeight)
      ? style.fontWeight
      : fallback.fontWeight,
    fontFamily: style.fontFamily in FONT_FAMILIES ? style.fontFamily : fallback.fontFamily,
    align: style.align === "left" || style.align === "right" ? style.align : "center",
  };
}

const BOX_CLASS = "gradient-box";
const TEXT_CLASS = "gradient-text";

function textTypographyLines(style: TextStyleOptions): string[] {
  return [
    `font-family: ${FONT_FAMILIES[style.fontFamily].css};`,
    `font-size: ${style.fontSize}px;`,
    `font-weight: ${style.fontWeight};`,
    "line-height: 1.1;",
    `text-align: ${style.align};`,
  ];
}

function textClipLines(gradient: string): string[] {
  return [
    `background-image: ${gradient};`,
    "-webkit-background-clip: text;",
    "background-clip: text;",
    "-webkit-text-fill-color: transparent;",
    "color: transparent;",
  ];
}

function block(selector: string, lines: string[], indent = ""): string {
  return `${indent}${selector} {\n${lines.map((line) => `${indent}  ${line}`).join("\n")}\n${indent}}`;
}

/**
 * CSS for gradient text. Browsers without background-clip: text keep the
 * solid fallback color, so the text never disappears.
 */
export function buildGradientTextCss(
  built: Extract<BuiltGradient, { ok: true }>,
  rawStyle: TextStyleOptions,
): string {
  const style = normalizeTextStyle(rawStyle);
  const base = block(`.${TEXT_CLASS}`, [
    `color: ${built.fallbackColor};`,
    ...textTypographyLines(style),
  ]);
  const supports = `@supports ((-webkit-background-clip: text) or (background-clip: text)) {\n${block(
    `.${TEXT_CLASS}`,
    textClipLines(built.gradient),
    "  ",
  )}\n}`;
  return `${base}\n\n${supports}`;
}

export function buildGradientBoxCss(built: Extract<BuiltGradient, { ok: true }>): string {
  return block(`.${BOX_CLASS}`, [
    "min-height: 200px;",
    "border-radius: 16px;",
    `background-color: ${built.fallbackColor};`,
    `background-image: ${built.gradient};`,
  ]);
}

export function buildGradientHtml(
  built: Extract<BuiltGradient, { ok: true }>,
  mode: GradientMode,
  format: HtmlFormat,
  rawStyle: TextStyleOptions,
): string {
  const style = normalizeTextStyle(rawStyle);
  const text = escapeHtml(style.text);

  if (mode === "text") {
    if (format === "inline") {
      const inline = [
        `color: ${built.fallbackColor};`,
        ...textTypographyLines(style),
        ...textClipLines(built.gradient).filter((line) => line !== "color: transparent;"),
      ].join(" ");
      return `<p style="${inline}">${text}</p>`;
    }
    return `<style>\n${buildGradientTextCss(built, style)}\n</style>\n\n<p class="${TEXT_CLASS}">${text}</p>`;
  }

  if (format === "inline") {
    return `<div style="min-height: 200px; border-radius: 16px; background-color: ${built.fallbackColor}; background-image: ${built.gradient};"></div>`;
  }
  return `<style>\n${buildGradientBoxCss(built)}\n</style>\n\n<div class="${BOX_CLASS}"></div>`;
}
