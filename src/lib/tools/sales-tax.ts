import { parseNumber, roundTo } from "./numbers.ts";

export type SalesTaxResult =
  | {
      ok: true;
      taxAmount: number;
      finalPrice: number;
    }
  | { ok: false; error: string };

export function calculateSalesTax(priceRaw: string, percentRaw: string): SalesTaxResult {
  const price = parseNumber(priceRaw, { field: "original price", allowNegative: false });
  if (!price.ok) {
    return price;
  }

  const percent = parseNumber(percentRaw, { field: "sales tax percentage", allowNegative: false });
  if (!percent.ok) {
    return percent;
  }

  const taxAmount = roundTo((percent.value / 100) * price.value, 2);
  const finalPrice = roundTo(price.value + taxAmount, 2);

  return { ok: true, taxAmount, finalPrice };
}
