export type TshBeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export type InstallGuide = "ios" | "android" | "desktop";

const INSTALL_EVENT = "tsh-pwa-install-changed";

let deferredPrompt: TshBeforeInstallPromptEvent | null = null;
let captureStarted = false;

function emitInstallChange() {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new Event(INSTALL_EVENT));
}

function onBeforeInstall(event: Event) {
  event.preventDefault();
  deferredPrompt = event as TshBeforeInstallPromptEvent;
  emitInstallChange();
}

function onAppInstalled() {
  deferredPrompt = null;
  emitInstallChange();
}

export function startInstallPromptCapture() {
  if (captureStarted || typeof window === "undefined") {
    return;
  }
  captureStarted = true;
  window.addEventListener("beforeinstallprompt", onBeforeInstall);
  window.addEventListener("appinstalled", onAppInstalled);
}

export function subscribeInstallPrompt(callback: () => void) {
  startInstallPromptCapture();
  window.addEventListener(INSTALL_EVENT, callback);
  return () => {
    window.removeEventListener(INSTALL_EVENT, callback);
  };
}

export function getDeferredInstallPrompt() {
  return deferredPrompt;
}

export async function promptAppInstall(): Promise<"accepted" | "dismissed" | "unavailable"> {
  if (!deferredPrompt) {
    return "unavailable";
  }
  const pending = deferredPrompt;
  await pending.prompt();
  const choice = await pending.userChoice;
  deferredPrompt = null;
  emitInstallChange();
  return choice.outcome;
}

/** Instruction copy only. This is not a device-type redirect. */
export function getInstallGuide(): InstallGuide {
  if (typeof window === "undefined") {
    return "desktop";
  }
  const ua = window.navigator.userAgent;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  const iOSDevice = /iPad|iPhone|iPod/.test(ua);
  const iPadOs = nav.platform === "MacIntel" && window.navigator.maxTouchPoints > 1;
  if (iOSDevice || iPadOs) {
    return "ios";
  }
  if (/Android/i.test(ua)) {
    return "android";
  }
  return "desktop";
}
