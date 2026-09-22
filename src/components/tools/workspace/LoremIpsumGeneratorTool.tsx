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
import {
  generateLorem,
  LOREM_LIMITS,
  type LoremMode,
} from "@/lib/tools/lorem";

export function LoremIpsumGeneratorTool() {
  const [mode, setMode] = useState<LoremMode>("paragraphs");
  const [quantity, setQuantity] = useState(String(LOREM_LIMITS.paragraphs.defaultValue));
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function generate() {
    const next = generateLorem(mode, quantity);
    if (!next.ok) {
      setError(next.error);
      return;
    }
    setError("");
    setOutput(next.output);
  }

  function reset() {
    setMode("paragraphs");
    setQuantity(String(LOREM_LIMITS.paragraphs.defaultValue));
    setOutput("");
    setError("");
  }

  const limits = LOREM_LIMITS[mode];

  return (
    <ToolPanel>
      <ToolChoiceGroup
        legend="Generate"
        name="lorem-mode"
        value={mode}
        onChange={(next) => {
          setMode(next);
          setQuantity(String(LOREM_LIMITS[next].defaultValue));
        }}
        options={[
          { id: "paragraphs", label: "Paragraphs" },
          { id: "sentences", label: "Sentences" },
          { id: "words", label: "Words" },
        ]}
        columns="grid gap-2 sm:grid-cols-3"
      />

      <div className="mt-4">
        <ToolField
          id="lorem-quantity"
          label="Quantity"
          hint={`Enter a whole number from ${limits.min} to ${limits.max}.`}
        >
          <input
            id="lorem-quantity"
            inputMode="numeric"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={generate}>
            Generate
          </Button>
          <CopyButton value={output} />
          <Button type="button" variant="secondary" onClick={() => setOutput("")}>
            Clear
          </Button>
          <Button type="button" variant="ghost" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        <ToolField id="lorem-output" label="Output">
          <textarea
            id="lorem-output"
            value={output}
            readOnly
            rows={12}
            className={`${toolControlClass} min-h-48 resize-y`}
          />
        </ToolField>
      </div>
    </ToolPanel>
  );
}
