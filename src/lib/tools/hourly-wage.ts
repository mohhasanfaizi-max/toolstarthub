import { parseNumber, roundTo } from "./numbers.ts";

export type WageMode = "hourly" | "salary";

export type HourlyWageResult =
  | {
      ok: true;
      mode: WageMode;
      hourlyRate: number;
      weeklyPay: number;
      monthlyPay: number;
      annualPay: number;
      overtimePay: number;
      regularAnnual: number;
    }
  | { ok: false; error: string };

const MAX_MONEY = 1_000_000_000_000;

export function calculateHourlyWage(input: {
  mode: WageMode;
  hourlyRaw: string;
  salaryRaw: string;
  hoursRaw: string;
  weeksRaw: string;
  overtimeHoursRaw: string;
  multiplierRaw: string;
}): HourlyWageResult {
  const hours = parseNumber(input.hoursRaw, { field: "hours per week", allowNegative: false });
  if (!hours.ok) return hours;
  const weeks = parseNumber(input.weeksRaw, { field: "weeks per year", allowNegative: false });
  if (!weeks.ok) return weeks;
  const overtimeHours = parseNumber(input.overtimeHoursRaw === "" ? "0" : input.overtimeHoursRaw, {
    field: "overtime hours",
    allowNegative: false,
  });
  if (!overtimeHours.ok) return overtimeHours;
  const multiplier = parseNumber(input.multiplierRaw === "" ? "1" : input.multiplierRaw, {
    field: "overtime multiplier",
    allowNegative: false,
  });
  if (!multiplier.ok) return multiplier;

  if (hours.value <= 0) return { ok: false, error: "Enter hours per week greater than 0." };
  if (hours.value > 168) return { ok: false, error: "Enter hours per week of 168 or less." };
  if (weeks.value <= 0) return { ok: false, error: "Enter weeks per year greater than 0." };
  if (weeks.value > 52) return { ok: false, error: "Enter weeks per year of 52 or less." };
  if (overtimeHours.value > 168) return { ok: false, error: "Enter overtime hours of 168 or less." };
  if (multiplier.value < 1) return { ok: false, error: "Enter an overtime multiplier of 1 or greater." };
  if (multiplier.value > 10) return { ok: false, error: "Enter an overtime multiplier of 10 or less." };

  const schedule = hours.value * weeks.value;
  let hourly = 0;
  let regularAnnual = 0;

  if (input.mode === "salary") {
    const salary = parseNumber(input.salaryRaw, { field: "annual salary", allowNegative: false });
    if (!salary.ok) return salary;
    if (salary.value > MAX_MONEY) return { ok: false, error: "Enter a smaller annual salary." };
    regularAnnual = salary.value;
    hourly = salary.value / schedule;
  } else {
    const rate = parseNumber(input.hourlyRaw, { field: "hourly rate", allowNegative: false });
    if (!rate.ok) return rate;
    if (rate.value > MAX_MONEY) return { ok: false, error: "Enter a smaller hourly rate." };
    hourly = rate.value;
    regularAnnual = hourly * schedule;
  }

  const overtimeAnnual = overtimeHours.value * hourly * multiplier.value * weeks.value;
  const annual = regularAnnual + overtimeAnnual;
  if (!Number.isFinite(hourly) || !Number.isFinite(annual)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }

  return {
    ok: true,
    mode: input.mode,
    hourlyRate: roundTo(hourly, 2),
    weeklyPay: roundTo(annual / weeks.value, 2),
    monthlyPay: roundTo(annual / 12, 2),
    annualPay: roundTo(annual, 2),
    overtimePay: roundTo(overtimeAnnual, 2),
    regularAnnual: roundTo(regularAnnual, 2),
  };
}
