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
  toolControlClass,
} from "@/components/tools/ToolForm";
import { removeLineBreaks, type LineBreakMode } from "@/lib/tools/line-breaks";
import { useTx } from "@/i18n/tool-text";

export function RemoveLineBreaksTool() {
  const tx = useTx();
  const [source, setSource] = useState("");
  const [mode, setMode] = useState<LineBreakMode>("spaces");
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");

  function run() {
    const result = removeLineBreaks(source, mode);
    if (!result.ok) {
      setError(result.error);
      setOutput("");
      return;
    }
    setError("");
    setOutput(result.text);
  }

  function reset() {
    setSource("");
    setMode("spaces");
    setError("");
    setOutput("");
  }

  return (
    <ToolPanel>
      <ToolField id="breaks-source" label={tx("Original text")}>
        <textarea id="breaks-source" value={source} onChange={(event) => setSource(event.target.value)} rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
      </ToolField>
      <div className="mt-4">
        <ToolChoiceGroup
          legend={tx("Line breaks")}
          name="break-mode"
          value={mode}
          onChange={setMode}
          columns="grid gap-2"
          options={[
            { id: "spaces", label: "Replace line breaks with spaces" },
            { id: "remove", label: "Remove line breaks" },
            { id: "paragraphs", label: "Keep paragraph breaks" },
          ]}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{tx(error)}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>{tx("Clean text")}</Button>
          <CopyButton value={output} label={tx("Copy")} />
          <Button type="button" variant="ghost" onClick={reset}>{tx("Clear")}</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolField id="breaks-output" label={tx("Cleaned text")}>
          <textarea id="breaks-output" value={output} readOnly rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
    </ToolPanel>
  );
}
