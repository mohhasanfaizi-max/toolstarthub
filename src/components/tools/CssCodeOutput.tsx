"use client";

import { CopyButton } from "@/components/tools/CopyButton";
import { useI18n } from "@/i18n/client";

export function CssCodeOutput({ css }: { css: string }) {
  const { messages } = useI18n();
  return (
    <div className="space-y-3">
      <pre
        tabIndex={0}
        role="region"
        aria-label="Generated CSS"
        className="overflow-x-auto rounded-2xl bg-accent-soft p-4 font-mono text-sm text-foreground"
      >
        {css}
      </pre>
      <CopyButton value={css} label={messages.tool.copyCss} />
    </div>
  );
}
