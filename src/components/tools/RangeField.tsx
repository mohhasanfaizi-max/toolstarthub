"use client";

import { ToolField } from "@/components/tools/ToolForm";
import { useTx } from "@/i18n/tool-text";

type RangeFieldProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (value: number) => void;
};

export function RangeField({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  suffix,
  onChange,
}: RangeFieldProps) {
  const tx = useTx();
  return (
    <ToolField id={id} label={label}>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 w-full"
      />
      <p className="mt-1 text-sm tabular-nums text-muted-foreground">
        {value}
        {suffix ? tx(suffix) : ""}
      </p>
    </ToolField>
  );
}
