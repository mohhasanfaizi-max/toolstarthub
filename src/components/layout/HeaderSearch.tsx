"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { ToolSearch } from "@/components/tools/ToolSearch";

export function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close search" : "Open search"}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "search"} className="size-5" />
      </button>
      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-header px-4 py-3 shadow-sm sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[22rem] sm:rounded-xl sm:border sm:px-3 sm:py-3"
        >
          <ToolSearch variant="header" />
        </div>
      ) : null}
    </div>
  );
}
