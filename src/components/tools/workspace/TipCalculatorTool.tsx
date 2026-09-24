"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculateTip } from "@/lib/tools/tip";
import { formatNumber } from "@/lib/tools/numbers";

const PRESETS = ["10", "15", "18", "20", "25"];

export function TipCalculatorTool() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("15");
  const [people, setPeople] = useState("1");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateTip>>();

  function calculate() {
    const next = calculateTip(bill, percent, people);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setBill("");
    setPercent("15");
    setPeople("1");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? [
        `Tip amount: ${formatNumber(result.tipAmount, 2)}`,
        `Total bill: ${formatNumber(result.total, 2)}`,
        `Tip per person: ${formatNumber(result.tipPerPerson, 2)}`,
        `Total per person: ${formatNumber(result.totalPerPerson, 2)}`,
      ].join("\n")
    : "";

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="tip-bill" label="Bill amount" hint="Any currency. The result uses the same numbers you enter.">
          <input id="tip-bill" inputMode="decimal" value={bill} onChange={(event) => setBill(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="tip-people" label="Number of people">
          <input id="tip-people" inputMode="numeric" value={people} onChange={(event) => setPeople(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Tip percentage</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRESETS.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={percent === value}
              className={`min-h-11 rounded-xl border px-3 py-2 text-sm ${percent === value ? "border-accent bg-accent-soft font-medium text-foreground" : "border-border bg-background text-foreground"}`}
              onClick={() => setPercent(value)}
            >
              {value}%
            </button>
          ))}
        </div>
        <div className="mt-3 max-w-xs">
          <label htmlFor="tip-percent" className="block text-sm font-medium text-foreground">Custom percentage</label>
          <input id="tip-percent" inputMode="decimal" value={percent} onChange={(event) => setPercent(event.target.value)} className={toolControlClass} />
        </div>
      </fieldset>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={reset}>Clear</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <ToolStatGrid
            items={[
              { label: "Tip amount", value: formatNumber(result.tipAmount, 2) },
              { label: "Total bill", value: formatNumber(result.total, 2) },
              { label: "Tip per person", value: formatNumber(result.tipPerPerson, 2) },
              { label: "Total per person", value: formatNumber(result.totalPerPerson, 2) },
            ]}
          />
          <ToolOutput label="Split">
            <p className="text-sm leading-6">Split across {result.people} {result.people === 1 ? "person" : "people"}.</p>
          </ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
