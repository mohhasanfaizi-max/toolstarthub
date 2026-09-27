import { parseNumber } from "./numbers.ts";

export type TimeOperation = "add" | "subtract";

export type TimeCalculation =
  | {
      ok: true;
      negative: boolean;
      hours: number;
      minutes: number;
      totalMinutes: number;
    }
  | { ok: false; error: string };

const MAX_PART = 100_000;

function wholePart(raw: string, field: string): { ok: true; value: number } | { ok: false; error: string } {
  const parsed = parseNumber(raw, { field, allowNegative: false });
  if (!parsed.ok) return parsed;
  if (!Number.isInteger(parsed.value)) {
    return { ok: false, error: `Enter a whole number for ${field}.` };
  }
  if (parsed.value > MAX_PART) {
    return { ok: false, error: `Enter a smaller ${field}.` };
  }
  return parsed;
}

export function calculateTime(input: {
  operation: TimeOperation;
  startHoursRaw: string;
  startMinutesRaw: string;
  changeHoursRaw: string;
  changeMinutesRaw: string;
}): TimeCalculation {
  const startHours = wholePart(input.startHoursRaw, "starting hours");
  if (!startHours.ok) return startHours;
  const startMinutes = wholePart(input.startMinutesRaw, "starting minutes");
  if (!startMinutes.ok) return startMinutes;
  const changeHours = wholePart(input.changeHoursRaw, "hours to add or subtract");
  if (!changeHours.ok) return changeHours;
  const changeMinutes = wholePart(input.changeMinutesRaw, "minutes to add or subtract");
  if (!changeMinutes.ok) return changeMinutes;

  const start = startHours.value * 60 + startMinutes.value;
  const change = changeHours.value * 60 + changeMinutes.value;
  const totalMinutes = input.operation === "subtract" ? start - change : start + change;
  const negative = totalMinutes < 0;
  const absolute = Math.abs(totalMinutes);

  return {
    ok: true,
    negative,
    hours: Math.floor(absolute / 60),
    minutes: absolute % 60,
    totalMinutes,
  };
}
