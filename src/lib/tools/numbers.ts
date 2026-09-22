export type ParseNumberResult =
  | { ok: true; value: number }
  | { ok: false; error: string };

export function parseNumber(
  raw: string,
  options?: { allowNegative?: boolean; field?: string },
): ParseNumberResult {
  const field = options?.field ?? "value";
  const trimmed = raw.trim();

  if (trimmed === "") {
    return { ok: false, error: `Enter a ${field}.` };
  }

  const value = Number(trimmed);

  if (!Number.isFinite(value)) {
    return { ok: false, error: `Enter a valid ${field}.` };
  }

  if (options?.allowNegative === false && value < 0) {
    return { ok: false, error: `Enter a ${field} that is 0 or greater.` };
  }

  return { ok: true, value };
}

export function formatNumber(
  value: number,
  maximumFractionDigits = 6,
): string {
  if (!Number.isFinite(value)) {
    return "—";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
}

export function roundTo(value: number, digits = 10): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
