"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo, ImagePreview } from "@/components/tools/ImagePreview";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  ToolStatGrid,
} from "@/components/tools/ToolForm";
import { useLocalImage } from "@/components/tools/useLocalImage";
import {
  formatBytes,
  loadImageElement,
  outputLabel,
  rasterizeImage,
  replacementFileName,
  sizeReductionPercent,
  type ImageOutputType,
} from "@/lib/tools/image";

const ACCEPT = "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp";

export function ImageCompressorTool() {
  const { image, error, loading, loadFile, resetImage, setError } = useLocalImage();
  const [quality, setQuality] = useState(80);
  const [outputType, setOutputType] = useState<ImageOutputType>("image/jpeg");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{
    blob: Blob;
    url: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    return () => {
      if (result?.url) {
        URL.revokeObjectURL(result.url);
      }
    };
  }, [result]);

  function clearResult() {
    setResult((previous) => {
      if (previous?.url) {
        URL.revokeObjectURL(previous.url);
      }
      return null;
    });
  }

  async function compress() {
    if (!image) {
      setError("Choose an image file.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const source = await loadImageElement(image.previewUrl);
      const next = await rasterizeImage({
        source,
        sourceWidth: image.width,
        sourceHeight: image.height,
        destWidth: image.width,
        destHeight: image.height,
        mime: outputType,
        quality,
      });

      if (!next.ok) {
        clearResult();
        setError(next.error);
        return;
      }

      clearResult();
      setResult({
        blob: next.blob,
        url: URL.createObjectURL(next.blob),
        name: replacementFileName(image.file.name, outputType, "-compressed"),
      });
    } catch {
      clearResult();
      setError("Compression failed. Try another image or a lower resolution.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    clearResult();
    resetImage();
    setQuality(80);
    setOutputType("image/jpeg");
  }

  const reduction =
    image && result
      ? sizeReductionPercent(image.file.size, result.blob.size)
      : null;

  return (
    <ToolPanel>
      <FileDropZone
        id="compressor-file"
        label="Image"
        accept={ACCEPT}
        fileName={image?.file.name}
        disabled={busy || loading}
        hint="JPG, PNG and WebP. 25 MB and 8192 pixels per side maximum."
        onFile={(file) => {
          clearResult();
          void loadFile(file);
        }}
      />

      {image ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "File name", value: image.file.name },
              { label: "Original size", value: formatBytes(image.file.size) },
              {
                label: "Dimensions",
                value: `${image.width} × ${image.height} px`,
              },
              { label: "Detected format", value: outputLabel(image.mime) },
            ]}
          />
          <ImagePreview src={image.previewUrl} alt="Original image preview" caption="Original" />
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ToolField
          id="compressor-quality"
          label="Quality"
          hint={
            outputType === "image/png"
              ? "PNG is lossless in this tool, so quality does not change the encoding."
              : "Lower quality usually means a smaller JPEG or WebP file."
          }
        >
          <input
            id="compressor-quality"
            type="range"
            min={10}
            max={100}
            step={1}
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
            className="mt-3 w-full"
          />
          <p className="mt-1 text-sm tabular-nums text-foreground">{quality}</p>
        </ToolField>
        <ToolChoiceGroup
          legend="Output format"
          name="compressor-output"
          value={outputType}
          onChange={setOutputType}
          options={[
            { id: "image/jpeg", label: "JPG" },
            { id: "image/png", label: "PNG" },
            { id: "image/webp", label: "WebP" },
          ]}
          columns="grid gap-2"
        />
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void compress()} disabled={busy || loading}>
            {busy ? "Compressing…" : "Compress"}
          </Button>
          <DownloadButton blob={result?.blob ?? null} fileName={result?.name ?? "image.jpg"} />
          <Button type="button" variant="secondary" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {result ? (
          <div className="space-y-4">
            <ToolStatGrid
              items={[
                { label: "Compressed size", value: formatBytes(result.blob.size) },
                {
                  label: "Size change",
                  value:
                    reduction === null
                      ? "—"
                      : reduction >= 0
                        ? `${reduction.toFixed(1)}% smaller`
                        : `${Math.abs(reduction).toFixed(1)}% larger`,
                },
                { label: "Output", value: result.name },
              ]}
            />
            <ImagePreview
              src={result.url}
              alt="Compressed image preview"
              caption="Compressed preview"
            />
          </div>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Your image is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
