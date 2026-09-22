"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CASE_MODE_LABELS, CASE_MODES, convertCase, type CaseMode } from "@/lib/tools/case-convert";
import { getTextStats } from "@/lib/tools/text-stats";

export function CaseConverterTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<CaseMode>("title");
  const output = convertCase(input, mode);
  const stats = getTextStats(input);

  return (
    <ToolPanel>
      <ToolField id="case-input" label="Text">
        <textarea
          id="case-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={8}
          className={`${toolControlClass} min-h-40 resize-y`}
          placeholder="Paste text to convert"
        />
      </ToolField>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Case</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CASE_MODES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={`min-h-11 rounded-xl border px-3 py-2 text-sm ${
                mode === item
                  ? "border-accent bg-accent-soft font-medium text-foreground"
                  : "border-border bg-background text-foreground"
              }`}
            >
              {CASE_MODE_LABELS[item]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-4">
        <ToolStatGrid
          items={[
            { label: "Characters", value: stats.characters },
            { label: "Words", value: stats.words },
          ]}
        />
      </div>

      <div className="mt-4">
        <ToolActions>
          <CopyButton value={output} />
          <Button type="button" variant="ghost" onClick={() => setInput("")}>
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-6">
        <ToolOutput label={`Result (${CASE_MODE_LABELS[mode]})`}>
          <p className="whitespace-pre-wrap break-words text-base leading-7">
            {output || "—"}
          </p>
        </ToolOutput>
      </div>
    </ToolPanel>
  );
}
