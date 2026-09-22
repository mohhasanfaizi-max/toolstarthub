"use client";

import { CopyButton } from "@/components/tools/CopyButton";
import type { ColorResult } from "@/lib/tools/color";

export function ColorValues({ color }: { color: ColorResult }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div
          className="size-16 shrink-0 rounded-2xl border border-border"
          style={{ backgroundColor: color.rgbaCss }}
          aria-hidden="true"
        />
        <p className="text-sm text-muted-foreground">Preview</p>
      </div>
      <ColorRow label="HEX" value={color.hasAlpha ? color.hexShort : color.hex} />
      <ColorRow label="RGB" value={color.rgbCss} />
      {color.hasAlpha ? <ColorRow label="RGBA" value={color.rgbaCss} /> : null}
      <ColorRow label="HSL" value={color.hslCss} />
    </div>
  );
}

function ColorRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-accent-soft px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="break-all font-mono text-sm text-foreground">{value}</p>
      </div>
      <CopyButton value={value} label={`Copy ${label}`} />
    </div>
  );
}
