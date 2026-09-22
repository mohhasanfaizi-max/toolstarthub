export const MAX_IMAGE_PDF_FILES = 20;
export const MAX_MERGE_PDFS = 10;
export const MAX_MERGE_PAGES = 80;
export const MAX_SPLIT_PAGES = 80;
export const PDF_EMBED_MAX_EDGE = 2000;

export type PageSizeName = "a4" | "letter" | "original";
export type PageOrientation = "portrait" | "landscape" | "auto";
export type PageMargin = "none" | "small" | "medium";
export type ImageFit = "fit" | "fill" | "original";

export type Size = { width: number; height: number };
export type Rect = { x: number; y: number; width: number; height: number };

const A4: Size = { width: 595.28, height: 841.89 };
const LETTER: Size = { width: 612, height: 792 };

const MARGIN_PT: Record<PageMargin, number> = {
  none: 0,
  small: 18,
  medium: 36,
};

export function validatePdfImageFile(file: {
  name: string;
  type: string;
  size: number;
}): { ok: true } | { ok: false; error: string } {
  const isImage =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.name.toLowerCase().endsWith(".jpg") ||
    file.name.toLowerCase().endsWith(".jpeg") ||
    file.name.toLowerCase().endsWith(".png");
  if (!isImage) {
    return { ok: false, error: "Use JPG or PNG images." };
  }
  if (file.size <= 0) {
    return { ok: false, error: "That file is empty." };
  }
  return { ok: true };
}

export function pageDimensions(
  pageSize: PageSizeName,
  orientation: PageOrientation,
  imageWidth: number,
  imageHeight: number,
): Size {
  if (pageSize === "original") {
    const width = Math.max(72, imageWidth);
    const height = Math.max(72, imageHeight);
    return capPage({ width, height });
  }

  const base = pageSize === "letter" ? LETTER : A4;
  const landscape = { width: base.height, height: base.width };
  if (orientation === "landscape") {
    return landscape;
  }
  if (orientation === "portrait") {
    return base;
  }
  return imageWidth > imageHeight ? landscape : base;
}

export function marginPoints(margin: PageMargin): number {
  return MARGIN_PT[margin];
}

export function contentBox(page: Size, margin: PageMargin): Rect {
  const inset = marginPoints(margin);
  const width = Math.max(1, page.width - inset * 2);
  const height = Math.max(1, page.height - inset * 2);
  return { x: inset, y: inset, width, height };
}

export function imageDrawRect(
  box: Rect,
  imageWidth: number,
  imageHeight: number,
  fit: ImageFit,
): Rect {
  if (imageWidth <= 0 || imageHeight <= 0) {
    return box;
  }

  if (fit === "original") {
    if (imageWidth <= box.width && imageHeight <= box.height) {
      return {
        x: box.x + (box.width - imageWidth) / 2,
        y: box.y + (box.height - imageHeight) / 2,
        width: imageWidth,
        height: imageHeight,
      };
    }
    return imageDrawRect(box, imageWidth, imageHeight, "fit");
  }

  const scale =
    fit === "fill"
      ? Math.max(box.width / imageWidth, box.height / imageHeight)
      : Math.min(box.width / imageWidth, box.height / imageHeight);

  const width = imageWidth * scale;
  const height = imageHeight * scale;
  return {
    x: box.x + (box.width - width) / 2,
    y: box.y + (box.height - height) / 2,
    width,
    height,
  };
}

function capPage(size: Size): Size {
  const longest = Math.max(size.width, size.height);
  if (longest <= 1440) {
    return size;
  }
  const scale = 1440 / longest;
  return { width: size.width * scale, height: size.height * scale };
}
