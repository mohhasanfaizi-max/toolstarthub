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
import { calculateBusinessDays } from "@/lib/tools/business-days";

export function BusinessDaysCalculatorTool() {
  const [start, setStart] = useState("2024-01-01");
  const [end, setEnd] = useState("2024-01-05");
  const [includeEnd, setIncludeEnd] = useState(true);
  const [excluded, setExcluded] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateBusinessDays>>();

  function calculate() {
    const next = calculateBusinessDays({
      startRaw: start,
      endRaw: end,
      includeEnd,
      excludedRaw: excluded,
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
    setStart("2024-01-01");
    setEnd("2024-01-05");
    setIncludeEnd(true);
    setExcluded("");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Business days: ${result.businessDays}\nWeekend days: ${result.weekendDays}\nCalendar days: ${result.calendarDays}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Business days are Monday through Friday. This page does not apply a holiday calendar. Exclude any dates you do not want counted.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="biz-start" label="Start date">
          <input id="biz-start" type="date" value={start} onChange={(event) => setStart(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="biz-end" label="End date">
          <input id="biz-end" type="date" value={end} onChange={(event) => setEnd(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <label className="mt-4 flex min-h-11 items-center gap-2 text-sm">
        <input type="checkbox" checked={includeEnd} onChange={(event) => setIncludeEnd(event.target.checked)} />
        Include the end date
      </label>
      <div className="mt-4">
        <ToolField id="biz-excluded" label="Excluded dates" hint="Optional. One YYYY-MM-DD date per line. Duplicates are ignored.">
          <textarea id="biz-excluded" value={excluded} onChange={(event) => setExcluded(event.target.value)} rows={4} className={toolControlClass} />
        </ToolField>
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
              { label: "Business days", value: String(result.businessDays) },
              { label: "Weekend days", value: String(result.weekendDays) },
              { label: "Calendar days in the range", value: String(result.calendarDays) },
              { label: "Excluded weekdays", value: String(result.excludedWeekdays.length) },
            ]}
          />
          {result.reversed ? (
            <p className="text-sm leading-6 text-muted-foreground">The end date was earlier than the start date, so the count uses the span between them.</p>
          ) : null}
          {result.excludedWeekdays.length > 0 ? (
            <ToolOutput label="Excluded weekdays inside the range">
              <p className="text-sm leading-6">{result.excludedWeekdays.join(", ")}</p>
            </ToolOutput>
          ) : null}
        </div>
      ) : null}
    </ToolPanel>
  );
}
