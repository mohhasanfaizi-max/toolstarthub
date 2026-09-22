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
  toolControlClass,
} from "@/components/tools/ToolForm";
import {
  currentUnix,
  dateTimeToUnix,
  parseUnixTimestamp,
  type TimestampUnit,
  type TimestampZone,
} from "@/lib/tools/timestamp";

export function TimestampConverterTool() {
  const [unit, setUnit] = useState<TimestampUnit>("seconds");
  const [timestamp, setTimestamp] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("00:00:00");
  const [zone, setZone] = useState<TimestampZone>("local");
  const [error, setError] = useState("");
  const [fromUnix, setFromUnix] = useState<ReturnType<typeof parseUnixTimestamp>>();
  const [toUnix, setToUnix] = useState<ReturnType<typeof dateTimeToUnix>>();

  function convertTimestamp() {
    const next = parseUnixTimestamp(timestamp, unit);
    setFromUnix(next);
    setToUnix(undefined);
    setError(next.ok ? "" : next.error);
  }

  function convertDate() {
    const next = dateTimeToUnix(dateValue, timeValue, zone);
    setToUnix(next);
    setFromUnix(undefined);
    setError(next.ok ? "" : next.error);
  }

  function useCurrent() {
    const now = currentUnix();
    setTimestamp(String(unit === "seconds" ? now.seconds : now.milliseconds));
    setError("");
  }

  function reset() {
    setTimestamp("");
    setDateValue("");
    setTimeValue("00:00:00");
    setZone("local");
    setUnit("seconds");
    setError("");
    setFromUnix(undefined);
    setToUnix(undefined);
  }

  return (
    <ToolPanel>
      <div className="grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="timestamp-to-date-heading">
          <h2 id="timestamp-to-date-heading" className="text-base font-semibold text-foreground">
            Timestamp to date
          </h2>
          <div className="mt-4">
            <ToolChoiceGroup
              legend="Timestamp unit"
              name="timestamp-unit"
              value={unit}
              onChange={setUnit}
              options={[
                { id: "seconds", label: "Seconds" },
                { id: "milliseconds", label: "Milliseconds" },
              ]}
            />
          </div>
          <div className="mt-4">
            <ToolField
              id="unix-input"
              label={unit === "seconds" ? "Unix timestamp (seconds)" : "Unix timestamp (milliseconds)"}
            >
              <input
                id="unix-input"
                inputMode="decimal"
                value={timestamp}
                onChange={(event) => setTimestamp(event.target.value)}
                className={toolControlClass}
              />
            </ToolField>
          </div>
          <div className="mt-4">
            <ToolActions>
              <Button type="button" onClick={convertTimestamp}>
                Convert
              </Button>
              <Button type="button" variant="secondary" onClick={useCurrent}>
                Current timestamp
              </Button>
              {fromUnix?.ok ? <CopyButton value={fromUnix.iso} label="Copy ISO" /> : null}
            </ToolActions>
          </div>
          {fromUnix?.ok ? (
            <div className="mt-4">
              <ToolOutput>
                <p className="text-sm text-muted-foreground">Local</p>
                <p className="font-medium">{fromUnix.local}</p>
                <p className="mt-3 text-sm text-muted-foreground">UTC</p>
                <p className="font-medium">{fromUnix.utc}</p>
                <p className="mt-3 text-sm text-muted-foreground">ISO 8601</p>
                <p className="break-all font-medium">{fromUnix.iso}</p>
                {fromUnix.warning ? (
                  <p className="mt-3 text-sm text-foreground">{fromUnix.warning}</p>
                ) : null}
              </ToolOutput>
            </div>
          ) : null}
        </section>

        <section aria-labelledby="date-to-timestamp-heading">
          <h2 id="date-to-timestamp-heading" className="text-base font-semibold text-foreground">
            Date to timestamp
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ToolField id="timestamp-date" label="Date">
              <input
                id="timestamp-date"
                type="date"
                value={dateValue}
                onChange={(event) => setDateValue(event.target.value)}
                className={toolControlClass}
              />
            </ToolField>
            <ToolField id="timestamp-time" label="Time">
              <input
                id="timestamp-time"
                type="time"
                step={1}
                value={timeValue}
                onChange={(event) => setTimeValue(event.target.value)}
                className={toolControlClass}
              />
            </ToolField>
          </div>
          <div className="mt-4">
            <ToolChoiceGroup
              legend="Interpret as"
              name="timestamp-zone"
              value={zone}
              onChange={setZone}
              options={[
                { id: "local", label: "Browser local time" },
                { id: "utc", label: "UTC" },
              ]}
            />
          </div>
          <div className="mt-4">
            <ToolActions>
              <Button type="button" onClick={convertDate}>
                Convert
              </Button>
              {toUnix?.ok ? (
                <CopyButton
                  value={String(unit === "seconds" ? toUnix.seconds : toUnix.milliseconds)}
                  label="Copy timestamp"
                />
              ) : null}
            </ToolActions>
          </div>
          {toUnix?.ok ? (
            <div className="mt-4">
              <ToolOutput>
                <p className="text-sm text-muted-foreground">Seconds</p>
                <p className="break-all text-2xl font-semibold tabular-nums">
                  {toUnix.seconds}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">Milliseconds</p>
                <p className="break-all text-2xl font-semibold tabular-nums">
                  {toUnix.milliseconds}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">ISO 8601</p>
                <p className="break-all font-medium">{toUnix.iso}</p>
              </ToolOutput>
            </div>
          ) : null}
        </section>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">{error ? <ToolError>{error}</ToolError> : null}</div>
    </ToolPanel>
  );
}
