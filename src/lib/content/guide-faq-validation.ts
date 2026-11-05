export const DEFAULT_GUIDE_FAQ_MIN = 3;
export const DEFAULT_GUIDE_FAQ_MAX = 5;
export const RAISED_GUIDE_FAQ_MAX = 10;
/** Target for the FAQ expansion batches (tool-faq-extra / guide-faq-extra). */
export const TARGET_GUIDE_FAQ_MAX = 20;

/** Supported raises above the default FAQ maximum. */
export type GuideFaqMax = typeof RAISED_GUIDE_FAQ_MAX | typeof TARGET_GUIDE_FAQ_MAX;

export type GuideFaqLimitOptions = {
  faqMax?: GuideFaqMax;
};

export function resolveGuideFaqMax(options: GuideFaqLimitOptions): number {
  return options.faqMax ?? DEFAULT_GUIDE_FAQ_MAX;
}

export function guideFaqCountIsAllowed(
  faqCount: number,
  options: GuideFaqLimitOptions = {},
): boolean {
  return faqCount >= DEFAULT_GUIDE_FAQ_MIN && faqCount <= resolveGuideFaqMax(options);
}
