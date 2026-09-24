import { compareParts, parseISODate, toISODate, type DateParts } from "./age.ts";

export type BusinessDaysResult =
  | {
      ok: true;
      reversed: boolean;
      businessDays: number;
      weekendDays: number;
      calendarDays: number;
      excludedWeekdays: string[];
    }
  | { ok: false; error: string };

const MAX_DAYS = 366 * 100;

function addDays(parts: DateParts, days: number): DateParts {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
  date.setUTCDate(date.getUTCDate() + days);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function weekday(parts: DateParts): boolean {
  const day = new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay();
  return day !== 0 && day !== 6;
}

export function calculateBusinessDays(input: {
  startRaw: string;
  endRaw: string;
  includeEnd: boolean;
  excludedRaw: string;
}): BusinessDaysResult {
  const start = parseISODate(input.startRaw);
  if (!start) return { ok: false, error: "Enter a valid start date as YYYY-MM-DD." };
  const end = parseISODate(input.endRaw);
  if (!end) return { ok: false, error: "Enter a valid end date as YYYY-MM-DD." };

  let from = start;
  let to = end;
  let reversed = false;
  if (compareParts(to, from) < 0) {
    from = end;
    to = start;
    reversed = true;
  }

  const excluded = new Set<string>();
  const lines = input.excludedRaw
    .split(/[\n,]/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  for (const line of lines) {
    const parsed = parseISODate(line);
    if (!parsed) return { ok: false, error: `Enter excluded dates as YYYY-MM-DD. "${line}" is not a valid date.` };
    excluded.add(toISODate(parsed));
  }

  const endExclusive = input.includeEnd ? addDays(to, 1) : to;
  let businessDays = 0;
  let weekendDays = 0;
  const excludedWeekdays: string[] = [];
  let cursor = from;
  let steps = 0;
  while (compareParts(cursor, endExclusive) < 0) {
    steps += 1;
    if (steps > MAX_DAYS) return { ok: false, error: "Enter a range of 100 years or less." };
    const iso = toISODate(cursor);
    if (weekday(cursor)) {
      if (excluded.has(iso)) excludedWeekdays.push(iso);
      else businessDays += 1;
    } else {
      weekendDays += 1;
    }
    cursor = addDays(cursor, 1);
  }

  return {
    ok: true,
    reversed,
    businessDays,
    weekendDays,
    calendarDays: businessDays + weekendDays + excludedWeekdays.length,
    excludedWeekdays,
  };
}
