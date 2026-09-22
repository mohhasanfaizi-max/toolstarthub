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
  formatRandomValue,
  generateRandomNumbers,
  parseRandomBound,
  parseRandomCount,
  RANDOM_COUNT_MAX,
  RANDOM_DECIMAL_PLACES,
  type RandomMode,
} from "@/lib/tools/random";

export function RandomNumberGeneratorTool() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [mode, setMode] = useState<RandomMode>("integer");
  const [unique, setUnique] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const [error, setError] = useState("");

  function generate() {
    const parsedMin = parseRandomBound(min, "minimum");
    const parsedMax = parseRandomBound(max, "maximum");
    const parsedCount = parseRandomCount(count);
    if (!parsedMin.ok) {
      setError(parsedMin.error);
      setValues([]);
      return;
    }
    if (!parsedMax.ok) {
      setError(parsedMax.error);
      setValues([]);
      return;
    }
    if (!parsedCount.ok) {
      setError(parsedCount.error);
      setValues([]);
      return;
    }

    const next = generateRandomNumbers({
      min: parsedMin.value,
      max: parsedMax.value,
      count: parsedCount.value,
      mode,
      unique: mode === "integer" && unique,
    });
    if (!next.ok) {
      setError(next.error);
      setValues([]);
      return;
    }
    setError("");
    setValues(next.values.map((value) => formatRandomValue(value, mode)));
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-3">
        <ToolField id="rand-min" label="Minimum">
          <input id="rand-min" value={min} onChange={(event) => setMin(event.target.value)} className={toolControlClass} inputMode="decimal" />
        </ToolField>
        <ToolField id="rand-max" label="Maximum">
          <input id="rand-max" value={max} onChange={(event) => setMax(event.target.value)} className={toolControlClass} inputMode="decimal" />
        </ToolField>
        <ToolField
          id="rand-count"
          label="How many"
          hint={`1 to ${RANDOM_COUNT_MAX}.`}
        >
          <input id="rand-count" value={count} onChange={(event) => setCount(event.target.value)} className={toolControlClass} inputMode="numeric" />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Mode"
          name="rand-mode"
          value={mode}
          onChange={(next) => {
            setMode(next);
            if (next === "decimal") {
              setUnique(false);
            }
          }}
          options={[
            { id: "integer", label: "Integer" },
            { id: "decimal", label: "Decimal" },
          ]}
        />
      </div>

      {mode === "integer" ? (
        <label className="mt-4 flex min-h-11 items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={unique}
            onChange={(event) => setUnique(event.target.checked)}
          />
          Unique numbers only
        </label>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Decimals use {RANDOM_DECIMAL_PLACES} places from a 32-bit unit interval.
          Values are random, not a cryptographic sample for every statistical use.
        </p>
      )}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={generate}>
            Generate
          </Button>
          <CopyButton value={values.join("\n")} label="Copy results" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setMin("1");
              setMax("100");
              setCount("1");
              setMode("integer");
              setUnique(false);
              setValues([]);
              setError("");
            }}
          >
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {values.length > 0 ? (
          <ToolOutput label="Results">
            <p className="break-all font-mono text-lg tabular-nums">{values.join(", ")}</p>
          </ToolOutput>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Integers are chosen with crypto.getRandomValues() and rejection sampling so
        every value in the range is equally likely. That is suitable for casual
        draws. It is not a guarantee for high-stakes cryptography or scientific
        sampling.
      </p>
    </ToolPanel>
  );
}
