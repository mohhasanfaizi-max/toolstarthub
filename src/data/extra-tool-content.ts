import cpsTestPage from "../i18n/cps-test/content/en.ts";
import {
  faceShapeDetectorContent,
  faceShapeDetectorQuickAnswer,
} from "./face-shape-detector-content.ts";
import type { ToolContent } from "./tool-content.ts";

/** English tool content for tools registered in extra-tools.ts. */
export const extraToolContent: Record<string, ToolContent> = {
  "face-shape-detector": faceShapeDetectorContent,
  "cps-test": cpsTestPage.content,
};

/** English quick answers for tools registered in extra-tools.ts. */
export const extraToolQuickAnswers: Record<string, string> = {
  "face-shape-detector": faceShapeDetectorQuickAnswer,
  "cps-test": cpsTestPage.quickAnswer,
};
