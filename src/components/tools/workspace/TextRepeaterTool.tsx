"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { repeatText, type TextRepeatSeparator } from "@/lib/tools/text-repeater";

export function TextRepeaterTool() {
  const [source, setSource] = useState("ha");
  const [count, setCount] = useState("3");
  const [separator, setSeparator] = useState<TextRepeatSeparator>("space");
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");

  function run() {
    const next = repeatText(source, count, separator);
    if (!next.ok) {
      setError(next.error);
      setOutput("");
      return;
    }
    setError("");
    setOutput(next.text);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        The copies are built in this tab. The text is not sent to a server.
      </p>
      <div className="mt-4">
        <ToolField id="repeat-source" label="Text to repeat">
          <textarea id="repeat-source" value={source} onChange={(event) => setSource(event.target.value)} rows={4} spellCheck={false} className={`${toolControlClass} min-h-24 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolField id="repeat-count" label="Repeat count" hint="From 1 to 200.">
          <input id="repeat-count" inputMode="numeric" value={count} onChange={(event) => setCount(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Between copies"
          name="repeat-separator"
          value={separator}
          onChange={setSeparator}
          options={[
            { id: "none", label: "Nothing" },
            { id: "space", label: "Space" },
            { id: "newline", label: "New line" },
          ]}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>Repeat</Button>
          <CopyButton value={output} label="Copy" />
          <Button type="button" variant="ghost" onClick={() => { setSource("ha"); setCount("3"); setSeparator("space"); setError(""); setOutput(""); }}>Reset</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolField id="repeat-output" label="Result">
          <textarea id="repeat-output" value={output} readOnly rows={6} spellCheck={false} className={`${toolControlClass} min-h-28 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
    </ToolPanel>
  );
}
