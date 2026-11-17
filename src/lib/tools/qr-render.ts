import QRCode from "qrcode";

/** Logo (pad included) is capped at this share of the QR module area. */
export const QR_LOGO_AREA_RATIO = 0.16;
/** Light pad around the logo, as a fraction of the reserved square's side. */
export const QR_LOGO_PAD_RATIO = 0.12;
export const QR_LOGO_MAX_BYTES = 1_000_000;
export const QR_LOGO_TYPES = ["image/png", "image/jpeg", "image/webp"] as const;

export type QrEcc = "L" | "M" | "Q" | "H";

export type QrRenderOptions = {
  errorCorrectionLevel: QrEcc;
  margin: number;
  width: number;
  dark: string;
  light: string;
};

export type QrMatrix = {
  size: number;
  get(row: number, col: number): number;
};

export type RgbaImage = {
  width: number;
  height: number;
  data: Uint8ClampedArray;
};

const HEX_COLOR = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

export function isQrHexColor(value: string): boolean {
  return HEX_COLOR.test(value.trim());
}

export function createQrMatrix(text: string, ecc: QrEcc): QrMatrix {
  return QRCode.create(text, { errorCorrectionLevel: ecc }).modules;
}

/** Side length, in modules, of the reserved center square (logo + pad). */
export function logoReservedModules(moduleCount: number): number {
  return Math.sqrt(QR_LOGO_AREA_RATIO) * moduleCount;
}

export function effectiveQrEcc(selected: QrEcc, hasLogo: boolean): QrEcc {
  return hasLogo ? "H" : selected;
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function hexToRgb(hex: string): [number, number, number] {
  const raw = hex.trim().replace("#", "");
  const full =
    raw.length === 3 ? raw.split("").map((part) => part + part).join("") : raw.slice(0, 6);
  return [
    Number.parseInt(full.slice(0, 2), 16),
    Number.parseInt(full.slice(2, 4), 16),
    Number.parseInt(full.slice(4, 6), 16),
  ];
}

function requireHex(value: string, label: string): string {
  const trimmed = value.trim();
  if (!isQrHexColor(trimmed)) {
    throw new Error(`${label} must be a 3- or 6-digit hex color.`);
  }
  return trimmed;
}

export function qrMatrixToSvg(
  modules: QrMatrix,
  options: Pick<QrRenderOptions, "margin" | "width" | "dark" | "light">,
  logoDataUrl?: string,
): string {
  const dark = escapeXml(requireHex(options.dark, "Foreground"));
  const light = escapeXml(requireHex(options.light, "Background"));
  const n = modules.size;
  const margin = options.margin;
  const total = n + margin * 2;
  const parts: string[] = [];
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (modules.get(row, col)) {
        parts.push(`M${col + margin} ${row + margin}h1v1h-1z`);
      }
    }
  }

  let logoMarkup = "";
  if (logoDataUrl) {
    const reserved = logoReservedModules(n);
    const pad = reserved * QR_LOGO_PAD_RATIO;
    const inner = reserved - pad * 2;
    const reservedOrigin = margin + (n - reserved) / 2;
    const innerOrigin = reservedOrigin + pad;
    logoMarkup =
      `<rect x="${reservedOrigin}" y="${reservedOrigin}" width="${reserved}" height="${reserved}" fill="${light}"/>` +
      `<image href="${escapeXml(logoDataUrl)}" x="${innerOrigin}" y="${innerOrigin}" width="${inner}" height="${inner}" preserveAspectRatio="xMidYMid meet"/>`;
  }

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" width="${options.width}" height="${options.width}" shape-rendering="crispEdges">` +
    `<rect width="${total}" height="${total}" fill="${light}"/>` +
    `<path fill="${dark}" d="${parts.join("")}"/>` +
    `${logoMarkup}</svg>`
  );
}

export function isWellFormedSvg(svg: string): boolean {
  if (!svg.startsWith("<?xml") || !svg.includes("<svg xmlns=\"http://www.w3.org/2000/svg\"")) {
    return false;
  }
  if (!svg.includes("viewBox=") || !svg.includes("<path ") || !svg.endsWith("</svg>")) {
    return false;
  }
  // Reject a raw '&' that is not an entity, which would make the XML invalid.
  if (/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/.test(svg)) {
    return false;
  }
  return true;
}

function logoLayout(moduleCount: number, margin: number, scale: number) {
  const reservedModules = logoReservedModules(moduleCount);
  const reservedPx = reservedModules * scale;
  const padPx = reservedPx * QR_LOGO_PAD_RATIO;
  const innerPx = reservedPx - padPx * 2;
  const reservedOrigin = (margin + (moduleCount - reservedModules) / 2) * scale;
  const innerOrigin = reservedOrigin + padPx;
  return { reservedOrigin, reservedPx, innerOrigin, innerPx };
}

function containFit(
  sourceWidth: number,
  sourceHeight: number,
  box: number,
): { x: number; y: number; width: number; height: number } {
  const scale = Math.min(box / sourceWidth, box / sourceHeight);
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;
  return {
    x: (box - width) / 2,
    y: (box - height) / 2,
    width,
    height,
  };
}

export function overlayLogoRgba(
  target: RgbaImage,
  modules: QrMatrix,
  margin: number,
  logo: RgbaImage,
  light: [number, number, number],
): void {
  const n = modules.size;
  const scale = target.width / (n + margin * 2);
  const { reservedOrigin, reservedPx, innerOrigin, innerPx } = logoLayout(n, margin, scale);
  const [lr, lg, lb] = light;

  const fillRect = (x0: number, y0: number, x1: number, y1: number) => {
    const left = Math.max(0, Math.floor(x0));
    const top = Math.max(0, Math.floor(y0));
    const right = Math.min(target.width, Math.ceil(x1));
    const bottom = Math.min(target.height, Math.ceil(y1));
    for (let y = top; y < bottom; y += 1) {
      for (let x = left; x < right; x += 1) {
        const i = (y * target.width + x) * 4;
        target.data[i] = lr;
        target.data[i + 1] = lg;
        target.data[i + 2] = lb;
        target.data[i + 3] = 255;
      }
    }
  };
  fillRect(reservedOrigin, reservedOrigin, reservedOrigin + reservedPx, reservedOrigin + reservedPx);

  const fitted = containFit(logo.width, logo.height, innerPx);
  const destX = innerOrigin + fitted.x;
  const destY = innerOrigin + fitted.y;
  const destW = fitted.width;
  const destH = fitted.height;

  const left = Math.max(0, Math.floor(destX));
  const top = Math.max(0, Math.floor(destY));
  const right = Math.min(target.width, Math.ceil(destX + destW));
  const bottom = Math.min(target.height, Math.ceil(destY + destH));
  for (let y = top; y < bottom; y += 1) {
    const v = (y + 0.5 - destY) / destH;
    const sy = Math.min(logo.height - 1, Math.max(0, Math.floor(v * logo.height)));
    for (let x = left; x < right; x += 1) {
      const u = (x + 0.5 - destX) / destW;
      const sx = Math.min(logo.width - 1, Math.max(0, Math.floor(u * logo.width)));
      const si = (sy * logo.width + sx) * 4;
      const a = logo.data[si + 3] / 255;
      if (a <= 0) continue;
      const i = (y * target.width + x) * 4;
      target.data[i] = Math.round(logo.data[si] * a + target.data[i] * (1 - a));
      target.data[i + 1] = Math.round(logo.data[si + 1] * a + target.data[i + 1] * (1 - a));
      target.data[i + 2] = Math.round(logo.data[si + 2] * a + target.data[i + 2] * (1 - a));
      target.data[i + 3] = 255;
    }
  }
}

export function qrMatrixToRgba(
  modules: QrMatrix,
  options: Pick<QrRenderOptions, "margin" | "width" | "dark" | "light">,
  logo?: RgbaImage | null,
): RgbaImage {
  const darkHex = requireHex(options.dark, "Foreground");
  const lightHex = requireHex(options.light, "Background");
  const n = modules.size;
  const margin = options.margin;
  const width = options.width;
  const scale = width / (n + margin * 2);
  const data = new Uint8ClampedArray(width * width * 4);
  const [dr, dg, db] = hexToRgb(darkHex);
  const [lr, lg, lb] = hexToRgb(lightHex);

  for (let y = 0; y < width; y += 1) {
    const moduleY = Math.floor(y / scale) - margin;
    for (let x = 0; x < width; x += 1) {
      const moduleX = Math.floor(x / scale) - margin;
      const isDark =
        moduleX >= 0 &&
        moduleX < n &&
        moduleY >= 0 &&
        moduleY < n &&
        Boolean(modules.get(moduleY, moduleX));
      const i = (y * width + x) * 4;
      if (isDark) {
        data[i] = dr;
        data[i + 1] = dg;
        data[i + 2] = db;
      } else {
        data[i] = lr;
        data[i + 1] = lg;
        data[i + 2] = lb;
      }
      data[i + 3] = 255;
    }
  }

  const image: RgbaImage = { width, height: width, data };
  if (logo) {
    overlayLogoRgba(image, modules, margin, logo, [lr, lg, lb]);
  }
  return image;
}

export function paintQrToCanvas(
  canvas: HTMLCanvasElement,
  modules: QrMatrix,
  options: Pick<QrRenderOptions, "margin" | "width" | "dark" | "light">,
  logo?: CanvasImageSource | null,
): void {
  const darkHex = requireHex(options.dark, "Foreground");
  const lightHex = requireHex(options.light, "Background");
  const width = options.width;
  canvas.width = width;
  canvas.height = width;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("This browser could not draw the QR code.");
  }
  const n = modules.size;
  const margin = options.margin;
  const scale = width / (n + margin * 2);
  ctx.fillStyle = lightHex;
  ctx.fillRect(0, 0, width, width);
  ctx.fillStyle = darkHex;
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (!modules.get(row, col)) continue;
      const x0 = Math.round((col + margin) * scale);
      const y0 = Math.round((row + margin) * scale);
      const x1 = Math.round((col + margin + 1) * scale);
      const y1 = Math.round((row + margin + 1) * scale);
      ctx.fillRect(x0, y0, Math.max(1, x1 - x0), Math.max(1, y1 - y0));
    }
  }
  if (logo) {
    const { reservedOrigin, reservedPx, innerOrigin, innerPx } = logoLayout(n, margin, scale);
    ctx.fillStyle = lightHex;
    ctx.fillRect(reservedOrigin, reservedOrigin, reservedPx, reservedPx);
    // contain-fit: use a temporary size from HTMLImageElement when possible
    const sourceWidth =
      "width" in logo && typeof logo.width === "number" && logo.width > 0
        ? Number(logo.width)
        : innerPx;
    const sourceHeight =
      "height" in logo && typeof logo.height === "number" && logo.height > 0
        ? Number(logo.height)
        : innerPx;
    const fitted = containFit(sourceWidth, sourceHeight, innerPx);
    ctx.drawImage(
      logo,
      innerOrigin + fitted.x,
      innerOrigin + fitted.y,
      fitted.width,
      fitted.height,
    );
  }
}

export function canvasToPngBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("The PNG could not be created."));
    }, "image/png");
  });
}

export function svgToBlob(svg: string): Blob {
  return new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
}
