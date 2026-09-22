"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";

type CopyButtonProps = {
  value: string;
  label?: string;
  copiedLabel?: string;
};

export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
}: CopyButtonProps) {
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
      {copied ? copiedLabel : label}
    </Button>
  );
}
