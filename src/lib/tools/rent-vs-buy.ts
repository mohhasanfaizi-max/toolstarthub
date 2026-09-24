import { monthlyInstallment } from "./loan.ts";
import { parseNumber, roundTo } from "./numbers.ts";

export type RentVsBuyResult =
  | {
      ok: true;
      totalRent: number;
      buyingCash: number;
      remainingBalance: number;
      homeValue: number;
      equity: number;
      netRent: number;
      netBuy: number;
      difference: number;
    }
  | { ok: false; error: string };

const MAX_MONEY = 1_000_000_000_000;
const DUST = 0.0000001;

export function calculateRentVsBuy(input: {
  rentRaw: string;
  rentGrowthRaw: string;
  priceRaw: string;
  downRaw: string;
  rateRaw: string;
  termYearsRaw: string;
  taxRaw: string;
  insuranceRaw: string;
  hoaRaw: string;
  maintenanceRaw: string;
  valueChangeRaw: string;
  yearsRaw: string;
}): RentVsBuyResult {
  const rent = parseNumber(input.rentRaw, { field: "monthly rent", allowNegative: false });
  if (!rent.ok) return rent;
  const rentGrowth = parseNumber(input.rentGrowthRaw === "" ? "0" : input.rentGrowthRaw, {
    field: "annual rent change",
    allowNegative: true,
  });
  if (!rentGrowth.ok) return rentGrowth;
  const price = parseNumber(input.priceRaw, { field: "home price", allowNegative: false });
  if (!price.ok) return price;
  const down = parseNumber(input.downRaw === "" ? "0" : input.downRaw, {
    field: "down payment",
    allowNegative: false,
  });
  if (!down.ok) return down;
  const rate = parseNumber(input.rateRaw, { field: "mortgage interest rate", allowNegative: false });
  if (!rate.ok) return rate;
  const termYears = parseNumber(input.termYearsRaw, { field: "loan term", allowNegative: false });
  if (!termYears.ok) return termYears;
  const tax = parseNumber(input.taxRaw === "" ? "0" : input.taxRaw, {
    field: "property tax",
    allowNegative: false,
  });
  if (!tax.ok) return tax;
  const insurance = parseNumber(input.insuranceRaw === "" ? "0" : input.insuranceRaw, {
    field: "insurance",
    allowNegative: false,
  });
  if (!insurance.ok) return insurance;
  const hoa = parseNumber(input.hoaRaw === "" ? "0" : input.hoaRaw, { field: "HOA", allowNegative: false });
  if (!hoa.ok) return hoa;
  const maintenance = parseNumber(input.maintenanceRaw === "" ? "0" : input.maintenanceRaw, {
    field: "maintenance",
    allowNegative: false,
  });
  if (!maintenance.ok) return maintenance;
  const valueChange = parseNumber(input.valueChangeRaw === "" ? "0" : input.valueChangeRaw, {
    field: "home value change",
    allowNegative: true,
  });
  if (!valueChange.ok) return valueChange;
  const years = parseNumber(input.yearsRaw, { field: "comparison period", allowNegative: false });
  if (!years.ok) return years;

  if (price.value <= 0) return { ok: false, error: "Enter a home price greater than 0." };
  if (price.value > MAX_MONEY || down.value > MAX_MONEY) return { ok: false, error: "Enter a smaller home price." };
  if (down.value > price.value) return { ok: false, error: "Enter a down payment that is not larger than the home price." };
  if (rate.value > 100) return { ok: false, error: "Enter a mortgage rate of 100% or less." };
  if (!Number.isInteger(termYears.value) || termYears.value < 1 || termYears.value > 50) {
    return { ok: false, error: "Enter a whole loan term from 1 to 50 years." };
  }
  if (!Number.isInteger(years.value) || years.value < 1 || years.value > 50) {
    return { ok: false, error: "Enter a whole comparison period from 1 to 50 years." };
  }
  if (rentGrowth.value < -100 || rentGrowth.value > 100) {
    return { ok: false, error: "Enter an annual rent change from -100% to 100%." };
  }
  if (valueChange.value < -100 || valueChange.value > 100) {
    return { ok: false, error: "Enter an annual home-value change from -100% to 100%." };
  }

  const loan = price.value - down.value;
  const termMonths = termYears.value * 12;
  const payment = loan === 0 ? 0 : monthlyInstallment(loan, rate.value, termMonths);
  if (!Number.isFinite(payment)) return { ok: false, error: "This combination is too large to calculate." };

  const monthlyRate = rate.value / 100 / 12;
  let balance = loan;
  let principalAndInterest = 0;
  const compareMonths = years.value * 12;
  for (let month = 1; month <= compareMonths; month += 1) {
    if (balance <= DUST || month > termMonths) continue;
    const interest = rate.value === 0 ? 0 : balance * monthlyRate;
    let due = payment;
    const payoff = balance + interest;
    if (month === termMonths || due >= payoff) due = payoff;
    balance = payoff - due;
    if (balance <= DUST) balance = 0;
    principalAndInterest += due;
    if (!Number.isFinite(balance) || !Number.isFinite(principalAndInterest)) {
      return { ok: false, error: "This combination is too large to calculate." };
    }
  }

  let annualRent = rent.value * 12;
  let totalRent = 0;
  for (let year = 1; year <= years.value; year += 1) {
    totalRent += annualRent;
    annualRent *= 1 + rentGrowth.value / 100;
  }

  const carryingPerYear = tax.value + insurance.value + maintenance.value + hoa.value * 12;
  const carrying = carryingPerYear * years.value;
  const buyingCash = down.value + principalAndInterest + carrying;
  const homeValue = price.value * (1 + valueChange.value / 100) ** years.value;
  if (!Number.isFinite(totalRent) || !Number.isFinite(homeValue) || !Number.isFinite(buyingCash)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }
  const equity = Math.max(0, homeValue - balance);
  const netBuy = buyingCash - equity;

  return {
    ok: true,
    totalRent: roundTo(totalRent, 2),
    buyingCash: roundTo(buyingCash, 2),
    remainingBalance: roundTo(balance, 2),
    homeValue: roundTo(homeValue, 2),
    equity: roundTo(equity, 2),
    netRent: roundTo(totalRent, 2),
    netBuy: roundTo(netBuy, 2),
    difference: roundTo(totalRent - netBuy, 2),
  };
}
