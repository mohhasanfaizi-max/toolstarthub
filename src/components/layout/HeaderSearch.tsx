"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { ToolSearch } from "@/components/tools/ToolSearch";

export function HeaderSearch() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      <div className="hidden w-52 xl:block xl:w-64">
        <ToolSearch variant="header" />
      </div>
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted xl:hidden"
        aria-expanded={open}
        aria-controls="mobile-header-search"
        aria-label={open ? "Close search" : "Open search"}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "search"} className="size-5" />
      </button>
      {open ? (
        <div
          id="mobile-header-search"
          className="fixed inset-x-0 top-16 z-30 border-b border-border bg-background px-4 py-3 shadow-sm xl:hidden"
        >
          <ToolSearch variant="header" />
        </div>
      ) : null}
    </div>
  );
}
