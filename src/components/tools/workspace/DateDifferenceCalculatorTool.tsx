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
import { calculateDateDifference } from "@/lib/tools/date-diff";
import { formatNumber } from "@/lib/tools/numbers";

export function DateDifferenceCalculatorTool() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateDateDifference>>();

  function calculate() {
    const next = calculateDateDifference(start, end);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setStart("");
    setEnd("");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `${result.totalDays} days (${result.weeks} weeks and ${result.extraDays} days). Calendar span: ${result.years} years, ${result.months} months, ${result.days} days.`
    : "";

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="date-diff-start" label="Start date">
          <input id="date-diff-start" type="date" value={start} onChange={(event) => setStart(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="date-diff-end" label="End date">
          <input id="date-diff-end" type="date" value={end} onChange={(event) => setEnd(event.target.value)} className={toolControlClass} />
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
        <div className="mt-6 space-y-4">
          <ToolStatGrid
            items={[
              { label: "Total days", value: formatNumber(result.totalDays, 0) },
              { label: "Weeks", value: result.weeks },
              { label: "Extra days", value: result.extraDays },
            ]}
          />
          <ToolOutput label="Calendar span">
            <p className="text-sm leading-6">
              {result.same
                ? "The dates are the same. The difference is 0 days."
                : `${result.years} years, ${result.months} months, and ${result.days} days.`}
            </p>
            {result.reversed ? (
              <p className="mt-2 text-sm leading-6">The end date is before the start date. The counts above run from the later date back to the earlier one.</p>
            ) : null}
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The year, month, and day line follows the calendar. A month is not treated as 30 days. About {formatNumber(result.averageMonths, 1)} months is only an average using 30.44 days, and it is not a second calendar count.
            </p>
          </ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
