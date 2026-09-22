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
import { calculatePercentageChange } from "@/lib/tools/percentage-change";
import { formatNumber } from "@/lib/tools/numbers";

export function PercentageChangeCalculatorTool() {
  const [original, setOriginal] = useState("");
  const [nextValue, setNextValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] =
    useState<ReturnType<typeof calculatePercentageChange>>();

  function calculate() {
    const next = calculatePercentageChange(original, nextValue);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }

    setError("");
    setResult(next);
  }

  function reset() {
    setOriginal("");
    setNextValue("");
    setError("");
    setResult(undefined);
  }

  const directionLabel =
    result?.ok && result.direction === "increase"
      ? "Increase"
      : result?.ok && result.direction === "decrease"
        ? "Decrease"
        : "No change";

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="change-original" label="Original value">
          <input
            id="change-original"
            inputMode="decimal"
            value={original}
            onChange={(event) => setOriginal(event.target.value)}
            className={toolControlClass}
            aria-invalid={Boolean(error)}
          />
        </ToolField>
        <ToolField id="change-new" label="New value">
          <input
            id="change-new"
            inputMode="decimal"
            value={nextValue}
            onChange={(event) => setNextValue(event.target.value)}
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
            <CopyButton value={`${formatNumber(result.change)}%`} />
          ) : null}
        </ToolActions>
      </div>

      <div className="mt-6">
        {error ? <ToolError>{error}</ToolError> : null}
        {result?.ok ? (
          <ToolOutput>
            <p className="text-3xl font-semibold tabular-nums">
              {formatNumber(Math.abs(result.change))}% {directionLabel.toLowerCase()}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Signed change: {formatNumber(result.change)}%. Difference:{" "}
              {formatNumber(result.difference)}.
            </p>
          </ToolOutput>
        ) : null}
      </div>
    </ToolPanel>
  );
}
