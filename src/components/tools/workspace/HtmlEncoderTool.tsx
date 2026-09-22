"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { decodeHtml, encodeHtml } from "@/lib/tools/html-codec";

const SAMPLE = `<div class="hero">Hello & welcome</div>`;

export function HtmlEncoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function run() {
    const result = mode === "encode" ? encodeHtml(input) : decodeHtml(input);
    if (result.ok) {
      setOutput(result.output);
    }
  }

  function swap() {
    setInput(output);
    setOutput(input);
  }

  return (
    <ToolPanel>
      <ToolChoiceGroup
        legend="Mode"
        name="html-mode"
        value={mode}
        onChange={(next) => {
          setMode(next);
        }}
        options={[
          { id: "encode", label: "HTML encode" },
          { id: "decode", label: "HTML decode" },
        ]}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ToolField id="html-input" label="Input">
          <textarea
            id="html-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={10}
            spellCheck={false}
            className={`${toolControlClass} min-h-40 resize-y font-mono text-sm`}
          />
        </ToolField>
        <ToolField id="html-output" label="Result">
          <textarea
            id="html-output"
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
          <Button type="button" onClick={() => run()}>
            {mode === "encode" ? "Encode" : "Decode"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => setInput(SAMPLE)}>
            Example
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
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Input is treated as text. It is not executed as HTML.
      </p>
    </ToolPanel>
  );
}
