import { parseNumber, roundTo } from "./numbers.ts";

export type TipResult =
  | {
      ok: true;
      tipAmount: number;
      total: number;
      tipPerPerson: number;
      totalPerPerson: number;
      people: number;
    }
  | { ok: false; error: string };

export function calculateTip(
  billRaw: string,
  percentRaw: string,
  peopleRaw: string,
): TipResult {
  const bill = parseNumber(billRaw, { field: "bill amount", allowNegative: false });
  if (!bill.ok) {
    return bill;
  }

  const percent = parseNumber(percentRaw, { field: "tip percentage", allowNegative: false });
  if (!percent.ok) {
    return percent;
  }

  const people = parseNumber(peopleRaw, { field: "number of people", allowNegative: false });
  if (!people.ok) {
    return people;
  }

  if (!Number.isInteger(people.value) || people.value < 1) {
    return { ok: false, error: "Enter a whole number of people, at least 1." };
  }

  const tipAmount = roundTo((percent.value / 100) * bill.value, 2);
  const total = roundTo(bill.value + tipAmount, 2);
  const tipPerPerson = roundTo(tipAmount / people.value, 2);
  const totalPerPerson = roundTo(total / people.value, 2);

  return {
    ok: true,
    tipAmount,
    total,
    tipPerPerson,
    totalPerPerson,
    people: people.value,
  };
}
