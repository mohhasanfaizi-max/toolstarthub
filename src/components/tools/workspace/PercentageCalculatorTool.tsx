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
import {
  calculatePercentage,
  type PercentageDirection,
  type PercentageMode,
} from "@/lib/tools/percentage";
import { formatNumber } from "@/lib/tools/numbers";

const modes: Array<{ id: PercentageMode; label: string }> = [
  { id: "of", label: "What is X% of Y?" },
  { id: "is-what", label: "X is what percent of Y?" },
  { id: "change-by", label: "Increase or decrease" },
];

export function PercentageCalculatorTool() {
  const [mode, setMode] = useState<PercentageMode>("of");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [direction, setDirection] = useState<PercentageDirection>("increase");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculatePercentage>>();

  const xLabel =
    mode === "of"
      ? "Percentage (X)"
      : mode === "is-what"
        ? "Value (X)"
        : "Percent change (X)";
  const yLabel =
    mode === "of"
      ? "Number (Y)"
      : mode === "is-what"
        ? "Whole (Y)"
        : "Starting number (Y)";

  function calculate() {
    const next = calculatePercentage({ mode, x, y, direction });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }

    setError("");
    setResult(next);
  }

  function reset() {
    setX("");
    setY("");
    setDirection("increase");
    setError("");
    setResult(undefined);
  }

  return (
    <ToolPanel>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-foreground">Calculation</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {modes.map((item) => (
            <label
              key={item.id}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm"
            >
              <input
                type="radio"
                name="percentage-mode"
                checked={mode === item.id}
                onChange={() => {
                  setMode(item.id);
                  setError("");
                  setResult(undefined);
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ToolField id="percentage-x" label={xLabel}>
          <input
            id="percentage-x"
            inputMode="decimal"
            value={x}
            onChange={(event) => setX(event.target.value)}
            className={toolControlClass}
            aria-invalid={Boolean(error)}
          />
        </ToolField>
        <ToolField id="percentage-y" label={yLabel}>
          <input
            id="percentage-y"
            inputMode="decimal"
            value={y}
            onChange={(event) => setY(event.target.value)}
            className={toolControlClass}
            aria-invalid={Boolean(error)}
          />
        </ToolField>
      </div>

      {mode === "change-by" ? (
        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-foreground">Direction</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["increase", "decrease"] as const).map((item) => (
              <label
                key={item}
                className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm capitalize"
              >
                <input
                  type="radio"
                  name="percentage-direction"
                  checked={direction === item}
                  onChange={() => setDirection(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={calculate}>
            Calculate
          </Button>
          <Button type="button" variant="secondary" onClick={reset}>
            Reset
          </Button>
          {result?.ok ? (
            <CopyButton
              value={
                mode === "is-what"
                  ? `${formatNumber(result.result)}%`
                  : formatNumber(result.result)
              }
            />
          ) : null}
        </ToolActions>
      </div>

      <div className="mt-6">
        {error ? <ToolError>{error}</ToolError> : null}
        {result?.ok ? (
          <ToolOutput>
            <p className="text-3xl font-semibold tabular-nums">
              {mode === "is-what"
                ? `${formatNumber(result.result)}%`
                : formatNumber(result.result)}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{result.label}</p>
            {result.amount !== undefined ? (
              <p className="mt-1 text-sm text-muted-foreground">
                Amount {direction === "increase" ? "added" : "subtracted"}:{" "}
                {formatNumber(result.amount)}
              </p>
            ) : null}
            <p className="mt-1 text-sm text-muted-foreground">{result.detail}</p>
          </ToolOutput>
        ) : null}
      </div>
    </ToolPanel>
  );
}
