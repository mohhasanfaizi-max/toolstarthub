"use client";

import { useTx } from "@/i18n/tool-text";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { jsonToCsv } from "@/lib/tools/json-to-csv";

export function JsonToCsvTool() {
  const tx = useTx();

  const [source, setSource] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  function run() {
    const result = jsonToCsv(source);
    if (!result.ok) {
      setError(result.error);
      setOutput("");
      setNote("");
      return;
    }
    setError("");
    setOutput(result.csv);
    setNote(tx(`${result.rows} ${result.rows === 1 ? "row" : "rows"}, ${result.columns.length} ${result.columns.length === 1 ? "column" : "columns"}.`));
  }

  function reset() {
    setSource("");
    setOutput("");
    setError("");
    setNote("");
  }

  const blob = output ? new Blob([output], { type: "text/csv;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <ToolField id="json-csv-source" label="JSON" hint="Use an array of objects. Nested values are kept as JSON text in the cell.">
        <textarea id="json-csv-source" value={source} onChange={(event) => setSource(event.target.value)} rows={10} spellCheck={false} className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`} />
      </ToolField>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>{tx("Convert to CSV")}</Button>
          <CopyButton value={output} label="Copy CSV" />
          <DownloadButton blob={blob} fileName="data.csv" label="Download CSV" />
          <Button type="button" variant="ghost" onClick={reset}>{tx("Clear")}</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolField id="json-csv-output" label="CSV" hint={note || undefined}>
          <textarea data-ltr id="json-csv-output" value={output} readOnly rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
      <ToolPrivacyNote>The JSON stays in your browser. It is not uploaded.</ToolPrivacyNote>
    </ToolPanel>
  );
}
