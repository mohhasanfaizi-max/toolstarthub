export type DateParts = {
  year: number;
  month: number;
  day: number;
};

export type AgeResult =
  | {
      ok: true;
      years: number;
      months: number;
      days: number;
      totalDays: number;
    }
  | { ok: false; error: string };

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function parseISODate(value: string): DateParts | null {
  const match = ISO_DATE.exec(value.trim());
  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (!isValidCalendarDate(year, month, day)) {
    return null;
  }

  return { year, month, day };
}

export function isValidCalendarDate(
  year: number,
  month: number,
  day: number,
): boolean {
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function toISODate(parts: DateParts): string {
  const month = String(parts.month).padStart(2, "0");
  const day = String(parts.day).padStart(2, "0");
  return `${parts.year}-${month}-${day}`;
}

export function todayParts(now = new Date()): DateParts {
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}

export function compareParts(a: DateParts, b: DateParts): number {
  if (a.year !== b.year) {
    return a.year - b.year;
  }
  if (a.month !== b.month) {
    return a.month - b.month;
  }
  return a.day - b.day;
}

export function totalDaysBetween(from: DateParts, to: DateParts): number {
  const start = Date.UTC(from.year, from.month - 1, from.day);
  const end = Date.UTC(to.year, to.month - 1, to.day);
  return Math.round((end - start) / 86_400_000);
}

export function calculateAge(
  birthRaw: string,
  asOfRaw: string,
  today = todayParts(),
): AgeResult {
  const birth = parseISODate(birthRaw);
  if (!birth) {
    return {
      ok: false,
      error:
        birthRaw.trim() === ""
          ? "Enter a date of birth."
          : "Enter a valid date of birth.",
    };
  }

  const asOf = asOfRaw.trim() === "" ? today : parseISODate(asOfRaw);
  if (!asOf) {
    return { ok: false, error: "Enter a valid date to calculate age on." };
  }

  if (compareParts(asOf, birth) < 0) {
    return {
      ok: false,
      error: "The selected date cannot be before the date of birth.",
    };
  }

  let years = asOf.year - birth.year;
  let months = asOf.month - birth.month;
  let days = asOf.day - birth.day;

  if (days < 0) {
    months -= 1;
    const previousMonth = asOf.month === 1 ? 12 : asOf.month - 1;
    const previousMonthYear = asOf.month === 1 ? asOf.year - 1 : asOf.year;
    days += daysInMonth(previousMonthYear, previousMonth);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    ok: true,
    years,
    months,
    days,
    totalDays: totalDaysBetween(birth, asOf),
  };
}
