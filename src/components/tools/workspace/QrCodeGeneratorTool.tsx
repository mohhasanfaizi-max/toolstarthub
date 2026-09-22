"use client";

import { useState } from "react";
import QRCode from "qrcode";
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

export function QrCodeGeneratorTool() {
  const [input, setInput] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function generate() {
    const validated = validateQrText(input);
    if (!validated.ok) {
      setError(validated.error);
      setDataUrl("");
      setBlob(null);
      return;
    }

    setBusy(true);
    setError("");
    try {
      const url = await QRCode.toDataURL(validated.text, {
        errorCorrectionLevel: "M",
        margin: 2,
        width: 320,
        color: { dark: "#0b1f3a", light: "#ffffff" },
      });
      setDataUrl(url);
      const response = await fetch(url);
      setBlob(await response.blob());
    } catch {
      setError("That content could not be turned into a QR code. Try shorter text.");
      setDataUrl("");
      setBlob(null);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolPanel>
      <ToolField
        id="qr-text"
        label="Text or URL"
        hint="The QR code is created in your browser. Keep content reasonably short."
      >
        <textarea
          id="qr-text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          className={`${toolControlClass} min-h-28 resize-y`}
          placeholder="https://example.com"
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => void generate()} disabled={busy}>
            {busy ? "Generating…" : "Generate"}
          </Button>
          <DownloadButton blob={blob} fileName="qr-code.png" label="Download PNG" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              setDataUrl("");
              setBlob(null);
              setError("");
            }}
          >
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {dataUrl ? (
          <figure className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted p-4">
            {/* Local data URL preview; next/image is not suitable here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dataUrl}
              alt={`QR code for ${input.trim()}`}
              className="mx-auto max-h-80 w-auto max-w-full"
            />
            <figcaption className="mt-3 break-all text-center text-sm text-muted-foreground">
              QR code for: {input.trim()}
            </figcaption>
          </figure>
        ) : null}
      </div>

      <ToolPrivacyNote>
        The QR code is generated in your browser. The text is not sent to a server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
