"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { calculateTime, type TimeOperation } from "@/lib/tools/time-calculator";
import { formatNumber } from "@/lib/tools/numbers";

export function TimeCalculatorTool() {
  const [operation, setOperation] = useState<TimeOperation>("add");
  const [startHours, setStartHours] = useState("2");
  const [startMinutes, setStartMinutes] = useState("30");
  const [changeHours, setChangeHours] = useState("1");
  const [changeMinutes, setChangeMinutes] = useState("45");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateTime>>();

  function calculate() {
    const next = calculateTime({
      operation,
      startHoursRaw: startHours,
      startMinutesRaw: startMinutes,
      changeHoursRaw: changeHours,
      changeMinutesRaw: changeMinutes,
    });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok
    ? `${result.negative ? "minus " : ""}${result.hours} hours ${result.minutes} minutes`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Hours and minutes are added or subtracted in this tab. This is not a time zone or a date span.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="time-start-hours" label="Starting hours">
          <input id="time-start-hours" inputMode="numeric" value={startHours} onChange={(event) => setStartHours(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="time-start-minutes" label="Starting minutes">
          <input id="time-start-minutes" inputMode="numeric" value={startMinutes} onChange={(event) => setStartMinutes(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="time-change-hours" label="Hours to add or subtract">
          <input id="time-change-hours" inputMode="numeric" value={changeHours} onChange={(event) => setChangeHours(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="time-change-minutes" label="Minutes to add or subtract">
          <input id="time-change-minutes" inputMode="numeric" value={changeMinutes} onChange={(event) => setChangeMinutes(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Operation"
          name="time-operation"
          value={operation}
          onChange={setOperation}
          options={[{ id: "add", label: "Add" }, { id: "subtract", label: "Subtract" }]}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setOperation("add"); setStartHours("2"); setStartMinutes("30"); setChangeHours("1"); setChangeMinutes("45"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[
            { label: "Result", value: summary },
            { label: "Hours", value: formatNumber(result.hours, 0) },
            { label: "Minutes", value: formatNumber(result.minutes, 0) },
            { label: "Total minutes", value: formatNumber(result.totalMinutes, 0) },
          ]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
