"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { calculateAverage } from "@/lib/tools/average";
import { formatNumber } from "@/lib/tools/numbers";

export function AverageCalculatorTool() {
  const [raw, setRaw] = useState("1, 2, 2, 3");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAverage>>();

  function calculate() {
    const next = calculateAverage(raw);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const modeText = result?.ok ? (result.modes.length === 0 ? "No mode" : result.modes.map((value) => formatNumber(value)).join(", ")) : "";
  const summary = result?.ok ? `Mean ${formatNumber(result.mean)}, median ${formatNumber(result.median)}, mode ${modeText}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        The mean, median, and mode are calculated in this tab from the numbers you paste.
      </p>
      <div className="mt-4">
        <ToolField id="average-values" label="Numbers" hint="Separate values with commas, spaces, or new lines.">
          <textarea id="average-values" value={raw} onChange={(event) => setRaw(event.target.value)} rows={6} spellCheck={false} className={`${toolControlClass} min-h-28 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setRaw("1, 2, 2, 3"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[
            { label: "Count", value: formatNumber(result.count, 0) },
            { label: "Mean", value: formatNumber(result.mean) },
            { label: "Median", value: formatNumber(result.median) },
            { label: "Mode", value: modeText },
          ]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
