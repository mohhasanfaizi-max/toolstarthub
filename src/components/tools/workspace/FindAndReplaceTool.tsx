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
import { findAndReplace, type FindReplaceMode } from "@/lib/tools/find-replace";
import { useTx } from "@/i18n/tool-text";

export function FindAndReplaceTool() {
  const tx = useTx();
  const [source, setSource] = useState("");
  const [find, setFind] = useState("");
  const [replacement, setReplacement] = useState("");
  const [mode, setMode] = useState<FindReplaceMode>("all");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");
  const [count, setCount] = useState<number | null>(null);

  function run() {
    const result = findAndReplace(source, find, replacement, mode, caseSensitive);
    if (!result.ok) {
      setError(result.error);
      setOutput("");
      setCount(null);
      return;
    }
    setError("");
    setOutput(result.text);
    setCount(result.count);
  }

  function reset() {
    setSource("");
    setFind("");
    setReplacement("");
    setMode("all");
    setCaseSensitive(true);
    setError("");
    setOutput("");
    setCount(null);
  }

  return (
    <ToolPanel>
      <ToolField id="replace-source" label={tx("Original text")}>
        <textarea id="replace-source" value={source} onChange={(event) => setSource(event.target.value)} rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
      </ToolField>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="replace-find" label={tx("Find")}>
          <input id="replace-find" value={find} onChange={(event) => setFind(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="replace-with" label={tx("Replacement")}>
          <input id="replace-with" value={replacement} onChange={(event) => setReplacement(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolChoiceGroup
          legend={tx("How many matches")}
          name="replace-mode"
          value={mode}
          onChange={setMode}
          options={[
            { id: "first", label: "Replace first" },
            { id: "all", label: "Replace all" },
          ]}
        />
        <label htmlFor="replace-case" className="flex min-h-11 items-center gap-2 self-end text-sm text-foreground">
          <input id="replace-case" type="checkbox" checked={caseSensitive} onChange={(event) => setCaseSensitive(event.target.checked)} />{tx("Case-sensitive")}</label>
      </div>
      {error ? <div className="mt-4"><ToolError>{tx(error)}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>{tx("Replace")}</Button>
          <CopyButton value={output} label={tx("Copy")} />
          <Button type="button" variant="ghost" onClick={reset}>{tx("Clear")}</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolField id="replace-output" label={tx("Result")} hint={tx(count === null ? undefined : `${count} ${count === 1 ? "replacement" : "replacements"}.`)}>
          <textarea id="replace-output" value={output} readOnly rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
    </ToolPanel>
  );
}
