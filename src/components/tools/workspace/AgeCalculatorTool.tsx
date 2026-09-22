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
import { calculateAge } from "@/lib/tools/age";

export function AgeCalculatorTool() {
  const [birth, setBirth] = useState("");
  const [asOf, setAsOf] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAge>>();

  function calculate() {
    const next = calculateAge(birth, asOf);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }

    setError("");
    setResult(next);
  }

  function reset() {
    setBirth("");
    setAsOf("");
    setError("");
    setResult(undefined);
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="age-birth" label="Date of birth">
          <input
            id="age-birth"
            type="date"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            className={toolControlClass}
            aria-invalid={Boolean(error)}
          />
        </ToolField>
        <ToolField
          id="age-as-of"
          label="Calculate age on"
          hint="Leave blank to use today’s date."
        >
          <input
            id="age-as-of"
            type="date"
            value={asOf}
            onChange={(event) => setAsOf(event.target.value)}
            className={toolControlClass}
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
            <CopyButton
              value={`${result.years} years, ${result.months} months, ${result.days} days`}
            />
          ) : null}
        </ToolActions>
      </div>

      <div className="mt-6">
        {error ? <ToolError>{error}</ToolError> : null}
        {result?.ok ? (
          <ToolOutput>
            <p className="text-3xl font-semibold">
              {result.years} years, {result.months} months, {result.days} days
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Total days: {result.totalDays.toLocaleString("en-US")}
            </p>
          </ToolOutput>
        ) : null}
      </div>
    </ToolPanel>
  );
}
