"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";
import { useI18n } from "@/i18n/client";
import { useTx } from "@/i18n/tool-text";

type CopyButtonProps = {
  value: string;
  label?: string;
  copiedLabel?: string;
};

export function CopyButton({ value, label, copiedLabel }: CopyButtonProps) {
  const { messages } = useI18n();
  const tx = useTx();
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button type="button" variant="secondary" onClick={copy} disabled={!value}>
      <Icon name={copied ? "check" : "copy"} className="size-4" />
      {copied
        ? (copiedLabel ? tx(copiedLabel) : messages.tool.copied)
        : (label ? tx(label) : messages.tool.copy)}
    </Button>
  );
}
