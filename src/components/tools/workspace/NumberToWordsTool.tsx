"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { numberToWords, wordsToNumber } from "@/lib/tools/number-words";

export function NumberToWordsTool() {
  const [mode, setMode] = useState<"digits" | "words">("digits");
  const [value, setValue] = useState("1234");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof numberToWords>>();

  function calculate() {
    const next = mode === "digits" ? numberToWords(value) : wordsToNumber(value);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok ? `${result.value}\n${result.words}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup legend="Direction" name="words-mode" value={mode} onChange={setMode} options={[{ id: "digits", label: "Number to words" }, { id: "words", label: "Words to number" }]} />
      </div>
      <div className="mt-4">
        <ToolField id="words-value" label={mode === "digits" ? "Whole number" : "Number words"}>
          <input id="words-value" value={value} onChange={(event) => setValue(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Convert</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setMode("digits"); setValue("1234"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[{ label: "Number", value: String(result.value) }, { label: "Words", value: result.words }]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
