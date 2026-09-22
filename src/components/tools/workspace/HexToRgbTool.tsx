"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ColorValues } from "@/components/tools/ColorValues";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { parseCssColor } from "@/lib/tools/color";

const EXAMPLES = ["#336699", "#fff", "336699", "#336699cc"];

export function HexToRgbTool() {
  const [input, setInput] = useState("#336699");
  const parsed = parseCssColor(input);

  return (
    <ToolPanel>
      <ToolField
        id="hex-input"
        label="HEX color"
        hint="Accepts #FFFFFF, FFFFFF, 3-digit, 6-digit and 8-digit values."
        error={!parsed.ok && input.trim() !== "" ? parsed.error : undefined}
      >
        <input
          id="hex-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className={toolControlClass}
          autoComplete="off"
          spellCheck={false}
        />
      </ToolField>

      <div className="mt-4 flex flex-wrap gap-2">
        {EXAMPLES.map((example) => (
          <Button
            key={example}
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setInput(example)}
          >
            {example}
          </Button>
        ))}
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="ghost" onClick={() => setInput("")}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-6">
        {input.trim() === "" ? (
          <ToolError>Enter a hex color such as #336699.</ToolError>
        ) : parsed.ok ? (
          <ColorValues color={parsed.color} />
        ) : null}
      </div>
    </ToolPanel>
  );
}
