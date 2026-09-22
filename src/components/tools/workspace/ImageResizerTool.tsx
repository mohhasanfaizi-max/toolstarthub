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
  toolControlClass,
} from "@/components/tools/ToolForm";
import { useLocalImage } from "@/components/tools/useLocalImage";
import {
  formatBytes,
  heightForWidth,
  loadImageElement,
  parseDimension,
  rasterizeImage,
  replacementFileName,
  widthForHeight,
  type ImageOutputType,
} from "@/lib/tools/image";

const ACCEPT = "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp";

export function ImageResizerTool() {
  const { image, error, loading, loadFile, resetImage, setError } = useLocalImage();
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lockRatio, setLockRatio] = useState(true);
  const [outputType, setOutputType] = useState<ImageOutputType>("image/jpeg");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{
    blob: Blob;
    url: string;
    name: string;
    width: number;
    height: number;
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

  function applyWidth(next: string) {
    setWidth(next);
    if (lockRatio && image) {
      const parsed = Number(next);
      if (Number.isInteger(parsed) && parsed > 0) {
        setHeight(String(heightForWidth(parsed, image.width, image.height)));
      }
    }
  }

  function applyHeight(next: string) {
    setHeight(next);
    if (lockRatio && image) {
      const parsed = Number(next);
      if (Number.isInteger(parsed) && parsed > 0) {
        setWidth(String(widthForHeight(parsed, image.width, image.height)));
      }
    }
  }

  async function resize() {
    if (!image) {
      setError("Choose an image file.");
      return;
    }

    const parsedWidth = parseDimension(width, "width");
    if (!parsedWidth.ok) {
      setError(parsedWidth.error);
      return;
    }
    const parsedHeight = parseDimension(height, "height");
    if (!parsedHeight.ok) {
      setError(parsedHeight.error);
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
        destWidth: parsedWidth.value,
        destHeight: parsedHeight.value,
        mime: outputType,
        quality: 90,
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
        name: replacementFileName(image.file.name, outputType, "-resized"),
        width: parsedWidth.value,
        height: parsedHeight.value,
      });
    } catch {
      clearResult();
      setError("Resizing failed. Try smaller dimensions.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    clearResult();
    resetImage();
    setWidth("");
    setHeight("");
    setLockRatio(true);
    setOutputType("image/jpeg");
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="resizer-file"
        label="Image"
        accept={ACCEPT}
        fileName={image?.file.name}
        disabled={busy || loading}
        hint="JPG, PNG and WebP. Output width and height are limited to 8192 pixels."
        onFile={(file) => {
          clearResult();
          void loadFile(file).then((loaded) => {
            if (loaded) {
              setWidth(String(loaded.width));
              setHeight(String(loaded.height));
              setError("");
            } else {
              setWidth("");
              setHeight("");
            }
          });
        }}
      />

      {image ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "Original width", value: `${image.width} px` },
              { label: "Original height", value: `${image.height} px` },
              { label: "Original size", value: formatBytes(image.file.size) },
              { label: "File name", value: image.file.name },
            ]}
          />
          <ImagePreview src={image.previewUrl} alt="Original image preview" />
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ToolField id="resizer-width" label="Width (pixels)">
          <input
            id="resizer-width"
            inputMode="numeric"
            value={width}
            onChange={(event) => applyWidth(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
        <ToolField id="resizer-height" label="Height (pixels)">
          <input
            id="resizer-height"
            inputMode="numeric"
            value={height}
            onChange={(event) => applyHeight(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
      </div>

      <label className="mt-4 flex min-h-11 items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={lockRatio}
          onChange={(event) => {
            const next = event.target.checked;
            setLockRatio(next);
            if (next && image) {
              const parsed = Number(width);
              if (Number.isInteger(parsed) && parsed > 0) {
                setHeight(String(heightForWidth(parsed, image.width, image.height)));
              }
            }
          }}
        />
        Lock aspect ratio
      </label>

      <div className="mt-4">
        <ToolChoiceGroup
          legend="Output format"
          name="resizer-output"
          value={outputType}
          onChange={setOutputType}
          options={[
            { id: "image/jpeg", label: "JPG" },
            { id: "image/png", label: "PNG" },
            { id: "image/webp", label: "WebP" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
        />
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void resize()} disabled={busy || loading}>
            {busy ? "Resizing…" : "Resize"}
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
            <FileInfo
              items={[
                { label: "New dimensions", value: `${result.width} × ${result.height} px` },
                { label: "Output size", value: formatBytes(result.blob.size) },
                { label: "File name", value: result.name },
              ]}
            />
            <ImagePreview src={result.url} alt="Resized image preview" caption="Resized preview" />
          </div>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Your image is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
