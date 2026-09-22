"use client";

import { replaceSearchParams } from "@/lib/tools/url-state";

export const SHARE_URL_EVENT = "tsh-share-url";

export function subscribeShareUrl(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(SHARE_URL_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(SHARE_URL_EVENT, callback);
  };
}

export function getShareUrlSnapshot() {
  return window.location.search;
}

export function getEmptyShareUrlSnapshot() {
  return "";
}

export function writeShareUrl(params: URLSearchParams) {
  replaceSearchParams(params);
  window.dispatchEvent(new Event(SHARE_URL_EVENT));
}
