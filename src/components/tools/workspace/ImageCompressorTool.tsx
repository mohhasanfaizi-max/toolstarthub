"use client";

import { useEffect, useId, useState } from "react";
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
import {
  canEncodeAvif,
  formatBytes,
  inspectImageFile,
  loadImageSource,
  outputLabel,
  rasterizeImage,
  replacementFileName,
  sizeReductionPercent,
  MAX_COMPRESSOR_BATCH,
  type ImageOutputType,
  type InspectableImageType,
} from "@/lib/tools/image";

const ACCEPT =
  "image/jpeg,image/png,image/webp,image/avif,image/heic,image/heif,.jpg,.jpeg,.png,.webp,.avif,.heic,.heif";

type LoadedImage = {
  id: string;
  file: File;
  previewUrl: string;
  width: number;
  height: number;
  mime: InspectableImageType;
  error?: undefined;
};

type FailedImage = {
  id: string;
  file: File;
  previewUrl?: undefined;
  width?: undefined;
  height?: undefined;
  mime?: undefined;
  error: string;
};

type QueueItem = LoadedImage | FailedImage;

type CompressedResult = {
  blob: Blob;
  url: string;
  name: string;
};

function isLoaded(item: QueueItem): item is LoadedImage {
  return !item.error && Boolean(item.previewUrl);
}

export function ImageCompressorTool() {
  const idPrefix = useId();
  const [items, setItems] = useState<QueueItem[]>([]);
  const [quality, setQuality] = useState(80);
  const [outputType, setOutputType] = useState<ImageOutputType>("image/jpeg");
  const [avifSupported, setAvifSupported] = useState(false);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<Record<string, CompressedResult>>({});
  const [zip, setZip] = useState<{ blob: Blob; name: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    void canEncodeAvif().then((supported) => {
      if (!cancelled) {
        setAvifSupported(supported);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      items.forEach((item) => {
        if (item.previewUrl) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
    };
    // Revoke leftover previews only when the tool unmounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      Object.values(results).forEach((result) => URL.revokeObjectURL(result.url));
    };
  }, [results]);

  function clearResults() {
    setResults((previous) => {
      Object.values(previous).forEach((result) => URL.revokeObjectURL(result.url));
      return {};
    });
    setZip(null);
  }

  function replaceQueue(next: QueueItem[]) {
    setItems((previous) => {
      previous.forEach((item) => {
        if (item.previewUrl) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
      return next;
    });
  }

  async function loadFiles(files: File[]) {
    if (files.length === 0) {
      return;
    }
    if (files.length > MAX_COMPRESSOR_BATCH) {
      setError(`You can compress up to ${MAX_COMPRESSOR_BATCH} images at a time. Choose fewer files and try again.`);
      return;
    }

    setLoading(true);
    setError("");
    clearResults();

    const next: QueueItem[] = [];
    for (const [index, file] of files.entries()) {
      const inspected = await inspectImageFile(file, { tryExtendedFormats: true });
      if (!inspected.ok) {
        next.push({ id: `${idPrefix}-${index}-${file.name}`, file, error: inspected.error });
        continue;
      }
      next.push({
        id: `${idPrefix}-${index}-${file.name}`,
        file,
        previewUrl: inspected.previewUrl,
        width: inspected.width,
        height: inspected.height,
        mime: inspected.mime,
      });
    }

    replaceQueue(next);
    setLoading(false);
    const failures = next.filter((item) => item.error);
    if (failures.length === next.length) {
      setError(failures[0]?.error || "Those files could not be opened.");
    } else if (failures.length > 0) {
      setError(`${failures.length} of ${next.length} files could not be opened. The rest are ready to compress.`);
    }
  }

  async function compress() {
    const ready = items.filter(isLoaded);
    if (ready.length === 0) {
      setError(items.length > 0 ? "None of the selected files can be compressed." : "Choose an image file.");
      return;
    }

    setBusy(true);
    setError("");
    clearResults();

    const nextResults: Record<string, CompressedResult> = {};
    try {
      for (const image of ready) {
        const source = await loadImageSource(image.file, image.previewUrl);
        const encoded = await rasterizeImage({
          source,
          sourceWidth: image.width,
          sourceHeight: image.height,
          destWidth: image.width,
          destHeight: image.height,
          mime: outputType,
          quality,
        });
        if ("close" in source && typeof source.close === "function") {
          source.close();
        }
        if (!encoded.ok) {
          const message = encoded.error;
          setItems((current) =>
            current.map((item) => {
              if (item.id !== image.id) {
                return item;
              }
              if (item.previewUrl) {
                URL.revokeObjectURL(item.previewUrl);
              }
              const failed: FailedImage = { id: item.id, file: item.file, error: message };
              return failed;
            }),
          );
          continue;
        }
        nextResults[image.id] = {
          blob: encoded.blob,
          url: URL.createObjectURL(encoded.blob),
          name: replacementFileName(image.file.name, outputType, "-compressed"),
        };
      }

      setResults(nextResults);

      if (Object.keys(nextResults).length === 0) {
        setError("Compression failed. Try another image or a lower resolution.");
        return;
      }

      if (ready.length > 1) {
        const { createStoreZip, uniqueZipName, blobToUint8Array } = await import("@/lib/tools/store-zip");
        const used = new Set<string>();
        const entries = [];
        for (const result of Object.values(nextResults)) {
          entries.push({
            name: uniqueZipName(used, result.name),
            data: await blobToUint8Array(result.blob),
          });
        }
        const zipBlob = createStoreZip(entries);
        setZip({ blob: zipBlob, name: "compressed-images.zip" });
      }
    } catch {
      setError("Compression failed. Try another image or a lower resolution.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    clearResults();
    replaceQueue([]);
    setQuality(80);
    setOutputType("image/jpeg");
    setError("");
    setLoading(false);
  }

  const readyItems = items.filter(isLoaded);
  const single = readyItems.length === 1 ? readyItems[0] : null;
  const singleResult = single ? results[single.id] : undefined;
  const reduction =
    single && singleResult ? sizeReductionPercent(single.file.size, singleResult.blob.size) : null;
  const fileNameLabel =
    items.length === 0
      ? undefined
      : items.length === 1
        ? items[0]!.file.name
        : `${items.length} images selected`;

  const outputOptions = [
    { id: "image/jpeg" as const, label: "JPG" },
    { id: "image/png" as const, label: "PNG" },
    { id: "image/webp" as const, label: "WebP" },
    ...(avifSupported ? [{ id: "image/avif" as const, label: "AVIF" }] : []),
  ];

  const qualityHint =
    outputType === "image/png"
      ? "PNG is lossless in this tool, so quality does not change the encoding."
      : outputType === "image/avif"
        ? "Lower quality usually means a smaller AVIF file. AVIF is only offered when this browser can encode it."
        : "Lower quality usually means a smaller JPEG or WebP file.";

  return (
    <ToolPanel>
      <FileDropZone
        id="compressor-file"
        label="Images"
        accept={ACCEPT}
        multiple
        fileName={fileNameLabel}
        disabled={busy || loading}
        hint={`JPG, PNG, and WebP, plus AVIF or HEIC if this browser can open them. Up to ${MAX_COMPRESSOR_BATCH} files, 25 MB and 8,192 pixels per side.`}
        prompt="Drop images here, or choose one or more files."
        onFiles={(files) => {
          void loadFiles(files);
        }}
      />

      {single ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "File name", value: single.file.name },
              { label: "Original size", value: formatBytes(single.file.size) },
              {
                label: "Dimensions",
                value: `${single.width} × ${single.height} px`,
              },
              { label: "Detected format", value: outputLabel(single.mime) },
            ]}
          />
          <ImagePreview src={single.previewUrl} alt="Original image preview" caption="Original" />
        </div>
      ) : null}

      {items.length > 1 ? (
        <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card" data-testid="compressor-queue">
          {items.map((item) => {
            const result = results[item.id];
            return (
              <li key={item.id} className="px-4 py-3 text-sm" data-testid="compressor-row">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="break-all font-medium text-foreground">{item.file.name}</p>
                    <p className="mt-1 text-muted-foreground">
                      {formatBytes(item.file.size)}
                      {isLoaded(item) ? ` · ${item.width} × ${item.height} px · ${outputLabel(item.mime)}` : null}
                    </p>
                    {item.error ? <p className="mt-1 text-destructive">{item.error}</p> : null}
                    {result ? (
                      <p className="mt-1 text-foreground" data-testid="compressor-row-result">
                        Compressed: {formatBytes(result.blob.size)} · {result.name}
                      </p>
                    ) : null}
                  </div>
                  {result ? (
                    <DownloadButton blob={result.blob} fileName={result.name} label="Download" />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ToolField id="compressor-quality" label="Quality" hint={qualityHint}>
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
        <div>
          <ToolChoiceGroup
            legend="Output format"
            name="compressor-output"
            value={outputType}
            onChange={(value) => setOutputType(value as ImageOutputType)}
            options={outputOptions}
            columns="grid gap-2"
          />
          {!avifSupported ? (
            <p className="mt-2 text-sm text-muted-foreground" data-testid="avif-unsupported">
              AVIF is not offered because this browser cannot encode it.
            </p>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground" data-testid="avif-supported">
              AVIF is available in this browser. JPEG, PNG, and WebP remain available too.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void compress()} disabled={busy || loading} data-testid="compress-button">
            {busy ? "Compressing…" : "Compress"}
          </Button>
          {items.length > 1 ? (
            <DownloadButton
              blob={zip?.blob ?? null}
              fileName={zip?.name ?? "compressed-images.zip"}
              label="Download all as ZIP"
            />
          ) : (
            <DownloadButton
              blob={singleResult?.blob ?? null}
              fileName={singleResult?.name ?? "image.jpg"}
            />
          )}
          <Button type="button" variant="secondary" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {single && singleResult ? (
          <div className="space-y-4">
            <ToolStatGrid
              items={[
                { label: "Compressed size", value: formatBytes(singleResult.blob.size) },
                {
                  label: "Size change",
                  value:
                    reduction === null
                      ? "—"
                      : reduction >= 0
                        ? `${reduction.toFixed(1)}% smaller`
                        : `${Math.abs(reduction).toFixed(1)}% larger`,
                },
                { label: "Output", value: singleResult.name },
              ]}
            />
            <ImagePreview
              src={singleResult.url}
              alt="Compressed image preview"
              caption="Compressed preview"
            />
          </div>
        ) : null}
        {items.length > 1 && zip ? (
          <p className="text-sm text-foreground" data-testid="zip-ready">
            ZIP ready: {Object.keys(results).length} compressed {Object.keys(results).length === 1 ? "image" : "images"}.
          </p>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Files are re-encoded in this tab at the quality you set. They are not sent to Tools Star Hub.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
