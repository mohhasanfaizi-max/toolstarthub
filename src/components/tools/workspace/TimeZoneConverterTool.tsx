"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { convertTimeZone, listTimeZones } from "@/lib/tools/time-zone";

export function TimeZoneConverterTool() {
  const zones = useMemo(() => listTimeZones(), []);
  const [date, setDate] = useState("2024-06-15");
  const [time, setTime] = useState("12:00");
  const [source, setSource] = useState("America/New_York");
  const [target, setTarget] = useState("Europe/London");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof convertTimeZone>>();

  function calculate() {
    const next = convertTimeZone({ dateRaw: date, timeRaw: time, sourceZone: source, targetZone: target });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok ? `${result.sourceDateTime} ${result.sourceOffset}\n${result.targetDateTime} ${result.targetOffset}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        The same instant is shown in both zones from the browser time-zone list. The computer&apos;s own zone is not used as the result.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="tz-date" label="Date">
          <input id="tz-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="tz-time" label="Time">
          <input id="tz-time" type="time" value={time} onChange={(event) => setTime(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="tz-source" label="Source time zone">
          <select id="tz-source" value={source} onChange={(event) => setSource(event.target.value)} className={toolControlClass}>
            {zones.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
          </select>
        </ToolField>
        <ToolField id="tz-target" label="Target time zone">
          <select id="tz-target" value={target} onChange={(event) => setTarget(event.target.value)} className={toolControlClass}>
            {zones.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
          </select>
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Convert</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setDate("2024-06-15"); setTime("12:00"); setSource("America/New_York"); setTarget("Europe/London"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-3">
          <ToolStatGrid items={[
            { label: "Source date and time", value: result.sourceDateTime },
            { label: "Source UTC offset", value: result.sourceOffset },
            { label: "Target date and time", value: result.targetDateTime },
            { label: "Target UTC offset", value: result.targetOffset },
          ]} />
          {result.ambiguous ? (
            <p className="text-sm leading-6 text-muted-foreground">This local time happens twice because clocks fall back. The earlier instant is shown.</p>
          ) : null}
        </div>
      ) : null}
    </ToolPanel>
  );
}
