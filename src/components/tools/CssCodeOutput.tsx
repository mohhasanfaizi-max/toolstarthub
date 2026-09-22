"use client";

import { CopyButton } from "@/components/tools/CopyButton";

export function CssCodeOutput({ css }: { css: string }) {
  return (
    <div className="space-y-3">
      <pre className="overflow-x-auto rounded-2xl bg-accent-soft p-4 font-mono text-sm text-foreground">
        {css}
      </pre>
      <CopyButton value={css} label="Copy CSS" />
    </div>
  );
}
