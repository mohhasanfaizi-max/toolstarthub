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
import { decodeUrlComponent, encodeUrlComponent } from "@/lib/tools/url-codec";

const SAMPLE = "https://example.com/search?q=red shoes&lang=en";

export function UrlEncoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function run(nextMode = mode) {
    const result =
      nextMode === "encode" ? encodeUrlComponent(input) : decodeUrlComponent(input);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    setOutput(result.output);
  }

  function swap() {
    setInput(output);
    setOutput(input);
    setError("");
  }

  return (
    <ToolPanel>
      <ToolChoiceGroup
        legend="Mode"
        name="url-mode"
        value={mode}
        onChange={(next) => {
          setMode(next);
          setError("");
        }}
        options={[
          { id: "encode", label: "Encode URL component" },
          { id: "decode", label: "Decode URL component" },
        ]}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ToolField id="url-input" label="Input">
          <textarea
            id="url-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={8}
            className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
            placeholder={mode === "encode" ? "Text to encode" : "Encoded text to decode"}
          />
        </ToolField>
        <ToolField id="url-output" label="Result">
          <textarea
            id="url-output"
            value={output}
            readOnly
            rows={8}
            className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
          />
        </ToolField>
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => run()}>
            {mode === "encode" ? "Encode" : "Decode"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => setInput(SAMPLE)}>
            Example
          </Button>
          <Button type="button" variant="secondary" onClick={swap} disabled={!input && !output}>
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

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          URL encoding is not encryption. It only makes text safe to put in a URL
          component. Encoding and decoding run in your browser.
        </p>
      </div>
    </ToolPanel>
  );
}
