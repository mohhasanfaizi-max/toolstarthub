"use client";

import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import {
  ToolActions,
  ToolError,
  ToolOutput,
  ToolPanel,
  ToolPrivacyNote,
} from "@/components/tools/ToolForm";
import { looksLikeUrl } from "@/lib/tools/qr";

export function QrCodeScannerTool() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number>(0);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  function stopCamera() {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setScanning(false);
  }

  async function startCamera() {
    setError("");
    setResult("");
    if (!navigator.mediaDevices?.getUserMedia) {
      setError("This browser does not support camera access. Upload an image instead.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      const video = videoRef.current;
      if (!video) {
        stopCamera();
        return;
      }
      video.srcObject = stream;
      await video.play();
      setScanning(true);
      scanFrame();
    } catch (caught) {
      const name = caught instanceof Error ? caught.name : "";
      if (name === "NotAllowedError") {
        setError("Camera permission was denied. You can still upload an image.");
      } else if (name === "NotFoundError") {
        setError("No camera was found. Upload an image instead.");
      } else {
        setError("The camera could not be started. Upload an image instead.");
      }
      stopCamera();
    }
  }

  function scanFrame() {
    const video = videoRef.current;
    if (!video || video.readyState < 2) {
      frameRef.current = requestAnimationFrame(scanFrame);
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context || canvas.width === 0) {
      frameRef.current = requestAnimationFrame(scanFrame);
      return;
    }
    context.drawImage(video, 0, 0);
    const image = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(image.data, image.width, image.height);
    if (code?.data) {
      setResult(code.data);
      setError("");
      stopCamera();
      return;
    }
    frameRef.current = requestAnimationFrame(scanFrame);
  }

  async function scanFile(file: File) {
    setError("");
    setFileName(file.name);
    stopCamera();
    try {
      const bitmap = await createImageBitmap(file);
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const context = canvas.getContext("2d");
      if (!context) {
        setError("This browser could not read that image.");
        return;
      }
      context.drawImage(bitmap, 0, 0);
      const image = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(image.data, image.width, image.height);
      if (!code?.data) {
        setResult("");
        setError("No QR code was found in that image.");
        return;
      }
      setResult(code.data);
    } catch {
      setResult("");
      setError("That file could not be read as an image.");
    }
  }

  const isUrl = looksLikeUrl(result);

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Camera access is requested only when you choose to scan with your camera.
      </p>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => void startCamera()} disabled={scanning}>
            Start camera
          </Button>
          <Button type="button" variant="secondary" onClick={stopCamera} disabled={!scanning}>
            Stop camera
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              stopCamera();
              setResult("");
              setError("");
              setFileName("");
            }}
          >
            Reset
          </Button>
        </ToolActions>
      </div>

      <video
        ref={videoRef}
        className={`mt-4 w-full max-w-full rounded-2xl bg-muted ${scanning ? "block" : "hidden"}`}
        playsInline
        muted
        autoPlay
      />

      <div className="mt-6">
        <FileDropZone
          id="qr-image"
          label="Or upload a QR image"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          prompt="Drag and drop a QR image here, or choose a file."
          fileName={fileName}
          hint="Image upload works even if the camera is blocked."
          onFile={(file) => void scanFile(file)}
        />
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {result ? (
          <ToolOutput label="Scan result">
            <p className="break-all font-mono text-sm">{result}</p>
            <div className="mt-4">
              <ToolActions>
                <CopyButton value={result} />
                {isUrl ? (
                  <a
                    href={result}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    Open link
                  </a>
                ) : null}
              </ToolActions>
            </div>
          </ToolOutput>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Your camera frames and uploaded images are processed in your browser and are not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
