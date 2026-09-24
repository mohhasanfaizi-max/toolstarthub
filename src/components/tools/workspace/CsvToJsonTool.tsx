"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { csvToJson } from "@/lib/tools/csv-to-json";

export function CsvToJsonTool() {
  const [source, setSource] = useState("");
  const [pretty, setPretty] = useState<"pretty" | "compact">("pretty");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  function run() {
    const result = csvToJson(source, pretty === "pretty");
    if (!result.ok) {
      setError(result.error);
      setOutput("");
      setNote("");
      return;
    }
    setError("");
    setOutput(result.json);
    setNote(`${result.rows} ${result.rows === 1 ? "row" : "rows"}.`);
  }

  function reset() {
    setSource("");
    setPretty("pretty");
    setOutput("");
    setError("");
    setNote("");
  }

  const blob = output ? new Blob([output], { type: "application/json;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <ToolField id="csv-json-source" label="CSV" hint="The first row is used as the column names.">
        <textarea id="csv-json-source" value={source} onChange={(event) => setSource(event.target.value)} rows={10} spellCheck={false} className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`} />
      </ToolField>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="JSON format"
          name="csv-json-format"
          value={pretty}
          onChange={setPretty}
          options={[
            { id: "pretty", label: "Formatted JSON" },
            { id: "compact", label: "Compact JSON" },
          ]}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>Convert to JSON</Button>
          <CopyButton value={output} label="Copy" />
          <DownloadButton blob={blob} fileName="data.json" label="Download" />
          <Button type="button" variant="ghost" onClick={reset}>Clear</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolField id="csv-json-output" label="JSON" hint={note || undefined}>
          <textarea id="csv-json-output" value={output} readOnly rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
      <ToolPrivacyNote>The CSV stays in your browser. It is not uploaded.</ToolPrivacyNote>
    </ToolPanel>
  );
}
