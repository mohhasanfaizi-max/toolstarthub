export type ColorResult = {
  hex: string;
  hexShort: string;
  rgb: { r: number; g: number; b: number; a: number };
  rgbCss: string;
  rgbaCss: string;
  hsl: { h: number; s: number; l: number; a: number };
  hslCss: string;
  hslaCss: string;
  hasAlpha: boolean;
};

export type ColorParseResult =
  | { ok: true; color: ColorResult }
  | { ok: false; error: string };

export function parseCssColor(raw: string): ColorParseResult {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter a hex color such as #336699." };
  }

  const hex = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed;
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex)) {
    return {
      ok: false,
      error: "Use 3-digit, 6-digit or 8-digit hex, with or without #.",
    };
  }

  const expanded = expandHex(hex.toLowerCase());
  const r = Number.parseInt(expanded.slice(0, 2), 16);
  const g = Number.parseInt(expanded.slice(2, 4), 16);
  const b = Number.parseInt(expanded.slice(4, 6), 16);
  const a = expanded.length === 8 ? Number.parseInt(expanded.slice(6, 8), 16) / 255 : 1;
  const hasAlpha = hex.length === 8;
  const hsl = rgbToHsl(r, g, b);

  return {
    ok: true,
    color: {
      hex: `#${expanded.slice(0, 6)}`,
      hexShort: hasAlpha ? `#${expanded}` : compactHex(`#${expanded.slice(0, 6)}`),
      rgb: { r, g, b, a },
      rgbCss: `rgb(${r}, ${g}, ${b})`,
      rgbaCss: `rgba(${r}, ${g}, ${b}, ${formatAlpha(a)})`,
      hsl: { ...hsl, a },
      hslCss: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      hslaCss: `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${formatAlpha(a)})`,
      hasAlpha,
    },
  };
}

export function colorFromRgb(r: number, g: number, b: number): ColorResult {
  const parsed = parseCssColor(
    `#${toHexByte(r)}${toHexByte(g)}${toHexByte(b)}`,
  );
  if (!parsed.ok) {
    throw new Error("Invalid RGB");
  }
  return parsed.color;
}

function expandHex(hex: string): string {
  if (hex.length === 3) {
    return hex
      .split("")
      .map((part) => part + part)
      .join("");
  }
  return hex;
}

function compactHex(hex: string): string {
  const value = hex.slice(1);
  if (
    value[0] === value[1] &&
    value[2] === value[3] &&
    value[4] === value[5]
  ) {
    return `#${value[0]}${value[2]}${value[4]}`;
  }
  return hex;
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const nr = r / 255;
  const ng = g / 255;
  const nb = b / 255;
  const max = Math.max(nr, ng, nb);
  const min = Math.min(nr, ng, nb);
  const l = (max + min) / 2;
  const delta = max - min;

  if (delta === 0) {
    return { h: 0, s: 0, l: Math.round(l * 100) };
  }

  const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let h = 0;
  if (max === nr) {
    h = ((ng - nb) / delta + (ng < nb ? 6 : 0)) / 6;
  } else if (max === ng) {
    h = ((nb - nr) / delta + 2) / 6;
  } else {
    h = ((nr - ng) / delta + 4) / 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function toHexByte(value: number): string {
  return Math.max(0, Math.min(255, Math.round(value)))
    .toString(16)
    .padStart(2, "0");
}

function formatAlpha(value: number): string {
  if (value === 1 || value === 0) {
    return String(value);
  }
  return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
