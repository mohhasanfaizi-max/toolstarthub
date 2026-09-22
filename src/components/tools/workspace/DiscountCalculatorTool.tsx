"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CopyButton } from "@/components/tools/CopyButton";
import { calculateDiscount } from "@/lib/tools/discount";
import { formatNumber } from "@/lib/tools/numbers";

export function DiscountCalculatorTool() {
  const [price, setPrice] = useState("");
  const [percent, setPercent] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateDiscount>>();

  function calculate() {
    const next = calculateDiscount(price, percent);
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

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField
          id="discount-price"
          label="Original price"
          hint="Use any currency. The result uses the same number you enter."
        >
          <input
            id="discount-price"
            inputMode="decimal"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className={toolControlClass}
            aria-invalid={Boolean(error)}
          />
        </ToolField>
        <ToolField id="discount-percent" label="Discount percentage">
          <input
            id="discount-percent"
            inputMode="decimal"
            value={percent}
            onChange={(event) => setPercent(event.target.value)}
            className={toolControlClass}
            aria-invalid={Boolean(error)}
          />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={calculate}>
            Calculate
          </Button>
          <Button type="button" variant="secondary" onClick={reset}>
            Reset
          </Button>
          {result?.ok ? (
            <CopyButton value={formatNumber(result.finalPrice, 2)} />
          ) : null}
        </ToolActions>
      </div>

      <div className="mt-6">
        {error ? <ToolError>{error}</ToolError> : null}
        {result?.ok ? (
          <ToolOutput>
            <p className="text-3xl font-semibold tabular-nums">
              {formatNumber(result.finalPrice, 2)}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Final price after discount
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Discount amount: {formatNumber(result.discountAmount, 2)}
            </p>
          </ToolOutput>
        ) : null}
      </div>
    </ToolPanel>
  );
}
