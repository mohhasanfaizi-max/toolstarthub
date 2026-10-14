/**
 * Geometric face-shape measurements and seven-category scoring.
 *
 * Landmark detection is separate (MediaPipe Face Landmarker). This module
 * only consumes 2D landmark coordinates and never loads a model.
 *
 * Indices follow the MediaPipe Face Mesh / Face Landmarker topology:
 * https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker
 */

export const FACE_SHAPES = [
  "oval",
  "round",
  "square",
  "heart",
  "diamond",
  "oblong",
  "triangle",
] as const;

export type FaceShapeId = (typeof FACE_SHAPES)[number];

export const FACE_SHAPE_LABELS: Record<FaceShapeId, string> = {
  oval: "Oval",
  round: "Round",
  square: "Square",
  heart: "Heart",
  diamond: "Diamond",
  oblong: "Oblong",
  triangle: "Triangle",
};

/** Expected count from Face Landmarker with iris landmarks enabled. */
export const FACE_LANDMARKER_LANDMARKS = 478;

/** Highest index required for the measurements below. */
export const REQUIRED_LANDMARK_COUNT = 455;

/**
 * MediaPipe Face Mesh indices used for width and length.
 * Coordinates are treated as image-normalized (origin top-left, x right, y down).
 */
export const FACE_LANDMARK_INDEX = {
  foreheadTop: 10,
  chin: 152,
  leftCheek: 234,
  rightCheek: 454,
  leftForehead: 54,
  rightForehead: 284,
  leftJaw: 172,
  rightJaw: 397,
  leftEyeOuter: 33,
  rightEyeOuter: 263,
  noseTip: 1,
} as const;

export type LandmarkPoint = {
  x: number;
  y: number;
  z?: number;
};

export type FaceMeasurements = {
  faceLength: number;
  faceWidth: number;
  foreheadWidth: number;
  cheekboneWidth: number;
  jawlineWidth: number;
  lengthWidthRatio: number;
  foreheadToCheek: number;
  jawToCheek: number;
  jawTaper: number;
};

export type FaceBox = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
};

export type FaceShapeMatchStrength = "clear" | "leaning" | "close";

export type FaceShapeClassification = {
  primary: FaceShapeId;
  secondary?: FaceShapeId;
  scores: Record<FaceShapeId, number>;
  matchStrength: FaceShapeMatchStrength;
  measurements: FaceMeasurements;
  rollDegrees: number;
  landmarkCount: number;
  warnings: string[];
};

export type MeasureFaceResult =
  | { ok: true; measurements: FaceMeasurements; rollDegrees: number; box: FaceBox; warnings: string[] }
  | { ok: false; error: string };

export const FACE_SHAPE_STYLE: Record<
  FaceShapeId,
  { summary: string; hairstyles: string; glasses: string; makeup: string; beard: string }
> = {
  oval: {
    summary:
      "Length is a bit greater than width, with a gently tapered jaw. Most styles work; keep volume even so the outline stays balanced.",
    hairstyles:
      "Most cuts work. A medium length, a slight wave, or a short taper all sit well. Avoid a style that adds a lot of height if you already have a longer oval.",
    glasses:
      "Frames close to the face width, with a gentle curve or a soft rectangle, usually sit well. Oversized frames can overwhelm a narrower jaw.",
    makeup:
      "A light contour along the temples and under the cheekbones is enough. Heavy contouring is optional, not required.",
    beard:
      "A short, even beard or a light stubble keeps the oval outline. A very long, narrow beard can make the face look longer.",
  },
  round: {
    summary:
      "Length and width are close, with a softer jaw. Styles that add a little height or a cleaner side can make the outline look longer.",
    hairstyles:
      "Height at the crown, a side part, or layers that fall below the chin can lengthen the look. A cropped cut with volume on top works for shorter hair. A round bubble cut around the cheeks can emphasize width.",
    glasses:
      "Rectangular or gently angular frames often contrast a rounder outline. Very round frames usually repeat the same curve.",
    makeup:
      "Contour along the sides of the forehead and under the cheekbones, with highlight down the center of the nose and chin, can add a longer look. Blend well so it does not look like a stripe.",
    beard:
      "A slightly longer chin or a short goatee can add length. A wide cheek beard can make a round outline look wider.",
  },
  square: {
    summary:
      "Length and width are close, and the jaw is relatively wide. Softer layers or rounder frames can ease the angles if you want that.",
    hairstyles:
      "Texture, a side part, or layers that break the jaw line can soften a strong angle. A sharp, straight crop at the jaw can emphasize it. For shorter hair, a little height on top with tapered sides is a common option.",
    glasses:
      "Round, oval, or softly curved frames contrast a squarer jaw. Narrow rectangles that match the jaw angle can look boxy.",
    makeup:
      "A soft contour at the jaw corners and temples can round the outline. Highlight on the center of the forehead and chin is optional.",
    beard:
      "Rounded beard edges or a little extra length at the chin can soften a wide jaw. A squared-off beard that matches the jaw will keep the angle.",
  },
  heart: {
    summary:
      "The upper face is wider than the chin. Styles that add a little width near the jaw, or reduce bulk at the temples, even the outline.",
    hairstyles:
      "Chin-length layers, side-swept bangs, or a bob that sits near the jaw can add width lower down. A lot of volume at the crown and temples can make the forehead look wider.",
    glasses:
      "Frames that are slightly wider at the bottom, or aviator-style frames, can balance a narrower chin. Heavy top bars can emphasize a wide forehead.",
    makeup:
      "A little contour at the sides of the forehead and a touch of highlight on the chin can even the taper. Blush a bit lower on the cheek can also help.",
    beard:
      "Fuller growth on the jaw and chin can add width at the bottom. A very short chin-only patch can make the taper look sharper.",
  },
  diamond: {
    summary:
      "Cheekbones are the widest part, with a narrower forehead and jaw. Styles that add a little width at the forehead or jaw can balance the middle.",
    hairstyles:
      "Bangs, a side part, or volume at the temples can widen the forehead. Length that sits near the jaw can add width lower down. Very tight sides with a lot of cheek exposure keep the diamond outline.",
    glasses:
      "Oval, cat-eye, or rimless frames often sit well on prominent cheeks. Frames that are very wide at the cheek line can stick out past the face.",
    makeup:
      "A soft contour just under the cheekbones, with highlight on the forehead and chin, can reduce the width through the middle.",
    beard:
      "A little extra width at the jaw, kept short on the cheeks, can balance prominent cheekbones. A very narrow chin beard can make the middle look wider.",
  },
  oblong: {
    summary:
      "The face is clearly longer than it is wide, with fairly even widths. Styles that add width or reduce extra height shorten the look.",
    hairstyles:
      "Bangs, a side part, or volume at the sides can reduce a long look. Height at the crown usually makes an oblong shape look longer. For shorter hair, keep the top moderate and the sides a bit fuller.",
    glasses:
      "Wider frames, decorative temples, or a stronger brow line can add width. Very narrow or tall frames can make the face look longer.",
    makeup:
      "Contour along the top of the forehead and the tip of the chin, with blush placed a little more to the side, can shorten the look. A center highlight down the whole face will lengthen it.",
    beard:
      "Keep length moderate. A long, narrow beard adds even more length. A short boxed beard with some cheek width can help.",
  },
  triangle: {
    summary:
      "The jaw is wider than the forehead. Styles that add volume up top, or keep the jaw line less bulky, even the outline.",
    hairstyles:
      "Volume at the crown and temples, a side part, or layers that start above the jaw can widen the upper face. A cut that sits heavy on the jaw can emphasize width there.",
    glasses:
      "Frames that are wider at the top, cat-eye shapes, or a stronger brow line can balance a wider jaw. Narrow frames that sit low can make the jaw look larger.",
    makeup:
      "Highlight the forehead and contour along the jaw corners. Blush a little higher on the cheek can draw attention up.",
    beard:
      "Keep the jaw line trimmed rather than squared out. A little length at the chin with shorter sides can taper a wide jaw.",
  },
};

export const FACE_SHAPE_ANCHORS: Record<FaceShapeId, string> = {
  oval: "oval-face-shape",
  round: "round-face-shape",
  square: "square-face-shape",
  heart: "heart-face-shape",
  diamond: "diamond-face-shape",
  oblong: "oblong-face-shape",
  triangle: "triangle-face-shape",
};

const SECONDARY_GAP = 0.12;
const CLEAR_GAP = 0.18;
const LEANING_GAP = 0.08;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function hypot2(a: LandmarkPoint, b: LandmarkPoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function isFinitePoint(point: LandmarkPoint | undefined): point is LandmarkPoint {
  return point !== undefined && Number.isFinite(point.x) && Number.isFinite(point.y);
}

function pointAt(landmarks: LandmarkPoint[], index: number): LandmarkPoint | undefined {
  return landmarks[index];
}

function requiredPoint(landmarks: LandmarkPoint[], index: number): LandmarkPoint | null {
  const point = pointAt(landmarks, index);
  return isFinitePoint(point) ? point : null;
}

function band(value: number, low: number, high: number, softness: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }
  if (value >= low && value <= high) {
    return 1;
  }
  if (value < low) {
    return clamp(1 - (low - value) / softness, 0, 1);
  }
  return clamp(1 - (value - high) / softness, 0, 1);
}

function peak(value: number, center: number, spread: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }
  return clamp(1 - Math.abs(value - center) / spread, 0, 1);
}

export function rotateLandmarks(
  landmarks: LandmarkPoint[],
  angleRadians: number,
  origin: LandmarkPoint,
): LandmarkPoint[] {
  const cos = Math.cos(-angleRadians);
  const sin = Math.sin(-angleRadians);
  return landmarks.map((point) => {
    if (!isFinitePoint(point)) {
      return point;
    }
    const dx = point.x - origin.x;
    const dy = point.y - origin.y;
    return {
      x: origin.x + dx * cos - dy * sin,
      y: origin.y + dx * sin + dy * cos,
      z: point.z,
    };
  });
}

export function eyeRollRadians(landmarks: LandmarkPoint[]): number {
  const left = requiredPoint(landmarks, FACE_LANDMARK_INDEX.leftEyeOuter);
  const right = requiredPoint(landmarks, FACE_LANDMARK_INDEX.rightEyeOuter);
  if (!left || !right) {
    return 0;
  }
  return Math.atan2(right.y - left.y, right.x - left.x);
}

function landmarkBox(landmarks: LandmarkPoint[], indexes: number[]): FaceBox | null {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const index of indexes) {
    const point = requiredPoint(landmarks, index);
    if (!point) {
      return null;
    }
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

export function measureFace(landmarks: LandmarkPoint[]): MeasureFaceResult {
  if (!Array.isArray(landmarks) || landmarks.length < REQUIRED_LANDMARK_COUNT) {
    return {
      ok: false,
      error: "The landmark set is incomplete, so face proportions cannot be measured.",
    };
  }

  const roll = eyeRollRadians(landmarks);
  const nose = requiredPoint(landmarks, FACE_LANDMARK_INDEX.noseTip);
  const origin = nose ?? { x: 0.5, y: 0.5 };
  const aligned = Math.abs(roll) > 0.01 ? rotateLandmarks(landmarks, roll, origin) : landmarks;

  const foreheadTop = requiredPoint(aligned, FACE_LANDMARK_INDEX.foreheadTop);
  const chin = requiredPoint(aligned, FACE_LANDMARK_INDEX.chin);
  const leftForehead = requiredPoint(aligned, FACE_LANDMARK_INDEX.leftForehead);
  const rightForehead = requiredPoint(aligned, FACE_LANDMARK_INDEX.rightForehead);
  const leftCheek = requiredPoint(aligned, FACE_LANDMARK_INDEX.leftCheek);
  const rightCheek = requiredPoint(aligned, FACE_LANDMARK_INDEX.rightCheek);
  const leftJaw = requiredPoint(aligned, FACE_LANDMARK_INDEX.leftJaw);
  const rightJaw = requiredPoint(aligned, FACE_LANDMARK_INDEX.rightJaw);

  if (
    !foreheadTop ||
    !chin ||
    !leftForehead ||
    !rightForehead ||
    !leftCheek ||
    !rightCheek ||
    !leftJaw ||
    !rightJaw
  ) {
    return {
      ok: false,
      error: "Required facial landmarks were missing, so the photo could not be measured.",
    };
  }

  const faceLength = hypot2(foreheadTop, chin);
  const foreheadWidth = hypot2(leftForehead, rightForehead);
  const cheekboneWidth = hypot2(leftCheek, rightCheek);
  const jawlineWidth = hypot2(leftJaw, rightJaw);
  const faceWidth = Math.max(foreheadWidth, cheekboneWidth, jawlineWidth);

  if (faceLength < 0.04 || faceWidth < 0.04) {
    return {
      ok: false,
      error: "The detected face is too small in this photo to estimate proportions.",
    };
  }

  const measurements: FaceMeasurements = {
    faceLength,
    faceWidth,
    foreheadWidth,
    cheekboneWidth,
    jawlineWidth,
    lengthWidthRatio: faceLength / faceWidth,
    foreheadToCheek: foreheadWidth / cheekboneWidth,
    jawToCheek: jawlineWidth / cheekboneWidth,
    jawTaper: (cheekboneWidth - jawlineWidth) / cheekboneWidth,
  };

  const box = landmarkBox(aligned, [
    FACE_LANDMARK_INDEX.foreheadTop,
    FACE_LANDMARK_INDEX.chin,
    FACE_LANDMARK_INDEX.leftCheek,
    FACE_LANDMARK_INDEX.rightCheek,
    FACE_LANDMARK_INDEX.leftForehead,
    FACE_LANDMARK_INDEX.rightForehead,
    FACE_LANDMARK_INDEX.leftJaw,
    FACE_LANDMARK_INDEX.rightJaw,
  ]);
  if (!box) {
    return {
      ok: false,
      error: "Required facial landmarks were missing, so the photo could not be measured.",
    };
  }

  const warnings: string[] = [];
  const rollDegrees = (roll * 180) / Math.PI;
  if (Math.abs(rollDegrees) >= 12) {
    warnings.push(
      "The face looks tilted. A more level, front-facing photo usually gives a clearer outline.",
    );
  }
  if (box.width < 0.18 || box.height < 0.22) {
    warnings.push("The face is a small part of the photo. A closer, front-facing shot is easier to measure.");
  }
  if (box.minX < 0.04 || box.maxX > 0.96 || box.minY < 0.03 || box.maxY > 0.97) {
    warnings.push("The face sits near the edge of the photo, so some of the outline may be cropped.");
  }

  return { ok: true, measurements, rollDegrees, box, warnings };
}

function scoreShapes(m: FaceMeasurements): Record<FaceShapeId, number> {
  const ratio = m.lengthWidthRatio;
  const forehead = m.foreheadToCheek;
  const jaw = m.jawToCheek;
  const taper = m.jawTaper;

  const oval =
    0.34 * band(ratio, 1.22, 1.48, 0.12) +
    0.22 * peak(forehead, 0.96, 0.14) +
    0.24 * band(jaw, 0.76, 0.92, 0.1) +
    0.2 * band(taper, 0.08, 0.24, 0.1);

  const round =
    0.4 * band(ratio, 0.92, 1.14, 0.1) +
    0.2 * peak(forehead, 0.98, 0.12) +
    0.22 * band(jaw, 0.86, 0.99, 0.08) +
    0.18 * band(taper, 0.01, 0.14, 0.08);

  const square =
    0.32 * band(ratio, 0.96, 1.24, 0.1) +
    0.18 * peak(forehead, 1, 0.12) +
    0.32 * band(jaw, 0.98, 1.12, 0.08) +
    0.18 * band(taper, -0.12, 0.03, 0.08);

  const heart =
    0.22 * band(ratio, 1.12, 1.5, 0.14) +
    0.3 * band(forehead, 1.02, 1.22, 0.1) +
    0.3 * band(jaw, 0.58, 0.82, 0.1) +
    0.18 * band(taper, 0.18, 0.42, 0.1);

  const diamond =
    0.22 * band(ratio, 1.12, 1.52, 0.14) +
    0.3 * band(forehead, 0.72, 0.9, 0.1) +
    0.3 * band(jaw, 0.7, 0.88, 0.1) +
    0.18 * peak(m.cheekboneWidth / m.faceWidth, 1, 0.12);

  const oblong =
    0.5 * band(ratio, 1.5, 1.9, 0.16) +
    0.18 * peak(forehead, 0.98, 0.14) +
    0.18 * band(jaw, 0.8, 1.02, 0.12) +
    0.14 * band(taper, 0, 0.2, 0.12);

  const triangle =
    0.22 * band(ratio, 0.98, 1.4, 0.14) +
    0.3 * band(forehead, 0.72, 0.95, 0.1) +
    0.32 * band(jaw, 1.02, 1.28, 0.1) +
    0.16 * band(-taper, 0.02, 0.28, 0.1);

  return { oval, round, square, heart, diamond, oblong, triangle };
}

function ranked(scores: Record<FaceShapeId, number>): FaceShapeId[] {
  return [...FACE_SHAPES].sort((a, b) => scores[b] - scores[a] || a.localeCompare(b));
}

function matchStrength(primary: number, secondary: number): FaceShapeMatchStrength {
  const gap = primary - secondary;
  if (gap >= CLEAR_GAP) {
    return "clear";
  }
  if (gap >= LEANING_GAP) {
    return "leaning";
  }
  return "close";
}

export function classifyFaceShape(measurements: FaceMeasurements): {
  primary: FaceShapeId;
  secondary?: FaceShapeId;
  scores: Record<FaceShapeId, number>;
  matchStrength: FaceShapeMatchStrength;
} {
  const scores = scoreShapes(measurements);
  const order = ranked(scores);
  const primary = order[0];
  const next = order[1];
  const secondary =
    next && scores[primary] - scores[next] <= SECONDARY_GAP && scores[next] >= 0.35
      ? next
      : undefined;

  return {
    primary,
    secondary,
    scores,
    matchStrength: matchStrength(scores[primary], scores[next] ?? 0),
  };
}

export function estimateFaceShape(
  landmarks: LandmarkPoint[],
  options?: { landmarkCount?: number },
): { ok: true; result: FaceShapeClassification } | { ok: false; error: string } {
  const measured = measureFace(landmarks);
  if (!measured.ok) {
    return measured;
  }
  const classified = classifyFaceShape(measured.measurements);
  return {
    ok: true,
    result: {
      ...classified,
      measurements: measured.measurements,
      rollDegrees: measured.rollDegrees,
      landmarkCount: options?.landmarkCount ?? landmarks.length,
      warnings: measured.warnings,
    },
  };
}

export function formatRatio(value: number): string {
  if (!Number.isFinite(value)) {
    return "—";
  }
  return value.toFixed(2);
}

export function formatRelativeWidth(value: number): string {
  if (!Number.isFinite(value)) {
    return "—";
  }
  return `${Math.round(value * 100)}% of cheek width`;
}

export function matchStrengthLabel(strength: FaceShapeMatchStrength): string {
  if (strength === "clear") {
    return "Clearer match";
  }
  if (strength === "leaning") {
    return "Leaning this way";
  }
  return "Close call";
}

function emptyLandmarks(): LandmarkPoint[] {
  return Array.from({ length: FACE_LANDMARKER_LANDMARKS }, () => ({ x: 0.5, y: 0.5 }));
}

function setPair(
  landmarks: LandmarkPoint[],
  left: number,
  right: number,
  cx: number,
  y: number,
  half: number,
) {
  landmarks[left] = { x: cx - half, y };
  landmarks[right] = { x: cx + half, y };
}

/**
 * Build a 478-point fixture from the four measurements the classifier uses.
 * Unused indexes stay at the face center so the array length is realistic.
 */
export function syntheticFaceLandmarks(input: {
  length: number;
  forehead: number;
  cheek: number;
  jaw: number;
  cx?: number;
  top?: number;
  rollDegrees?: number;
}): LandmarkPoint[] {
  const cx = input.cx ?? 0.5;
  const top = input.top ?? 0.22;
  const length = input.length;
  const cheekY = top + length * 0.48;
  const foreheadY = top + length * 0.16;
  const jawY = top + length * 0.78;
  const eyeY = top + length * 0.28;
  const landmarks = emptyLandmarks();
  landmarks[FACE_LANDMARK_INDEX.foreheadTop] = { x: cx, y: top };
  landmarks[FACE_LANDMARK_INDEX.chin] = { x: cx, y: top + length };
  landmarks[FACE_LANDMARK_INDEX.noseTip] = { x: cx, y: top + length * 0.55 };
  setPair(
    landmarks,
    FACE_LANDMARK_INDEX.leftForehead,
    FACE_LANDMARK_INDEX.rightForehead,
    cx,
    foreheadY,
    input.forehead / 2,
  );
  setPair(
    landmarks,
    FACE_LANDMARK_INDEX.leftCheek,
    FACE_LANDMARK_INDEX.rightCheek,
    cx,
    cheekY,
    input.cheek / 2,
  );
  setPair(
    landmarks,
    FACE_LANDMARK_INDEX.leftJaw,
    FACE_LANDMARK_INDEX.rightJaw,
    cx,
    jawY,
    input.jaw / 2,
  );
  setPair(
    landmarks,
    FACE_LANDMARK_INDEX.leftEyeOuter,
    FACE_LANDMARK_INDEX.rightEyeOuter,
    cx,
    eyeY,
    input.cheek * 0.38,
  );
  const roll = ((input.rollDegrees ?? 0) * Math.PI) / 180;
  if (Math.abs(roll) < 0.001) {
    return landmarks;
  }
  return rotateLandmarks(landmarks, -roll, landmarks[FACE_LANDMARK_INDEX.noseTip]);
}

export const FACE_SHAPE_FIXTURES: Record<FaceShapeId, LandmarkPoint[]> = {
  oval: syntheticFaceLandmarks({ length: 0.42, forehead: 0.29, cheek: 0.31, jaw: 0.26 }),
  round: syntheticFaceLandmarks({ length: 0.3, forehead: 0.3, cheek: 0.31, jaw: 0.295 }),
  square: syntheticFaceLandmarks({ length: 0.36, forehead: 0.32, cheek: 0.322, jaw: 0.33 }),
  heart: syntheticFaceLandmarks({ length: 0.4, forehead: 0.34, cheek: 0.3, jaw: 0.22 }),
  diamond: syntheticFaceLandmarks({ length: 0.4, forehead: 0.24, cheek: 0.32, jaw: 0.24 }),
  oblong: syntheticFaceLandmarks({ length: 0.5, forehead: 0.29, cheek: 0.3, jaw: 0.28 }),
  triangle: syntheticFaceLandmarks({ length: 0.38, forehead: 0.24, cheek: 0.29, jaw: 0.34 }),
};
