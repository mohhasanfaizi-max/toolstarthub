import { parseNumber, roundTo } from "./numbers.ts";

export const COMPOUND_FREQUENCIES = [
  "annually",
  "semiannually",
  "quarterly",
  "monthly",
  "daily",
] as const;

export type CompoundFrequency = (typeof COMPOUND_FREQUENCIES)[number];

export type CompoundYear = {
  year: number;
  balance: number;
  contributed: number;
  interest: number;
};

export type CompoundResult =
  | {
      ok: true;
      finalBalance: number;
      principal: number;
      totalContributions: number;
      interestEarned: number;
      growthPercent: number;
      simpleFinal: number;
      simpleInterest: number;
      years: CompoundYear[];
    }
  | { ok: false; error: string };

const PERIODS: Record<CompoundFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

const MAX_PRINCIPAL = 1_000_000_000_000;
const MAX_CONTRIBUTION = 1_000_000_000;
const MAX_RATE = 100;
const MAX_YEARS = 100;

function money(value: number): number {
  return roundTo(value, 2);
}

export function calculateCompoundInterest(
  principalRaw: string,
  rateRaw: string,
  timeRaw: string,
  unit: "years" | "months",
  frequency: CompoundFrequency,
  contributionRaw: string,
): CompoundResult {
  const principal = parseNumber(principalRaw, { field: "starting amount", allowNegative: false });
  if (!principal.ok) return principal;
  const rate = parseNumber(rateRaw, { field: "annual interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const time = parseNumber(timeRaw, { field: "time period", allowNegative: false });
  if (!time.ok) return time;
  const contribution = parseNumber(contributionRaw === "" ? "0" : contributionRaw, {
    field: "monthly contribution",
    allowNegative: false,
  });
  if (!contribution.ok) return contribution;

  if (principal.value > MAX_PRINCIPAL) {
    return { ok: false, error: "Enter a smaller starting amount." };
  }
  if (contribution.value > MAX_CONTRIBUTION) {
    return { ok: false, error: "Enter a smaller monthly contribution." };
  }
  if (rate.value > MAX_RATE) {
    return { ok: false, error: "Enter an annual rate of 100% or less." };
  }
  if (!PERIODS[frequency]) {
    return { ok: false, error: "Choose a compounding frequency." };
  }

  const years = unit === "months" ? time.value / 12 : time.value;
  if (years > MAX_YEARS) {
    return { ok: false, error: "Enter a time period of 100 years or less." };
  }

  const months = Math.round(years * 12);
  const decimal = rate.value / 100;
  let balance = principal.value;
  let contributed = 0;
  const rows: CompoundYear[] = [];

  for (let month = 1; month <= months; month += 1) {
    balance = growOneMonth(balance, decimal, frequency, month);
    if (!Number.isFinite(balance)) {
      return { ok: false, error: "This combination is too large to calculate." };
    }
    if (contribution.value > 0) {
      balance += contribution.value;
      contributed += contribution.value;
    }
    if (month % 12 === 0 || month === months) {
      const interest = balance - principal.value - contributed;
      rows.push({
        year: Math.ceil(month / 12),
        balance: money(balance),
        contributed: money(contributed),
        interest: money(interest),
      });
    }
  }

  const finalBalance = money(balance);
  const totalContributions = money(contributed);
  const interestEarned = money(finalBalance - principal.value - totalContributions);
  const base = principal.value + totalContributions;
  const growthPercent = base > 0 ? money((interestEarned / base) * 100) : 0;
  const simpleInterest = money(principal.value * decimal * years);
  const simpleFinal = money(principal.value + simpleInterest + totalContributions);

  if (![finalBalance, interestEarned, simpleFinal].every(Number.isFinite)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }

  return {
    ok: true,
    finalBalance,
    principal: money(principal.value),
    totalContributions,
    interestEarned,
    growthPercent,
    simpleFinal,
    simpleInterest,
    years: rows,
  };
}

function growOneMonth(balance: number, decimal: number, frequency: CompoundFrequency, month: number): number {
  if (decimal === 0) return balance;
  if (frequency === "monthly") return balance * (1 + decimal / 12);
  if (frequency === "daily") return balance * (1 + decimal / 365) ** (365 / 12);
  if (frequency === "quarterly" && month % 3 === 0) return balance * (1 + decimal / 4);
  if (frequency === "semiannually" && month % 6 === 0) return balance * (1 + decimal / 2);
  if (frequency === "annually" && month % 12 === 0) return balance * (1 + decimal);
  return balance;
}
