import { PDFDocument } from "pdf-lib";
import {
  contentBox,
  imageDrawRect,
  MAX_IMAGE_PDF_FILES,
  pageDimensions,
  PDF_EMBED_MAX_EDGE,
  validatePdfImageFile,
  type ImageFit,
  type PageMargin,
  type PageOrientation,
  type PageSizeName,
} from "./pdf-layout.ts";

export { validatePdfImageFile, MAX_IMAGE_PDF_FILES };

export type ImagePdfOptions = {
  pageSize: PageSizeName;
  orientation: PageOrientation;
  margin: PageMargin;
  fit: ImageFit;
};

export type PdfImageInput = {
  bytes: Uint8Array;
  mime: "image/jpeg" | "image/png";
  width: number;
  height: number;
};

export function validateImagePdfList(
  files: Array<{ name: string; type: string; size: number }>,
): { ok: true } | { ok: false; error: string } {
  if (files.length === 0) {
    return { ok: false, error: "Add at least one JPG or PNG image." };
  }
  if (files.length > MAX_IMAGE_PDF_FILES) {
    return {
      ok: false,
      error: `Use up to ${MAX_IMAGE_PDF_FILES} images so the tab stays usable.`,
    };
  }
  for (const file of files) {
    const validated = validatePdfImageFile(file);
    if (!validated.ok) {
      return { ok: false, error: `${file.name}: ${validated.error}` };
    }
  }
  return { ok: true };
}

export async function buildImagePdf(
  images: PdfImageInput[],
  options: ImagePdfOptions,
): Promise<{ ok: true; bytes: Uint8Array } | { ok: false; error: string }> {
  const validated = validateImagePdfList(
    images.map((image, index) => ({
      name: `image-${index + 1}`,
      type: image.mime,
      size: image.bytes.byteLength,
    })),
  );
  if (!validated.ok) {
    return validated;
  }

  try {
    const pdf = await PDFDocument.create();
    for (const image of images) {
      const pageSize = pageDimensions(
        options.pageSize,
        options.orientation,
        image.width,
        image.height,
      );
      const page = pdf.addPage([pageSize.width, pageSize.height]);
      const embedded =
        image.mime === "image/png"
          ? await pdf.embedPng(image.bytes)
          : await pdf.embedJpg(image.bytes);
      const box = contentBox(pageSize, options.margin);
      const draw = imageDrawRect(box, image.width, image.height, options.fit);
      page.drawImage(embedded, draw);
    }
    return { ok: true, bytes: await pdf.save() };
  } catch {
    return {
      ok: false,
      error: "The PDF could not be created. Try fewer or smaller images.",
    };
  }
}

export function shouldDownsample(width: number, height: number): boolean {
  return Math.max(width, height) > PDF_EMBED_MAX_EDGE;
}

export function downsampleSize(width: number, height: number): { width: number; height: number } {
  const longest = Math.max(width, height);
  if (longest <= PDF_EMBED_MAX_EDGE) {
    return { width, height };
  }
  const scale = PDF_EMBED_MAX_EDGE / longest;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}
