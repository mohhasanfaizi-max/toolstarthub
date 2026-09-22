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
import { decodeBase64, encodeBase64 } from "@/lib/tools/base64";

export function Base64EncoderTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function encode() {
    const next = encodeBase64(input);
    if (!next.ok) {
      setError(next.error);
      return;
    }
    setError("");
    setOutput(next.output);
  }

  function decode() {
    const next = decodeBase64(input);
    if (!next.ok) {
      setError(next.error);
      return;
    }
    setError("");
    setOutput(next.output);
  }

  function swap() {
    setInput(output);
    setOutput(input);
    setError("");
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolField id="base64-input" label="Input">
          <textarea
            id="base64-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={10}
            spellCheck={false}
            className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
            placeholder="Text or Base64"
          />
        </ToolField>
        <ToolField id="base64-output" label="Output">
          <textarea
            id="base64-output"
            value={output}
            readOnly
            rows={10}
            spellCheck={false}
            className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
          />
        </ToolField>
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={encode}>
            Encode
          </Button>
          <Button type="button" variant="secondary" onClick={decode}>
            Decode
          </Button>
          <Button type="button" variant="secondary" onClick={swap}>
            Swap
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

      <p className="mt-4 text-sm text-muted-foreground">
        Base64 is encoding, not encryption. Anyone can decode the result.
      </p>

      <div className="mt-4">{error ? <ToolError>{error}</ToolError> : null}</div>
    </ToolPanel>
  );
}
