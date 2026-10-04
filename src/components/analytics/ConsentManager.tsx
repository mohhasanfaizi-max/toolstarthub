"use client";

import Link from "next/link";
import Script from "next/script";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/client";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  CONSENT_STORAGE_KEY,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/consent";

type ConsentState = ConsentChoice | "unset" | "server";

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) callback();
  };
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): ConsentState {
  return readConsent() ?? "unset";
}

function getServerSnapshot(): ConsentState {
  return "server";
}

// Module scope: the document (and this component) can remount on client-side
// navigation between sections, but gtag config must only run once per load.
let gaConfigured = false;

function gtag(...args: unknown[]) {
  window.gtag?.(...args);
}

export function ConsentManager() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [reopened, setReopened] = useState(false);
  const { messages, href } = useI18n();
  const t = messages.consent;
  const [before, after] = t.body.split("{link}");
  const bannerRef = useRef<HTMLElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (consent === "granted") {
      gtag("consent", "update", { analytics_storage: "granted" });
      if (!gaConfigured) {
        gaConfigured = true;
        gtag("js", new Date());
        gtag("config", GA_MEASUREMENT_ID);
      }
    } else if (consent === "denied") {
      gtag("consent", "update", { analytics_storage: "denied" });
    }
  }, [consent]);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (reopened) {
      bannerRef.current
        ?.querySelector<HTMLButtonElement>("[data-consent-accept]")
        ?.focus();
    }
  }, [reopened]);

  function choose(choice: ConsentChoice) {
    setReopened(false);
    writeConsent(choice);
  }

  const showBanner = consent === "unset" || (reopened && consent !== "server");

  return (
    <>
      {consent === "granted" ? (
        <Script
          id="ga4-gtag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      ) : null}
      {showBanner ? (
        <section
          ref={bannerRef}
          aria-labelledby={titleId}
          className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg sm:flex-row sm:items-center sm:gap-5 sm:p-5">
            <div className="flex-1">
              <h2
                id={titleId}
                className="text-sm font-semibold text-foreground"
              >
                {t.title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {before}
                <Link
                  href={href("/privacy")}
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  {t.privacyLink}
                </Link>
                {after}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => choose("denied")}
              >
                {t.decline}
              </Button>
              <Button
                data-consent-accept=""
                type="button"
                size="sm"
                onClick={() => choose("granted")}
              >
                {t.accept}
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
