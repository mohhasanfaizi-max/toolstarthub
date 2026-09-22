import { parseCssColor } from "./color.ts";
import {
  BOX_SHADOW_DEFAULT,
  type BoxShadowOptions,
} from "./box-shadow.ts";
import {
  createStop,
  defaultGradient,
  type GradientOptions,
  type GradientType,
} from "./gradient.ts";

const HEX_PARAM = /^#?[0-9a-fA-F]{3,8}$/;
const MAX_GRADIENT_STOPS = 8;
export const MAX_SHARE_QUERY_LENGTH = 2048;

export function boundedSearchParams(params: URLSearchParams): URLSearchParams {
  if (params.toString().length <= MAX_SHARE_QUERY_LENGTH) {
    return params;
  }
  return new URLSearchParams();
}

function readParam(params: URLSearchParams, key: string): string | null {
  const value = params.get(key);
  if (value === null) {
    return null;
  }
  return value.length > 128 ? value.slice(0, 128).trim() : value.trim();
}

export function parseHexColorParam(value: string | null): string | undefined {
  if (!value || !HEX_PARAM.test(value.replace("%23", "#"))) {
    const parsed = value ? parseCssColor(value) : null;
    return parsed?.ok ? parsed.color.hex : undefined;
  }

  const parsed = parseCssColor(value.startsWith("#") ? value : `#${value}`);
  return parsed.ok ? parsed.color.hex : undefined;
}

function clampInt(raw: string | null, min: number, max: number): number | undefined {
  if (raw === null || raw === "") {
    return undefined;
  }
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    return undefined;
  }
  return Math.min(max, Math.max(min, Math.round(value)));
}

function clampFloat(raw: string | null, min: number, max: number): number | undefined {
  if (raw === null || raw === "") {
    return undefined;
  }
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    return undefined;
  }
  return Math.min(max, Math.max(min, value));
}

export type ContrastUrlState = {
  foreground: string;
  background: string;
};

export function parseContrastParams(
  params: URLSearchParams,
): Partial<ContrastUrlState> {
  params = boundedSearchParams(params);
  const foreground = parseHexColorParam(readParam(params, "fg"));
  const background = parseHexColorParam(readParam(params, "bg"));
  return {
    ...(foreground ? { foreground } : {}),
    ...(background ? { background } : {}),
  };
}

export function serializeContrastParams(state: ContrastUrlState): URLSearchParams {
  const params = new URLSearchParams();
  params.set("fg", state.foreground);
  params.set("bg", state.background);
  return params;
}

export function parseGradientParams(params: URLSearchParams): Partial<GradientOptions> {
  params = boundedSearchParams(params);
  const next: Partial<GradientOptions> = {};
  const type = readParam(params, "type");
  if (type === "linear" || type === "radial") {
    next.type = type;
  }

  const angle = clampInt(readParam(params, "angle"), 0, 360);
  if (angle !== undefined) {
    next.angle = angle === 360 ? 0 : angle;
  }

  const stopsRaw = readParam(params, "stops");
  if (stopsRaw) {
    const stops = stopsRaw
      .split(",")
      .slice(0, MAX_GRADIENT_STOPS)
      .flatMap((part, index) => {
        const [colorRaw, positionRaw] = part.split("@");
        const color = parseHexColorParam(colorRaw ?? null);
        const position = clampInt(positionRaw ?? "0", 0, 100);
        if (!color || position === undefined) {
          return [];
        }
        return [createStop(color, position, `url-${index}`)];
      });

    if (stops.length >= 2) {
      next.stops = stops;
    }
  }

  return next;
}

export function serializeGradientParams(options: GradientOptions): URLSearchParams {
  const params = new URLSearchParams();
  params.set("type", options.type);
  params.set("angle", String(options.angle));
  params.set(
    "stops",
    options.stops
      .map((stop) => `${stop.color}@${Math.round(stop.position)}`)
      .join(","),
  );
  return params;
}

export function parseBoxShadowParams(
  params: URLSearchParams,
): Partial<BoxShadowOptions> {
  params = boundedSearchParams(params);
  const next: Partial<BoxShadowOptions> = {};
  const offsetX = clampInt(readParam(params, "x"), -50, 50);
  const offsetY = clampInt(readParam(params, "y"), -50, 50);
  const blur = clampInt(readParam(params, "blur"), 0, 80);
  const spread = clampInt(readParam(params, "spread"), -40, 40);
  const opacity = clampFloat(readParam(params, "opacity"), 0, 1);
  const color = parseHexColorParam(readParam(params, "color"));
  const inset = readParam(params, "inset");

  if (offsetX !== undefined) next.offsetX = offsetX;
  if (offsetY !== undefined) next.offsetY = offsetY;
  if (blur !== undefined) next.blur = blur;
  if (spread !== undefined) next.spread = spread;
  if (opacity !== undefined) next.opacity = opacity;
  if (color) next.color = color;
  if (inset === "1" || inset === "true") next.inset = true;
  if (inset === "0" || inset === "false") next.inset = false;

  return next;
}

export function serializeBoxShadowParams(
  options: BoxShadowOptions,
): URLSearchParams {
  const params = new URLSearchParams();
  params.set("x", String(options.offsetX));
  params.set("y", String(options.offsetY));
  params.set("blur", String(options.blur));
  params.set("spread", String(options.spread));
  params.set("color", options.color);
  params.set("opacity", String(options.opacity));
  params.set("inset", options.inset ? "1" : "0");
  return params;
}

export function replaceSearchParams(params: URLSearchParams) {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  url.search = params.toString();
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

export function contrastDefaults(): ContrastUrlState {
  return { foreground: "#111111", background: "#ffffff" };
}

export function gradientFromParams(params: URLSearchParams): GradientOptions {
  const parsed = parseGradientParams(params);
  const fallback = defaultGradient();
  return {
    type: (parsed.type as GradientType | undefined) ?? fallback.type,
    angle: parsed.angle ?? fallback.angle,
    stops: parsed.stops ?? fallback.stops,
  };
}

export function boxShadowFromParams(params: URLSearchParams): BoxShadowOptions {
  return { ...BOX_SHADOW_DEFAULT, ...parseBoxShadowParams(params) };
}

export const SENSITIVE_PARAM_KEYS = [
  "password",
  "pass",
  "secret",
  "token",
  "qr",
  "text",
  "content",
  "file",
  "payload",
] as const;
