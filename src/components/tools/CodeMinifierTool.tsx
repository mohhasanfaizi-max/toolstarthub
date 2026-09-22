"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { minifyStats } from "@/lib/tools/minify-stats";

type MinifyOutcome =
  | { ok: true; output: string }
  | { ok: false; error: string };

type CodeMinifierToolProps = {
  id: string;
  label: string;
  placeholder: string;
  sample: string;
  minify: (input: string) => MinifyOutcome | Promise<MinifyOutcome>;
};

export function CodeMinifierTool({
  id,
  label,
  placeholder,
  sample,
  minify,
}: CodeMinifierToolProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function run() {
    setBusy(true);
    setError("");
    try {
      const next = await minify(input);
      if (!next.ok) {
        setOutput("");
        setError(next.error);
        return;
      }
      setOutput(next.output);
    } finally {
      setBusy(false);
    }
  }

  const stats = output ? minifyStats(input, output) : null;

  return (
    <ToolPanel>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolField id={`${id}-input`} label={label}>
          <textarea
            id={`${id}-input`}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={12}
            spellCheck={false}
            className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
            placeholder={placeholder}
          />
        </ToolField>
        <ToolField id={`${id}-output`} label="Minified output">
          <textarea
            id={`${id}-output`}
            value={output}
            readOnly
            rows={12}
            spellCheck={false}
            className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
          />
        </ToolField>
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => void run()} disabled={busy}>
            {busy ? "Minifying…" : "Minify"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => setInput(sample)}>
            Example
          </Button>
          <CopyButton value={output} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              setOutput("");
              setError("");
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {stats ? (
          <ToolStatGrid
            items={[
              { label: "Before", value: stats.beforeCount },
              { label: "After", value: stats.afterCount },
              {
                label: "Reduction",
                value: `${Math.max(0, stats.reduction).toFixed(1)}%`,
              },
            ]}
          />
        ) : null}
      </div>
    </ToolPanel>
  );
}
