"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { ToolActions, ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { FAVICON_PNG_SIZES, buildPngIco, faviconPlan } from "@/lib/tools/favicon";

type IconFile = { size: number; blob: Blob; url: string };

async function drawPng(size: number, background: string, textColor: string, letters: string): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("canvas");
  context.fillStyle = background;
  context.fillRect(0, 0, size, size);
  if (letters !== "") {
    context.fillStyle = textColor;
    context.font = `700 ${Math.round(size * (letters.length === 1 ? 0.62 : 0.42))}px sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(letters, size / 2, size / 2);
  }
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("png");
  return blob;
}

export function FaviconGeneratorTool() {
  const [background, setBackground] = useState("#2563eb");
  const [textColor, setTextColor] = useState("#ffffff");
  const [letters, setLetters] = useState("T");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<IconFile[]>([]);
  const [ico, setIco] = useState<Blob | null>(null);

  function clear(nextFiles: IconFile[] = []) {
    for (const file of files) URL.revokeObjectURL(file.url);
    setFiles(nextFiles);
  }

  async function generate() {
    const plan = faviconPlan(background, textColor, letters);
    if (!plan.ok) {
      setError(plan.error);
      clear();
      setIco(null);
      return;
    }
    try {
      const drawn = await Promise.all(FAVICON_PNG_SIZES.map(async (size) => {
        const blob = await drawPng(size, plan.background, plan.textColor, plan.letters);
        return { size, blob, url: URL.createObjectURL(blob) };
      }));
      const pngs = await Promise.all(drawn.filter((file) => file.size === 16 || file.size === 32).map(async (file) => ({
        size: file.size,
        png: new Uint8Array(await file.blob.arrayBuffer()),
      })));
      const icon = buildPngIco(pngs);
      if (!icon.ok) {
        setError(icon.error);
        for (const file of drawn) URL.revokeObjectURL(file.url);
        clear();
        setIco(null);
        return;
      }
      setError("");
      clear(drawn);
      setIco(new Blob([icon.bytes], { type: "image/x-icon" }));
    } catch {
      setError("The icon could not be drawn in this browser.");
      clear();
      setIco(null);
    }
  }

  const preview = files.find((file) => file.size === 32);

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        PNG icons are drawn in this tab at 16, 32, and 180 pixels. The ICO file packages the 16 and 32 pixel PNGs. Nothing is uploaded.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="favicon-background" label="Background" hint="A 6-digit hex color, such as #2563eb.">
          <input id="favicon-background" value={background} onChange={(event) => setBackground(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="favicon-text" label="Letter color" hint="A 6-digit hex color, such as #ffffff.">
          <input id="favicon-text" value={textColor} onChange={(event) => setTextColor(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="favicon-letters" label="Letters" hint="One or two letters. Leave blank for a solid color.">
          <input id="favicon-letters" value={letters} onChange={(event) => setLetters(event.target.value)} maxLength={8} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => void generate()}>Generate</Button>
          <Button type="button" variant="ghost" onClick={() => { setBackground("#2563eb"); setTextColor("#ffffff"); setLetters("T"); setError(""); clear(); setIco(null); }}>Reset</Button>
        </ToolActions>
      </div>
      {preview ? (
        <div className="mt-6 flex flex-wrap items-end gap-4">
          <img src={preview.url} alt="32 pixel favicon preview" width={64} height={64} className="h-16 w-16 rounded-xl border border-border" />
          {files.map((file) => (
            <DownloadButton key={file.size} blob={file.blob} fileName={file.size === 180 ? "apple-touch-icon.png" : `favicon-${file.size}.png`} label={`PNG ${file.size}`} />
          ))}
          <DownloadButton blob={ico} fileName="favicon.ico" label="ICO" />
        </div>
      ) : null}
    </ToolPanel>
  );
}
