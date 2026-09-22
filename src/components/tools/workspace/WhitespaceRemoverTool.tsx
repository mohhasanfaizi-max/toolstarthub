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
import {
  DEFAULT_WHITESPACE_OPTIONS,
  cleanWhitespace,
  type WhitespaceOptions,
} from "@/lib/tools/whitespace";

export function WhitespaceRemoverTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [options, setOptions] = useState<WhitespaceOptions>(DEFAULT_WHITESPACE_OPTIONS);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<{
    originalLines: number;
    resultLines: number;
    originalChars: number;
    resultChars: number;
  } | null>(null);

  function run() {
    const result = cleanWhitespace(input, options);
    if (!result.ok) {
      setOutput("");
      setStats(null);
      setError(result.error);
      return;
    }
    setError("");
    setOutput(result.output);
    setStats({
      originalLines: result.originalLines,
      resultLines: result.resultLines,
      originalChars: result.originalChars,
      resultChars: result.resultChars,
    });
  }

  function update<K extends keyof WhitespaceOptions>(key: K, value: WhitespaceOptions[K]) {
    setOptions((current) => ({ ...current, [key]: value }));
  }

  const blob = output ? new Blob([output], { type: "text/plain;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <ToolField id="ws-input" label="Text">
        <textarea
          id="ws-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={10}
          spellCheck={false}
          className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
        />
      </ToolField>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Cleanup options</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <CheckOption
            id="ws-trim-lines"
            label="Trim each line"
            checked={options.trimLines}
            onChange={(value) => update("trimLines", value)}
          />
          <CheckOption
            id="ws-leading"
            label="Remove leading whitespace"
            checked={options.trimLeading}
            onChange={(value) => update("trimLeading", value)}
          />
          <CheckOption
            id="ws-trailing"
            label="Remove trailing whitespace"
            checked={options.trimTrailing}
            onChange={(value) => update("trimTrailing", value)}
          />
          <CheckOption
            id="ws-collapse"
            label="Collapse repeated spaces"
            checked={options.collapseSpaces}
            onChange={(value) => update("collapseSpaces", value)}
          />
          <CheckOption
            id="ws-tabs"
            label="Convert tabs to spaces"
            checked={options.tabsToSpaces}
            onChange={(value) => update("tabsToSpaces", value)}
          />
          <CheckOption
            id="ws-blank"
            label="Remove blank lines"
            checked={options.removeBlankLines}
            onChange={(value) => update("removeBlankLines", value)}
          />
          <CheckOption
            id="ws-collapse-blank"
            label="Collapse multiple blank lines"
            checked={options.collapseBlankLines}
            onChange={(value) => update("collapseBlankLines", value)}
          />
          <CheckOption
            id="ws-doc"
            label="Trim entire document"
            checked={options.trimDocument}
            onChange={(value) => update("trimDocument", value)}
          />
        </div>
        {options.tabsToSpaces ? (
          <div className="mt-3">
            <label htmlFor="ws-tab-width" className="text-sm font-medium text-foreground">
              Tab width
            </label>
            <select
              id="ws-tab-width"
              value={options.tabWidth}
              onChange={(event) => update("tabWidth", Number(event.target.value) === 4 ? 4 : 2)}
              className={toolControlClass}
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
            </select>
          </div>
        ) : null}
      </fieldset>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={run}>
            Clean text
          </Button>
          <CopyButton value={output} />
          <DownloadButton blob={blob} fileName="cleaned.txt" label="Download .txt" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              setOutput("");
              setStats(null);
              setError("");
              setOptions(DEFAULT_WHITESPACE_OPTIONS);
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
              { label: "Lines before", value: stats.originalLines },
              { label: "Lines after", value: stats.resultLines },
              { label: "Characters before", value: stats.originalChars },
              { label: "Characters after", value: stats.resultChars },
            ]}
          />
        ) : null}
        <ToolField id="ws-output" label="Result">
          <textarea
            id="ws-output"
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
