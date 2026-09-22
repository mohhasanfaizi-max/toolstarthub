"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";

export function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (typeof window === "undefined") {
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button type="button" variant="secondary" onClick={copy}>
      <Icon name={copied ? "check" : "link"} className="size-4" />
      {copied ? "Link copied" : "Copy link"}
    </Button>
  );
}
