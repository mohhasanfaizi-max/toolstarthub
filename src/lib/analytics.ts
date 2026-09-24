export const GA_MEASUREMENT_ID = "G-R1HFS36NG4";

export type AnalyticsEvent =
  | { name: "tool_opened"; slug: string }
  | { name: "tool_completed"; slug: string }
  | { name: "category_viewed"; slug: string }
  | { name: "guide_viewed"; slug: string };

export function trackEvent(event: AnalyticsEvent): void {
  void event;
  // Page views are collected by the Google tag in the root layout.
  // This helper stays unused so tool inputs are never sent.
}
