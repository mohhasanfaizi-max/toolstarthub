import { parseNumber, roundTo } from "./numbers.ts";

export type DiscountResult =
  | {
      ok: true;
      discountAmount: number;
      finalPrice: number;
    }
  | { ok: false; error: string };

export function calculateDiscount(
  priceRaw: string,
  percentRaw: string,
): DiscountResult {
  const price = parseNumber(priceRaw, {
    field: "original price",
    allowNegative: false,
  });
  if (!price.ok) {
    return price;
  }

  const percent = parseNumber(percentRaw, {
    field: "discount percentage",
    allowNegative: false,
  });
  if (!percent.ok) {
    return percent;
  }

  if (percent.value > 100) {
    return {
      ok: false,
      error: "Enter a discount percentage between 0 and 100.",
    };
  }

  const discountAmount = roundTo((percent.value / 100) * price.value);
  const finalPrice = roundTo(price.value - discountAmount);

  return {
    ok: true,
    discountAmount,
    finalPrice,
  };
}
