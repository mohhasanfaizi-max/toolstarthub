"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { hasAnalyticsConsent } from "@/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Module scope so a remount (client navigation between sections renders a new
// document layout) does not lose track of the last page view.
let lastTrackedPath: string | null = null;

export function GoogleAnalyticsRouteChange() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;

    if (lastTrackedPath === null || lastTrackedPath === page_path) {
      // The first view is sent by gtag('config') after consent.
      lastTrackedPath = page_path;
      return;
    }
    lastTrackedPath = page_path;

    if (!hasAnalyticsConsent()) {
      return;
    }

    window.gtag?.("event", "page_view", {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
