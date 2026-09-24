import { parseNumber, roundTo } from "./numbers.ts";

export type PayFrequency = "weekly" | "biweekly" | "semimonthly" | "monthly";
export type WithholdingMode = "percent" | "amount";

export type PaycheckResult =
  | {
      ok: true;
      frequency: PayFrequency;
      periods: number;
      gross: number;
      preTax: number;
      basis: number;
      withholding: number;
      postTax: number;
      net: number;
      annualGross: number;
      annualNet: number;
    }
  | { ok: false; error: string };

const PERIODS: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
};

const MAX_MONEY = 1_000_000_000_000;

export function calculatePaycheck(input: {
  grossRaw: string;
  frequency: PayFrequency;
  preTaxRaw: string;
  withholdingMode: WithholdingMode;
  withholdingRaw: string;
  postTaxRaw: string;
}): PaycheckResult {
  const gross = parseNumber(input.grossRaw, { field: "gross pay", allowNegative: false });
  if (!gross.ok) return gross;
  const preTax = parseNumber(input.preTaxRaw === "" ? "0" : input.preTaxRaw, {
    field: "pre-tax deductions",
    allowNegative: false,
  });
  if (!preTax.ok) return preTax;
  const withholding = parseNumber(input.withholdingRaw === "" ? "0" : input.withholdingRaw, {
    field: input.withholdingMode === "percent" ? "withholding percent" : "withholding amount",
    allowNegative: false,
  });
  if (!withholding.ok) return withholding;
  const postTax = parseNumber(input.postTaxRaw === "" ? "0" : input.postTaxRaw, {
    field: "post-tax deductions",
    allowNegative: false,
  });
  if (!postTax.ok) return postTax;

  if (gross.value > MAX_MONEY || preTax.value > MAX_MONEY || postTax.value > MAX_MONEY) {
    return { ok: false, error: "Enter a smaller amount." };
  }
  if (input.withholdingMode === "percent" && withholding.value > 100) {
    return { ok: false, error: "Enter a withholding percent of 100% or less." };
  }
  if (input.withholdingMode === "amount" && withholding.value > MAX_MONEY) {
    return { ok: false, error: "Enter a smaller withholding amount." };
  }
  if (preTax.value > gross.value) {
    return { ok: false, error: "Pre-tax deductions are larger than gross pay." };
  }

  const basis = gross.value - preTax.value;
  const withheld = input.withholdingMode === "percent" ? basis * (withholding.value / 100) : withholding.value;
  if (withheld > basis) {
    return { ok: false, error: "Withholding is larger than pay after pre-tax deductions." };
  }
  const afterWithholding = basis - withheld;
  if (postTax.value > afterWithholding) {
    return { ok: false, error: "Post-tax deductions are larger than the paycheck after withholding." };
  }

  const net = afterWithholding - postTax.value;
  const periods = PERIODS[input.frequency];
  if (!Number.isFinite(net) || !Number.isFinite(withheld)) {
    return { ok: false, error: "This combination is too large to calculate." };
  }

  return {
    ok: true,
    frequency: input.frequency,
    periods,
    gross: roundTo(gross.value, 2),
    preTax: roundTo(preTax.value, 2),
    basis: roundTo(basis, 2),
    withholding: roundTo(withheld, 2),
    postTax: roundTo(postTax.value, 2),
    net: roundTo(net, 2),
    annualGross: roundTo(gross.value * periods, 2),
    annualNet: roundTo(net * periods, 2),
  };
}
