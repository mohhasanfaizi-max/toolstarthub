/**
 * Browser-only MediaPipe Face Landmarker loader.
 * WASM and the .task model are served from /mediapipe on this origin.
 * Photos and landmarks stay in memory and are never posted.
 */

import {
  FACE_LANDMARKER_LANDMARKS,
  FACE_LANDMARK_INDEX,
  estimateFaceShape,
  type FaceShapeClassification,
  type LandmarkPoint,
} from "./face-shape.ts";

export const FACE_LANDMARKER_WASM_PATH = "/mediapipe/wasm";
export const FACE_LANDMARKER_MODEL_PATH = "/mediapipe/face_landmarker.task";

/** SIMD wasm + loader + Face Landmarker float16 task, as hosted in public/mediapipe. */
export const FACE_SHAPE_WASM_JS_BYTES = 335_393;
export const FACE_SHAPE_WASM_BYTES = 12_997_248;
export const FACE_SHAPE_MODEL_BYTES = 3_758_596;
export const FACE_SHAPE_FIRST_RUN_BYTES =
  FACE_SHAPE_WASM_JS_BYTES + FACE_SHAPE_WASM_BYTES + FACE_SHAPE_MODEL_BYTES;

export function faceShapeFirstRunMegabytes(): string {
  const mb = FACE_SHAPE_FIRST_RUN_BYTES / (1024 * 1024);
  return (Math.round(mb * 10) / 10).toFixed(1);
}

export const FACE_SHAPE_PANEL_LEAD = `Upload a clear, front-facing photo to estimate your face shape from facial proportions. The first time, this browser downloads a face landmark model from this site, about ${faceShapeFirstRunMegabytes()} MB. Later runs on this browser can reuse that download. The photo is not uploaded to our servers. The seven categories are styling conventions, not a medical or identity match.`;

const MIN_IMAGE_EDGE = 200;
const MAX_FACES = 2;

export type FaceDetectionErrorCode =
  | "no-face"
  | "multiple-faces"
  | "too-small"
  | "model"
  | "image";

export type FaceLandmarkerRun =
  | { ok: true; result: FaceShapeClassification }
  | { ok: false; error: string; code: FaceDetectionErrorCode };

type VisionNamespace = typeof import("@mediapipe/tasks-vision");

type LandmarkerHandle = {
  detect: (image: HTMLImageElement) => {
    faceLandmarks: Array<Array<{ x: number; y: number; z?: number }>>;
  };
  close?: () => void;
};

let landmarkerPromise: Promise<LandmarkerHandle> | null = null;

function publicError(code: FaceDetectionErrorCode): { ok: false; error: string; code: FaceDetectionErrorCode } {
  if (code === "no-face") {
    return {
      ok: false,
      code,
      error:
        "No face was found. Use a well-lit, front-facing photo with the whole face visible, then try again. You can also measure by hand using the guide below.",
    };
  }
  if (code === "multiple-faces") {
    return {
      ok: false,
      code,
      error:
        "More than one face was found. Crop or choose a photo with a single face, then run the analysis again.",
    };
  }
  if (code === "too-small") {
    return {
      ok: false,
      code,
      error: `That image is too small to measure. Use a photo at least ${MIN_IMAGE_EDGE} pixels on the short side.`,
    };
  }
  if (code === "image") {
    return {
      ok: false,
      code,
      error: "That file could not be read as an image. Try another JPG, PNG, or WebP photo.",
    };
  }
  return {
    ok: false,
    code: "model",
    error:
      "The face landmark model could not be loaded in this browser. Check your connection, then try again. You can still use the manual guide below.",
  };
}

async function createLandmarker(): Promise<LandmarkerHandle> {
  const vision: VisionNamespace = await import("@mediapipe/tasks-vision");
  const fileset = await vision.FilesetResolver.forVisionTasks(FACE_LANDMARKER_WASM_PATH);
  try {
    return await vision.FaceLandmarker.createFromOptions(fileset, {
      baseOptions: {
        modelAssetPath: FACE_LANDMARKER_MODEL_PATH,
        delegate: "GPU",
      },
      runningMode: "IMAGE",
      numFaces: MAX_FACES,
      outputFaceBlendshapes: false,
      outputFacialTransformationMatrixes: false,
    });
  } catch {
    return vision.FaceLandmarker.createFromOptions(fileset, {
      baseOptions: {
        modelAssetPath: FACE_LANDMARKER_MODEL_PATH,
        delegate: "CPU",
      },
      runningMode: "IMAGE",
      numFaces: MAX_FACES,
      outputFaceBlendshapes: false,
      outputFacialTransformationMatrixes: false,
    });
  }
}

function landmarksHaveLowVisibility(landmarks: LandmarkPoint[]): boolean {
  const indexes = Object.values(FACE_LANDMARK_INDEX);
  let counted = 0;
  let weak = 0;
  for (const index of indexes) {
    const point = landmarks[index] as LandmarkPoint & { visibility?: number };
    if (!point || typeof point.visibility !== "number" || !Number.isFinite(point.visibility)) {
      continue;
    }
    counted += 1;
    if (point.visibility < 0.5) {
      weak += 1;
    }
  }
  return counted > 0 && weak >= 2;
}

export function loadFaceLandmarker(): Promise<LandmarkerHandle> {
  if (!landmarkerPromise) {
    landmarkerPromise = createLandmarker().catch((error: unknown) => {
      landmarkerPromise = null;
      throw error;
    });
  }
  return landmarkerPromise;
}

export async function analyzeFaceImage(image: HTMLImageElement): Promise<FaceLandmarkerRun> {
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  if (!Number.isFinite(width) || !Number.isFinite(height) || width < 1 || height < 1) {
    return publicError("image");
  }
  if (Math.min(width, height) < MIN_IMAGE_EDGE) {
    return publicError("too-small");
  }

  let detector: LandmarkerHandle;
  try {
    detector = await loadFaceLandmarker();
  } catch {
    return publicError("model");
  }

  let faces: Array<Array<{ x: number; y: number; z?: number }>>;
  try {
    const detected = detector.detect(image);
    faces = detected.faceLandmarks ?? [];
  } catch {
    return publicError("model");
  }

  if (faces.length === 0) {
    return publicError("no-face");
  }
  if (faces.length > 1) {
    return publicError("multiple-faces");
  }

  const landmarks = faces[0] as LandmarkPoint[];
  const estimated = estimateFaceShape(landmarks, { landmarkCount: landmarks.length });
  if (estimated.ok && landmarksHaveLowVisibility(landmarks)) {
    estimated.result.warnings = [
      ...estimated.result.warnings,
      "Some facial landmarks look weakly visible. Hair, glasses, a mask, or a hand over the face can throw the outline off.",
    ];
  }
  if (!estimated.ok) {
    return { ok: false, code: "no-face", error: estimated.error };
  }

  const result = estimated.result;
  if (landmarks.length !== FACE_LANDMARKER_LANDMARKS) {
    result.warnings = [
      ...result.warnings,
      `This run used ${landmarks.length} facial landmarks. The usual Face Landmarker configuration reports ${FACE_LANDMARKER_LANDMARKS}.`,
    ];
  }

  if (Math.min(width, height) < 320) {
    result.warnings = [
      ...result.warnings,
      "This photo is fairly low resolution. A sharper, closer shot is usually easier to measure.",
    ];
  }

  return { ok: true, result };
}

export function resetFaceLandmarkerForTests() {
  landmarkerPromise = null;
}
