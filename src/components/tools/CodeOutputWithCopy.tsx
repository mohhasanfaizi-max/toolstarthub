"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { copyTextToClipboard } from "@/lib/tools/clipboard";

type CopyStatus = { kind: "success" | "error"; message: string } | null;

type CodeOutputWithCopyProps = {
  id: string;
  label: string;
  value: string;
  copyLabel: string;
  /** Short name used in the status message, e.g. "CSS". */
  what: string;
  children?: React.ReactNode;
};

/**
 * Read-only, labelled code output. The textarea is keyboard focusable and
 * selectable, and copy results are announced in a polite live region.
 */
export function CodeOutputWithCopy({
  id,
  label,
  value,
  copyLabel,
  what,
  children,
}: CodeOutputWithCopyProps) {
  const [status, setStatus] = useState<CopyStatus>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const lines = value.split("\n").length;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    window.clearTimeout(timer.current);
    const ok = await copyTextToClipboard(value);
    if (ok) {
      setStatus({ kind: "success", message: `${what} copied to the clipboard.` });
      timer.current = window.setTimeout(() => setStatus(null), 4000);
      return;
    }
    const textarea = textareaRef.current;
    textarea?.focus();
    textarea?.select();
    setStatus({
      kind: "error",
      message: `Could not copy automatically. The ${what} is selected, so press Ctrl+C (or Cmd+C on a Mac) to copy it.`,
    });
  }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      <textarea
        ref={textareaRef}
        id={id}
        readOnly
        value={value}
        rows={Math.min(Math.max(lines, 2), 16)}
        wrap="off"
        spellCheck={false}
        className="mt-2 block w-full resize-y rounded-2xl border border-border bg-accent-soft p-4 font-mono text-sm leading-6 text-foreground"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button type="button" variant="secondary" onClick={() => void copy()} disabled={!value}>
          <Icon name={status?.kind === "success" ? "check" : "copy"} className="size-4" />
          {copyLabel}
        </Button>
        <p
          role="status"
          aria-live="polite"
          className={
            status?.kind === "error"
              ? "min-w-0 flex-1 text-sm text-red-700 dark:text-red-400"
              : "min-w-0 flex-1 text-sm text-emerald-700 dark:text-emerald-400"
          }
        >
          {status?.message ?? ""}
        </p>
      </div>
    </div>
  );
}
