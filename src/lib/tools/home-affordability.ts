import { parseNumber, roundTo } from "./numbers.ts";
import { monthlyInstallment } from "./loan.ts";

export type AffordabilityScenario =
  | { dti: number; ok: true; homePrice: number; loanAmount: number; payment: number }
  | { dti: number; ok: false; error: string };

export type HomeAffordabilityResult =
  | {
      ok: true;
      monthlyGross: number;
      housingBudget: number;
      homePrice: number;
      downPayment: number;
      loanAmount: number;
      payment: number;
      taxMonthly: number;
      insuranceMonthly: number;
      hoaMonthly: number;
      pmiMonthly: number;
      housingPayment: number;
      existingDebt: number;
      totalDti: number;
      targetDti: number;
      scenarios: AffordabilityScenario[];
    }
  | { ok: false; error: string };

const MAX_MONEY = 1_000_000_000_000;
const SCENARIO_RATIOS = [28, 30, 36];

export function calculateHomeAffordability(input: {
  incomeRaw: string;
  debtRaw: string;
  downRaw: string;
  downMode: "amount" | "percent";
  rateRaw: string;
  yearsRaw: string;
  taxRateRaw: string;
  insuranceRaw: string;
  hoaRaw: string;
  pmiRaw: string;
  dtiRaw: string;
}): HomeAffordabilityResult {
  const income = parseNumber(input.incomeRaw, { field: "annual gross income", allowNegative: false });
  if (!income.ok) return income;
  const debt = optionalMoney(input.debtRaw, "monthly debt");
  if (!debt.ok) return debt;
  const down = optionalMoney(input.downRaw, input.downMode === "percent" ? "down payment percentage" : "down payment");
  if (!down.ok) return down;
  const rate = parseNumber(input.rateRaw, { field: "interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const years = parseNumber(input.yearsRaw, { field: "loan term", allowNegative: false });
  if (!years.ok) return years;
  const taxRate = optionalMoney(input.taxRateRaw, "property tax rate");
  if (!taxRate.ok) return taxRate;
  const insurance = optionalMoney(input.insuranceRaw, "homeowners insurance");
  if (!insurance.ok) return insurance;
  const hoa = optionalMoney(input.hoaRaw, "HOA");
  if (!hoa.ok) return hoa;
  const pmi = optionalMoney(input.pmiRaw, "PMI");
  if (!pmi.ok) return pmi;
  const dti = parseNumber(input.dtiRaw, { field: "target debt-to-income ratio", allowNegative: false });
  if (!dti.ok) return dti;

  if (income.value <= 0) return { ok: false, error: "Enter an annual gross income greater than 0." };
  if (income.value > MAX_MONEY) return { ok: false, error: "Enter a smaller annual income." };
  if (rate.value > 100) return { ok: false, error: "Enter an interest rate of 100% or less." };
  if (taxRate.value > 100) return { ok: false, error: "Enter a property tax rate of 100% or less." };
  if (dti.value <= 0 || dti.value > 100) {
    return { ok: false, error: "Enter a target ratio greater than 0 and no more than 100%." };
  }
  if (!Number.isInteger(years.value) || years.value < 1 || years.value > 50) {
    return { ok: false, error: "Enter a whole loan term from 1 to 50 years." };
  }
  if (input.downMode === "percent" && down.value >= 100) {
    return { ok: false, error: "Enter a down payment under 100%. A 100% down payment leaves no loan to size." };
  }

  const months = years.value * 12;
  const solved = solvePrice({
    annualIncome: income.value,
    monthlyDebt: debt.value,
    down: down.value,
    downMode: input.downMode,
    annualPercent: rate.value,
    months,
    taxRate: taxRate.value,
    insuranceAnnual: insurance.value,
    hoaMonthly: hoa.value,
    pmiMonthly: pmi.value,
    dti: dti.value,
  });
  if (!solved.ok) return solved;

  const scenarios: AffordabilityScenario[] = [];
  for (const ratio of SCENARIO_RATIOS) {
    const row = solvePrice({
      annualIncome: income.value,
      monthlyDebt: debt.value,
      down: down.value,
      downMode: input.downMode,
      annualPercent: rate.value,
      months,
      taxRate: taxRate.value,
      insuranceAnnual: insurance.value,
      hoaMonthly: hoa.value,
      pmiMonthly: pmi.value,
      dti: ratio,
    });
    scenarios.push(
      row.ok
        ? { dti: ratio, ok: true, homePrice: roundTo(row.homePrice, 2), loanAmount: roundTo(row.loanAmount, 2), payment: roundTo(row.payment, 2) }
        : { dti: ratio, ok: false, error: row.error },
    );
  }

  return {
    ok: true,
    monthlyGross: roundTo(income.value / 12, 2),
    housingBudget: roundTo(solved.housingBudget, 2),
    homePrice: roundTo(solved.homePrice, 2),
    downPayment: roundTo(solved.downPayment, 2),
    loanAmount: roundTo(solved.loanAmount, 2),
    payment: roundTo(solved.payment, 2),
    taxMonthly: roundTo(solved.taxMonthly, 2),
    insuranceMonthly: roundTo(solved.insuranceMonthly, 2),
    hoaMonthly: roundTo(hoa.value, 2),
    pmiMonthly: roundTo(pmi.value, 2),
    housingPayment: roundTo(solved.housingPayment, 2),
    existingDebt: roundTo(debt.value, 2),
    totalDti: roundTo(solved.totalDti, 2),
    targetDti: dti.value,
    scenarios,
  };
}

function solvePrice(input: {
  annualIncome: number;
  monthlyDebt: number;
  down: number;
  downMode: "amount" | "percent";
  annualPercent: number;
  months: number;
  taxRate: number;
  insuranceAnnual: number;
  hoaMonthly: number;
  pmiMonthly: number;
  dti: number;
}):
  | {
      ok: true;
      housingBudget: number;
      homePrice: number;
      downPayment: number;
      loanAmount: number;
      payment: number;
      taxMonthly: number;
      insuranceMonthly: number;
      housingPayment: number;
      totalDti: number;
    }
  | { ok: false; error: string } {
  const monthlyGross = input.annualIncome / 12;
  const housingBudget = monthlyGross * (input.dti / 100) - input.monthlyDebt;
  if (!Number.isFinite(housingBudget)) return { ok: false, error: "This combination is too large to calculate." };
  if (housingBudget <= 0) {
    return { ok: false, error: "At this income, debt, and target ratio, there is no room left for a housing payment." };
  }

  const insuranceMonthly = input.insuranceAnnual / 12;
  const fixed = insuranceMonthly + input.hoaMonthly + input.pmiMonthly;
  const forLoanAndTax = housingBudget - fixed;
  if (forLoanAndTax <= 0) {
    return { ok: false, error: "The insurance, HOA, and PMI you entered use the full housing budget, so no loan fits." };
  }

  const factor = monthlyInstallment(1, input.annualPercent, input.months);
  const taxMonthlyRate = input.taxRate / 100 / 12;
  if (!Number.isFinite(factor) || factor <= 0) return { ok: false, error: "This combination is too large to calculate." };

  let homePrice: number;
  let loanAmount: number;
  if (input.downMode === "percent") {
    const loanShare = 1 - input.down / 100;
    const divisor = loanShare * factor + taxMonthlyRate;
    if (divisor <= 0) return { ok: false, error: "This combination is too large to calculate." };
    homePrice = forLoanAndTax / divisor;
    loanAmount = homePrice * loanShare;
  } else {
    const taxOnDown = input.down * taxMonthlyRate;
    const divisor = factor + taxMonthlyRate;
    loanAmount = (forLoanAndTax - taxOnDown) / divisor;
    homePrice = loanAmount + input.down;
  }

  if (!Number.isFinite(homePrice) || !Number.isFinite(loanAmount)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }
  if (loanAmount <= 0 || homePrice <= 0) {
    return { ok: false, error: "The down payment and housing costs do not leave a loan that fits this budget." };
  }

  const payment = loanAmount * factor;
  const taxMonthly = homePrice * taxMonthlyRate;
  const housingPayment = payment + taxMonthly + fixed;
  const totalDti = ((housingPayment + input.monthlyDebt) / monthlyGross) * 100;

  return {
    ok: true,
    housingBudget,
    homePrice,
    downPayment: homePrice - loanAmount,
    loanAmount,
    payment,
    taxMonthly,
    insuranceMonthly,
    housingPayment,
    totalDti,
  };
}

function optionalMoney(raw: string, field: string) {
  if (raw.trim() === "") return { ok: true as const, value: 0 };
  const parsed = parseNumber(raw, { field, allowNegative: false });
  if (!parsed.ok) return parsed;
  if (parsed.value > MAX_MONEY) return { ok: false as const, error: `Enter a smaller ${field}.` };
  return parsed;
}
