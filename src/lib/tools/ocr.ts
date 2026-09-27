export const OCR_MAX_EDGE = 1600;

/** worker.min.js + tesseract-core-relaxedsimd-lstm.wasm.js + eng.traineddata.gz */
export const OCR_FIRST_RUN_BYTES = 111_307 + 3_905_767 + 2_952_873;

export const OCR_WORKER_PATHS = {
  workerPath: "/tesseract/worker.min.js",
  corePath: "/tesseract/core",
  langPath: "/tesseract/lang",
  workerBlobURL: false,
} as const;

export function ocrFirstRunMegabytes(): string {
  const mb = Math.round((OCR_FIRST_RUN_BYTES / (1024 * 1024)) * 10) / 10;
  return String(mb);
}

export const OCR_PANEL_LEAD = `This reads English text from one photo in this tab. It is slower than the canvas image tools. The first time, this browser downloads the recognition engine and the English language file, about ${ocrFirstRunMegabytes()} MB. Later runs on this browser reuse that download. The result depends on the photo. A readable sign can still come back with wrong letters, and a busy background can add lines that are not text. Blur, glare, and small type make that worse. Check the text before you use it.`;

export function ocrTargetSize(
  width: number,
  height: number,
): { width: number; height: number; scaled: boolean } {
  const safeWidth = Math.round(width);
  const safeHeight = Math.round(height);
  if (!Number.isFinite(safeWidth) || !Number.isFinite(safeHeight) || safeWidth < 1 || safeHeight < 1) {
    return { width: 0, height: 0, scaled: false };
  }
  const longSide = Math.max(safeWidth, safeHeight);
  if (longSide <= OCR_MAX_EDGE) {
    return { width: safeWidth, height: safeHeight, scaled: false };
  }
  const scale = OCR_MAX_EDGE / longSide;
  return {
    width: Math.max(1, Math.round(safeWidth * scale)),
    height: Math.max(1, Math.round(safeHeight * scale)),
    scaled: true,
  };
}

export function ocrStatusLabel(status: string): string {
  const value = status.toLowerCase();
  if (value.includes("core")) {
    return "Downloading the recognition engine…";
  }
  if (value.includes("traineddata") || value.includes("language")) {
    return "Downloading the English language file…";
  }
  if (value.includes("recogniz")) {
    return "Reading the image…";
  }
  return "Preparing the reader…";
}
