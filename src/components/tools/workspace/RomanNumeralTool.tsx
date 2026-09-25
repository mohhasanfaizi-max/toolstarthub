"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { integerToRoman, romanToInteger } from "@/lib/tools/roman";

export function RomanNumeralTool() {
  const [mode, setMode] = useState<"integer" | "roman">("integer");
  const [value, setValue] = useState("1994");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof integerToRoman>>();

  function convert() {
    const next = mode === "integer" ? integerToRoman(value) : romanToInteger(value);
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
        Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup legend="Direction" name="roman-mode" value={mode} onChange={setMode} options={[{ id: "integer", label: "Number to Roman" }, { id: "roman", label: "Roman to number" }]} />
      </div>
      <div className="mt-4">
        <ToolField id="roman-value" label={mode === "integer" ? "Whole number" : "Roman numeral"}>
          <input id="roman-value" value={value} onChange={(event) => setValue(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={convert}>Convert</Button>
          <CopyButton value={result?.ok ? `${result.value} ${result.roman}` : ""} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setMode("integer"); setValue("1994"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[{ label: "Number", value: String(result.value) }, { label: "Roman numeral", value: result.roman }]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
