"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { morseToText, textToMorse } from "@/lib/tools/morse";

export function MorseCodeTool() {
  const [mode, setMode] = useState<"text" | "morse">("text");
  const [value, setValue] = useState("HELLO WORLD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof textToMorse>>();

  function convert() {
    const next = mode === "text" ? textToMorse(value) : morseToText(value);
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
        International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup legend="Direction" name="morse-mode" value={mode} onChange={setMode} options={[{ id: "text", label: "Text to Morse" }, { id: "morse", label: "Morse to text" }]} />
      </div>
      <div className="mt-4">
        <ToolField id="morse-value" label={mode === "text" ? "Text" : "Morse code"}>
          <textarea id="morse-value" value={value} onChange={(event) => setValue(event.target.value)} rows={3} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={convert}>Convert</Button>
          <CopyButton value={result?.ok ? (mode === "text" ? result.morse : result.text) : ""} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setMode("text"); setValue("HELLO WORLD"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[{ label: "Text", value: result.text }, { label: "Morse", value: result.morse }]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
