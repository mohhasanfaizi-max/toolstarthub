import {
  compareParts,
  daysInMonth,
  parseISODate,
  totalDaysBetween,
  type DateParts,
} from "./age.ts";
import { roundTo } from "./numbers.ts";

export type DateDiffResult =
  | {
      ok: true;
      reversed: boolean;
      same: boolean;
      totalDays: number;
      weeks: number;
      extraDays: number;
      years: number;
      months: number;
      days: number;
      averageMonths: number;
    }
  | { ok: false; error: string };

const AVERAGE_MONTH_DAYS = 30.436875;

function calendarSpan(from: DateParts, to: DateParts) {
  let years = to.year - from.year;
  let months = to.month - from.month;
  let days = to.day - from.day;

  if (days < 0) {
    months -= 1;
    const previousMonth = to.month === 1 ? 12 : to.month - 1;
    const previousMonthYear = to.month === 1 ? to.year - 1 : to.year;
    days += daysInMonth(previousMonthYear, previousMonth);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

export function calculateDateDifference(startRaw: string, endRaw: string): DateDiffResult {
  if (startRaw.trim() === "") {
    return { ok: false, error: "Enter a start date." };
  }
  if (endRaw.trim() === "") {
    return { ok: false, error: "Enter an end date." };
  }

  const start = parseISODate(startRaw);
  if (!start) {
    return { ok: false, error: "Enter a valid start date." };
  }
  const end = parseISODate(endRaw);
  if (!end) {
    return { ok: false, error: "Enter a valid end date." };
  }

  const order = compareParts(start, end);
  const reversed = order > 0;
  const earlier = reversed ? end : start;
  const later = reversed ? start : end;
  const totalDays = totalDaysBetween(earlier, later);
  const span = calendarSpan(earlier, later);

  return {
    ok: true,
    reversed,
    same: totalDays === 0,
    totalDays,
    weeks: Math.floor(totalDays / 7),
    extraDays: totalDays % 7,
    years: span.years,
    months: span.months,
    days: span.days,
    averageMonths: roundTo(totalDays / AVERAGE_MONTH_DAYS, 1),
  };
}
