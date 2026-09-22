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
  loadImageElement,
  parseHexColor,
  rasterizeImage,
  replacementFileName,
  type ImageOutputType,
} from "@/lib/tools/image";

const ACCEPT = "image/jpeg,image/png,.jpg,.jpeg,.png";

export function ImageConverterTool() {
  const { image, error, loading, loadFile, resetImage, setError } = useLocalImage();
  const [outputType, setOutputType] = useState<ImageOutputType>("image/png");
  const [background, setBackground] = useState("#ffffff");
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

  async function convert() {
    if (!image) {
      setError("Choose a JPG or PNG image.");
      return;
    }

    if (image.mime !== "image/jpeg" && image.mime !== "image/png") {
      setError("This converter accepts JPG and PNG files.");
      return;
    }

    const color = parseHexColor(background);
    if (!color.ok) {
      setError(color.error);
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
        quality: 90,
        background: outputType === "image/jpeg" ? color.value : undefined,
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
        name: replacementFileName(image.file.name, outputType, "-converted"),
      });
    } catch {
      clearResult();
      setError("Conversion failed. Try another image.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    clearResult();
    resetImage();
    setOutputType("image/png");
    setBackground("#ffffff");
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="converter-file"
        label="Image"
        accept={ACCEPT}
        fileName={image?.file.name}
        disabled={busy || loading}
        hint="JPG or PNG only. PNG to JPG fills transparent pixels with the background color."
        onFile={(file) => {
          clearResult();
          void loadFile(file).then((loaded) => {
            if (!loaded) {
              return;
            }
            if (loaded.mime !== "image/jpeg" && loaded.mime !== "image/png") {
              resetImage();
              setError("This converter accepts JPG and PNG files.");
              return;
            }
            setOutputType(loaded.mime === "image/jpeg" ? "image/png" : "image/jpeg");
          });
        }}
      />

      {image ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "File name", value: image.file.name },
              { label: "Original size", value: formatBytes(image.file.size) },
              { label: "Dimensions", value: `${image.width} × ${image.height} px` },
            ]}
          />
          <ImagePreview src={image.previewUrl} alt="Original image preview" />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Conversion"
          name="converter-output"
          value={outputType}
          onChange={setOutputType}
          options={[
            { id: "image/png", label: "JPG → PNG" },
            { id: "image/jpeg", label: "PNG → JPG" },
          ]}
        />
      </div>

      {outputType === "image/jpeg" ? (
        <div className="mt-4">
          <ToolField
            id="converter-background"
            label="Background color for transparency"
            hint="JPG cannot store transparency. White is the default."
          >
            <div className="mt-1.5 flex items-center gap-3">
              <input
                id="converter-background"
                type="color"
                value={background}
                onChange={(event) => setBackground(event.target.value)}
                className="h-11 w-16 cursor-pointer rounded-xl border border-border bg-background"
              />
              <input
                aria-label="Background hex color"
                value={background}
                onChange={(event) => setBackground(event.target.value)}
                className={toolControlClass}
              />
            </div>
          </ToolField>
        </div>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void convert()} disabled={busy || loading}>
            {busy ? "Converting…" : "Convert"}
          </Button>
          <DownloadButton blob={result?.blob ?? null} fileName={result?.name ?? "image.png"} />
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
                { label: "Output file", value: result.name },
                { label: "Output size", value: formatBytes(result.blob.size) },
              ]}
            />
            <ImagePreview src={result.url} alt="Converted image preview" caption="Converted preview" />
          </div>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Your image is processed in your browser and is not uploaded to our server.
        Converting to JPG is lossy and cannot keep transparency.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
