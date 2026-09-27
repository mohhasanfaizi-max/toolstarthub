import { parseHexColor } from "./image.ts";

export const FAVICON_PNG_SIZES = [16, 32, 180] as const;
export const FAVICON_ICO_SIZES = [16, 32] as const;

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const MAX_PNG_BYTES = 512 * 1024;

export type FaviconPlan =
  | { ok: true; background: string; textColor: string; letters: string }
  | { ok: false; error: string };

export function faviconPlan(backgroundRaw: string, textColorRaw: string, lettersRaw: string): FaviconPlan {
  const background = parseHexColor(backgroundRaw);
  if (!background.ok) return background;
  const textColor = parseHexColor(textColorRaw);
  if (!textColor.ok) return { ok: false, error: "Use a 6-digit hex color for the letters, such as #ffffff." };
  const letters = lettersRaw.trim();
  if ([...letters].length > 2) return { ok: false, error: "Enter one or two letters, or leave the letters blank for a solid icon." };
  if (/[\u0000-\u001f]/.test(letters)) return { ok: false, error: "Enter letters without a line break." };
  return { ok: true, background: background.value, textColor: textColor.value, letters };
}

export function buildPngIco(images: { size: number; png: Uint8Array }[]): { ok: true; bytes: Uint8Array } | { ok: false; error: string } {
  if (images.length === 0 || images.length > 4) return { ok: false, error: "Add one to four PNG images." };
  for (const image of images) {
    if (!FAVICON_ICO_SIZES.includes(image.size as (typeof FAVICON_ICO_SIZES)[number])) {
      return { ok: false, error: "An ICO image must be 16 or 32 pixels." };
    }
    if (image.png.length > MAX_PNG_BYTES) return { ok: false, error: "That PNG is too large for the icon file." };
    if (!PNG_SIGNATURE.every((byte, index) => image.png[index] === byte)) {
      return { ok: false, error: "That image is not a PNG." };
    }
  }

  const header = 6 + images.length * 16;
  const total = header + images.reduce((sum, image) => sum + image.png.length, 0);
  const bytes = new Uint8Array(total);
  const view = new DataView(bytes.buffer);
  view.setUint16(2, 1, true);
  view.setUint16(4, images.length, true);

  let offset = header;
  images.forEach((image, index) => {
    const entry = 6 + index * 16;
    bytes[entry] = image.size;
    bytes[entry + 1] = image.size;
    view.setUint16(entry + 4, 1, true);
    view.setUint16(entry + 6, 32, true);
    view.setUint32(entry + 8, image.png.length, true);
    view.setUint32(entry + 12, offset, true);
    bytes.set(image.png, offset);
    offset += image.png.length;
  });

  return { ok: true, bytes };
}
