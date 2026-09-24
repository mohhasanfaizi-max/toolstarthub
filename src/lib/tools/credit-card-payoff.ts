import { parseNumber, roundTo } from "./numbers.ts";

export type CardScheduleRow = {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
};

export type CardScenario =
  | { id: string; label: string; ok: true; payment: number; months: number; totalInterest: number; totalPaid: number }
  | { id: string; label: string; ok: false; error: string };

export type CreditCardPayoffResult =
  | {
      ok: true;
      payment: number;
      months: number;
      totalInterest: number;
      totalPaid: number;
      interestSaved: number;
      schedule: CardScheduleRow[];
      scenarios: CardScenario[];
    }
  | { ok: false; error: string };

const MAX_MONTHS = 600;
const DUST = 0.0000001;

export function calculateCreditCardPayoff(input: {
  balanceRaw: string;
  aprRaw: string;
  percentRaw: string;
  floorRaw: string;
  desiredRaw: string;
  extraRaw: string;
}): CreditCardPayoffResult {
  const balance = parseNumber(input.balanceRaw, { field: "current balance", allowNegative: false });
  if (!balance.ok) return balance;
  const apr = parseNumber(input.aprRaw, { field: "APR", allowNegative: false });
  if (!apr.ok) return apr;
  const percent = parseNumber(input.percentRaw === "" ? "0" : input.percentRaw, {
    field: "minimum payment percentage",
    allowNegative: false,
  });
  if (!percent.ok) return percent;
  const floor = parseNumber(input.floorRaw === "" ? "0" : input.floorRaw, {
    field: "minimum payment floor",
    allowNegative: false,
  });
  if (!floor.ok) return floor;
  const desired = parseNumber(input.desiredRaw === "" ? "0" : input.desiredRaw, {
    field: "monthly payment",
    allowNegative: false,
  });
  if (!desired.ok) return desired;
  const extra = parseNumber(input.extraRaw === "" ? "0" : input.extraRaw, {
    field: "additional payment",
    allowNegative: false,
  });
  if (!extra.ok) return extra;

  if (balance.value <= 0) return { ok: false, error: "Enter a balance greater than 0." };
  if (apr.value > 100) return { ok: false, error: "Enter an APR of 100% or less." };
  if (percent.value > 100) return { ok: false, error: "Enter a minimum percentage of 100% or less." };

  const minimumRun = runPlan(balance.value, apr.value, (start) => Math.max(start * (percent.value / 100), floor.value));
  const fixedRun = desired.value > 0
    ? runPlan(balance.value, apr.value, () => desired.value)
    : { ok: false as const, error: "Enter a monthly payment to see the fixed-payment scenario." };
  const fixedExtraRun = desired.value > 0
    ? runPlan(balance.value, apr.value, () => desired.value + extra.value)
    : { ok: false as const, error: "Enter a monthly payment to see the fixed-payment scenario." };

  const main = desired.value > 0
    ? runPlan(balance.value, apr.value, () => desired.value + extra.value)
    : runPlan(balance.value, apr.value, (start) => Math.max(start * (percent.value / 100), floor.value) + extra.value);
  if (!main.ok) return main;

  const interestSaved = minimumRun.ok ? roundTo(minimumRun.totalInterest - main.totalInterest, 2) : 0;

  return {
    ok: true,
    payment: roundTo(main.payment, 2),
    months: main.months,
    totalInterest: roundTo(main.totalInterest, 2),
    totalPaid: roundTo(main.totalInterest + balance.value, 2),
    interestSaved,
    schedule: main.schedule,
    scenarios: [
      scenario("minimum", "Minimum payment", minimumRun),
      scenario("fixed", "Fixed payment", fixedRun),
      scenario("fixed-extra", "Fixed payment plus extra", fixedExtraRun),
    ],
  };
}

function scenario(
  id: string,
  label: string,
  run: { ok: true; payment: number; months: number; totalInterest: number; balance: number } | { ok: false; error: string },
): CardScenario {
  if (!run.ok) return { id, label, ok: false, error: run.error };
  return {
    id,
    label,
    ok: true,
    payment: roundTo(run.payment, 2),
    months: run.months,
    totalInterest: roundTo(run.totalInterest, 2),
    totalPaid: roundTo(run.totalInterest + run.balance, 2),
  };
}

function runPlan(
  opening: number,
  apr: number,
  dueFor: (startBalance: number) => number,
):
  | { ok: true; payment: number; months: number; totalInterest: number; balance: number; schedule: CardScheduleRow[] }
  | { ok: false; error: string } {
  let balance = opening;
  let totalInterest = 0;
  let months = 0;
  let shownPayment = 0;
  const schedule: CardScheduleRow[] = [];
  const monthly = apr / 100 / 12;

  for (let month = 1; month <= MAX_MONTHS && balance > DUST; month += 1) {
    const start = balance;
    const interest = apr === 0 ? 0 : start * monthly;
    if (!Number.isFinite(interest)) return { ok: false, error: "This combination is too large to calculate." };
    const due = dueFor(start);
    if (!Number.isFinite(due) || due <= 0) {
      return { ok: false, error: "Enter a payment greater than 0." };
    }
    if (due <= interest && apr > 0) {
      return { ok: false, error: "That payment does not cover the interest, so the balance would not fall." };
    }
    balance += interest;
    let payment = Math.min(due, balance);
    if (month === MAX_MONTHS && payment < balance) {
      return { ok: false, error: "This payment does not pay off the balance within 50 years." };
    }
    const principal = payment - interest;
    balance -= payment;
    if (balance <= DUST) {
      payment += balance;
      balance = 0;
    }
    totalInterest += interest;
    months = month;
    if (shownPayment === 0) shownPayment = due;
    schedule.push({
      month,
      payment: roundTo(payment, 2),
      interest: roundTo(interest, 2),
      principal: roundTo(principal, 2),
      balance: roundTo(balance, 2),
    });
  }

  if (balance > DUST) return { ok: false, error: "This payment does not pay off the balance within 50 years." };
  return { ok: true, payment: shownPayment, months, totalInterest, balance: opening, schedule };
}
