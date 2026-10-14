import { cpsTestDescription, cpsTestName } from "../i18n/cps-test/content/en.ts";
import cpsTestPage from "../i18n/cps-test/content/en.ts";
import {
  faceShapeDetectorDescription,
  faceShapeDetectorHeadline,
  faceShapeDetectorMetaTitle,
  faceShapeDetectorName,
} from "./face-shape-detector-content.ts";
import type { Tool } from "./types.ts";

/**
 * Tools added after the main registry in tools.ts. They are appended to
 * `tools`, so search, categories, related tools, the sitemap and the
 * share images pick them up automatically.
 */
export const extraTools: Tool[] = [
  {
    slug: "face-shape-detector",
    name: faceShapeDetectorName,
    headline: faceShapeDetectorHeadline,
    description: faceShapeDetectorDescription,
    category: "image-tools",
    icon: "user",
    route: "/tools/face-shape-detector",
    featured: false,
    new: true,
    keywords: [
      "face shape detector",
      "what is my face shape",
      "face shape",
      "free face shape detector",
      "AI face shape detector",
      "face shape finder",
      "determine face shape",
      "how to determine your face shape",
      "what shape is my face",
      "what face shape do I have",
      "detect face shape from photo",
      "face type detector",
      "online face shape detector",
    ],
    status: "available",
    metaTitle: faceShapeDetectorMetaTitle,
    relatedSlugs: [
      "image-color-analyzer",
      "image-resizer",
      "image-cropper",
      "image-compressor",
    ],
  },
  {
    slug: "cps-test",
    name: cpsTestName,
    description: cpsTestDescription,
    category: "seo-utilities",
    icon: "bolt",
    route: "/tools/cps-test",
    featured: false,
    new: true,
    keywords: [
      "cps test",
      "click speed test",
      "clicks per second test",
      "cps tester",
      "click test 10 seconds",
      "click counter",
      "spacebar test",
      "how to click faster",
      "jitter clicking",
      "butterfly clicking",
      "average cps",
    ],
    status: "available",
    metaTitle: cpsTestPage.metaTitle,
    relatedSlugs: ["random-number-generator", "time-calculator", "average-calculator"],
  },
];
