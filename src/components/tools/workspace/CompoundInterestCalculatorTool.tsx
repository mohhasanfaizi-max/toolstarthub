"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import {
  calculateCompoundInterest,
  type CompoundFrequency,
} from "@/lib/tools/compound-interest";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function CompoundInterestCalculatorTool() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [time, setTime] = useState("10");
  const [unit, setUnit] = useState<"years" | "months">("years");
  const [frequency, setFrequency] = useState<CompoundFrequency>("monthly");
  const [contribution, setContribution] = useState("0");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateCompoundInterest>>();

  function calculate() {
    const next = calculateCompoundInterest(principal, rate, time, unit, frequency, contribution);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setPrincipal("10000");
    setRate("5");
    setTime("10");
    setUnit("years");
    setFrequency("monthly");
    setContribution("0");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Final balance: ${money(result.finalBalance)}\nInterest earned: ${money(result.interestEarned)}\nTotal contributions: ${money(result.totalContributions)}`
    : "";
  const peak = result?.ok ? Math.max(...result.years.map((row) => row.balance), 1) : 1;

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This is a mathematical estimate from the numbers you enter. It is not a prediction of investment returns.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="compound-principal" label="Starting amount (USD)">
          <input id="compound-principal" inputMode="decimal" value={principal} onChange={(event) => setPrincipal(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="compound-rate" label="Annual interest rate (%)">
          <input id="compound-rate" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="compound-time" label="Time period">
          <input id="compound-time" inputMode="decimal" value={time} onChange={(event) => setTime(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="compound-contribution" label="Monthly contribution (USD)" hint="Use 0 if you are not adding money each month.">
          <input id="compound-contribution" inputMode="decimal" value={contribution} onChange={(event) => setContribution(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <ToolChoiceGroup
          legend="Time unit"
          name="compound-unit"
          value={unit}
          onChange={setUnit}
          options={[
            { id: "years", label: "Years" },
            { id: "months", label: "Months" },
          ]}
        />
        <ToolChoiceGroup
          legend="Compounding frequency"
          name="compound-frequency"
          value={frequency}
          onChange={setFrequency}
          columns="grid gap-2 sm:grid-cols-2"
          options={[
            { id: "annually", label: "Annually" },
            { id: "semiannually", label: "Semi-annually" },
            { id: "quarterly", label: "Quarterly" },
            { id: "monthly", label: "Monthly" },
            { id: "daily", label: "Daily" },
          ]}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={reset}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <ToolStatGrid
            items={[
              { label: "Final balance", value: money(result.finalBalance) },
              { label: "Starting amount", value: money(result.principal) },
              { label: "Total contributions", value: money(result.totalContributions) },
              { label: "Interest earned", value: money(result.interestEarned) },
              { label: "Interest as a share of money in", value: `${formatNumber(result.growthPercent, 2)}%` },
            ]}
          />
          <ToolOutput label="Year-by-year balance">
            <div className="space-y-2">
              {result.years.map((row) => (
                <div key={row.year} className="grid grid-cols-[3rem_1fr_auto] items-center gap-2 text-sm">
                  <span>{row.year}</span>
                  <span className="h-2 rounded-full bg-muted">
                    <span className="block h-2 rounded-full bg-accent" style={{ width: `${Math.max(4, (row.balance / peak) * 100)}%` }} />
                  </span>
                  <span>{money(row.balance)}</span>
                </div>
              ))}
            </div>
          </ToolOutput>
          <ToolOutput label="Simple interest comparison">
            <p className="text-sm leading-6">
              Simple interest on the starting amount is {money(result.simpleInterest)}. Adding the same contributions with no interest on them gives {money(result.simpleFinal)}. Compound interest ends at {money(result.finalBalance)}. This comparison uses the formula only. It is not a forecast.
            </p>
          </ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
