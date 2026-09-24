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
import { calculateSavingsGoal, type SavingsFrequency } from "@/lib/tools/savings-goal";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

const frequencyLabel: Record<SavingsFrequency, string> = {
  weekly: "week",
  biweekly: "two weeks",
  monthly: "month",
  annual: "year",
};

export function SavingsGoalCalculatorTool() {
  const [target, setTarget] = useState("10000");
  const [current, setCurrent] = useState("2000");
  const [rate, setRate] = useState("3");
  const [years, setYears] = useState("3");
  const [frequency, setFrequency] = useState<SavingsFrequency>("monthly");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateSavingsGoal>>();

  function calculate() {
    const next = calculateSavingsGoal({
      targetRaw: target,
      currentRaw: current,
      rateRaw: rate,
      yearsRaw: years,
      frequency,
    });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setTarget("10000");
    setCurrent("2000");
    setRate("3");
    setYears("3");
    setFrequency("monthly");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Required contribution: ${money(result.contribution)} per ${frequencyLabel[result.frequency]}\nInterest: ${money(result.interest)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        An estimate of the contribution that reaches a target from the rate you enter. The rate is an assumption, not a promised return.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="save-target" label="Savings goal (USD)">
          <input id="save-target" inputMode="decimal" value={target} onChange={(event) => setTarget(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="save-current" label="Current savings (USD)">
          <input id="save-current" inputMode="decimal" value={current} onChange={(event) => setCurrent(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="save-rate" label="Annual interest rate (%)" hint="Use 0 if you do not want to assume interest.">
          <input id="save-rate" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="save-years" label="Time to goal (years)">
          <input id="save-years" inputMode="decimal" value={years} onChange={(event) => setYears(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Contribution frequency"
          name="save-frequency"
          value={frequency}
          onChange={setFrequency}
          options={[
            { id: "monthly", label: "Monthly" },
            { id: "biweekly", label: "Every two weeks" },
            { id: "weekly", label: "Weekly" },
            { id: "annual", label: "Annual" },
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
              { label: `Required contribution per ${frequencyLabel[result.frequency]}`, value: money(result.contribution) },
              { label: "Total contributions", value: money(result.totalContributions) },
              { label: "Estimated interest", value: money(result.interest) },
              { label: "Target amount", value: money(result.target) },
              { label: "Current savings", value: money(result.current) },
              { label: "Number of periods", value: formatNumber(result.periods, 2) },
            ]}
          />
          <ToolOutput label="Rate assumptions">
            <p className="mb-2 text-sm leading-6">Same goal, current savings, time, and frequency. These rates are samples, not forecasts.</p>
            <div className="overflow-auto">
              <table className="w-full min-w-[24rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Assumed rate</th>
                    <th className="py-2 pr-3 font-medium">Contribution</th>
                    <th className="py-2 font-medium">Estimated interest</th>
                  </tr>
                </thead>
                <tbody>
                  {result.scenarios.map((row) => (
                    <tr key={row.rate} className="border-b border-border">
                      <td className="py-2 pr-3">{row.rate}%</td>
                      <td className="py-2 pr-3">{money(row.contribution)}</td>
                      <td className="py-2">{money(row.interest)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ToolOutput>
          <ToolOutput label="Year-by-year balance">
            <div className="max-h-80 overflow-auto">
              <table className="w-full min-w-[24rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Year</th>
                    <th className="py-2 pr-3 font-medium">Contributed that year</th>
                    <th className="py-2 font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.years.map((row) => (
                    <tr key={row.year} className="border-b border-border">
                      <td className="py-2 pr-3">{row.year}</td>
                      <td className="py-2 pr-3">{money(row.contributed)}</td>
                      <td className="py-2">{money(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
