"use client";

import { useI18n } from "@/i18n/client";
import { openConsentSettings } from "@/lib/consent";

export function CookieSettingsButton({ className }: { className?: string }) {
  const { messages } = useI18n();
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {messages.consent.settings}
    </button>
  );
}
