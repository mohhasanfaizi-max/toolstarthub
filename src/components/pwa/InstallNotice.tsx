"use client";

import { useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { tools } from "@/data/tools";
import { pwaCopy } from "@/i18n/pwa-en";
import {
  getDeferredInstallPrompt,
  getInstallGuide,
  promptAppInstall,
  startInstallPromptCapture,
  subscribeInstallPrompt,
  type InstallGuide,
} from "@/lib/pwa/install-prompt";
import { isStandaloneApp, subscribeStandalone } from "@/lib/pwa/standalone";

const HINT_KEY = "tsh-pwa-hint-dismissed";
const HINT_EVENT = "tsh-pwa-hint-changed";

const guideCopy: Record<InstallGuide, string> = {
  ios: pwaCopy.installIos,
  android: pwaCopy.installAndroid,
  desktop: pwaCopy.installDesktop,
};

function subscribeNotice(callback: () => void) {
  startInstallPromptCapture();
  const stopPrompt = subscribeInstallPrompt(callback);
  const stopStandalone = subscribeStandalone(callback);
  window.addEventListener(HINT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    stopPrompt();
    stopStandalone();
    window.removeEventListener(HINT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function noticeSnapshot() {
  try {
    if (localStorage.getItem(HINT_KEY) === "1") {
      return "hidden";
    }
  } catch {
    return "hidden";
  }
  if (isStandaloneApp()) {
    return "hidden";
  }
  const canPrompt = Boolean(getDeferredInstallPrompt());
  return `${canPrompt ? "prompt" : "manual"}:${getInstallGuide()}`;
}

function dismissNotice() {
  try {
    localStorage.setItem(HINT_KEY, "1");
  } catch {
    // Ignore storage access errors.
  }
  window.dispatchEvent(new Event(HINT_EVENT));
}

export function InstallNotice() {
  const snapshot = useSyncExternalStore(subscribeNotice, noticeSnapshot, () => "hidden");
  const [busy, setBusy] = useState(false);

  if (snapshot === "hidden") {
    return null;
  }

  const canPrompt = snapshot.startsWith("prompt:");
  const guide = (snapshot.split(":")[1] ?? "desktop") as InstallGuide;
  const toolCountCopy = pwaCopy.installTools.replace("{count}", String(tools.length));

  async function install() {
    setBusy(true);
    try {
      const outcome = await promptAppInstall();
      if (outcome === "accepted") {
        dismissNotice();
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="border-b border-accent/15 bg-accent-soft">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
        <section
          className="rounded-2xl border border-accent/20 bg-card p-4 shadow-[0_8px_24px_rgb(37_99_235/0.08)] sm:p-5"
          aria-label={pwaCopy.installTitle}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Icon name="device" className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-semibold tracking-tight text-foreground">
                  {pwaCopy.installTitle}
                </p>
                <button
                  type="button"
                  className="-mt-1 -mr-1 inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label={pwaCopy.dismissNotice}
                  onClick={dismissNotice}
                >
                  <Icon name="close" className="size-4" />
                </button>
              </div>
              <p className="mt-1 text-sm leading-6 text-foreground">{pwaCopy.installLead}</p>
              <p className="mt-2 text-sm font-medium text-accent">{toolCountCopy}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                {canPrompt ? (
                  <Button
                    type="button"
                    size="sm"
                    className="w-full sm:w-auto"
                    disabled={busy}
                    onClick={() => {
                      void install();
                    }}
                  >
                    <Icon name="home" className="size-4" />
                    {pwaCopy.installButton}
                  </Button>
                ) : (
                  <p className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-accent">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon name="home" className="size-4" />
                    </span>
                    {pwaCopy.installAddHome}
                  </p>
                )}
                <button
                  type="button"
                  className="self-start text-sm font-medium text-accent hover:underline sm:px-1"
                  onClick={dismissNotice}
                >
                  {pwaCopy.dismiss}
                </button>
              </div>
              {canPrompt ? null : (
                <p className="mt-3 text-sm leading-6 text-foreground">{guideCopy[guide]}</p>
              )}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{pwaCopy.installStorage}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{pwaCopy.installReassurance}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{pwaCopy.installClose}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
