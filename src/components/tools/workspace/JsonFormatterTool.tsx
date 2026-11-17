"use client";

import { useTx } from "@/i18n/tool-text";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CopyButton } from "@/components/tools/CopyButton";
import { formatJson, minifyJson, repairJson, validateJson } from "@/lib/tools/json";

const SAMPLE = `{
  "name": "Tools Star Hub",
  "free": true,
  "tools": ["json", "utm", "percentage"]
}`;

const REPAIR_SAMPLE = `{
  // example only
  name: 'Ada',
  tools: ['json',],
}`;

function JsonTreeNode({
  name,
  value,
  depth,
}: {
  name?: string;
  value: unknown;
  depth: number;
}) {
  const [open, setOpen] = useState(depth < 2);
  const isObject = value !== null && typeof value === "object";
  const entries = isObject
    ? Array.isArray(value)
      ? value.map((item, index) => [String(index), item] as const)
      : Object.entries(value)
    : [];
  const label = Array.isArray(value)
    ? `Array(${value.length})`
    : isObject
      ? `Object(${entries.length})`
      : JSON.stringify(value);

  if (!isObject) {
    return (
      <div className="font-mono text-sm">
        {name !== undefined ? <span className="text-muted-foreground">{name}: </span> : null}
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div className="font-mono text-sm">
      <button
        type="button"
        className="rounded px-1 text-left hover:bg-muted"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "▼" : "▶"} {name !== undefined ? `${name}: ` : ""}
        {label}
      </button>
      {open ? (
        <div className="ms-4 border-l border-border ps-3">
          {entries.map(([key, child]) => (
            <JsonTreeNode key={key} name={key} value={child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function JsonFormatterTool() {
  const tx = useTx();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [changes, setChanges] = useState<string[]>([]);
  const [view, setView] = useState<"text" | "tree">("text");

  const treeValue = useMemo(() => {
    if (!output.trim()) return undefined;
    try {
      return JSON.parse(output) as unknown;
    } catch {
      return undefined;
    }
  }, [output]);

  function run(
    action: (value: string) => ReturnType<typeof formatJson>,
    successMessage?: string,
  ) {
    const next = action(input);
    setChanges([]);
    if (!next.ok) {
      setError(next.error);
      setMessage("");
      return;
    }

    setError("");
    setMessage(successMessage ?? "");
    if (successMessage) {
      return;
    }
    setOutput(next.output);
  }

  function runRepair() {
    const next = repairJson(input);
    if (!next.ok) {
      setError(next.error);
      setMessage("");
      setChanges([]);
      return;
    }
    setError("");
    setOutput(next.output);
    setChanges(next.changes);
    setMessage(
      next.changes.length === 0
        ? tx("This was already valid JSON. Nothing was repaired.")
        : tx("Repair applied the safe fixes listed below. Values were not changed."),
    );
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolField id="json-input" label="JSON input">
          <textarea
            id="json-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={12}
            spellCheck={false}
            className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
            placeholder='{"key": "value"}'
          />
        </ToolField>
        <ToolField id="json-output" label="Result">
          <div className="mb-2 flex gap-2">
            <Button
              type="button"
              variant={view === "text" ? "primary" : "secondary"}
              onClick={() => setView("text")}
            >
              {tx("Text view")}
            </Button>
            <Button
              type="button"
              variant={view === "tree" ? "primary" : "secondary"}
              onClick={() => setView("tree")}
              disabled={!treeValue}
              data-testid="json-tree-toggle"
            >
              {tx("Tree view")}
            </Button>
          </div>
          {view === "tree" && treeValue !== undefined ? (
            <div
              data-testid="json-tree"
              data-ltr
              dir="ltr"
              className={`${toolControlClass} min-h-48 overflow-auto p-3`}
            >
              <JsonTreeNode value={treeValue} depth={0} />
            </div>
          ) : (
            <textarea data-ltr
              id="json-output"
              value={output}
              readOnly
              rows={12}
              spellCheck={false}
              className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
            />
          )}
        </ToolField>
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => run(formatJson)}>
            {tx("Format")}
          </Button>
          <Button type="button" variant="secondary" onClick={() => run(minifyJson)}>
            {tx("Minify")}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => run(validateJson, "This JSON is valid.")}
          >
            {tx("Validate")}
          </Button>
          <Button type="button" variant="secondary" onClick={runRepair} data-testid="json-repair">
            {tx("Repair")}
          </Button>
          <Button type="button" variant="secondary" onClick={() => setInput(SAMPLE)}>
            {tx("Example JSON")}
          </Button>
          <Button type="button" variant="ghost" onClick={() => setInput(REPAIR_SAMPLE)}>
            {tx("Example with safe repairs")}
          </Button>
          <CopyButton value={output} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              setOutput("");
              setError("");
              setMessage("");
              setChanges([]);
              setView("text");
            }}
          >
            {tx("Clear")}
          </Button>
        </ToolActions>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {tx("Format, Minify and Validate still require standard JSON. Repair only applies safe syntax fixes: comments, trailing commas, single quotes, and unquoted keys. It shows what it changed and will not guess or rewrite values.")}
      </p>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {message ? (
          <p className="rounded-2xl bg-accent-soft px-4 py-3 text-sm text-foreground">
            {message}
          </p>
        ) : null}
        {changes.length > 0 ? (
          <ul data-testid="json-repair-changes" className="mt-3 list-disc space-y-1 ps-5 text-sm text-foreground">
            {changes.map((change) => (
              <li key={change}>{tx(change)}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </ToolPanel>
  );
}
