"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculateSalesTax } from "@/lib/tools/sales-tax";
import { formatNumber } from "@/lib/tools/numbers";

export function SalesTaxCalculatorTool() {
  const [price, setPrice] = useState("");
  const [percent, setPercent] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateSalesTax>>();

  function calculate() {
    const next = calculateSalesTax(price, percent);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setPrice("");
    setPercent("");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Tax amount: ${formatNumber(result.taxAmount, 2)}\nFinal price: ${formatNumber(result.finalPrice, 2)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Enter the price and the tax rate as plain numbers. The labels stay the same no matter which currency you have in mind.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="tax-price" label="Original price">
          <input id="tax-price" inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="tax-percent" label="Sales tax percentage">
          <input id="tax-percent" inputMode="decimal" value={percent} onChange={(event) => setPercent(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={reset}>Clear</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid
            items={[
              { label: "Tax amount", value: formatNumber(result.taxAmount, 2) },
              { label: "Final price", value: formatNumber(result.finalPrice, 2) },
            ]}
          />
        </div>
      ) : null}
    </ToolPanel>
  );
}
