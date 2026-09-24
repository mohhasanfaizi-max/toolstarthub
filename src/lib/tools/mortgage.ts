import { parseNumber, roundTo } from "./numbers.ts";
import { buildSchedule, monthlyInstallment, type AmortizationYear } from "./loan.ts";

export type MortgageResult =
  | {
      ok: true;
      loanAmount: number;
      downPayment: number;
      payment: number;
      housingPayment: number;
      taxMonthly: number;
      insuranceMonthly: number;
      pmiMonthly: number;
      hoaMonthly: number;
      totalInterest: number;
      totalPrincipal: number;
      totalPayments: number;
      months: number;
      yearly: AmortizationYear[];
      monthly: AmortizationYear[];
      comparison: Array<{ term: number; payment: number; totalInterest: number; totalPayments: number }>;
      payoff: {
        monthsPaid: number;
        monthsSaved: number;
        interest: number;
        interestSaved: number;
        originalInterest: number;
      } | null;
    }
  | { ok: false; error: string };

const MAX_PRICE = 1_000_000_000_000;

export function calculateMortgage(input: {
  priceRaw: string;
  downRaw: string;
  downMode: "amount" | "percent";
  rateRaw: string;
  yearsRaw: string;
  taxRaw: string;
  insuranceRaw: string;
  hoaRaw: string;
  pmiRaw: string;
  extraMonthlyRaw: string;
  oneTimeRaw: string;
}): MortgageResult {
  const price = parseNumber(input.priceRaw, { field: "home price", allowNegative: false });
  if (!price.ok) return price;
  const down = parseNumber(input.downRaw === "" ? "0" : input.downRaw, {
    field: input.downMode === "percent" ? "down payment percentage" : "down payment",
    allowNegative: false,
  });
  if (!down.ok) return down;
  const rate = parseNumber(input.rateRaw, { field: "interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const years = parseNumber(input.yearsRaw, { field: "loan term", allowNegative: false });
  if (!years.ok) return years;

  const tax = optionalMoney(input.taxRaw, "property tax");
  if (!tax.ok) return tax;
  const insurance = optionalMoney(input.insuranceRaw, "homeowners insurance");
  if (!insurance.ok) return insurance;
  const hoa = optionalMoney(input.hoaRaw, "HOA");
  if (!hoa.ok) return hoa;
  const pmi = optionalMoney(input.pmiRaw, "PMI");
  if (!pmi.ok) return pmi;
  const extra = optionalMoney(input.extraMonthlyRaw, "extra monthly payment");
  if (!extra.ok) return extra;
  const oneTime = optionalMoney(input.oneTimeRaw, "one-time extra payment");
  if (!oneTime.ok) return oneTime;

  if (price.value <= 0) return { ok: false, error: "Enter a home price greater than 0." };
  if (price.value > MAX_PRICE) return { ok: false, error: "Enter a smaller home price." };
  if (rate.value > 100) return { ok: false, error: "Enter an interest rate of 100% or less." };
  if (!Number.isInteger(years.value) || years.value < 1 || years.value > 50) {
    return { ok: false, error: "Enter a whole loan term from 1 to 50 years." };
  }

  const downPayment = input.downMode === "percent" ? (price.value * down.value) / 100 : down.value;
  if (input.downMode === "percent" && down.value > 100) {
    return { ok: false, error: "Enter a down payment of 100% or less." };
  }
  if (downPayment > price.value) {
    return { ok: false, error: "The down payment cannot be larger than the home price." };
  }

  const loanAmount = roundTo(price.value - downPayment, 2);
  const months = years.value * 12;
  const payment = loanAmount === 0 ? 0 : monthlyInstallment(loanAmount, rate.value, months);
  if (!Number.isFinite(payment)) return { ok: false, error: "This combination is too large to calculate." };

  const base = buildSchedule(loanAmount, rate.value, months, payment, 0, 0);
  if (!base.ok) return base;

  const taxMonthly = roundTo(tax.value / 12, 2);
  const insuranceMonthly = roundTo(insurance.value / 12, 2);
  const housing = roundTo(roundTo(payment, 2) + taxMonthly + insuranceMonthly + pmi.value + hoa.value, 2);
  const totalPayments = roundTo(base.totalInterest + loanAmount, 2);

  let payoff: {
    monthsPaid: number;
    monthsSaved: number;
    interest: number;
    interestSaved: number;
    originalInterest: number;
  } | null = null;
  if (extra.value > 0 || oneTime.value > 0) {
    if (oneTime.value > loanAmount) {
      return { ok: false, error: "The one-time extra payment cannot be larger than the loan amount." };
    }
    const faster = buildSchedule(loanAmount, rate.value, months, payment, extra.value, oneTime.value);
    if (!faster.ok) return faster;
    payoff = {
      monthsPaid: faster.monthsPaid,
      monthsSaved: Math.max(0, months - faster.monthsPaid),
      interest: roundTo(faster.totalInterest, 2),
      interestSaved: roundTo(base.totalInterest - faster.totalInterest, 2),
      originalInterest: roundTo(base.totalInterest, 2),
    };
  }

  const comparison: Array<{ term: number; payment: number; totalInterest: number; totalPayments: number }> = [];
  for (const term of [15, 30]) {
    const termMonths = term * 12;
    const termPayment = loanAmount === 0 ? 0 : monthlyInstallment(loanAmount, rate.value, termMonths);
    const termSchedule = buildSchedule(loanAmount, rate.value, termMonths, termPayment, 0, 0);
    if (!termSchedule.ok) return termSchedule;
    comparison.push({
      term,
      payment: roundTo(termPayment, 2),
      totalInterest: roundTo(termSchedule.totalInterest, 2),
      totalPayments: roundTo(termSchedule.totalInterest + loanAmount, 2),
    });
  }

  return {
    ok: true,
    loanAmount,
    downPayment: roundTo(downPayment, 2),
    payment: roundTo(payment, 2),
    housingPayment: housing,
    taxMonthly,
    insuranceMonthly,
    pmiMonthly: roundTo(pmi.value, 2),
    hoaMonthly: roundTo(hoa.value, 2),
    totalInterest: roundTo(base.totalInterest, 2),
    totalPrincipal: loanAmount,
    totalPayments,
    months,
    yearly: base.yearly,
    monthly: base.monthly,
    comparison,
    payoff,
  };
}

function optionalMoney(raw: string, field: string) {
  if (raw.trim() === "") return { ok: true as const, value: 0 };
  const parsed = parseNumber(raw, { field, allowNegative: false });
  if (!parsed.ok) return parsed;
  if (parsed.value > MAX_PRICE) return { ok: false as const, error: `Enter a smaller ${field}.` };
  return parsed;
}
