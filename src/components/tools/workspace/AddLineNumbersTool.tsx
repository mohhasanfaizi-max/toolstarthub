"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { addLineNumbers } from "@/lib/tools/line-numbers";

export function AddLineNumbersTool() {
  const [source, setSource] = useState("");
  const [start, setStart] = useState("1");
  const [separator, setSeparator] = useState(". ");
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");

  function run() {
    const result = addLineNumbers(source, start, separator);
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
    setStart("1");
    setSeparator(". ");
    setError("");
    setOutput("");
  }

  return (
    <ToolPanel>
      <ToolField id="lines-source" label="Text">
        <textarea id="lines-source" value={source} onChange={(event) => setSource(event.target.value)} rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
      </ToolField>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="lines-start" label="Starting number">
          <input id="lines-start" inputMode="numeric" value={start} onChange={(event) => setStart(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="lines-separator" label="Separator" hint="Placed between the number and the original line.">
          <input id="lines-separator" value={separator} onChange={(event) => setSeparator(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>Add numbers</Button>
          <CopyButton value={output} label="Copy" />
          <Button type="button" variant="ghost" onClick={reset}>Clear</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolField id="lines-output" label="Numbered lines">
          <textarea id="lines-output" value={output} readOnly rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
    </ToolPanel>
  );
}
