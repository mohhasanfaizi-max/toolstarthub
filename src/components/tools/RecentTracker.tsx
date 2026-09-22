"use client";

import { useEffect } from "react";
import { getToolSlugSet } from "@/data/tools";
import { trackEvent } from "@/lib/analytics";
import { getLocalStorage } from "@/lib/storage/safe-storage";
import { recordRecentTool } from "@/lib/storage/recents";

const validSlugs = getToolSlugSet();

export function RecentTracker({ slug }: { slug: string }) {
  useEffect(() => {
    recordRecentTool(getLocalStorage(), slug, validSlugs);
    trackEvent({ name: "tool_opened", slug });
  }, [slug]);

  return null;
}
