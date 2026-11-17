import {
  formatBytes,
  MIN_OUTPUT_DIMENSION,
  rasterizeImage,
  type ImageOutputType,
} from "@/lib/tools/image";

export const TARGET_PRESETS = [
  { label: "100 KB", value: 100, unit: "KB" as const },
  { label: "200 KB", value: 200, unit: "KB" as const },
  { label: "500 KB", value: 500, unit: "KB" as const },
  { label: "1 MB", value: 1, unit: "MB" as const },
];

export const MIN_TARGET_QUALITY = 10;
export const MAX_TARGET_QUALITY = 100;
/** Stop shrinking dimensions once the shorter side would fall below this. */
export const MIN_TARGET_SIDE = 32;

export type TargetSizeUnit = "KB" | "MB";

export type TargetSizeParse =
  | { ok: true; bytes: number; value: number; unit: TargetSizeUnit }
  | { ok: false; error: string };

export function parseTargetSize(raw: string | number, unit: TargetSizeUnit): TargetSizeParse {
  const value = typeof raw === "number" ? raw : Number(String(raw).trim());
  if (!Number.isFinite(value) || value <= 0) {
    return { ok: false, error: "Enter a target size greater than zero." };
  }
  const bytes = unit === "MB" ? value * 1024 * 1024 : value * 1024;
  if (bytes < 1024) {
    return { ok: false, error: "The target must be at least 1 KB." };
  }
  if (bytes > 25 * 1024 * 1024) {
    return { ok: false, error: "The target cannot be larger than 25 MB." };
  }
  return { ok: true, bytes: Math.round(bytes), value, unit };
}

export function formatTarget(bytes: number): string {
  return formatBytes(bytes);
}

export type CompressToTargetOptions = {
  source: CanvasImageSource;
  sourceWidth: number;
  sourceHeight: number;
  mime: ImageOutputType;
  targetBytes: number;
  allowDownscale: boolean;
};

export type CompressToTargetSuccess = {
  ok: true;
  blob: Blob;
  quality: number;
  width: number;
  height: number;
  metTarget: boolean;
  downscaled: boolean;
  message: string;
};

export type CompressToTargetResult = CompressToTargetSuccess | { ok: false; error: string };

type Encoded = { blob: Blob; quality: number; width: number; height: number };

async function encodeAt(
  options: CompressToTargetOptions,
  width: number,
  height: number,
  quality: number,
): Promise<{ ok: true; encoded: Encoded } | { ok: false; error: string }> {
  const result = await rasterizeImage({
    source: options.source,
    sourceWidth: options.sourceWidth,
    sourceHeight: options.sourceHeight,
    destWidth: width,
    destHeight: height,
    mime: options.mime,
    quality,
  });
  if (!result.ok) {
    return result;
  }
  return {
    ok: true,
    encoded: { blob: result.blob, quality, width, height },
  };
}

/** Highest quality at this size whose file is at or under the target, if any. */
async function searchQuality(
  options: CompressToTargetOptions,
  width: number,
  height: number,
): Promise<{ ok: true; bestUnder: Encoded | null; smallest: Encoded } | { ok: false; error: string }> {
  if (options.mime === "image/png") {
    const encoded = await encodeAt(options, width, height, MAX_TARGET_QUALITY);
    if (!encoded.ok) {
      return encoded;
    }
    const under = encoded.encoded.blob.size <= options.targetBytes ? encoded.encoded : null;
    return { ok: true, bestUnder: under, smallest: encoded.encoded };
  }

  let low = MIN_TARGET_QUALITY;
  let high = MAX_TARGET_QUALITY;
  let bestUnder: Encoded | null = null;
  let smallest: Encoded | null = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const encoded = await encodeAt(options, width, height, mid);
    if (!encoded.ok) {
      return encoded;
    }
    const current = encoded.encoded;
    if (!smallest || current.blob.size < smallest.blob.size) {
      smallest = current;
    }
    if (current.blob.size <= options.targetBytes) {
      bestUnder = current;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (!smallest) {
    return { ok: false, error: "The image could not be compressed to the target size." };
  }
  return { ok: true, bestUnder, smallest };
}

function nextSmallerSize(width: number, height: number): { width: number; height: number } | null {
  const scale = 0.9;
  let nextWidth = Math.max(MIN_OUTPUT_DIMENSION, Math.round(width * scale));
  let nextHeight = Math.max(MIN_OUTPUT_DIMENSION, Math.round(height * scale));
  if (Math.min(nextWidth, nextHeight) < MIN_TARGET_SIDE && Math.min(width, height) > MIN_TARGET_SIDE) {
    const factor = MIN_TARGET_SIDE / Math.min(width, height);
    nextWidth = Math.max(MIN_OUTPUT_DIMENSION, Math.round(width * factor));
    nextHeight = Math.max(MIN_OUTPUT_DIMENSION, Math.round(height * factor));
  }
  if (nextWidth === width && nextHeight === height) {
    return null;
  }
  if (Math.min(nextWidth, nextHeight) < MIN_TARGET_SIDE && Math.min(width, height) <= MIN_TARGET_SIDE) {
    return null;
  }
  return { width: nextWidth, height: nextHeight };
}

function success(encoded: Encoded, options: CompressToTargetOptions, downscaled: boolean): CompressToTargetSuccess {
  const metTarget = encoded.blob.size <= options.targetBytes;
  const targetLabel = formatTarget(options.targetBytes);
  const resultLabel = formatBytes(encoded.blob.size);
  let message: string;
  if (metTarget && !downscaled) {
    message = `Target ${targetLabel} met. Result: ${resultLabel}.`;
  } else if (metTarget && downscaled) {
    message = `Target ${targetLabel} met after shrinking the image to ${encoded.width} × ${encoded.height} px. Result: ${resultLabel}.`;
  } else if (options.mime === "image/png" && !options.allowDownscale) {
    message = `Target ${targetLabel} was not met. Result: ${resultLabel}. PNG is lossless on this page, so quality does not shrink the file. Choose JPG or WebP, or turn on shrinking dimensions.`;
  } else if (!options.allowDownscale) {
    message = `Target ${targetLabel} was not met at the lowest quality. Result: ${resultLabel}. Turn on “Also shrink dimensions if needed” and compress again, or choose a larger target.`;
  } else {
    message = `Target ${targetLabel} was not met, even at the lowest quality and after shrinking the image to ${encoded.width} × ${encoded.height} px. Result: ${resultLabel}. Choose a larger target or a different format.`;
  }
  return {
    ok: true,
    blob: encoded.blob,
    quality: encoded.quality,
    width: encoded.width,
    height: encoded.height,
    metTarget,
    downscaled,
    message,
  };
}

export async function compressToTarget(options: CompressToTargetOptions): Promise<CompressToTargetResult> {
  if (options.targetBytes <= 0) {
    return { ok: false, error: "Enter a target size greater than zero." };
  }

  const first = await searchQuality(options, options.sourceWidth, options.sourceHeight);
  if (!first.ok) {
    return first;
  }
  if (first.bestUnder) {
    return success(first.bestUnder, options, false);
  }

  if (!options.allowDownscale) {
    return success(first.smallest, options, false);
  }

  let width = options.sourceWidth;
  let height = options.sourceHeight;
  let smallest = first.smallest;
  while (true) {
    const next = nextSmallerSize(width, height);
    if (!next) {
      return success(smallest, options, width !== options.sourceWidth || height !== options.sourceHeight);
    }
    width = next.width;
    height = next.height;
    const step = await searchQuality(options, width, height);
    if (!step.ok) {
      return step;
    }
    if (step.smallest.blob.size < smallest.blob.size) {
      smallest = step.smallest;
    }
    if (step.bestUnder) {
      return success(step.bestUnder, options, true);
    }
  }
}
