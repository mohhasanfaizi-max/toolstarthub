export type CropRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CropHandle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";
export type CropAspect = "free" | "1:1" | "4:3" | "16:9";

export const CROP_ASPECTS: Array<{ id: CropAspect; label: string; ratio: number | null }> = [
  { id: "free", label: "Free", ratio: null },
  { id: "1:1", label: "1:1", ratio: 1 },
  { id: "4:3", label: "4:3", ratio: 4 / 3 },
  { id: "16:9", label: "16:9", ratio: 16 / 9 },
];

export const MIN_CROP_SIZE = 8;

export function aspectRatioValue(aspect: CropAspect): number | null {
  return CROP_ASPECTS.find((item) => item.id === aspect)?.ratio ?? null;
}

export function clampCrop(rect: CropRect, imageWidth: number, imageHeight: number): CropRect {
  const width = clamp(Math.round(rect.width), MIN_CROP_SIZE, imageWidth);
  const height = clamp(Math.round(rect.height), MIN_CROP_SIZE, imageHeight);
  const x = clamp(Math.round(rect.x), 0, Math.max(0, imageWidth - width));
  const y = clamp(Math.round(rect.y), 0, Math.max(0, imageHeight - height));

  return {
    x,
    y,
    width: Math.min(width, imageWidth - x),
    height: Math.min(height, imageHeight - y),
  };
}

export function fitCropToAspect(
  imageWidth: number,
  imageHeight: number,
  aspect: CropAspect,
): CropRect {
  const ratio = aspectRatioValue(aspect);
  const inset = 0.9;

  if (!ratio) {
    const width = Math.max(MIN_CROP_SIZE, Math.round(imageWidth * inset));
    const height = Math.max(MIN_CROP_SIZE, Math.round(imageHeight * inset));
    return clampCrop(
      {
        x: Math.round((imageWidth - width) / 2),
        y: Math.round((imageHeight - height) / 2),
        width,
        height,
      },
      imageWidth,
      imageHeight,
    );
  }

  let width = imageWidth * inset;
  let height = width / ratio;

  if (height > imageHeight * inset) {
    height = imageHeight * inset;
    width = height * ratio;
  }

  return clampCrop(
    {
      x: (imageWidth - width) / 2,
      y: (imageHeight - height) / 2,
      width,
      height,
    },
    imageWidth,
    imageHeight,
  );
}

export function moveCrop(
  rect: CropRect,
  dx: number,
  dy: number,
  imageWidth: number,
  imageHeight: number,
): CropRect {
  return clampCrop(
    {
      ...rect,
      x: rect.x + dx,
      y: rect.y + dy,
    },
    imageWidth,
    imageHeight,
  );
}

export function resizeCrop(
  rect: CropRect,
  handle: CropHandle,
  dx: number,
  dy: number,
  imageWidth: number,
  imageHeight: number,
  aspect: CropAspect,
): CropRect {
  const ratio = aspectRatioValue(aspect);
  const right = rect.x + rect.width;
  const bottom = rect.y + rect.height;

  let x = rect.x;
  let y = rect.y;
  let width = rect.width;
  let height = rect.height;

  if (handle.includes("e")) {
    width = right + dx - x;
  }
  if (handle.includes("s")) {
    height = bottom + dy - y;
  }
  if (handle.includes("w")) {
    x += dx;
    width = right - x;
  }
  if (handle.includes("n")) {
    y += dy;
    height = bottom - y;
  }

  if (ratio) {
    const fromWidth = handle === "e" || handle === "w" || handle === "ne" || handle === "se" || handle === "nw" || handle === "sw";
    const fromHeight = handle === "n" || handle === "s";

    if (fromHeight && !fromWidth) {
      width = height * ratio;
      if (handle.includes("w")) {
        x = right - width;
      }
    } else {
      height = width / ratio;
      if (handle.includes("n")) {
        y = bottom - height;
      }
    }
  }

  return clampCrop({ x, y, width, height }, imageWidth, imageHeight);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
