import { parseNumber, roundTo } from "./numbers.ts";

export type SavingsFrequency = "monthly" | "biweekly" | "weekly" | "annual";

export type SavingsScenario = {
  rate: number;
  contribution: number;
  interest: number;
};

export type SavingsYear = {
  year: number;
  balance: number;
  contributed: number;
};

export type SavingsGoalResult =
  | {
      ok: true;
      contribution: number;
      totalContributions: number;
      interest: number;
      target: number;
      current: number;
      periods: number;
      frequency: SavingsFrequency;
      years: SavingsYear[];
      scenarios: SavingsScenario[];
    }
  | { ok: false; error: string };

const PERIODS: Record<SavingsFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  monthly: 12,
  annual: 1,
};

export function calculateSavingsGoal(input: {
  targetRaw: string;
  currentRaw: string;
  rateRaw: string;
  yearsRaw: string;
  frequency: SavingsFrequency;
}): SavingsGoalResult {
  const target = parseNumber(input.targetRaw, { field: "savings goal", allowNegative: false });
  if (!target.ok) return target;
  const current = parseNumber(input.currentRaw === "" ? "0" : input.currentRaw, {
    field: "current savings",
    allowNegative: false,
  });
  if (!current.ok) return current;
  const rate = parseNumber(input.rateRaw, { field: "annual interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const years = parseNumber(input.yearsRaw, { field: "time to goal", allowNegative: false });
  if (!years.ok) return years;

  if (target.value <= 0) return { ok: false, error: "Enter a savings goal greater than 0." };
  if (current.value >= target.value) {
    return { ok: false, error: "Current savings already reach this goal. Enter a higher target or a lower starting amount." };
  }
  if (rate.value > 100) return { ok: false, error: "Enter an annual rate of 100% or less." };
  if (years.value <= 0 || years.value > 100) return { ok: false, error: "Enter a time to goal from more than 0 to 100 years." };

  const periodsPerYear = PERIODS[input.frequency];
  const periods = years.value * periodsPerYear;
  const solved = contributionFor(target.value, current.value, rate.value, periods, periodsPerYear);
  if (!solved.ok) return solved;

  const scenarios: SavingsScenario[] = [];
  for (const sample of [0, 3, 5, 7]) {
    const row = contributionFor(target.value, current.value, sample, periods, periodsPerYear);
    if (!row.ok) return row;
    scenarios.push({
      rate: sample,
      contribution: roundTo(row.contribution, 2),
      interest: roundTo(row.interest, 2),
    });
  }

  return {
    ok: true,
    contribution: roundTo(solved.contribution, 2),
    totalContributions: roundTo(solved.contribution * periods, 2),
    interest: roundTo(solved.interest, 2),
    target: roundTo(target.value, 2),
    current: roundTo(current.value, 2),
    periods,
    frequency: input.frequency,
    years: yearRows(current.value, solved.contribution, rate.value, periods, periodsPerYear),
    scenarios,
  };
}

function contributionFor(
  target: number,
  current: number,
  annualPercent: number,
  periods: number,
  periodsPerYear: number,
): { ok: true; contribution: number; interest: number } | { ok: false; error: string } {
  const rate = annualPercent / 100 / periodsPerYear;
  const growth = rate === 0 ? 1 : (1 + rate) ** periods;
  if (!Number.isFinite(growth)) return { ok: false, error: "This combination is too large to calculate." };
  const grown = current * growth;
  if (grown >= target) {
    return { ok: true, contribution: 0, interest: target - current };
  }
  const contribution = rate === 0
    ? (target - current) / periods
    : ((target - grown) * rate) / (growth - 1);
  if (!Number.isFinite(contribution) || contribution < 0) {
    return { ok: false, error: "This combination is too large to calculate." };
  }
  const interest = target - current - contribution * periods;
  return { ok: true, contribution, interest };
}

function yearRows(
  current: number,
  contribution: number,
  annualPercent: number,
  periods: number,
  periodsPerYear: number,
): SavingsYear[] {
  const rate = annualPercent / 100 / periodsPerYear;
  let balance = current;
  let contributed = 0;
  const rows: SavingsYear[] = [];
  let yearContributed = 0;
  for (let period = 1; period <= periods; period += 1) {
    balance = rate === 0 ? balance + contribution : balance * (1 + rate) + contribution;
    contributed += contribution;
    yearContributed += contribution;
    if (period % periodsPerYear === 0 || period === periods) {
      rows.push({
        year: Math.ceil(period / periodsPerYear),
        balance: roundTo(balance, 2),
        contributed: roundTo(yearContributed, 2),
      });
      yearContributed = 0;
    }
  }
  if (!Number.isFinite(balance) || !Number.isFinite(contributed)) return [];
  return rows;
}
