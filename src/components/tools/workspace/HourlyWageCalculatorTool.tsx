"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { calculateHourlyWage, type WageMode } from "@/lib/tools/hourly-wage";
import { formatNumber } from "@/lib/tools/numbers";

function money(value: number) {
  return `$${formatNumber(value, 2)}`;
}

export function HourlyWageCalculatorTool() {
  const [mode, setMode] = useState<WageMode>("hourly");
  const [hourly, setHourly] = useState("20");
  const [salary, setSalary] = useState("52000");
  const [hours, setHours] = useState("40");
  const [weeks, setWeeks] = useState("52");
  const [overtime, setOvertime] = useState("0");
  const [multiplier, setMultiplier] = useState("1.5");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateHourlyWage>>();

  function calculate() {
    const next = calculateHourlyWage({
      mode,
      hourlyRaw: hourly,
      salaryRaw: salary,
      hoursRaw: hours,
      weeksRaw: weeks,
      overtimeHoursRaw: overtime,
      multiplierRaw: multiplier,
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
    setMode("hourly");
    setHourly("20");
    setSalary("52000");
    setHours("40");
    setWeeks("52");
    setOvertime("0");
    setMultiplier("1.5");
    setError("");
    setResult(undefined);
  }

  const summary = result?.ok
    ? `Hourly: ${money(result.hourlyRate)}\nWeekly: ${money(result.weeklyPay)}\nAnnual: ${money(result.annualPay)}`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Pay is calculated from the hours and rate you enter. It does not include taxes or deductions.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Starting figure"
          name="wage-mode"
          value={mode}
          onChange={setMode}
          options={[
            { id: "hourly", label: "Hourly rate" },
            { id: "salary", label: "Annual salary" },
          ]}
        />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {mode === "hourly" ? (
          <ToolField id="wage-hourly" label="Hourly rate (USD)">
            <input id="wage-hourly" inputMode="decimal" value={hourly} onChange={(event) => setHourly(event.target.value)} className={toolControlClass} />
          </ToolField>
        ) : (
          <ToolField id="wage-salary" label="Annual salary (USD)">
            <input id="wage-salary" inputMode="decimal" value={salary} onChange={(event) => setSalary(event.target.value)} className={toolControlClass} />
          </ToolField>
        )}
        <ToolField id="wage-hours" label="Hours per week">
          <input id="wage-hours" inputMode="decimal" value={hours} onChange={(event) => setHours(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="wage-weeks" label="Weeks per year" hint="52 is a full year. Use fewer if the job has unpaid weeks.">
          <input id="wage-weeks" inputMode="decimal" value={weeks} onChange={(event) => setWeeks(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="wage-ot" label="Overtime hours per week" hint="Leave 0 if there is no overtime.">
          <input id="wage-ot" inputMode="decimal" value={overtime} onChange={(event) => setOvertime(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="wage-mult" label="Overtime multiplier" hint="1.5 means time and a half. Use 1 if overtime is paid at the regular rate.">
          <input id="wage-mult" inputMode="decimal" value={multiplier} onChange={(event) => setMultiplier(event.target.value)} className={toolControlClass} />
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
        <div className="mt-6">
          <ToolStatGrid
            items={[
              { label: "Hourly rate", value: money(result.hourlyRate) },
              { label: "Weekly pay", value: money(result.weeklyPay) },
              { label: "Monthly pay", value: money(result.monthlyPay) },
              { label: "Annual pay", value: money(result.annualPay) },
              { label: "Overtime pay per year", value: money(result.overtimePay) },
            ]}
          />
        </div>
      ) : null}
    </ToolPanel>
  );
}
