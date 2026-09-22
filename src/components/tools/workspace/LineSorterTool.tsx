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
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { sortLines, type LineSortMode } from "@/lib/tools/line-sort";

export function LineSorterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<LineSortMode>("az");
  const [caseInsensitive, setCaseInsensitive] = useState(true);
  const [trim, setTrim] = useState(false);
  const [ignoreEmpty, setIgnoreEmpty] = useState(false);
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<{ original: number; result: number } | null>(null);

  function run() {
    const result = sortLines(input, {
      mode,
      caseInsensitive,
      trim,
      ignoreEmpty,
      removeDuplicates,
    });
    if (!result.ok) {
      setOutput("");
      setStats(null);
      setError(result.error);
      return;
    }
    setError("");
    setOutput(result.output);
    setStats({ original: result.originalLines, result: result.resultLines });
  }

  const blob = output ? new Blob([output], { type: "text/plain;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <ToolField id="sort-input" label="Text">
        <textarea
          id="sort-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={10}
          spellCheck={false}
          className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
          placeholder="One item per line"
        />
      </ToolField>

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Sort"
          name="sort-mode"
          value={mode}
          onChange={setMode}
          columns="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
          options={[
            { id: "az", label: "A → Z" },
            { id: "za", label: "Z → A" },
            { id: "num-asc", label: "Numeric ascending" },
            { id: "num-desc", label: "Numeric descending" },
            { id: "short", label: "Shortest → longest" },
            { id: "long", label: "Longest → shortest" },
          ]}
        />
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Options</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <CheckOption
            id="sort-case"
            label="Case-insensitive"
            checked={caseInsensitive}
            onChange={setCaseInsensitive}
          />
          <CheckOption id="sort-trim" label="Trim before comparing" checked={trim} onChange={setTrim} />
          <CheckOption
            id="sort-empty"
            label="Ignore empty lines"
            checked={ignoreEmpty}
            onChange={setIgnoreEmpty}
          />
          <CheckOption
            id="sort-dup"
            label="Remove duplicates"
            checked={removeDuplicates}
            onChange={setRemoveDuplicates}
          />
        </div>
      </fieldset>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={run}>
            Sort lines
          </Button>
          <CopyButton value={output} />
          <DownloadButton blob={blob} fileName="sorted.txt" label="Download .txt" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              setOutput("");
              setStats(null);
              setError("");
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {stats ? (
          <ToolStatGrid
            items={[
              { label: "Original lines", value: stats.original },
              { label: "Result lines", value: stats.result },
            ]}
          />
        ) : null}
        <ToolField id="sort-output" label="Result">
          <textarea
            id="sort-output"
            value={output}
            readOnly
            rows={8}
            spellCheck={false}
            className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`}
          />
        </ToolField>
      </div>

      <ToolPrivacyNote>
        Your text is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

function CheckOption({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex min-h-11 items-center gap-2 text-sm text-foreground">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      {label}
    </label>
  );
}
