"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo, ImagePreview } from "@/components/tools/ImagePreview";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolPanel,
  ToolPrivacyNote,
} from "@/components/tools/ToolForm";
import { useLocalImage } from "@/components/tools/useLocalImage";
import {
  CROP_ASPECTS,
  fitCropToAspect,
  moveCrop,
  resizeCrop,
  type CropAspect,
  type CropHandle,
  type CropRect,
} from "@/lib/tools/crop";
import {
  formatBytes,
  loadImageElement,
  rasterizeImage,
  replacementFileName,
  type ImageOutputType,
} from "@/lib/tools/image";

const ACCEPT = "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp";
const HANDLES: CropHandle[] = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];

export function ImageCropperTool() {
  const { image, error, loading, loadFile, resetImage, setError } = useLocalImage();
  const [aspect, setAspect] = useState<CropAspect>("free");
  const [crop, setCrop] = useState<CropRect | null>(null);
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

  function applyAspect(next: CropAspect) {
    setAspect(next);
    if (image) {
      setCrop(fitCropToAspect(image.width, image.height, next));
    }
  }

  async function cropImage() {
    if (!image || !crop) {
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
        sx: crop.x,
        sy: crop.y,
        sw: crop.width,
        sh: crop.height,
        destWidth: crop.width,
        destHeight: crop.height,
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
        name: replacementFileName(image.file.name, outputType, "-cropped"),
        width: crop.width,
        height: crop.height,
      });
    } catch {
      clearResult();
      setError("Cropping failed. Try another image.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    clearResult();
    resetImage();
    setCrop(null);
    setAspect("free");
    setOutputType("image/jpeg");
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="cropper-file"
        label="Image"
        accept={ACCEPT}
        fileName={image?.file.name}
        disabled={busy || loading}
        hint="Drag the crop box on the preview. Handles work with a mouse or a finger."
        onFile={(file) => {
          clearResult();
          void loadFile(file).then((loaded) => {
            if (loaded) {
              setCrop(fitCropToAspect(loaded.width, loaded.height, aspect));
            } else {
              setCrop(null);
            }
          });
        }}
      />

      {image && crop ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "Original", value: `${image.width} × ${image.height} px` },
              {
                label: "Crop area",
                value: `${crop.width} × ${crop.height} px at ${crop.x}, ${crop.y}`,
              },
            ]}
          />
          <CropStage
            src={image.previewUrl}
            imageWidth={image.width}
            imageHeight={image.height}
            crop={crop}
            aspect={aspect}
            onChange={setCrop}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Aspect ratio"
          name="crop-aspect"
          value={aspect}
          onChange={applyAspect}
          options={CROP_ASPECTS.map((item) => ({ id: item.id, label: item.label }))}
          columns="grid grid-cols-2 gap-2 sm:grid-cols-4"
        />
      </div>

      <div className="mt-4">
        <ToolChoiceGroup
          legend="Output format"
          name="crop-output"
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
          <Button type="button" onClick={() => void cropImage()} disabled={busy || loading}>
            {busy ? "Cropping…" : "Crop"}
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
                { label: "Cropped size", value: `${result.width} × ${result.height} px` },
                { label: "File size", value: formatBytes(result.blob.size) },
              ]}
            />
            <ImagePreview src={result.url} alt="Cropped image preview" caption="Cropped preview" />
          </div>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Your image is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

type CropStageProps = {
  src: string;
  imageWidth: number;
  imageHeight: number;
  crop: CropRect;
  aspect: CropAspect;
  onChange: (rect: CropRect) => void;
};

function CropStage({
  src,
  imageWidth,
  imageHeight,
  crop,
  aspect,
  onChange,
}: CropStageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [display, setDisplay] = useState({ width: 0, height: 0 });
  const dragRef = useRef<{
    handle: CropHandle | "move";
    startX: number;
    startY: number;
    rect: CropRect;
  } | null>(null);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) {
      return;
    }

    const measure = () => {
      setDisplay({ width: node.clientWidth, height: node.clientHeight });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [src]);

  const scaleX = display.width / imageWidth || 1;
  const scaleY = display.height / imageHeight || 1;

  function pointerDelta(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) {
      return;
    }
    const dx = (event.clientX - drag.startX) / scaleX;
    const dy = (event.clientY - drag.startY) / scaleY;
    if (drag.handle === "move") {
      onChange(moveCrop(drag.rect, dx, dy, imageWidth, imageHeight));
      return;
    }
    onChange(resizeCrop(drag.rect, drag.handle, dx, dy, imageWidth, imageHeight, aspect));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-muted">
      <div className="flex justify-center p-6">
        <div className="relative inline-block max-w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imageRef}
            src={src}
            alt="Image to crop"
            draggable={false}
            className="block max-h-[min(70vh,520px)] max-w-full select-none"
          />
          {display.width > 0 ? (
            <div
              role="application"
              aria-label="Crop selection. Arrow keys move the box."
              tabIndex={0}
              className="absolute inset-0 touch-none outline-none"
              onPointerMove={pointerDelta}
              onPointerUp={() => {
                dragRef.current = null;
              }}
              onPointerCancel={() => {
                dragRef.current = null;
              }}
              onKeyDown={(event) => {
                const step = event.shiftKey ? 10 : 1;
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  onChange(moveCrop(crop, -step, 0, imageWidth, imageHeight));
                }
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  onChange(moveCrop(crop, step, 0, imageWidth, imageHeight));
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  onChange(moveCrop(crop, 0, -step, imageWidth, imageHeight));
                }
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  onChange(moveCrop(crop, 0, step, imageWidth, imageHeight));
                }
              }}
            >
              <div
                className="absolute border-2 border-white"
                style={{
                  left: crop.x * scaleX,
                  top: crop.y * scaleY,
                  width: crop.width * scaleX,
                  height: crop.height * scaleY,
                  boxShadow: "0 0 0 9999px rgb(11 18 32 / 0.45)",
                }}
                onPointerDown={(event) => {
                  event.currentTarget.parentElement?.setPointerCapture(event.pointerId);
                  dragRef.current = {
                    handle: "move",
                    startX: event.clientX,
                    startY: event.clientY,
                    rect: crop,
                  };
                }}
              >
                {HANDLES.map((handle) => (
                  <button
                    key={handle}
                    type="button"
                    aria-label={`Resize crop ${handle}`}
                    className="absolute size-11 -translate-x-1/2 -translate-y-1/2"
                    style={handleStyle(handle)}
                    onPointerDown={(event) => {
                      event.stopPropagation();
                      event.currentTarget.parentElement?.parentElement?.setPointerCapture(
                        event.pointerId,
                      );
                      dragRef.current = {
                        handle,
                        startX: event.clientX,
                        startY: event.clientY,
                        rect: crop,
                      };
                    }}
                  >
                    <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white" />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function handleStyle(handle: CropHandle): CSSProperties {
  const positions: Record<CropHandle, CSSProperties> = {
    nw: { left: "0%", top: "0%" },
    n: { left: "50%", top: "0%" },
    ne: { left: "100%", top: "0%" },
    e: { left: "100%", top: "50%" },
    se: { left: "100%", top: "100%" },
    s: { left: "50%", top: "100%" },
    sw: { left: "0%", top: "100%" },
    w: { left: "0%", top: "50%" },
  };
  return positions[handle];
}
