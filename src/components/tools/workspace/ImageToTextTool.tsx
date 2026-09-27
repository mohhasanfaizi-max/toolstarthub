"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import {
  ProgressBar,
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { loadImageElement, validateImageFile } from "@/lib/tools/image";
import {
  OCR_MAX_EDGE,
  OCR_PANEL_LEAD,
  OCR_WORKER_PATHS,
  ocrStatusLabel,
  ocrTargetSize,
} from "@/lib/tools/ocr";

export function ImageToTextTool() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  function chooseFile(next: File) {
    const allowed = validateImageFile(next);
    setText("");
    setNote("");
    setStatus("");
    setProgress(0);
    if (!allowed.ok) {
      setFile(null);
      setError(allowed.error);
      return;
    }
    setFile(next);
    setError("");
  }

  function clear() {
    setFile(null);
    setText("");
    setNote("");
    setError("");
    setStatus("");
    setProgress(0);
  }

  async function readText() {
    if (!file) {
      setError("Choose an image file.");
      setText("");
      setNote("");
      return;
    }
    const allowed = validateImageFile(file);
    if (!allowed.ok) {
      setError(allowed.error);
      setText("");
      setNote("");
      return;
    }

    setBusy(true);
    setError("");
    setText("");
    setNote("");
    setProgress(0);
    setStatus("Preparing the reader…");
    const url = URL.createObjectURL(file);
    let terminate: (() => Promise<unknown>) | null = null;
    try {
      const image = await loadImageElement(url);
      const target = ocrTargetSize(image.naturalWidth, image.naturalHeight);
      if (target.width < 1 || target.height < 1) {
        setError("That image could not be read. Try another photo.");
        return;
      }
      const canvas = document.createElement("canvas");
      canvas.width = target.width;
      canvas.height = target.height;
      const context = canvas.getContext("2d");
      if (!context) {
        setError("This browser could not prepare the image.");
        return;
      }
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, 0, 0, target.width, target.height);

      const loaded = await import("tesseract.js");
      const tesseract = typeof loaded.createWorker === "function" ? loaded : loaded.default;
      const worker = await tesseract.createWorker("eng", tesseract.OEM.LSTM_ONLY, {
        workerPath: OCR_WORKER_PATHS.workerPath,
        corePath: OCR_WORKER_PATHS.corePath,
        langPath: OCR_WORKER_PATHS.langPath,
        workerBlobURL: OCR_WORKER_PATHS.workerBlobURL,
        logger(message) {
          const label = ocrStatusLabel(typeof message.status === "string" ? message.status : "");
          const value = typeof message.progress === "number" ? message.progress : 0;
          setStatus(label);
          setProgress(Math.round(Math.max(0, Math.min(1, value)) * 100));
        },
      });
      terminate = () => worker.terminate();
      const result = await worker.recognize(canvas);
      const found = typeof result.data.text === "string" ? result.data.text.trim() : "";
      if (found === "") {
        setError("No text was found in that image.");
        return;
      }
      setText(found);
      if (target.scaled) {
        setNote(`The long side was reduced to ${OCR_MAX_EDGE.toLocaleString()} pixels before reading.`);
      }
    } catch {
      setError("The image could not be read. Try another photo.");
    } finally {
      URL.revokeObjectURL(url);
      if (terminate) {
        await terminate().catch(() => undefined);
      }
      setBusy(false);
      setStatus("");
      setProgress(0);
    }
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">{OCR_PANEL_LEAD}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Use one JPG, PNG, or WebP image. A long side over {OCR_MAX_EDGE.toLocaleString()} pixels is reduced before reading. English is the only language.
      </p>
      <div className="mt-4">
        <FileDropZone
          id="image-to-text-file"
          label="Image"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          hint="One image, up to 25 MB."
          prompt="Drag and drop a photo here, or choose a file."
          fileName={file?.name}
          disabled={busy}
          onFile={chooseFile}
        />
      </div>
      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void readText()} disabled={busy || !file}>
            {busy ? "Reading…" : "Read text"}
          </Button>
          <CopyButton value={text} label="Copy text" />
          <Button type="button" variant="ghost" onClick={clear} disabled={busy}>
            Clear
          </Button>
        </ToolActions>
      </div>
      <div className="mt-4 space-y-4">
        {busy && status ? <ProgressBar value={progress} label={status} /> : null}
        {error ? <ToolError>{error}</ToolError> : null}
        {note ? <p className="text-sm leading-6 text-muted-foreground">{note}</p> : null}
        {text ? (
          <ToolField id="image-to-text-output" label="Text from the image">
            <textarea
              id="image-to-text-output"
              value={text}
              readOnly
              rows={14}
              spellCheck={false}
              className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
            />
          </ToolField>
        ) : null}
      </div>
      <ToolPrivacyNote>
        The image stays in this tab. It is not uploaded. The recognition files are loaded from this site.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
