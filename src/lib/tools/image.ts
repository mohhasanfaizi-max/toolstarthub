export const MAX_IMAGE_BYTES = 25 * 1024 * 1024;
export const MAX_IMAGE_DIMENSION = 8192;
export const MIN_OUTPUT_DIMENSION = 1;
export const MAX_OUTPUT_DIMENSION = 8192;

export const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export type SupportedImageType = (typeof SUPPORTED_IMAGE_TYPES)[number];
export type ImageOutputType = "image/jpeg" | "image/png" | "image/webp";

const TYPE_BY_EXTENSION: Record<string, SupportedImageType> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

const EXTENSION_BY_TYPE: Record<ImageOutputType, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export type ImageFileLike = {
  name: string;
  type: string;
  size: number;
};

export type ImageValidationResult =
  | { ok: true; mime: SupportedImageType }
  | { ok: false; error: string };

export function inferImageType(file: ImageFileLike): SupportedImageType | null {
  if (SUPPORTED_IMAGE_TYPES.includes(file.type as SupportedImageType)) {
    return file.type as SupportedImageType;
  }

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  return TYPE_BY_EXTENSION[extension] ?? null;
}

export function looksLikeSupportedImage(bytes: ArrayBuffer | Uint8Array): boolean {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (view.length < 12) {
    return false;
  }
  if (view[0] === 0xff && view[1] === 0xd8 && view[2] === 0xff) {
    return true;
  }
  if (
    view[0] === 0x89 &&
    view[1] === 0x50 &&
    view[2] === 0x4e &&
    view[3] === 0x47 &&
    view[4] === 0x0d &&
    view[5] === 0x0a &&
    view[6] === 0x1a &&
    view[7] === 0x0a
  ) {
    return true;
  }
  if (
    view[0] === 0x52 &&
    view[1] === 0x49 &&
    view[2] === 0x46 &&
    view[3] === 0x46 &&
    view[8] === 0x57 &&
    view[9] === 0x45 &&
    view[10] === 0x42 &&
    view[11] === 0x50
  ) {
    return true;
  }
  return false;
}

export function validateImageFile(file: ImageFileLike | null): ImageValidationResult {
  if (!file) {
    return { ok: false, error: "Choose an image file." };
  }

  const mime = inferImageType(file);
  if (!mime) {
    return {
      ok: false,
      error: "Use a JPG, PNG or WebP image. Other formats are not supported.",
    };
  }

  if (file.size <= 0) {
    return { ok: false, error: "That file is empty. Choose another image." };
  }

  if (file.size > MAX_IMAGE_BYTES) {
    return {
      ok: false,
      error: `Keep images at ${formatBytes(MAX_IMAGE_BYTES)} or smaller so the browser stays responsive.`,
    };
  }

  return { ok: true, mime };
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) {
    return "—";
  }

  if (bytes < 1024) {
    return `${Math.round(bytes)} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const digits = value >= 10 || unitIndex === 0 ? 1 : 2;
  return `${value.toFixed(digits)} ${units[unitIndex]}`;
}

export function sizeReductionPercent(originalBytes: number, outputBytes: number): number | null {
  if (originalBytes <= 0) {
    return null;
  }

  return ((originalBytes - outputBytes) / originalBytes) * 100;
}

export function parseDimension(
  raw: string,
  field: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: `Enter a ${field}.` };
  }

  const value = Number(trimmed);
  if (!Number.isFinite(value) || !Number.isInteger(value)) {
    return { ok: false, error: `Enter a whole-number ${field}.` };
  }

  if (value < MIN_OUTPUT_DIMENSION) {
    return { ok: false, error: `${capitalize(field)} must be at least ${MIN_OUTPUT_DIMENSION} pixel.` };
  }

  if (value > MAX_OUTPUT_DIMENSION) {
    return {
      ok: false,
      error: `${capitalize(field)} cannot be greater than ${MAX_OUTPUT_DIMENSION} pixels.`,
    };
  }

  return { ok: true, value };
}

export function parseQuality(
  raw: number | string,
): { ok: true; value: number } | { ok: false; error: string } {
  const value = typeof raw === "number" ? raw : Number(raw);
  if (!Number.isFinite(value)) {
    return { ok: false, error: "Enter a quality between 10 and 100." };
  }

  if (value < 10 || value > 100) {
    return { ok: false, error: "Quality must be between 10 and 100." };
  }

  return { ok: true, value: Math.round(value) };
}

export function qualityToCanvas(quality: number): number {
  return Math.min(1, Math.max(0.1, quality / 100));
}

export function heightForWidth(width: number, originalWidth: number, originalHeight: number): number {
  if (originalWidth <= 0) {
    return width;
  }

  return Math.max(1, Math.round((width * originalHeight) / originalWidth));
}

export function widthForHeight(height: number, originalWidth: number, originalHeight: number): number {
  if (originalHeight <= 0) {
    return height;
  }

  return Math.max(1, Math.round((height * originalWidth) / originalHeight));
}

export function replacementFileName(originalName: string, mime: ImageOutputType, suffix = ""): string {
  const base = originalName.replace(/\.[^.]+$/, "") || "image";
  const safeBase = base.replace(/[^\p{L}\p{N}._-]+/gu, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "image";
  return `${safeBase}${suffix}.${EXTENSION_BY_TYPE[mime]}`;
}

export function parseHexColor(
  raw: string,
): { ok: true; value: string } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (!/^#([0-9a-fA-F]{6})$/.test(trimmed)) {
    return { ok: false, error: "Use a 6-digit hex color such as #ffffff." };
  }

  return { ok: true, value: trimmed.toLowerCase() };
}

export function outputLabel(mime: ImageOutputType): string {
  if (mime === "image/jpeg") {
    return "JPG";
  }
  if (mime === "image/png") {
    return "PNG";
  }
  return "WebP";
}

export async function inspectImageFile(
  file: File,
): Promise<
  | { ok: true; width: number; height: number; previewUrl: string; mime: SupportedImageType }
  | { ok: false; error: string }
> {
  const validated = validateImageFile(file);
  if (!validated.ok) {
    return validated;
  }

  const header = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  if (!looksLikeSupportedImage(header)) {
    return {
      ok: false,
      error: "That file could not be read as an image. Try another JPG, PNG or WebP file.",
    };
  }

  const previewUrl = URL.createObjectURL(file);

  try {
    const size = await readImageSize(previewUrl);
    if (size.width > MAX_IMAGE_DIMENSION || size.height > MAX_IMAGE_DIMENSION) {
      URL.revokeObjectURL(previewUrl);
      return {
        ok: false,
        error: `Keep each side at ${MAX_IMAGE_DIMENSION} pixels or smaller.`,
      };
    }

    return {
      ok: true,
      width: size.width,
      height: size.height,
      previewUrl,
      mime: validated.mime,
    };
  } catch {
    URL.revokeObjectURL(previewUrl);
    return {
      ok: false,
      error: "That file could not be read as an image. Try another JPG, PNG or WebP file.",
    };
  }
}

export async function rasterizeImage(options: {
  source: CanvasImageSource;
  sourceWidth: number;
  sourceHeight: number;
  sx?: number;
  sy?: number;
  sw?: number;
  sh?: number;
  destWidth: number;
  destHeight: number;
  mime: ImageOutputType;
  quality: number;
  background?: string;
}): Promise<{ ok: true; blob: Blob } | { ok: false; error: string }> {
  const sx = options.sx ?? 0;
  const sy = options.sy ?? 0;
  const sw = options.sw ?? options.sourceWidth;
  const sh = options.sh ?? options.sourceHeight;

  if (
    options.destWidth < MIN_OUTPUT_DIMENSION ||
    options.destHeight < MIN_OUTPUT_DIMENSION ||
    options.destWidth > MAX_OUTPUT_DIMENSION ||
    options.destHeight > MAX_OUTPUT_DIMENSION
  ) {
    return {
      ok: false,
      error: `Output size must be between ${MIN_OUTPUT_DIMENSION} and ${MAX_OUTPUT_DIMENSION} pixels.`,
    };
  }

  if (typeof document === "undefined") {
    return { ok: false, error: "Image processing is only available in the browser." };
  }

  const canvas = document.createElement("canvas");
  canvas.width = options.destWidth;
  canvas.height = options.destHeight;
  const context = canvas.getContext("2d");

  if (!context) {
    return { ok: false, error: "This browser could not create a drawing surface." };
  }

  if (options.mime === "image/jpeg" || options.background) {
    context.fillStyle = options.background ?? "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  try {
    context.drawImage(
      options.source,
      sx,
      sy,
      sw,
      sh,
      0,
      0,
      options.destWidth,
      options.destHeight,
    );
  } catch {
    return { ok: false, error: "The image could not be drawn. Try another file." };
  }

  try {
    const blob = await canvasToBlob(
      canvas,
      options.mime,
      options.mime === "image/png" ? undefined : qualityToCanvas(options.quality),
    );
    return { ok: true, blob };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "The image could not be compressed.";
    return { ok: false, error: message };
  }
}

export async function loadImageElement(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load image"));
    image.src = url;
  });
}

function readImageSize(url: string): Promise<{ width: number; height: number }> {
  return loadImageElement(url).then((image) => ({
    width: image.naturalWidth,
    height: image.naturalHeight,
  }));
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mime: ImageOutputType,
  quality?: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              mime === "image/webp"
                ? "This browser cannot encode WebP. Choose JPG or PNG instead."
                : "The browser could not create the output file.",
            ),
          );
          return;
        }
        resolve(blob);
      },
      mime,
      quality,
    );
  });
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
