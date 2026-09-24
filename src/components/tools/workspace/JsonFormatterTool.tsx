"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CopyButton } from "@/components/tools/CopyButton";
import { formatJson, minifyJson, validateJson } from "@/lib/tools/json";

const SAMPLE = `{
  "name": "Tools Star Hub",
  "free": true,
  "tools": ["json", "utm", "percentage"]
}`;

export function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function run(
    action: (value: string) => ReturnType<typeof formatJson>,
    successMessage?: string,
  ) {
    const next = action(input);
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
          <textarea
            id="json-output"
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
          <Button type="button" onClick={() => run(formatJson)}>
            Format
          </Button>
          <Button type="button" variant="secondary" onClick={() => run(minifyJson)}>
            Minify
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => run(validateJson, "This JSON is valid.")}
          >
            Validate
          </Button>
          <Button type="button" variant="secondary" onClick={() => setInput(SAMPLE)}>
            Example JSON
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
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {message ? (
          <p className="rounded-2xl bg-accent-soft px-4 py-3 text-sm text-foreground">
            {message}
          </p>
        ) : null}
      </div>
    </ToolPanel>
  );
}
