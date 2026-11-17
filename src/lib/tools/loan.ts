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
      monthsPaid: number;
      yearly: AmortizationYear[];
      monthly: AmortizationYear[];
      payoff: {
        monthsPaid: number;
        monthsSaved: number;
        interest: number;
        interestSaved: number;
        originalInterest: number;
      } | null;
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
  extraMonthlyRaw = "",
  oneTimeRaw = "",
): LoanResult {
  const amount = parseNumber(amountRaw, { field: "loan amount", allowNegative: false });
  if (!amount.ok) return amount;
  const rate = parseNumber(rateRaw, { field: "annual interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const term = parseNumber(termRaw, { field: "loan term", allowNegative: false });
  if (!term.ok) return term;
  const fee = parseNumber(feeRaw === "" ? "0" : feeRaw, { field: "loan fee", allowNegative: false });
  if (!fee.ok) return fee;
  const extra = optionalLoanMoney(extraMonthlyRaw, "extra monthly payment");
  if (!extra.ok) return extra;
  const oneTime = optionalLoanMoney(oneTimeRaw, "one-time extra payment");
  if (!oneTime.ok) return oneTime;

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

  if (oneTime.value > amount.value) {
    return { ok: false, error: "The one-time extra payment cannot be larger than the loan amount." };
  }

  const base = buildSchedule(amount.value, rate.value, months, payment, 0, 0);
  if (!base.ok) return base;

  let applied = base;
  let payoff: {
    monthsPaid: number;
    monthsSaved: number;
    interest: number;
    interestSaved: number;
    originalInterest: number;
  } | null = null;
  if (extra.value > 0 || oneTime.value > 0) {
    const faster = buildSchedule(amount.value, rate.value, months, payment, extra.value, oneTime.value);
    if (!faster.ok) return faster;
    applied = faster;
    payoff = {
      monthsPaid: faster.monthsPaid,
      monthsSaved: Math.max(0, months - faster.monthsPaid),
      interest: roundTo(faster.totalInterest, 2),
      interestSaved: roundTo(base.totalInterest - faster.totalInterest, 2),
      originalInterest: roundTo(base.totalInterest, 2),
    };
  }

  const totalPaid = roundTo(applied.totalInterest + amount.value, 2);
  return {
    ok: true,
    payment: roundTo(payment, 2),
    totalPaid,
    totalInterest: roundTo(applied.totalInterest, 2),
    principal: roundTo(amount.value, 2),
    fee: roundTo(fee.value, 2),
    totalCost: roundTo(totalPaid + fee.value, 2),
    months,
    monthsPaid: applied.monthsPaid,
    yearly: applied.yearly,
    monthly: applied.monthly,
    payoff,
  };
}

function optionalLoanMoney(raw: string, field: string) {
  if (raw.trim() === "") return { ok: true as const, value: 0 };
  const parsed = parseNumber(raw, { field, allowNegative: false });
  if (!parsed.ok) return parsed;
  if (parsed.value > MAX_PRINCIPAL) return { ok: false as const, error: `Enter a smaller ${field}.` };
  return parsed;
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

export function formatScheduleCsv(
  rows: AmortizationYear[],
  periodLabel: "Month" | "Year",
): string {
  const header = `${periodLabel},Principal paid,Interest paid,Remaining balance`;
  const body = rows.map((row) =>
    [row.year, row.principalPaid.toFixed(2), row.interestPaid.toFixed(2), row.balance.toFixed(2)].join(","),
  );
  const principal = rows.reduce((sum, row) => sum + row.principalPaid, 0);
  const interest = rows.reduce((sum, row) => sum + row.interestPaid, 0);
  const totals = `Totals,${principal.toFixed(2)},${interest.toFixed(2)},`;
  return [header, ...body, totals].join("\n");
}
