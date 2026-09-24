import { parseNumber, roundTo } from "./numbers.ts";
import { buildSchedule, monthlyInstallment, type AmortizationYear } from "./loan.ts";

export type AutoLoanTermRow = {
  months: number;
  payment: number;
  totalInterest: number;
  totalPayments: number;
};

export type AutoLoanResult =
  | {
      ok: true;
      vehiclePrice: number;
      salesTax: number;
      fees: number;
      addons: number;
      downPayment: number;
      tradeIn: number;
      amountFinanced: number;
      payment: number;
      totalInterest: number;
      totalPayments: number;
      totalPurchaseCost: number;
      months: number;
      yearly: AmortizationYear[];
      monthly: AmortizationYear[];
      comparison: AutoLoanTermRow[];
      ownershipMonthly: number | null;
    }
  | { ok: false; error: string };

const MAX_MONEY = 1_000_000_000_000;
const TERM_CHOICES = [36, 48, 60, 72];

export function calculateAutoLoan(input: {
  priceRaw: string;
  downRaw: string;
  tradeRaw: string;
  taxRateRaw: string;
  feesRaw: string;
  aprRaw: string;
  monthsRaw: string;
  addonsRaw: string;
  insuranceRaw: string;
  fuelRaw: string;
  maintenanceRaw: string;
}): AutoLoanResult {
  const price = parseNumber(input.priceRaw, { field: "vehicle price", allowNegative: false });
  if (!price.ok) return price;
  const down = optionalMoney(input.downRaw, "down payment");
  if (!down.ok) return down;
  const trade = optionalMoney(input.tradeRaw, "trade-in value");
  if (!trade.ok) return trade;
  const taxRate = optionalMoney(input.taxRateRaw, "sales tax rate");
  if (!taxRate.ok) return taxRate;
  const fees = optionalMoney(input.feesRaw, "title, registration, and dealer fees");
  if (!fees.ok) return fees;
  const apr = parseNumber(input.aprRaw, { field: "APR", allowNegative: false });
  if (!apr.ok) return apr;
  const term = parseNumber(input.monthsRaw, { field: "loan term", allowNegative: false });
  if (!term.ok) return term;
  const addons = optionalMoney(input.addonsRaw, "add-ons");
  if (!addons.ok) return addons;
  const insurance = optionalMoney(input.insuranceRaw, "insurance");
  if (!insurance.ok) return insurance;
  const fuel = optionalMoney(input.fuelRaw, "fuel");
  if (!fuel.ok) return fuel;
  const maintenance = optionalMoney(input.maintenanceRaw, "maintenance");
  if (!maintenance.ok) return maintenance;

  if (price.value <= 0) return { ok: false, error: "Enter a vehicle price greater than 0." };
  if (price.value > MAX_MONEY) return { ok: false, error: "Enter a smaller vehicle price." };
  if (taxRate.value > 100) return { ok: false, error: "Enter a sales tax rate of 100% or less." };
  if (apr.value > 100) return { ok: false, error: "Enter an APR of 100% or less." };
  if (!Number.isInteger(term.value) || term.value < 1 || term.value > 120) {
    return { ok: false, error: "Enter a whole loan term from 1 to 120 months." };
  }

  const salesTax = price.value * (taxRate.value / 100);
  const amountFinanced = price.value + salesTax + fees.value + addons.value - down.value - trade.value;
  if (!Number.isFinite(amountFinanced) || !Number.isFinite(salesTax)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }
  if (amountFinanced <= 0) {
    return {
      ok: false,
      error: "The down payment and trade-in cover the price, tax, fees, and add-ons, so there is no amount to finance.",
    };
  }

  const payment = monthlyInstallment(amountFinanced, apr.value, term.value);
  if (!Number.isFinite(payment)) return { ok: false, error: "This combination is too large to calculate." };
  const schedule = buildSchedule(amountFinanced, apr.value, term.value, payment, 0, 0);
  if (!schedule.ok) return schedule;

  const comparison: AutoLoanTermRow[] = [];
  for (const months of TERM_CHOICES) {
    const termPayment = monthlyInstallment(amountFinanced, apr.value, months);
    const termSchedule = buildSchedule(amountFinanced, apr.value, months, termPayment, 0, 0);
    if (!termSchedule.ok) return termSchedule;
    comparison.push({
      months,
      payment: roundTo(termPayment, 2),
      totalInterest: roundTo(termSchedule.totalInterest, 2),
      totalPayments: roundTo(termSchedule.totalInterest + amountFinanced, 2),
    });
  }

  const totalInterest = schedule.totalInterest;
  const totalPayments = totalInterest + amountFinanced;
  const hasOwnership = insurance.value > 0 || fuel.value > 0 || maintenance.value > 0;

  return {
    ok: true,
    vehiclePrice: roundTo(price.value, 2),
    salesTax: roundTo(salesTax, 2),
    fees: roundTo(fees.value, 2),
    addons: roundTo(addons.value, 2),
    downPayment: roundTo(down.value, 2),
    tradeIn: roundTo(trade.value, 2),
    amountFinanced: roundTo(amountFinanced, 2),
    payment: roundTo(payment, 2),
    totalInterest: roundTo(totalInterest, 2),
    totalPayments: roundTo(totalPayments, 2),
    totalPurchaseCost: roundTo(price.value + salesTax + fees.value + addons.value + totalInterest, 2),
    months: term.value,
    yearly: schedule.yearly,
    monthly: schedule.monthly,
    comparison,
    ownershipMonthly: hasOwnership ? roundTo(roundTo(payment, 2) + insurance.value + fuel.value + maintenance.value, 2) : null,
  };
}

function optionalMoney(raw: string, field: string) {
  if (raw.trim() === "") return { ok: true as const, value: 0 };
  const parsed = parseNumber(raw, { field, allowNegative: false });
  if (!parsed.ok) return parsed;
  if (parsed.value > MAX_MONEY) return { ok: false as const, error: `Enter a smaller ${field}.` };
  return parsed;
}
