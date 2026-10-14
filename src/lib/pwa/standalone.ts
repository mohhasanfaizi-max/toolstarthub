export const PWA_ATTR = "data-pwa";
export const PWA_STANDALONE = "standalone";

export function isStandaloneDisplay(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const nav = window.navigator as Navigator & { standalone?: boolean };
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: window-controls-overlay)").matches ||
    nav.standalone === true
  );
}

/** CSS and React share this flag so the installed shell stays in sync. */
export function isStandaloneApp(): boolean {
  if (typeof document !== "undefined" && document.documentElement.getAttribute(PWA_ATTR) === PWA_STANDALONE) {
    return true;
  }
  return isStandaloneDisplay();
}

/** Runs before paint so marketing chrome can hide without a layout flash. */
export const standaloneDetectScript = `(function(){try{var n=window.navigator;if(window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: window-controls-overlay)").matches||n.standalone===true){document.documentElement.setAttribute("${PWA_ATTR}","${PWA_STANDALONE}");}}catch(e){}})();`;

export function syncStandaloneAttribute() {
  if (typeof document === "undefined") {
    return;
  }
  if (isStandaloneDisplay()) {
    document.documentElement.setAttribute(PWA_ATTR, PWA_STANDALONE);
  } else {
    document.documentElement.removeAttribute(PWA_ATTR);
  }
}

export function subscribeStandaloneMedia(callback: () => void) {
  const queries = [
    window.matchMedia("(display-mode: standalone)"),
    window.matchMedia("(display-mode: window-controls-overlay)"),
  ];
  for (const query of queries) {
    query.addEventListener("change", callback);
  }
  return () => {
    for (const query of queries) {
      query.removeEventListener("change", callback);
    }
  };
}

export function subscribeStandalone(callback: () => void) {
  const stopMedia = subscribeStandaloneMedia(callback);
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [PWA_ATTR],
  });
  return () => {
    stopMedia();
    observer.disconnect();
  };
}
