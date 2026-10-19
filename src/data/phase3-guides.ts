import type { GuideContent } from "./guide-content.ts";
import { phase3CalcGuides } from "./phase3-calc-guides.ts";
import { phase3DevGuides } from "./phase3-dev-guides.ts";
import { phase3FinanceGuides } from "./phase3-finance-guides.ts";
import { phase3PdfGuides } from "./phase3-pdf-guides.ts";
import { phase3TextGuides } from "./phase3-text-guides.ts";

/** Expanded bodies for the 25 short AdSense guides. Prefer this map in getGuideContent. */
export const phase3GuideContent: Record<string, GuideContent> = {
  ...phase3TextGuides,
  ...phase3DevGuides,
  ...phase3CalcGuides,
  ...phase3FinanceGuides,
  ...phase3PdfGuides,
};
