export const CONSENT_STORAGE_KEY = "tsh-consent";
export const CONSENT_CHANGE_EVENT = "tsh-consent-change";
export const CONSENT_OPEN_EVENT = "tsh-consent-open";

export type ConsentChoice = "granted" | "denied";

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage can be blocked. The choice then applies to this page view only.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function hasAnalyticsConsent(): boolean {
  return readConsent() === "granted";
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/**
 * Inline script for the document head. Sets Google Consent Mode defaults to
 * denied before any Google tag can load. gtag.js itself is only added after
 * the visitor accepts analytics cookies.
 */
export const consentDefaultsScript = `window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};window.gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted'});`;
