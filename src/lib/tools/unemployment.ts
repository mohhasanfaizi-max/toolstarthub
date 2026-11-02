import { CA_LOW_TABLE, SUPPORTED_STATES, type StateRule } from "./unemployment-states.ts";

export type UnemploymentResult =
  | {
      ok: true;
      state: StateRule;
      eligible: boolean;
      reasons: string[];
      weekly: number;
      maxTotal: number;
      maxWeeks: number;
      highQuarter: number;
      totalWages: number;
      steps: string[];
    }
  | { ok: false; error: string };

export function getStateRule(code: string): StateRule | undefined {
  return SUPPORTED_STATES.find((s) => s.code === code);
}

function money(n: number): string {
  return `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

/** Estimate a regular weekly benefit from four base-period quarter wages. */
export function estimateUnemployment(code: string, quarterRaw: string[]): UnemploymentResult {
  const state = getStateRule(code);
  if (!state) return { ok: false, error: "This state is not supported yet. Use the state agency's own estimator." };
  if (quarterRaw.length !== 4) return { ok: false, error: "Enter wages for all four base-period quarters (use 0 for none)." };
  const q: number[] = [];
  for (const [i, raw] of quarterRaw.entries()) {
    const t = raw.trim().replace(/[$,]/g, "");
    const v = t === "" ? 0 : Number(t);
    if (!Number.isFinite(v) || v < 0) return { ok: false, error: `Quarter ${i + 1} wages must be 0 or a positive amount.` };
    q.push(v);
  }
  const totalWages = q.reduce((a, b) => a + b, 0);
  const sorted = [...q].sort((a, b) => b - a);
  const highQuarter = sorted[0];
  const quartersWithWages = q.filter((v) => v > 0).length;
  const reasons: string[] = [];
  const steps: string[] = [`High quarter: ${money(highQuarter)}. Base-period total: ${money(totalWages)}.`];
  let weekly = 0;
  let maxTotal = 0;
  let eligible = true;

  switch (state.code) {
    case "CA": {
      const qualifies = highQuarter >= 1300 || (highQuarter >= 900 && totalWages >= 1.25 * highQuarter);
      if (!qualifies) {
        eligible = false;
        reasons.push("California needs $1,300 in the high quarter, or $900 in the high quarter and total wages of at least 1.25 × that quarter.");
        break;
      }
      if (highQuarter < 1833) {
        weekly = [...CA_LOW_TABLE].reverse().find(([min]) => highQuarter >= min)?.[1] ?? 40;
        steps.push(`EDD benefit table row for ${money(highQuarter)} → ${money(weekly)}.`);
      } else {
        weekly = Math.ceil(highQuarter / 26);
        steps.push(`${money(highQuarter)} ÷ 26, rounded up = ${money(weekly)}.`);
      }
      weekly = clamp(weekly, state.minWeekly, state.maxWeekly, steps);
      maxTotal = Math.min(26 * weekly, totalWages / 2);
      steps.push(`Claim total = lesser of 26 × ${money(weekly)} or half of ${money(totalWages)} = ${money(maxTotal)}.`);
      break;
    }
    case "NY": {
      if (quartersWithWages < 2) reasons.push("New York needs wages in at least two base-period quarters.");
      if (highQuarter < 3500) reasons.push("New York needs at least $3,500 in one quarter for claims filed in 2026.");
      if (highQuarter >= 19118) {
        if (totalWages - highQuarter < 9559) reasons.push("With a high quarter of $19,118 or more, New York needs at least $9,559 in the other three quarters.");
      } else if (totalWages < 1.5 * highQuarter) {
        reasons.push("New York needs total base-period wages of at least 1.5 × the high quarter.");
      }
      if (reasons.length) {
        eligible = false;
        break;
      }
      let raw: number;
      if (quartersWithWages < 4 && highQuarter > 4000) {
        const avg = (sorted[0] + sorted[1]) / 2;
        raw = Math.max(avg / 26, 143);
        steps.push(`Wages in ${quartersWithWages} quarters and high quarter over $4,000: average of two highest quarters ${money(avg)} ÷ 26 (at least $143).`);
      } else if (highQuarter > 3575) {
        raw = Math.max(highQuarter / 26, 143);
        steps.push(`High quarter over $3,575: ${money(highQuarter)} ÷ 26 (at least $143).`);
      } else {
        raw = highQuarter / 25;
        steps.push(`High quarter $3,575 or less: ${money(highQuarter)} ÷ 25.`);
      }
      weekly = clamp(Math.floor(raw), state.minWeekly, state.maxWeekly, steps);
      maxTotal = 26 * weekly;
      steps.push(`Up to 26 weeks × ${money(weekly)} = ${money(maxTotal)}.`);
      break;
    }
    case "TX": {
      weekly = Math.round(highQuarter / 25);
      steps.push(`${money(highQuarter)} ÷ 25, rounded to the nearest dollar = ${money(weekly)}.`);
      if (highQuarter <= 0) {
        eligible = false;
        reasons.push("No base-period wages were entered.");
        weekly = 0;
        break;
      }
      weekly = clamp(weekly, state.minWeekly, state.maxWeekly, steps);
      maxTotal = Math.min(26 * weekly, Math.round(totalWages * 0.27));
      steps.push(`Claim total = lesser of 26 × ${money(weekly)} or 27% of ${money(totalWages)} = ${money(maxTotal)}.`);
      break;
    }
    case "FL": {
      if (quartersWithWages < 2) reasons.push("Florida needs wages in at least two base-period quarters.");
      if (totalWages < 3400) reasons.push("Florida needs at least $3,400 in base-period wages.");
      if (totalWages < 1.5 * highQuarter) reasons.push("Florida needs total base-period wages of at least 1.5 × the high quarter.");
      if (reasons.length) {
        eligible = false;
        break;
      }
      weekly = Math.floor(highQuarter / 26);
      steps.push(`${money(highQuarter)} ÷ 26, rounded down = ${money(weekly)}.`);
      weekly = clamp(weekly, state.minWeekly, state.maxWeekly, steps);
      maxTotal = Math.floor(Math.min(totalWages * 0.25, 3300));
      steps.push(`Claim total = lesser of 25% of ${money(totalWages)} or $3,300 = ${money(maxTotal)}.`);
      break;
    }
  }
  if (!eligible) {
    weekly = 0;
    maxTotal = 0;
  }
  const maxWeeks = weekly > 0 ? Math.min(state.maxWeeks, Math.floor(maxTotal / weekly)) : 0;
  return { ok: true, state, eligible, reasons, weekly, maxTotal: round2(maxTotal), maxWeeks, highQuarter, totalWages, steps };
}

function clamp(value: number, min: number, max: number, steps: string[]): number {
  if (value > max) {
    steps.push(`Capped at the state maximum of $${max}.`);
    return max;
  }
  if (value < min) {
    steps.push(`Raised to the state minimum of $${min}.`);
    return min;
  }
  return value;
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}
