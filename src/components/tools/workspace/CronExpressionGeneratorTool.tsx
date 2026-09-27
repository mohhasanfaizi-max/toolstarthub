"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolOutput, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { buildCron, explainCron } from "@/lib/tools/cron";

type CronMode = "build" | "explain";

const PRESETS = [
  { label: "Every minute", fields: ["*", "*", "*", "*", "*"] },
  { label: "Hourly", fields: ["0", "*", "*", "*", "*"] },
  { label: "Daily at 09:00", fields: ["0", "9", "*", "*", "*"] },
  { label: "Weekdays at 09:00", fields: ["0", "9", "*", "*", "1-5"] },
  { label: "Monthly on the 1st", fields: ["0", "0", "1", "*", "*"] },
];

export function CronExpressionGeneratorTool() {
  const [mode, setMode] = useState<CronMode>("build");
  const [minute, setMinute] = useState("0");
  const [hour, setHour] = useState("9");
  const [dayOfMonth, setDayOfMonth] = useState("*");
  const [month, setMonth] = useState("*");
  const [dayOfWeek, setDayOfWeek] = useState("*");
  const [expression, setExpression] = useState("*/15 * * * *");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof explainCron>>();

  function run() {
    const next = mode === "build" ? buildCron(minute, hour, dayOfMonth, month, dayOfWeek) : explainCron(expression);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Five fields only: minute, hour, day of month, month, and day of week. Sunday is 0. Names such as MON are rejected.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Mode"
          name="cron-mode"
          value={mode}
          onChange={setMode}
          options={[{ id: "build", label: "Build" }, { id: "explain", label: "Explain" }]}
        />
      </div>
      {mode === "build" ? (
        <>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <Button
                key={preset.label}
                type="button"
                variant="secondary"
                onClick={() => {
                  setMinute(preset.fields[0] ?? "*");
                  setHour(preset.fields[1] ?? "*");
                  setDayOfMonth(preset.fields[2] ?? "*");
                  setMonth(preset.fields[3] ?? "*");
                  setDayOfWeek(preset.fields[4] ?? "*");
                }}
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ToolField id="cron-minute" label="Minute" hint="0 to 59, *, a range, a list, or */step.">
              <input id="cron-minute" value={minute} onChange={(event) => setMinute(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="cron-hour" label="Hour" hint="0 to 23.">
              <input id="cron-hour" value={hour} onChange={(event) => setHour(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="cron-day" label="Day of month" hint="1 to 31, or *.">
              <input id="cron-day" value={dayOfMonth} onChange={(event) => setDayOfMonth(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="cron-month" label="Month" hint="1 to 12, or *.">
              <input id="cron-month" value={month} onChange={(event) => setMonth(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="cron-weekday" label="Day of week" hint="0 is Sunday through 6 is Saturday.">
              <input id="cron-weekday" value={dayOfWeek} onChange={(event) => setDayOfWeek(event.target.value)} className={toolControlClass} />
            </ToolField>
          </div>
        </>
      ) : (
        <div className="mt-4">
          <ToolField id="cron-expression" label="Expression">
            <input id="cron-expression" value={expression} onChange={(event) => setExpression(event.target.value)} spellCheck={false} className={`${toolControlClass} font-mono`} />
          </ToolField>
        </div>
      )}
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>{mode === "build" ? "Build" : "Explain"}</Button>
          <CopyButton value={result?.ok ? result.expression : ""} label="Copy expression" />
          <Button type="button" variant="ghost" onClick={() => { setMode("build"); setMinute("0"); setHour("9"); setDayOfMonth("*"); setMonth("*"); setDayOfWeek("*"); setExpression("*/15 * * * *"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <ToolOutput label="Expression"><pre className="font-mono text-sm">{result.expression}</pre></ToolOutput>
          <ToolOutput label="Meaning"><p className="text-sm leading-6">{result.summary}</p></ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
