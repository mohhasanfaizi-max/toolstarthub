"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsRouteChange() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstView = useRef(true);

  useEffect(() => {
    if (isFirstView.current) {
      isFirstView.current = false;
      return;
    }

    const query = searchParams.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;

    window.gtag?.("event", "page_view", {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
