import { parseNumber, roundTo } from "./numbers.ts";

export type AmortizationYear = {
  year: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
};

export type LoanResult =
  | {
      ok: true;
      payment: number;
      totalPaid: number;
      totalInterest: number;
      principal: number;
      fee: number;
      totalCost: number;
      months: number;
      yearly: AmortizationYear[];
      monthly: AmortizationYear[];
    }
  | { ok: false; error: string };

const MAX_PRINCIPAL = 1_000_000_000_000;
const MAX_RATE = 100;
const MAX_MONTHS = 600;

export function monthlyInstallment(principal: number, annualPercent: number, months: number): number {
  if (months <= 0) return Number.NaN;
  if (annualPercent === 0) return principal / months;
  const monthly = annualPercent / 100 / 12;
  const factor = (1 + monthly) ** months;
  if (!Number.isFinite(factor)) return Number.NaN;
  return (principal * (monthly * factor)) / (factor - 1);
}

export function calculateLoan(
  amountRaw: string,
  rateRaw: string,
  termRaw: string,
  unit: "years" | "months",
  feeRaw: string,
): LoanResult {
  const amount = parseNumber(amountRaw, { field: "loan amount", allowNegative: false });
  if (!amount.ok) return amount;
  const rate = parseNumber(rateRaw, { field: "annual interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const term = parseNumber(termRaw, { field: "loan term", allowNegative: false });
  if (!term.ok) return term;
  const fee = parseNumber(feeRaw === "" ? "0" : feeRaw, { field: "loan fee", allowNegative: false });
  if (!fee.ok) return fee;

  if (amount.value <= 0) return { ok: false, error: "Enter a loan amount greater than 0." };
  if (amount.value > MAX_PRINCIPAL) return { ok: false, error: "Enter a smaller loan amount." };
  if (rate.value > MAX_RATE) return { ok: false, error: "Enter an annual rate of 100% or less." };
  if (!Number.isInteger(term.value) || term.value < 1) {
    return { ok: false, error: "Enter a whole loan term of at least 1." };
  }

  const months = unit === "years" ? term.value * 12 : term.value;
  if (months > MAX_MONTHS) return { ok: false, error: "Enter a term of 50 years or less." };

  const payment = monthlyInstallment(amount.value, rate.value, months);
  if (!Number.isFinite(payment)) return { ok: false, error: "This combination is too large to calculate." };

  const schedule = buildSchedule(amount.value, rate.value, months, payment, 0, 0);
  if (!schedule.ok) return schedule;

  const totalPaid = roundTo(schedule.totalInterest + amount.value, 2);
  return {
    ok: true,
    payment: roundTo(payment, 2),
    totalPaid,
    totalInterest: roundTo(schedule.totalInterest, 2),
    principal: roundTo(amount.value, 2),
    fee: roundTo(fee.value, 2),
    totalCost: roundTo(totalPaid + fee.value, 2),
    months,
    yearly: schedule.yearly,
    monthly: schedule.monthly,
  };
}

export function buildSchedule(
  principal: number,
  annualPercent: number,
  months: number,
  payment: number,
  extraMonthly: number,
  oneTime: number,
):
  | { ok: true; yearly: AmortizationYear[]; monthly: AmortizationYear[]; totalInterest: number; monthsPaid: number }
  | { ok: false; error: string } {
  const monthly = annualPercent / 100 / 12;
  let balance = Math.max(0, principal - oneTime);
  let totalInterest = 0;
  let yearPrincipal = 0;
  let yearInterest = 0;
  const yearly: AmortizationYear[] = [];
  const monthRows: AmortizationYear[] = [];
  let paidMonths = 0;

  if (balance <= 0.005) {
    return { ok: true, yearly: [], monthly: [], totalInterest: 0, monthsPaid: 0 };
  }

  for (let month = 1; month <= months && balance > 0.005; month += 1) {
    const interest = annualPercent === 0 ? 0 : balance * monthly;
    let due = payment + extraMonthly;
    if (!Number.isFinite(interest) || !Number.isFinite(due)) {
      return { ok: false, error: "This combination is too large to calculate." };
    }
    if (due <= interest && balance > 0 && annualPercent > 0) {
      return { ok: false, error: "The payment does not cover the interest, so the balance would not fall." };
    }
    const payoffAmount = balance + interest;
    if (month === months || due >= payoffAmount) due = payoffAmount;
    const principalPaid = due - interest;
    balance -= principalPaid;
    if (balance < 0.005) balance = 0;
    totalInterest += interest;
    yearPrincipal += principalPaid;
    yearInterest += interest;
    paidMonths = month;
    monthRows.push({
      year: month,
      principalPaid: roundTo(principalPaid, 2),
      interestPaid: roundTo(interest, 2),
      balance: roundTo(balance, 2),
    });
    if (month % 12 === 0 || balance === 0) {
      yearly.push({
        year: Math.ceil(month / 12),
        principalPaid: roundTo(yearPrincipal, 2),
        interestPaid: roundTo(yearInterest, 2),
        balance: roundTo(balance, 2),
      });
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }

  return { ok: true, yearly, monthly: monthRows, totalInterest, monthsPaid: paidMonths };
}
