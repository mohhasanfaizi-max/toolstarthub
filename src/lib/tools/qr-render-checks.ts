import jsQR from "jsqr";
import {
  QR_LOGO_AREA_RATIO,
  createQrMatrix,
  effectiveQrEcc,
  isWellFormedSvg,
  logoReservedModules,
  overlayLogoRgba,
  qrMatrixToRgba,
  qrMatrixToSvg,
  type RgbaImage,
} from "./qr-render.ts";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function solidLogo(size: number, r: number, g: number, b: number): RgbaImage {
  const data = new Uint8ClampedArray(size * size * 4);
  for (let i = 0; i < size * size; i += 1) {
    const o = i * 4;
    data[o] = r;
    data[o + 1] = g;
    data[o + 2] = b;
    data[o + 3] = 255;
  }
  return { width: size, height: size, data };
}
function decodePng(image: RgbaImage): string | null {
  const result = jsQR(image.data, image.width, image.height, {
    inversionAttempts: "attemptBoth",
  });
  return result?.data ?? null;
}

export function runQrRenderChecks() {
  const options = {
    margin: 2,
    width: 320,
    dark: "#0b1f3a",
    light: "#ffffff",
  };
  const payloads = [
    "https://example.com/qr-render-check",
    "https://example.com",
    "WIFI:T:WPA;S:Cafe;P:Password;;",
  ];

  assert(effectiveQrEcc("M", false) === "M", "ECC stays at the selected level without a logo");
  assert(effectiveQrEcc("L", true) === "H", "ECC is raised to H when a logo is present");
  assert(
    Math.abs(logoReservedModules(100) ** 2 / 100 ** 2 - QR_LOGO_AREA_RATIO) < 1e-10,
    "Reserved logo square is 20% of the module area",
  );

  const text = payloads[0];
  const matrixM = createQrMatrix(text, "M");
  const svg = qrMatrixToSvg(matrixM, options);
  assert(isWellFormedSvg(svg), "Basic SVG should be well-formed XML");
  assert(!svg.includes("<image"), "Basic SVG should not embed a raster image");
  assert(svg.includes("shape-rendering=\"crispEdges\""), "SVG uses crisp edges");
  assert(svg.includes(`viewBox="0 0 ${matrixM.size + 4} ${matrixM.size + 4}"`), "SVG viewBox matches modules plus margin");

  const logo = solidLogo(64, 200, 16, 16);
  for (const payload of payloads) {
    const plain = qrMatrixToRgba(createQrMatrix(payload, "M"), options);
    const decoded = decodePng(plain);
    assert(decoded === payload, `PNG without a logo should decode ${payload}, got ${JSON.stringify(decoded)}`);

    const matrixH = createQrMatrix(payload, "H");
    const withLogo = qrMatrixToRgba(matrixH, options, logo);
    const decodedLogo = decodePng(withLogo);
    assert(
      decodedLogo === payload,
      `PNG with a capped center logo should still decode ${payload}, got ${JSON.stringify(decodedLogo)}`,
    );
    const reserved = logoReservedModules(matrixH.size);
    assert(
      reserved ** 2 / matrixH.size ** 2 <= QR_LOGO_AREA_RATIO + 1e-9,
      "Logo cap must stay within the reserved area budget",
    );
  }

  const matrixH = createQrMatrix(text, "H");
  const withLogo = qrMatrixToRgba(matrixH, options, logo);

  const svgWithLogo = qrMatrixToSvg(
    matrixH,
    options,
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAEklEQVR4nGP8z4APMOGVZRgFo4AAAPoABfeiaP4AAAAASUVORK5CYII=",
  );
  assert(isWellFormedSvg(svgWithLogo), "SVG with an embedded logo should stay well-formed");
  assert(svgWithLogo.includes("<image href=\"data:image/png;base64,"), "Logo SVG embeds the image as a data URL");
  assert(!/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/.test(svgWithLogo), "Logo SVG must escape ampersands");

  // Confirm the overlay actually paints the center.
  const marked = qrMatrixToRgba(matrixM, options);
  overlayLogoRgba(marked, matrixM, options.margin, logo, [255, 255, 255]);
  const mid = (Math.floor(marked.width / 2) * marked.width + Math.floor(marked.width / 2)) * 4;
  assert(marked.data[mid] > 150 && marked.data[mid + 1] < 80, "Logo pixels should appear in the center");
}
