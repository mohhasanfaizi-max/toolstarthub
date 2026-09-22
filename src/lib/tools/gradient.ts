import { parseCssColor } from "./color.ts";

export type GradientType = "linear" | "radial";

export type GradientStop = {
  id: string;
  color: string;
  position: number;
};

export type GradientOptions = {
  type: GradientType;
  angle: number;
  stops: GradientStop[];
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

export function buildGradientCss(
  options: GradientOptions,
): { ok: true; css: string; preview: string } | { ok: false; error: string } {
  if (options.stops.length < 2) {
    return { ok: false, error: "A gradient needs at least two color stops." };
  }

  const stops: string[] = [];
  for (const stop of [...options.stops].sort((a, b) => a.position - b.position)) {
    const color = parseCssColor(stop.color);
    if (!color.ok) {
      return { ok: false, error: color.error };
    }
    const position = Math.max(0, Math.min(100, Math.round(stop.position)));
    stops.push(`${color.color.hex} ${position}%`);
  }

  const preview = stops.join(", ");
  const css =
    options.type === "radial"
      ? `background: radial-gradient(circle, ${preview});`
      : `background: linear-gradient(${options.angle}deg, ${preview});`;

  return { ok: true, css, preview };
}
