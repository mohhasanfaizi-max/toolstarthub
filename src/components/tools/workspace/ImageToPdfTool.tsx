"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo } from "@/components/tools/ImagePreview";
import { SortableFileList } from "@/components/tools/SortableFileList";
import {
  ProgressBar,
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolPanel,
  ToolPrivacyNote,
} from "@/components/tools/ToolForm";
import { formatBytes, loadImageElement, rasterizeImage } from "@/lib/tools/image";
import { moveItem, removeAt } from "@/lib/tools/list";
import {
  buildImagePdf,
  downsampleSize,
  MAX_IMAGE_PDF_FILES,
  shouldDownsample,
  validateImagePdfList,
  validatePdfImageFile,
  type ImagePdfOptions,
} from "@/lib/tools/image-to-pdf";
import { bytesToPdfBlob } from "@/lib/tools/pdf-edit";
import type { ImageFit, PageMargin, PageOrientation, PageSizeName } from "@/lib/tools/pdf-layout";

type ImageItem = {
  id: string;
  file: File;
  previewUrl: string;
  width: number;
  height: number;
  mime: "image/jpeg" | "image/png";
};

export function ImageToPdfTool() {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeName>("a4");
  const [orientation, setOrientation] = useState<PageOrientation>("auto");
  const [margin, setMargin] = useState<PageMargin>("small");
  const [fit, setFit] = useState<ImageFit>("fit");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [percent, setPercent] = useState(0);
  const [pdf, setPdf] = useState<Blob | null>(null);
  const itemsRef = useRef<ImageItem[]>([]);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      for (const item of itemsRef.current) {
        URL.revokeObjectURL(item.previewUrl);
      }
    };
  }, []);

  async function addFiles(files: File[]) {
    setError("");
    setPdf(null);
    const next = [...itemsRef.current];
    for (const file of files) {
      if (next.length >= MAX_IMAGE_PDF_FILES) {
        setError(`Use up to ${MAX_IMAGE_PDF_FILES} images so the tab stays usable.`);
        break;
      }
      const allowed = validatePdfImageFile(file);
      if (!allowed.ok) {
        setError(`${file.name}: ${allowed.error}`);
        continue;
      }
      const mime: "image/jpeg" | "image/png" =
        file.type === "image/png" || file.name.toLowerCase().endsWith(".png")
          ? "image/png"
          : "image/jpeg";
      const previewUrl = URL.createObjectURL(file);
      try {
        const image = await loadImageElement(previewUrl);
        if (image.naturalWidth < 1 || image.naturalHeight < 1) {
          URL.revokeObjectURL(previewUrl);
          setError(`${file.name} could not be read as an image.`);
          continue;
        }
        if (image.naturalWidth > 8192 || image.naturalHeight > 8192) {
          URL.revokeObjectURL(previewUrl);
          setError(`${file.name} is too large. Keep each side at 8192 pixels or smaller.`);
          continue;
        }
        next.push({
          id: crypto.randomUUID(),
          file,
          previewUrl,
          width: image.naturalWidth,
          height: image.naturalHeight,
          mime,
        });
      } catch {
        URL.revokeObjectURL(previewUrl);
        setError(`${file.name} could not be read as an image.`);
      }
    }
    setItems(next);
  }

  function revokeAll(list: ImageItem[]) {
    for (const item of list) {
      URL.revokeObjectURL(item.previewUrl);
    }
  }

  async function generate() {
    const validated = validateImagePdfList(items.map((item) => item.file));
    if (!validated.ok) {
      setError(validated.error);
      return;
    }

    setBusy(true);
    setError("");
    setPdf(null);
    try {
      const prepared = [];
      for (let index = 0; index < items.length; index += 1) {
        const item = items[index];
        if (!item) {
          continue;
        }
        setProgress(`Preparing ${item.file.name} (${index + 1} of ${items.length})…`);
        setPercent(((index + 1) / (items.length + 1)) * 100);
        prepared.push(await preparePdfImage(item));
      }
      setProgress("Writing PDF…");
      const options: ImagePdfOptions = { pageSize, orientation, margin, fit };
      const result = await buildImagePdf(prepared, options);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setPdf(bytesToPdfBlob(result.bytes));
    } catch {
      setError("The PDF could not be created. Try fewer or smaller images.");
    } finally {
      setBusy(false);
      setProgress("");
      setPercent(0);
    }
  }

  function reset() {
    revokeAll(items);
    setItems([]);
    setPageSize("a4");
    setOrientation("auto");
    setMargin("small");
    setFit("fit");
    setError("");
    setPdf(null);
  }

  const totalBytes = items.reduce((sum, item) => sum + item.file.size, 0);

  return (
    <ToolPanel>
      <FileDropZone
        id="image-pdf-files"
        label="Images"
        accept="image/jpeg,image/png,.jpg,.jpeg,.png"
        multiple
        prompt="Drag and drop JPG or PNG files here, or choose images."
        fileName={items.length > 0 ? `${items.length} selected` : undefined}
        disabled={busy}
        hint={`Up to ${MAX_IMAGE_PDF_FILES} JPG/PNG images. Large images are downsampled before embedding.`}
        onFiles={(files) => void addFiles(files)}
      />

      <SortableFileList
        items={items.map((item) => ({
          id: item.id,
          title: item.file.name,
          subtitle: `${item.width}×${item.height} · ${formatBytes(item.file.size)}`,
          previewUrl: item.previewUrl,
        }))}
        onMove={(from, to) => {
          setPdf(null);
          setItems((current) => moveItem(current, from, to));
        }}
        onRemove={(index) => {
          setPdf(null);
          setItems((current) => {
            const removed = current[index];
            if (removed) {
              URL.revokeObjectURL(removed.previewUrl);
            }
            return removeAt(current, index);
          });
        }}
      />

      {items.length > 0 ? (
        <div className="mt-6">
          <FileInfo
            items={[
              { label: "Images", value: String(items.length) },
              { label: "Total size", value: formatBytes(totalBytes) },
            ]}
          />
        </div>
      ) : null}

      <div className="mt-6 space-y-4">
        <ToolChoiceGroup
          legend="Page size"
          name="pdf-page-size"
          value={pageSize}
          onChange={setPageSize}
          options={[
            { id: "a4", label: "A4" },
            { id: "letter", label: "Letter" },
            { id: "original", label: "Original / auto" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
        />
        <ToolChoiceGroup
          legend="Orientation"
          name="pdf-orientation"
          value={orientation}
          onChange={setOrientation}
          options={[
            { id: "portrait", label: "Portrait" },
            { id: "landscape", label: "Landscape" },
            { id: "auto", label: "Auto" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
        />
        <ToolChoiceGroup
          legend="Margin"
          name="pdf-margin"
          value={margin}
          onChange={setMargin}
          options={[
            { id: "none", label: "None" },
            { id: "small", label: "Small" },
            { id: "medium", label: "Medium" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
        />
        <ToolChoiceGroup
          legend="Image fit"
          name="pdf-fit"
          value={fit}
          onChange={setFit}
          options={[
            { id: "fit", label: "Fit to page" },
            { id: "fill", label: "Fill page" },
            { id: "original", label: "Original size" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
        />
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void generate()} disabled={busy}>
            {busy ? "Working…" : "Create PDF"}
          </Button>
          <DownloadButton blob={pdf} fileName="images.pdf" label="Download PDF" />
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {progress ? <ProgressBar value={percent} label={progress} /> : null}
        {error ? <ToolError>{error}</ToolError> : null}
      </div>

      <ToolPrivacyNote>
        Your images are processed in your browser and are not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

async function preparePdfImage(item: ImageItem) {
  if (!shouldDownsample(item.width, item.height)) {
    return {
      bytes: new Uint8Array(await item.file.arrayBuffer()),
      mime: item.mime,
      width: item.width,
      height: item.height,
    };
  }

  const size = downsampleSize(item.width, item.height);
  const source = await loadImageElement(item.previewUrl);
  const raster = await rasterizeImage({
    source,
    sourceWidth: item.width,
    sourceHeight: item.height,
    destWidth: size.width,
    destHeight: size.height,
    mime: "image/jpeg",
    quality: 85,
    background: "#ffffff",
  });
  if (!raster.ok) {
    throw new Error(raster.error);
  }
  return {
    bytes: new Uint8Array(await raster.blob.arrayBuffer()),
    mime: "image/jpeg" as const,
    width: size.width,
    height: size.height,
  };
}
