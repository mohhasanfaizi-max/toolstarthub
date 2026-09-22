"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { ImagePreview } from "@/components/tools/ImagePreview";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { useLocalImage } from "@/components/tools/useLocalImage";
import {
  ANALYZE_MAX_COLORS,
  ANALYZE_MIN_COLORS,
  ANALYZE_SAMPLE_EDGE,
  analyzePixels,
  parseColorCount,
  type DominantColor,
} from "@/lib/tools/color-analyze";
import { loadImageElement } from "@/lib/tools/image";

export function ImageColorAnalyzerTool() {
  const { image, error, loading, loadFile, resetImage, setError } = useLocalImage();
  const [count, setCount] = useState("5");
  const [colors, setColors] = useState<DominantColor[]>([]);
  const [busy, setBusy] = useState(false);

  async function analyze() {
    if (!image) {
      setError("Choose an image file.");
      return;
    }
    const parsed = parseColorCount(count);
    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }

    setBusy(true);
    setError("");
    try {
      const source = await loadImageElement(image.previewUrl);
      const data = samplePixels(source, image.width, image.height);
      const next = analyzePixels(data, parsed.value);
      if (next.length === 0) {
        setColors([]);
        setError("No opaque pixels were found to analyze.");
        return;
      }
      setColors(next);
    } catch {
      setColors([]);
      setError("The image could not be analyzed. Try a smaller file.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    resetImage();
    setCount("5");
    setColors([]);
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="color-analyze-file"
        label="Image"
        accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
        prompt="Drag and drop a JPG, PNG or WebP image here, or choose a file."
        fileName={image?.file.name}
        disabled={busy || loading}
        hint="The image is sampled in this browser. Results are an approximation, not an exact palette."
        onFile={(file) => {
          setColors([]);
          void loadFile(file);
        }}
      />

      {image ? (
        <div className="mt-6">
          <ImagePreview
            src={image.previewUrl}
            alt={`Preview of ${image.file.name}`}
            caption={`${image.width}×${image.height}`}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolField
          id="color-count"
          label="Number of colors"
          hint={`Between ${ANALYZE_MIN_COLORS} and ${ANALYZE_MAX_COLORS}.`}
        >
          <input
            id="color-count"
            inputMode="numeric"
            value={count}
            onChange={(event) => setCount(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void analyze()} disabled={busy || loading}>
            {busy ? "Analyzing…" : "Analyze colors"}
          </Button>
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {colors.length > 0 ? (
          <ul className="space-y-3">
            {colors.map((item, index) => (
              <li
                key={`${item.color.hex}-${index}`}
                className="flex flex-col gap-3 rounded-2xl border border-border p-4 sm:flex-row sm:items-center"
              >
                <div
                  className="size-14 shrink-0 rounded-2xl border border-border"
                  style={{ backgroundColor: item.color.hex }}
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{item.color.hex}</p>
                  <p className="text-sm text-muted-foreground">{item.color.rgbCss}</p>
                  <p className="text-sm text-muted-foreground">
                    About {item.share.toFixed(1)}% of sampled pixels
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <CopyButton value={item.color.hex} label="Copy HEX" />
                  <CopyButton value={item.color.rgbCss} label="Copy RGB" />
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Colors are grouped from a downsampled copy of the image, so similar shades
        may merge. The percentages describe sampled pixels, not a laboratory
        measurement.
      </p>

      <ToolPrivacyNote>
        Your image is analyzed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

function samplePixels(
  source: CanvasImageSource,
  width: number,
  height: number,
): Uint8ClampedArray {
  const scale = Math.min(1, ANALYZE_SAMPLE_EDGE / Math.max(width, height));
  const destWidth = Math.max(1, Math.round(width * scale));
  const destHeight = Math.max(1, Math.round(height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = destWidth;
  canvas.height = destHeight;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    throw new Error("This browser could not create a drawing surface.");
  }
  context.drawImage(source, 0, 0, destWidth, destHeight);
  return context.getImageData(0, 0, destWidth, destHeight).data;
}
