"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo, ImagePreview } from "@/components/tools/ImagePreview";
import {
  ProgressBar,
  ToolActions,
  ToolError,
  ToolPanel,
  ToolPrivacyNote,
  ToolStatGrid,
} from "@/components/tools/ToolForm";
import { useLocalImage } from "@/components/tools/useLocalImage";
import {
  FACE_SHAPE_ANCHORS,
  FACE_SHAPE_LABELS,
  FACE_SHAPE_STYLE,
  formatRatio,
  matchStrengthLabel,
  type FaceShapeClassification,
} from "@/lib/tools/face-shape";
import {
  FACE_SHAPE_PANEL_LEAD,
  analyzeFaceImage,
  faceShapeFirstRunMegabytes,
} from "@/lib/tools/face-shape-landmarker";
import { formatBytes, loadImageElement, validateImageFile } from "@/lib/tools/image";

type Status = "idle" | "loading-model" | "analyzing" | "done" | "failed";

export function FaceShapeDetectorTool() {
  const { image, error, loading, loadFile, resetImage, setError } = useLocalImage();
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<FaceShapeClassification | null>(null);
  const [statusLabel, setStatusLabel] = useState("");

  const busy = status === "loading-model" || status === "analyzing" || loading;
  const progress = status === "loading-model" ? 35 : status === "analyzing" ? 75 : 0;

  async function chooseFile(file: File) {
    const allowed = validateImageFile(file);
    if (!allowed.ok) {
      resetImage();
      setResult(null);
      setStatus("idle");
      setStatusLabel("");
      setError(allowed.error);
      return;
    }
    setResult(null);
    setStatus("idle");
    setStatusLabel("");
    await loadFile(file);
  }

  async function analyze() {
    if (!image) {
      setError("Choose a JPG, PNG, or WebP photo.");
      setStatus("failed");
      return;
    }
    const allowed = validateImageFile(image.file);
    if (!allowed.ok) {
      setError(allowed.error);
      setStatus("failed");
      return;
    }

    setError("");
    setResult(null);
    setStatus("loading-model");
    setStatusLabel(`Loading the face landmark model, about ${faceShapeFirstRunMegabytes()} MB the first time…`);
    try {
      const source = await loadImageElement(image.previewUrl);
      setStatus("analyzing");
      setStatusLabel("Measuring facial proportions…");
      const next = await analyzeFaceImage(source);
      if (!next.ok) {
        setStatus("failed");
        setStatusLabel("");
        setError(next.error);
        return;
      }
      setResult(next.result);
      setStatus("done");
      setStatusLabel("Analysis finished.");
    } catch {
      setStatus("failed");
      setStatusLabel("");
      setError(
        "The photo could not be analyzed in this browser. Try another front-facing image, or use the manual guide below.",
      );
    }
  }

  function reset() {
    resetImage();
    setResult(null);
    setStatus("idle");
    setStatusLabel("");
  }

  const primaryLabel = result ? FACE_SHAPE_LABELS[result.primary] : "";
  const style = result ? FACE_SHAPE_STYLE[result.primary] : null;
  const stats = useMemo(() => {
    if (!result) {
      return [];
    }
    const m = result.measurements;
    return [
      { label: "Length / width", value: formatRatio(m.lengthWidthRatio) },
      { label: "Forehead vs cheek", value: formatRatio(m.foreheadToCheek) },
      { label: "Jaw vs cheek", value: formatRatio(m.jawToCheek) },
    ];
  }, [result]);

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">{FACE_SHAPE_PANEL_LEAD}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Use one front-facing JPG, PNG, or WebP. Hair off the forehead and a level camera help. Analysis starts only when you press Detect face shape.
      </p>
      <p className="mt-3 rounded-2xl border border-border bg-muted px-4 py-3 text-sm leading-6 text-muted-foreground">
        The photo stays in this tab. It is not uploaded to our servers, stored, or sent to an external AI API. The landmark model is loaded from this site. MediaPipe may try to send anonymous usage metrics to Google; this site&apos;s security policy blocks that request.
      </p>
      <div className="mt-4">
        <FileDropZone
          id="face-shape-file"
          label="Photo"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          hint="One photo, up to 25 MB. JPEG, PNG, or WebP."
          prompt="Drag and drop a front-facing photo here, or choose a file."
          fileName={image?.file.name}
          disabled={busy}
          onFile={(file) => {
            void chooseFile(file);
          }}
        />
      </div>
      {image ? (
        <div className="mt-4 space-y-3">
          <ImagePreview
            src={image.previewUrl}
            alt="Selected photo for face shape detection. The image stays in this browser."
            caption={`${image.width} × ${image.height} px`}
          />
          <FileInfo
            items={[
              { label: "File", value: image.file.name },
              { label: "Size", value: formatBytes(image.file.size) },
            ]}
          />
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Remove photo
          </Button>
        </div>
      ) : null}
      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void analyze()} disabled={busy || !image}>
            {busy ? "Analyzing…" : "Detect face shape"}
          </Button>
          <Button type="button" variant="secondary" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>
      <div className="mt-4 space-y-4" aria-live="polite" aria-atomic="true">
        {busy && statusLabel ? <ProgressBar value={progress} label={statusLabel} /> : null}
        {status === "done" && statusLabel ? (
          <p className="text-sm text-muted-foreground">{statusLabel}</p>
        ) : null}
        {error ? <ToolError>{error}</ToolError> : null}
      </div>
      {result && style ? (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl bg-accent-soft px-4 py-5 sm:px-5">
            <p className="text-sm font-medium text-accent">Estimated face shape</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{primaryLabel}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {matchStrengthLabel(result.matchStrength)}
              {result.secondary
                ? `. A close second is ${FACE_SHAPE_LABELS[result.secondary]}. Real faces often sit between two categories.`
                : ". This is a geometric estimate, not a guaranteed label."}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{style.summary}</p>
          </div>
          <ToolStatGrid items={stats} />
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted-foreground">Face length (normalized)</dt>
              <dd className="mt-0.5 font-medium text-foreground">
                {formatRatio(result.measurements.faceLength)}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Face width (normalized)</dt>
              <dd className="mt-0.5 font-medium text-foreground">
                {formatRatio(result.measurements.faceWidth)}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Forehead width</dt>
              <dd className="mt-0.5 font-medium text-foreground">
                {formatRatio(result.measurements.foreheadWidth)}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Cheekbone width</dt>
              <dd className="mt-0.5 font-medium text-foreground">
                {formatRatio(result.measurements.cheekboneWidth)}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Jawline width</dt>
              <dd className="mt-0.5 font-medium text-foreground">
                {formatRatio(result.measurements.jawlineWidth)}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Landmarks used</dt>
              <dd className="mt-0.5 font-medium text-foreground">{result.landmarkCount}</dd>
            </div>
          </dl>
          <div className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Hairstyles. </span>
              {style.hairstyles}
            </p>
            <p>
              <span className="font-medium text-foreground">Glasses. </span>
              {style.glasses} This page does not include a virtual glasses or hairstyle try-on.
            </p>
            <p>
              <a
                href={`#${FACE_SHAPE_ANCHORS[result.primary]}`}
                className="font-medium text-accent hover:underline"
              >
                Read the {primaryLabel.toLowerCase()} face shape guide
              </a>
              {" · "}
              <a href="#manual-face-shape-guide" className="font-medium text-accent hover:underline">
                Measure by hand instead
              </a>
            </p>
          </div>
          {result.warnings.length > 0 ? (
            <ul className="list-disc space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
              {result.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      <ToolPrivacyNote>
        Choose a photo, then press Detect face shape. The image and landmarks stay in this tab and are released when you reset or leave the page.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
