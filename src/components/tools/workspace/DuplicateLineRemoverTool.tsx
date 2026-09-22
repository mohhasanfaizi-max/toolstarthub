"use client";

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
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { removeDuplicateLines } from "@/lib/tools/duplicate-lines";

export function DuplicateLineRemoverTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [caseInsensitive, setCaseInsensitive] = useState(false);
  const [trim, setTrim] = useState(false);
  const [dropEmpty, setDropEmpty] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<{ original: number; unique: number; removed: number } | null>(
    null,
  );

  function run() {
    const result = removeDuplicateLines(input, {
      caseInsensitive,
      trim,
      dropEmpty,
    });
    if (!result.ok) {
      setOutput("");
      setStats(null);
      setError(result.error);
      return;
    }
    setError("");
    setOutput(result.output);
    setStats({
      original: result.originalLines,
      unique: result.uniqueLines,
      removed: result.duplicatesRemoved,
    });
  }

  const blob = output ? new Blob([output], { type: "text/plain;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <ToolField id="dup-input" label="Text">
        <textarea
          id="dup-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={10}
          spellCheck={false}
          className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
          placeholder="One line per row"
        />
      </ToolField>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Options</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <CheckOption
            id="dup-case"
            label="Case-insensitive match"
            checked={caseInsensitive}
            onChange={setCaseInsensitive}
          />
          <CheckOption
            id="dup-trim"
            label="Trim spaces before comparing"
            checked={trim}
            onChange={setTrim}
          />
          <CheckOption
            id="dup-empty"
            label="Remove empty lines"
            checked={dropEmpty}
            onChange={setDropEmpty}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          First occurrence of each line is kept, in the original order.
        </p>
      </fieldset>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={run}>
            Remove duplicates
          </Button>
          <CopyButton value={output} />
          <DownloadButton blob={blob} fileName="unique-lines.txt" label="Download .txt" />
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
              { label: "Unique lines", value: stats.unique },
              { label: "Removed", value: stats.removed },
            ]}
          />
        ) : null}
        <ToolField id="dup-output" label="Result">
          <textarea
            id="dup-output"
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
