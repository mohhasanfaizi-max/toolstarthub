export type AnalyticsEvent =
  | { name: "tool_opened"; slug: string }
  | { name: "tool_completed"; slug: string }
  | { name: "category_viewed"; slug: string }
  | { name: "guide_viewed"; slug: string };

export function trackEvent(event: AnalyticsEvent): void {
  void event;
  // Intentionally inert until an analytics provider is explicitly configured.
  // Never send tool input, files, passwords, private text, or QR payloads.
}
