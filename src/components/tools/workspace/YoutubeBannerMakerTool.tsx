"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ToolError, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import {
  BANNER_HEIGHT,
  BANNER_TEMPLATES,
  BANNER_WIDTH,
  FONT_OPTIONS,
  MAX_EXPORT_BYTES,
  SAFE_RECT,
  cloneDoc,
  gradientPoints,
  newId,
  wrapText,
  type BannerDoc,
  type Fill,
  type Layer,
  type ShapeLayer,
  type TextLayer,
} from "@/lib/tools/banner-templates";
import { goldBtn, goldGhost, goldTab } from "./goldUi";

const HANDLE = 40;
const MAX_HISTORY = 60;
type Drag = { mode: "move" | "resize"; id: string; startX: number; startY: number; orig: Layer } | null;

function paintFill(ctx: CanvasRenderingContext2D, fill: Fill, x: number, y: number, w: number, h: number) {
  if (fill.kind === "solid") return fill.color;
  const p = gradientPoints(fill.angle, x, y, w, h);
  const g = ctx.createLinearGradient(p.x0, p.y0, p.x1, p.y1);
  g.addColorStop(0, fill.from);
  g.addColorStop(1, fill.to);
  return g;
}

function renderDoc(ctx: CanvasRenderingContext2D, doc: BannerDoc, images: Map<string, HTMLImageElement>) {
  ctx.clearRect(0, 0, BANNER_WIDTH, BANNER_HEIGHT);
  ctx.globalAlpha = 1;
  ctx.fillStyle = paintFill(ctx, doc.background, 0, 0, BANNER_WIDTH, BANNER_HEIGHT);
  ctx.fillRect(0, 0, BANNER_WIDTH, BANNER_HEIGHT);
  for (const layer of doc.layers) {
    if (layer.hidden) continue;
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    if (layer.type === "rect") {
      ctx.fillStyle = paintFill(ctx, layer.fill, layer.x, layer.y, layer.w, layer.h);
      ctx.beginPath();
      ctx.roundRect(layer.x, layer.y, layer.w, layer.h, Math.min(layer.radius, layer.w / 2, layer.h / 2));
      ctx.fill();
    } else if (layer.type === "ellipse") {
      ctx.fillStyle = paintFill(ctx, layer.fill, layer.x, layer.y, layer.w, layer.h);
      ctx.beginPath();
      ctx.ellipse(layer.x + layer.w / 2, layer.y + layer.h / 2, Math.abs(layer.w / 2), Math.abs(layer.h / 2), 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (layer.type === "image") {
      const img = images.get(layer.src);
      if (img && img.complete) ctx.drawImage(img, layer.x, layer.y, layer.w, layer.h);
    } else if (layer.type === "text") {
      ctx.fillStyle = layer.color;
      ctx.font = `${layer.fontWeight} ${layer.fontSize}px ${layer.fontFamily}`;
      ctx.textBaseline = "top";
      ctx.textAlign = layer.align;
      const lines = wrapText(layer.text, layer.w, (s) => ctx.measureText(s).width);
      const tx = layer.align === "center" ? layer.x + layer.w / 2 : layer.align === "right" ? layer.x + layer.w : layer.x;
      lines.forEach((line, i) => ctx.fillText(line, tx, layer.y + i * layer.fontSize * 1.2));
    }
    ctx.restore();
  }
}

function blobFrom(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

export function YoutubeBannerMakerTool() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const images = useRef(new Map<string, HTMLImageElement>());
  const [history, setHistory] = useState<BannerDoc[]>(() => [cloneDoc(BANNER_TEMPLATES[0].doc)]);
  const [index, setIndex] = useState(0);
  const [templateId, setTemplateId] = useState(BANNER_TEMPLATES[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [showGuide, setShowGuide] = useState(true);
  const [format, setFormat] = useState<"png" | "jpeg">("png");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [tick, setTick] = useState(0);
  const drag = useRef<Drag>(null);
  const [live, setLive] = useState<BannerDoc | null>(null);

  const doc = live ?? history[index];
  const selected = doc.layers.find((l) => l.id === selectedId) ?? null;

  const commit = useCallback(
    (next: BannerDoc) => {
      setHistory((h) => [...h.slice(0, index + 1), next].slice(-MAX_HISTORY));
      setIndex((i) => Math.min(i + 1, MAX_HISTORY - 1));
    },
    [index],
  );
  const updateLayer = (id: string, patch: Partial<Layer>) => {
    const next = cloneDoc(history[index]);
    next.layers = next.layers.map((l) => (l.id === id ? ({ ...l, ...patch } as Layer) : l));
    commit(next);
  };
  const undo = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const redo = useCallback(() => setIndex((i) => Math.min(history.length - 1, i + 1)), [history.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    renderDoc(ctx, doc, images.current);
    if (showGuide) {
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(0, 0, BANNER_WIDTH, SAFE_RECT.y);
      ctx.fillRect(0, SAFE_RECT.y + SAFE_RECT.height, BANNER_WIDTH, BANNER_HEIGHT - SAFE_RECT.y - SAFE_RECT.height);
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 6;
      ctx.setLineDash([24, 16]);
      ctx.strokeRect(SAFE_RECT.x, SAFE_RECT.y, SAFE_RECT.width, SAFE_RECT.height);
      ctx.restore();
    }
    if (selected) {
      ctx.save();
      ctx.strokeStyle = "#C9A227";
      ctx.lineWidth = 6;
      ctx.strokeRect(selected.x, selected.y, selected.w, selected.h);
      ctx.fillStyle = "#C9A227";
      ctx.fillRect(selected.x + selected.w - HANDLE / 2, selected.y + selected.h - HANDLE / 2, HANDLE, HANDLE);
      ctx.restore();
    }
  }, [doc, selected, showGuide, tick]);

  function toCanvas(e: ReactPointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * BANNER_WIDTH, y: ((e.clientY - rect.top) / rect.height) * BANNER_HEIGHT };
  }
  function onPointerDown(e: ReactPointerEvent<HTMLCanvasElement>) {
    const p = toCanvas(e);
    if (selected && Math.abs(p.x - (selected.x + selected.w)) < HANDLE && Math.abs(p.y - (selected.y + selected.h)) < HANDLE) {
      drag.current = { mode: "resize", id: selected.id, startX: p.x, startY: p.y, orig: selected };
    } else {
      const hit = [...doc.layers].reverse().find((l) => !l.hidden && p.x >= l.x && p.x <= l.x + l.w && p.y >= l.y && p.y <= l.y + l.h);
      setSelectedId(hit?.id ?? null);
      if (!hit) return;
      drag.current = { mode: "move", id: hit.id, startX: p.x, startY: p.y, orig: hit };
    }
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: ReactPointerEvent<HTMLCanvasElement>) {
    const d = drag.current;
    if (!d) return;
    const p = toCanvas(e);
    const dx = p.x - d.startX;
    const dy = p.y - d.startY;
    const next = cloneDoc(history[index]);
    next.layers = next.layers.map((l) => {
      if (l.id !== d.id) return l;
      if (d.mode === "move") return { ...l, x: Math.round(d.orig.x + dx), y: Math.round(d.orig.y + dy) };
      return { ...l, w: Math.max(20, Math.round(d.orig.w + dx)), h: Math.max(20, Math.round(d.orig.h + dy)) };
    });
    setLive(next);
  }
  function onPointerUp() {
    if (drag.current && live) commit(live);
    drag.current = null;
    setLive(null);
  }

  const addLayer = (layer: Layer) => {
    const next = cloneDoc(history[index]);
    next.layers.push(layer);
    commit(next);
    setSelectedId(layer.id);
  };
  const addText = () =>
    addLayer({ id: newId("t"), name: "Text", type: "text", text: "New text", color: "#ffffff", fontSize: 96, fontWeight: 600, fontFamily: FONT_OPTIONS[0].value, align: "center", x: BANNER_WIDTH / 2 - 500, y: BANNER_HEIGHT / 2 - 60, w: 1000, h: 130, opacity: 1 });
  const addShape = (type: "rect" | "ellipse") =>
    addLayer({ id: newId("s"), name: type === "rect" ? "Rectangle" : "Ellipse", type, fill: { kind: "solid", color: "#C9A227" }, radius: type === "rect" ? 24 : 0, x: BANNER_WIDTH / 2 - 200, y: BANNER_HEIGHT / 2 - 120, w: 400, h: 240, opacity: 1 });

  function onFile(file: File | undefined, asLogo: boolean) {
    setError("");
    if (!file) return;
    if (!/^image\/(png|jpeg|webp|gif|svg\+xml)$/.test(file.type)) return setError("Choose a PNG, JPG, WebP, GIF or SVG image.");
    if (file.size > 15 * 1024 * 1024) return setError("That image is larger than 15 MB. Resize it first.");
    const reader = new FileReader();
    reader.onload = () => {
      const src = String(reader.result);
      const img = new Image();
      img.onload = () => {
        images.current.set(src, img);
        const target = asLogo ? 300 : BANNER_WIDTH;
        const scale = Math.min(target / img.width, (asLogo ? 300 : BANNER_HEIGHT) / img.height);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        addLayer({ id: newId("i"), name: asLogo ? "Logo" : "Image", type: "image", src, x: asLogo ? SAFE_RECT.x + 30 : (BANNER_WIDTH - w) / 2, y: asLogo ? (BANNER_HEIGHT - h) / 2 : (BANNER_HEIGHT - h) / 2, w, h, opacity: 1 });
        setTick((t) => t + 1);
      };
      img.onerror = () => setError("This image could not be read.");
      img.src = src;
    };
    reader.readAsDataURL(file);
  }
  const [uploadAsLogo, setUploadAsLogo] = useState(false);

  const duplicate = useCallback(() => {
    if (!selected) return;
    const copy = { ...JSON.parse(JSON.stringify(selected)), id: newId("d"), x: selected.x + 40, y: selected.y + 40, name: `${selected.name} copy` } as Layer;
    const next = cloneDoc(history[index]);
    next.layers.push(copy);
    commit(next);
    setSelectedId(copy.id);
  }, [selected, history, index, commit]);
  const remove = useCallback(() => {
    if (!selected) return;
    const next = cloneDoc(history[index]);
    next.layers = next.layers.filter((l) => l.id !== selected.id);
    commit(next);
    setSelectedId(null);
  }, [selected, history, index, commit]);
  const move = (id: string, dir: -1 | 1) => {
    const next = cloneDoc(history[index]);
    const i = next.layers.findIndex((l) => l.id === id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= next.layers.length) return;
    [next.layers[i], next.layers[j]] = [next.layers[j], next.layers[i]];
    commit(next);
  };
  function loadTemplate(id: string) {
    const t = BANNER_TEMPLATES.find((x) => x.id === id);
    if (!t) return;
    setTemplateId(id);
    commit(cloneDoc(t.doc));
    setSelectedId(null);
  }
  function reset() {
    const t = BANNER_TEMPLATES.find((x) => x.id === templateId) ?? BANNER_TEMPLATES[0];
    setHistory([cloneDoc(t.doc)]);
    setIndex(0);
    setSelectedId(null);
    setStatus("Design reset to the template.");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
      } else if (mod && e.key.toLowerCase() === "y") {
        e.preventDefault();
        redo();
      } else if (mod && e.key.toLowerCase() === "d") {
        e.preventDefault();
        duplicate();
      } else if ((e.key === "Delete" || e.key === "Backspace") && selected) {
        e.preventDefault();
        remove();
      } else if (selected && e.key.startsWith("Arrow")) {
        e.preventDefault();
        const step = e.shiftKey ? 50 : 10;
        const dx = e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0;
        const dy = e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
        updateLayer(selected.id, { x: selected.x + dx, y: selected.y + dy });
      } else if (e.key === "Escape") setSelectedId(null);
    }
    const root = document.getElementById("yt-banner-editor");
    root?.addEventListener("keydown", onKey);
    return () => root?.removeEventListener("keydown", onKey);
  });

  async function exportBanner() {
    setError("");
    setStatus("Preparing export…");
    const canvas = document.createElement("canvas");
    canvas.width = BANNER_WIDTH;
    canvas.height = BANNER_HEIGHT;
    const ctx = canvas.getContext("2d");
    if (!ctx) return setError("Your browser could not create the export canvas.");
    renderDoc(ctx, history[index], images.current);
    let blob: Blob | null = null;
    let used: "png" | "jpeg" = format;
    if (format === "png") {
      blob = await blobFrom(canvas, "image/png");
      if (blob && blob.size > MAX_EXPORT_BYTES) used = "jpeg";
    }
    if (used === "jpeg") {
      for (const q of [0.92, 0.85, 0.75, 0.65, 0.5]) {
        blob = await blobFrom(canvas, "image/jpeg", q);
        if (blob && blob.size <= MAX_EXPORT_BYTES) break;
      }
    }
    if (!blob) return setError("Export failed in this browser.");
    if (blob.size > MAX_EXPORT_BYTES) return setError("The banner is still over 6 MB. Remove or shrink large photos and try again.");
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `youtube-banner-2560x1440.${used === "png" ? "png" : "jpg"}`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setStatus(`Exported 2560 × 1440 ${used.toUpperCase()} (${(blob.size / 1024 / 1024).toFixed(2)} MB)${format === "png" && used === "jpeg" ? ". PNG was over 6 MB, so JPG was used." : "."} The safe-area guide is not included.`);
  }

  const setBg = (bg: Fill) => {
    const next = cloneDoc(history[index]);
    next.background = bg;
    commit(next);
  };
  const bg = history[index].background;

  return (
    <ToolPanel>
      <div id="yt-banner-editor" className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" className={goldGhost} onClick={undo} disabled={index === 0} aria-label="Undo (Ctrl+Z)">Undo</button>
            <button type="button" className={goldGhost} onClick={redo} disabled={index >= history.length - 1} aria-label="Redo (Ctrl+Shift+Z)">Redo</button>
            <button type="button" className={goldGhost} onClick={reset}>Reset</button>
            <label className="ml-auto flex items-center gap-2 text-sm">
              Zoom
              <input type="range" min={0.5} max={3} step={0.25} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="accent-[#C9A227]" aria-valuetext={`${Math.round(zoom * 100)}%`} />
              <span className="w-12 tabular-nums">{Math.round(zoom * 100)}%</span>
            </label>
          </div>
          <div className="max-h-[70vh] overflow-auto rounded-2xl border border-[#C9A227]/40 bg-neutral-200 dark:bg-neutral-800" tabIndex={0} aria-label="Banner canvas. Arrow keys move the selected layer, Delete removes it, Ctrl+D duplicates.">
            <canvas
              ref={canvasRef}
              width={BANNER_WIDTH}
              height={BANNER_HEIGHT}
              style={{ width: `${zoom * 100}%`, touchAction: "none" }}
              className="block h-auto cursor-move"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              role="img"
              aria-label="YouTube banner preview, 2560 by 1440 pixels"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={showGuide} onChange={(e) => setShowGuide(e.target.checked)} className="h-4 w-4 accent-[#C9A227]" />
              Show 1546 × 423 safe area (never exported)
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select aria-label="Export format" value={format} onChange={(e) => setFormat(e.target.value as "png" | "jpeg")} className={`${toolControlClass} w-auto`}>
              <option value="png">PNG</option>
              <option value="jpeg">JPG</option>
            </select>
            <button type="button" className={goldBtn} onClick={exportBanner}>Download 2560 × 1440</button>
          </div>
          {error ? <ToolError>{error}</ToolError> : null}
          {status ? <p className="text-sm text-[#A8841A]" role="status">{status}</p> : null}
          <p className="text-xs text-muted-foreground">Everything runs in your browser. Images you add are never uploaded. Shortcuts: Ctrl/⌘+Z undo, Ctrl/⌘+Shift+Z or Ctrl+Y redo, Ctrl/⌘+D duplicate, Delete remove, arrows nudge (Shift for 50 px), Esc deselect.</p>
        </div>

        <aside className="min-w-0 space-y-5">
          <section>
            <h3 className="text-sm font-semibold">Templates</h3>
            <div className="mt-2 grid max-h-56 grid-cols-2 gap-2 overflow-y-auto pr-1">
              {BANNER_TEMPLATES.map((t) => (
                <button key={t.id} type="button" className={goldTab(templateId === t.id)} onClick={() => loadTemplate(t.id)}>{t.name}</button>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold">Add</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button type="button" className={goldGhost} onClick={addText}>Text</button>
              <button type="button" className={goldGhost} onClick={() => addShape("rect")}>Rectangle</button>
              <button type="button" className={goldGhost} onClick={() => addShape("ellipse")}>Circle</button>
              <button type="button" className={goldGhost} onClick={() => { setUploadAsLogo(false); fileRef.current?.click(); }}>Image</button>
              <button type="button" className={`${goldGhost} col-span-2`} onClick={() => { setUploadAsLogo(true); fileRef.current?.click(); }}>Logo</button>
            </div>
            <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml" className="sr-only" aria-label="Upload image" onChange={(e) => { onFile(e.target.files?.[0], uploadAsLogo); e.target.value = ""; }} />
          </section>
          <section>
            <h3 className="text-sm font-semibold">Background</h3>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <button type="button" className={goldTab(bg.kind === "solid")} onClick={() => setBg({ kind: "solid", color: bg.kind === "solid" ? bg.color : bg.from })}>Solid</button>
              <button type="button" className={goldTab(bg.kind === "linear")} onClick={() => setBg(bg.kind === "linear" ? bg : { kind: "linear", from: bg.color, to: "#C9A227", angle: 135 })}>Gradient</button>
              {bg.kind === "solid" ? (
                <label className="col-span-2 flex items-center gap-2">Colour <input type="color" value={bg.color} onChange={(e) => setBg({ kind: "solid", color: e.target.value })} /></label>
              ) : (
                <>
                  <label className="flex items-center gap-2">From <input type="color" value={bg.from} onChange={(e) => setBg({ ...bg, from: e.target.value })} /></label>
                  <label className="flex items-center gap-2">To <input type="color" value={bg.to} onChange={(e) => setBg({ ...bg, to: e.target.value })} /></label>
                  <label className="col-span-2 flex items-center gap-2">Angle <input type="range" min={0} max={360} value={bg.angle} onChange={(e) => setBg({ ...bg, angle: Number(e.target.value) })} className="flex-1 accent-[#C9A227]" /></label>
                </>
              )}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold">Layers</h3>
            <ul className="mt-2 max-h-56 space-y-1 overflow-y-auto pr-1">
              {[...doc.layers].reverse().map((l) => (
                <li key={l.id} className="flex items-center gap-1">
                  <button type="button" className={`${goldTab(selectedId === l.id)} min-w-0 flex-1 truncate text-left`} onClick={() => setSelectedId(l.id)}>{l.name}</button>
                  <button type="button" className="h-11 w-9 rounded-lg border border-border text-sm" aria-label={`Bring ${l.name} forward`} onClick={() => move(l.id, 1)}>↑</button>
                  <button type="button" className="h-11 w-9 rounded-lg border border-border text-sm" aria-label={`Send ${l.name} backward`} onClick={() => move(l.id, -1)}>↓</button>
                  <button type="button" className="h-11 w-9 rounded-lg border border-border text-sm" aria-label={l.hidden ? `Show ${l.name}` : `Hide ${l.name}`} aria-pressed={!l.hidden} onClick={() => updateLayer(l.id, { hidden: !l.hidden })}>{l.hidden ? "○" : "●"}</button>
                </li>
              ))}
            </ul>
          </section>
          {selected ? (
            <section className="space-y-3 rounded-2xl border border-[#C9A227]/40 p-3 text-sm">
              <h3 className="font-semibold">Selected: {selected.name}</h3>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" className={goldGhost} onClick={duplicate}>Duplicate</button>
                <button type="button" className={goldGhost} onClick={remove}>Delete</button>
              </div>
              {selected.type === "text" ? <TextControls layer={selected} onChange={(p) => updateLayer(selected.id, p)} /> : null}
              {selected.type === "rect" || selected.type === "ellipse" ? <ShapeControls layer={selected} onChange={(p) => updateLayer(selected.id, p)} /> : null}
              <label className="flex items-center gap-2">Opacity <input type="range" min={0.1} max={1} step={0.05} value={selected.opacity} onChange={(e) => updateLayer(selected.id, { opacity: Number(e.target.value) })} className="flex-1 accent-[#C9A227]" /></label>
              <div className="grid grid-cols-2 gap-2">
                {(["x", "y", "w", "h"] as const).map((k) => (
                  <label key={k} className="text-xs">{k.toUpperCase()}
                    <input type="number" value={Math.round(selected[k])} onChange={(e) => updateLayer(selected.id, { [k]: Number(e.target.value) || 0 })} className={toolControlClass} />
                  </label>
                ))}
              </div>
            </section>
          ) : (
            <p className="text-xs text-muted-foreground">Tap or click a layer on the canvas to edit it. Drag to move; drag the gold corner square to resize.</p>
          )}
        </aside>
      </div>
    </ToolPanel>
  );
}

function TextControls({ layer, onChange }: { layer: TextLayer; onChange: (p: Partial<TextLayer>) => void }) {
  return (
    <div className="space-y-2">
      <label className="block">Text
        <textarea value={layer.text} rows={2} onChange={(e) => onChange({ text: e.target.value })} className={toolControlClass} />
      </label>
      <div className="grid grid-cols-2 gap-2">
        <label className="text-xs">Font
          <select value={layer.fontFamily} onChange={(e) => onChange({ fontFamily: e.target.value })} className={toolControlClass}>
            {FONT_OPTIONS.map((f) => <option key={f.label} value={f.value}>{f.label}</option>)}
          </select>
        </label>
        <label className="text-xs">Weight
          <select value={layer.fontWeight} onChange={(e) => onChange({ fontWeight: Number(e.target.value) as TextLayer["fontWeight"] })} className={toolControlClass}>
            <option value={400}>Regular</option><option value={600}>Semibold</option><option value={800}>Bold</option>
          </select>
        </label>
        <label className="text-xs">Size
          <input type="number" min={12} max={400} value={layer.fontSize} onChange={(e) => onChange({ fontSize: Math.max(12, Number(e.target.value) || 12) })} className={toolControlClass} />
        </label>
        <label className="text-xs">Align
          <select value={layer.align} onChange={(e) => onChange({ align: e.target.value as TextLayer["align"] })} className={toolControlClass}>
            <option value="left">Left</option><option value="center">Centre</option><option value="right">Right</option>
          </select>
        </label>
      </div>
      <label className="flex items-center gap-2">Colour <input type="color" value={layer.color} onChange={(e) => onChange({ color: e.target.value })} /></label>
    </div>
  );
}

function ShapeControls({ layer, onChange }: { layer: ShapeLayer; onChange: (p: Partial<ShapeLayer>) => void }) {
  const f = layer.fill;
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <button type="button" className={goldTab(f.kind === "solid")} onClick={() => onChange({ fill: { kind: "solid", color: f.kind === "solid" ? f.color : f.from } })}>Solid</button>
        <button type="button" className={goldTab(f.kind === "linear")} onClick={() => onChange({ fill: f.kind === "linear" ? f : { kind: "linear", from: f.color, to: "#F7F0D8", angle: 90 } })}>Gradient</button>
      </div>
      {f.kind === "solid" ? (
        <label className="flex items-center gap-2">Fill <input type="color" value={f.color} onChange={(e) => onChange({ fill: { kind: "solid", color: e.target.value } })} /></label>
      ) : (
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2">From <input type="color" value={f.from} onChange={(e) => onChange({ fill: { ...f, from: e.target.value } })} /></label>
          <label className="flex items-center gap-2">To <input type="color" value={f.to} onChange={(e) => onChange({ fill: { ...f, to: e.target.value } })} /></label>
          <label className="flex w-full items-center gap-2">Angle <input type="range" min={0} max={360} value={f.angle} onChange={(e) => onChange({ fill: { ...f, angle: Number(e.target.value) } })} className="flex-1 accent-[#C9A227]" /></label>
        </div>
      )}
      {layer.type === "rect" ? (
        <label className="flex items-center gap-2">Corner radius <input type="range" min={0} max={300} value={layer.radius} onChange={(e) => onChange({ radius: Number(e.target.value) })} className="flex-1 accent-[#C9A227]" /></label>
      ) : null}
    </div>
  );
}
