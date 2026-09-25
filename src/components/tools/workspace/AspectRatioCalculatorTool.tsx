"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { calculateAspectRatio, type AspectMode } from "@/lib/tools/aspect-ratio";
import { formatNumber } from "@/lib/tools/numbers";

export function AspectRatioCalculatorTool() {
  const [mode, setMode] = useState<AspectMode>("simplify");
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [ratioWidth, setRatioWidth] = useState("16");
  const [ratioHeight, setRatioHeight] = useState("9");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAspectRatio>>();

  function calculate() {
    const next = calculateAspectRatio({ mode, widthRaw: width, heightRaw: height, ratioWidthRaw: ratioWidth, ratioHeightRaw: ratioHeight });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok ? `${result.ratioWidth}:${result.ratioHeight}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This calculates a ratio or a missing side. It does not resize or change an image file.
      </p>
      <div className="mt-4">
        <ToolChoiceGroup legend="Calculation" name="aspect-mode" value={mode} onChange={setMode} options={[{ id: "simplify", label: "Simplify a size" }, { id: "from-width", label: "Find height" }, { id: "from-height", label: "Find width" }]} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {mode !== "simplify" ? (
          <>
            <ToolField id="ratio-w" label="Ratio width">
              <input id="ratio-w" inputMode="decimal" value={ratioWidth} onChange={(event) => setRatioWidth(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="ratio-h" label="Ratio height">
              <input id="ratio-h" inputMode="decimal" value={ratioHeight} onChange={(event) => setRatioHeight(event.target.value)} className={toolControlClass} />
            </ToolField>
          </>
        ) : null}
        {mode !== "from-height" ? (
          <ToolField id="aspect-width" label="Width">
            <input id="aspect-width" inputMode="decimal" value={width} onChange={(event) => setWidth(event.target.value)} className={toolControlClass} />
          </ToolField>
        ) : null}
        {mode !== "from-width" ? (
          <ToolField id="aspect-height" label="Height">
            <input id="aspect-height" inputMode="decimal" value={height} onChange={(event) => setHeight(event.target.value)} className={toolControlClass} />
          </ToolField>
        ) : null}
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Calculate</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setMode("simplify"); setWidth("1920"); setHeight("1080"); setRatioWidth("16"); setRatioHeight("9"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[
            { label: "Aspect ratio", value: `${result.ratioWidth}:${result.ratioHeight}` },
            { label: "Width", value: result.width === null ? "—" : formatNumber(result.width, 2) },
            { label: "Height", value: result.height === null ? "—" : formatNumber(result.height, 2) },
          ]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
