/**
 * Pure helpers for the CPS Test (clicks per second). No DOM access here, so
 * the same logic is covered by `npm run check:tools`.
 */

export const CPS_DURATIONS = [1, 5, 10, 15, 30, 60] as const;
export type CpsDuration = (typeof CPS_DURATIONS)[number];
export const CPS_DEFAULT_DURATION: CpsDuration = 10;

export const CPS_MODES = ["left", "right", "space"] as const;
export type CpsMode = (typeof CPS_MODES)[number];

/** Rating tiers, slowest first. `min` is inclusive, in clicks per second. */
export const CPS_TIERS = [
  { id: "turtle", min: 0, emoji: "🐢" },
  { id: "cat", min: 5, emoji: "🐈" },
  { id: "rabbit", min: 7, emoji: "🐇" },
  { id: "horse", min: 9, emoji: "🐎" },
  { id: "cheetah", min: 11, emoji: "🐆" },
  { id: "lightning", min: 14, emoji: "⚡" },
] as const;
export type CpsTierId = (typeof CPS_TIERS)[number]["id"];
export type CpsTier = (typeof CPS_TIERS)[number];

/** localStorage key for best scores, one entry per mode and duration. */
export const CPS_BEST_KEY = "tsh-cps-best";
/** Pause after the timer ends so a late click does not start a new run. */
export const CPS_COOLDOWN_MS = 900;
/** A score above this is treated as a glitch (auto clicker or key repeat). */
export const CPS_MAX_PLAUSIBLE = 60;

export function isCpsDuration(value: unknown): value is CpsDuration {
  return (CPS_DURATIONS as readonly unknown[]).includes(value);
}

export function isCpsMode(value: unknown): value is CpsMode {
  return (CPS_MODES as readonly unknown[]).includes(value);
}

/** Clicks per second rounded to two decimals. A zero or negative time gives 0. */
export function calculateCps(clicks: number, seconds: number): number {
  if (!Number.isFinite(clicks) || !Number.isFinite(seconds) || clicks <= 0 || seconds <= 0) {
    return 0;
  }
  return Math.round((clicks / seconds) * 100) / 100;
}

/**
 * Live CPS while the timer runs. The first quarter second is padded so one
 * quick click does not show a huge number.
 */
export function liveCps(clicks: number, elapsedMs: number): number {
  return calculateCps(clicks, Math.max(elapsedMs, 250) / 1000);
}

export function getCpsTier(cps: number): CpsTier {
  let tier: CpsTier = CPS_TIERS[0];
  for (const item of CPS_TIERS) {
    if (cps >= item.min) {
      tier = item;
    }
  }
  return tier;
}

/** Upper bound (exclusive) of a tier, or undefined for the fastest tier. */
export function getCpsTierMax(id: CpsTierId): number | undefined {
  const index = CPS_TIERS.findIndex((tier) => tier.id === id);
  return CPS_TIERS[index + 1]?.min;
}

export type CpsBestEntry = { cps: number; clicks: number };
export type CpsBestScores = Record<string, CpsBestEntry>;

export function bestKey(mode: CpsMode, duration: CpsDuration): string {
  return `${mode}:${duration}`;
}

/** Keeps only well-formed entries for known modes and durations. */
export function sanitizeBestScores(value: unknown): CpsBestScores {
  const result: CpsBestScores = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return result;
  }
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    const [mode, rawDuration] = key.split(":");
    const duration = Number(rawDuration);
    if (!isCpsMode(mode) || !isCpsDuration(duration)) continue;
    if (!entry || typeof entry !== "object") continue;
    const { cps, clicks } = entry as Record<string, unknown>;
    if (
      typeof cps !== "number" ||
      typeof clicks !== "number" ||
      !Number.isFinite(cps) ||
      !Number.isInteger(clicks) ||
      cps <= 0 ||
      cps > CPS_MAX_PLAUSIBLE ||
      clicks <= 0
    ) {
      continue;
    }
    result[bestKey(mode, duration)] = { cps, clicks };
  }
  return result;
}

/** Returns updated scores and whether this run beat the stored best. */
export function recordBestScore(
  scores: CpsBestScores,
  mode: CpsMode,
  duration: CpsDuration,
  clicks: number,
): { scores: CpsBestScores; isNewBest: boolean } {
  const cps = calculateCps(clicks, duration);
  const key = bestKey(mode, duration);
  const previous = scores[key];
  if (cps <= 0 || cps > CPS_MAX_PLAUSIBLE || (previous && previous.cps >= cps)) {
    return { scores, isNewBest: false };
  }
  return { scores: { ...scores, [key]: { cps, clicks } }, isNewBest: true };
}

/**
 * Whether a pointer press counts in the chosen mode. Touch and pen taps count
 * as a primary click, so a phone works in the left-click mode.
 */
export function pointerCounts(mode: CpsMode, button: number): boolean {
  if (mode === "left") return button === 0;
  if (mode === "right") return button === 2;
  return false;
}

/** Whether a key press counts. Held keys (auto-repeat) never count. */
export function keyCounts(mode: CpsMode, key: string, repeat: boolean): boolean {
  return mode === "space" && !repeat && (key === " " || key === "Spacebar");
}
