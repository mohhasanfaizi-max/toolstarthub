import { parseNumber, roundTo } from "./numbers.ts";

export type DebtStrategy = "avalanche" | "snowball";

export type DebtTimeline = {
  name: string;
  months: number;
  interest: number;
};

export type DebtComparison = {
  strategy: DebtStrategy;
  extra: number;
  months: number;
  totalInterest: number;
};

export type DebtPayoffResult =
  | {
      ok: true;
      months: number;
      totalInterest: number;
      totalPaid: number;
      startingBalance: number;
      interestSaved: number;
      strategy: DebtStrategy;
      order: DebtTimeline[];
      comparison: DebtComparison[];
    }
  | { ok: false; error: string };

const MAX_MONTHS = 600;
const MAX_DEBTS = 12;
const DUST = 0.0000001;

type WorkingDebt = {
  name: string;
  balance: number;
  apr: number;
  minimum: number;
  interestPaid: number;
  paidOffMonth: number;
};

export function calculateDebtPayoff(input: {
  debts: Array<{ name: string; balanceRaw: string; aprRaw: string; minimumRaw: string }>;
  extraRaw: string;
  strategy: DebtStrategy;
}): DebtPayoffResult {
  if (input.debts.length < 1) return { ok: false, error: "Enter at least one debt." };
  if (input.debts.length > MAX_DEBTS) return { ok: false, error: "Enter 12 debts or fewer." };

  const extra = parseNumber(input.extraRaw === "" ? "0" : input.extraRaw, {
    field: "extra monthly payment",
    allowNegative: false,
  });
  if (!extra.ok) return extra;

  const parsed: WorkingDebt[] = [];
  for (let index = 0; index < input.debts.length; index += 1) {
    const row = input.debts[index];
    const balance = parseNumber(row.balanceRaw, { field: "balance", allowNegative: false });
    if (!balance.ok) return { ok: false, error: `Debt ${index + 1}: ${balance.error}` };
    const apr = parseNumber(row.aprRaw, { field: "APR", allowNegative: false });
    if (!apr.ok) return { ok: false, error: `Debt ${index + 1}: ${apr.error}` };
    const minimum = parseNumber(row.minimumRaw, { field: "minimum payment", allowNegative: false });
    if (!minimum.ok) return { ok: false, error: `Debt ${index + 1}: ${minimum.error}` };
    if (balance.value <= 0) return { ok: false, error: `Enter a balance greater than 0 for debt ${index + 1}.` };
    if (apr.value > 100) return { ok: false, error: `Enter an APR of 100% or less for debt ${index + 1}.` };
    if (minimum.value <= 0) return { ok: false, error: `Enter a minimum payment greater than 0 for debt ${index + 1}.` };
    const firstInterest = balance.value * (apr.value / 100 / 12);
    if (apr.value > 0 && minimum.value <= firstInterest) {
      return {
        ok: false,
        error: `The minimum payment on debt ${index + 1} does not cover the interest, so that balance would not fall.`,
      };
    }
    parsed.push({
      name: row.name.trim() || `Debt ${index + 1}`,
      balance: balance.value,
      apr: apr.value,
      minimum: minimum.value,
      interestPaid: 0,
      paidOffMonth: 0,
    });
  }

  const selected = simulate(parsed, extra.value, input.strategy);
  if (!selected.ok) return selected;
  const minimumOnly = simulate(parsed, 0, input.strategy);
  if (!minimumOnly.ok) return minimumOnly;

  const comparison: DebtComparison[] = [];
  for (const strategy of ["avalanche", "snowball"] as const) {
    for (const amount of [extra.value, 0]) {
      const run = simulate(parsed, amount, strategy);
      if (!run.ok) return run;
      comparison.push({
        strategy,
        extra: roundTo(amount, 2),
        months: run.months,
        totalInterest: roundTo(run.totalInterest, 2),
      });
    }
  }

  return {
    ok: true,
    months: selected.months,
    totalInterest: roundTo(selected.totalInterest, 2),
    totalPaid: roundTo(selected.totalInterest + selected.starting, 2),
    startingBalance: roundTo(selected.starting, 2),
    interestSaved: roundTo(minimumOnly.totalInterest - selected.totalInterest, 2),
    strategy: input.strategy,
    order: selected.order.map((row) => ({
      name: row.name,
      months: row.months,
      interest: roundTo(row.interest, 2),
    })),
    comparison,
  };
}

function simulate(source: WorkingDebt[], extra: number, strategy: DebtStrategy):
  | { ok: true; months: number; totalInterest: number; starting: number; order: DebtTimeline[] }
  | { ok: false; error: string } {
  const debts = source.map((debt) => ({ ...debt, interestPaid: 0, paidOffMonth: 0 }));
  const starting = debts.reduce((sum, debt) => sum + debt.balance, 0);
  let totalInterest = 0;
  let retiredMinimums = 0;
  let months = 0;

  for (let month = 1; month <= MAX_MONTHS; month += 1) {
    if (debts.every((debt) => debt.balance <= DUST)) break;
    months = month;
    for (const debt of debts) {
      if (debt.balance <= DUST) {
        debt.balance = 0;
        continue;
      }
      const interest = debt.apr === 0 ? 0 : debt.balance * (debt.apr / 100 / 12);
      if (!Number.isFinite(interest)) return { ok: false, error: "This combination is too large to calculate." };
      debt.balance += interest;
      debt.interestPaid += interest;
      totalInterest += interest;
    }

    let cascade = extra + retiredMinimums;
    for (const debt of debts) {
      if (debt.balance <= DUST) continue;
      const pay = Math.min(debt.minimum, debt.balance);
      debt.balance -= pay;
      if (debt.balance <= DUST) {
        cascade += debt.minimum - pay;
        debt.balance = 0;
        debt.paidOffMonth = month;
      }
    }

    while (cascade > DUST) {
      const target = pickTarget(debts, strategy);
      if (!target) break;
      const pay = Math.min(cascade, target.balance);
      target.balance -= pay;
      cascade -= pay;
      if (target.balance <= DUST) {
        target.balance = 0;
        target.paidOffMonth = month;
      }
    }

    retiredMinimums = debts.filter((debt) => debt.balance <= DUST).reduce((sum, debt) => sum + debt.minimum, 0);
  }

  if (debts.some((debt) => debt.balance > DUST)) {
    return { ok: false, error: "These payments do not pay off the debts within 50 years." };
  }

  const order = [...debts]
    .sort((a, b) => a.paidOffMonth - b.paidOffMonth)
    .map((debt) => ({ name: debt.name, months: debt.paidOffMonth, interest: debt.interestPaid }));

  return { ok: true, months, totalInterest, starting, order };
}

function pickTarget(debts: WorkingDebt[], strategy: DebtStrategy): WorkingDebt | undefined {
  const open = debts.filter((debt) => debt.balance > DUST);
  open.sort((a, b) => {
    if (strategy === "avalanche") {
      if (b.apr !== a.apr) return b.apr - a.apr;
      if (a.balance !== b.balance) return a.balance - b.balance;
    } else if (a.balance !== b.balance) {
      return a.balance - b.balance;
    } else if (b.apr !== a.apr) {
      return b.apr - a.apr;
    }
    return 0;
  });
  return open[0];
}
