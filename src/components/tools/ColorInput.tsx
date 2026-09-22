"use client";

import { parseCssColor } from "@/lib/tools/color";
import { ToolField, toolControlClass } from "@/components/tools/ToolForm";

type ColorInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
};

export function ColorInput({ id, label, value, onChange, hint }: ColorInputProps) {
  const parsed = parseCssColor(value);
  const pickerValue = parsed.ok ? parsed.color.hex : "#000000";

  return (
    <ToolField
      id={id}
      label={label}
      hint={hint}
      error={!parsed.ok ? parsed.error : undefined}
    >
      <div className="mt-1.5 grid grid-cols-[auto_1fr] gap-2">
        <input
          type="color"
          value={pickerValue}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 w-14 cursor-pointer rounded-xl border border-border bg-background"
          aria-label={`${label} picker`}
        />
        <input
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={toolControlClass + " mt-0"}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </ToolField>
  );
}
