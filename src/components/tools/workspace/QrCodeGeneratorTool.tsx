"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { validateQrText } from "@/lib/tools/qr";
import {
  canvasToPngBlob,
  createQrMatrix,
  isWellFormedSvg,
  paintQrToCanvas,
  qrMatrixToSvg,
  svgToBlob,
} from "@/lib/tools/qr-render";
import { useTx } from "@/i18n/tool-text";

const BASIC_OPTIONS = {
  margin: 2,
  width: 320,
  dark: "#0b1f3a",
  light: "#ffffff",
} as const;

export function QrCodeGeneratorTool() {
  const tx = useTx();
  const [input, setInput] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [pngBlob, setPngBlob] = useState<Blob | null>(null);
  const [svgBlob, setSvgBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function clearPreview() {
    setDataUrl("");
    setPngBlob(null);
    setSvgBlob(null);
  }

  async function generate() {
    const validated = validateQrText(input);
    if (!validated.ok) {
      setError(validated.error);
      clearPreview();
      return;
    }

    setBusy(true);
    setError("");
    try {
      const modules = createQrMatrix(validated.text, "M");
      const svg = qrMatrixToSvg(modules, BASIC_OPTIONS);
      if (!isWellFormedSvg(svg)) {
        throw new Error("invalid-svg");
      }
      const canvas = document.createElement("canvas");
      paintQrToCanvas(canvas, modules, BASIC_OPTIONS);
      const [png, url] = await Promise.all([
        canvasToPngBlob(canvas),
        Promise.resolve(canvas.toDataURL("image/png")),
      ]);
      setDataUrl(url);
      setPngBlob(png);
      setSvgBlob(svgToBlob(svg));
    } catch {
      setError("That content could not be turned into a QR code. Try shorter text.");
      clearPreview();
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolPanel>
      <ToolField
        id="qr-text"
        label={tx("Text or URL")}
        hint={tx("The QR code is created in your browser. Keep content reasonably short.")}
      >
        <textarea
          id="qr-text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          className={`${toolControlClass} min-h-28 resize-y`}
          placeholder={tx("https://example.com")}
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => void generate()} disabled={busy}>
            {tx(busy ? "Generating…" : "Generate")}
          </Button>
          <DownloadButton blob={pngBlob} fileName="qr-code.png" label={tx("Download PNG")} />
          <DownloadButton blob={svgBlob} fileName="qr-code.svg" label={tx("Download SVG")} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              clearPreview();
              setError("");
            }}
          >{tx("Reset")}</Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{tx(error)}</ToolError> : null}
        {dataUrl ? (
          <figure className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted p-4">
            {/* Local data URL preview; next/image is not suitable here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dataUrl}
              alt={tx(`QR code for ${input.trim()}`)}
              className="mx-auto max-h-80 w-auto max-w-full"
              data-testid="qr-preview"
            />
            <figcaption className="mt-3 break-all text-center text-sm text-muted-foreground">{tx("QR code for: ")}{input.trim()}
            </figcaption>
          </figure>
        ) : null}
      </div>

      <ToolPrivacyNote>{tx("The QR code is generated in your browser. The text is not sent to a server.")}</ToolPrivacyNote>
    </ToolPanel>
  );
}
