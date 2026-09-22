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

export function ColorPickerTool() {
  const [hex, setHex] = useState("#2563eb");
  const parsed = parseCssColor(hex);
  const pickerValue = parsed.ok ? parsed.color.hex : "#2563eb";

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
        <ToolField id="color-picker-input" label="Color">
          <input
            id="color-picker-input"
            type="color"
            value={pickerValue}
            onChange={(event) => setHex(event.target.value)}
            className="mt-1.5 h-16 w-full min-w-24 cursor-pointer rounded-xl border border-border bg-background sm:w-24"
          />
        </ToolField>
        <ToolField
          id="color-picker-hex"
          label="HEX"
          error={!parsed.ok ? parsed.error : undefined}
        >
          <input
            id="color-picker-hex"
            value={hex}
            onChange={(event) => setHex(event.target.value)}
            className={toolControlClass}
            autoComplete="off"
            spellCheck={false}
          />
        </ToolField>
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="ghost" onClick={() => setHex("#2563eb")}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-6">
        {parsed.ok ? (
          <ColorValues color={parsed.color} />
        ) : (
          <ToolError>{parsed.error}</ToolError>
        )}
      </div>

      <div className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
        <p>
          <strong className="font-medium text-foreground">HEX</strong> writes red,
          green and blue as hexadecimal digits, for example #2563eb.
        </p>
        <p>
          <strong className="font-medium text-foreground">RGB</strong> uses decimal
          channels from 0 to 255, for example rgb(37, 99, 235).
        </p>
        <p>
          <strong className="font-medium text-foreground">HSL</strong> describes hue,
          saturation and lightness of the same color.
        </p>
      </div>
    </ToolPanel>
  );
}
