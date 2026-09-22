"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { ColorInput } from "@/components/tools/ColorInput";
import { CssCodeOutput } from "@/components/tools/CssCodeOutput";
import { RangeField } from "@/components/tools/RangeField";
import { ShareLinkButton } from "@/components/tools/ShareLinkButton";
import {
  getEmptyShareUrlSnapshot,
  getShareUrlSnapshot,
  subscribeShareUrl,
  writeShareUrl,
} from "@/components/tools/useShareableSearchParams";
import {
  ToolActions,
  ToolError,
  ToolPanel,
} from "@/components/tools/ToolForm";
import {
  buildBoxShadowCss,
  type BoxShadowOptions,
} from "@/lib/tools/box-shadow";
import {
  boxShadowFromParams,
  serializeBoxShadowParams,
} from "@/lib/tools/url-state";

export function BoxShadowGeneratorTool() {
  const search = useSyncExternalStore(
    subscribeShareUrl,
    getShareUrlSnapshot,
    getEmptyShareUrlSnapshot,
  );
  const options = boxShadowFromParams(new URLSearchParams(search));
  const [previewBg, setPreviewBg] = useState("#f4f7fb");
  const [boxColor, setBoxColor] = useState("#ffffff");
  const built = buildBoxShadowCss(options);

  function patch(next: Partial<BoxShadowOptions>) {
    writeShareUrl(serializeBoxShadowParams({ ...options, ...next }));
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <RangeField
          id="shadow-x"
          label="Horizontal offset"
          min={-50}
          max={50}
          value={options.offsetX}
          suffix="px"
          onChange={(offsetX) => patch({ offsetX })}
        />
        <RangeField
          id="shadow-y"
          label="Vertical offset"
          min={-50}
          max={50}
          value={options.offsetY}
          suffix="px"
          onChange={(offsetY) => patch({ offsetY })}
        />
        <RangeField
          id="shadow-blur"
          label="Blur"
          min={0}
          max={80}
          value={options.blur}
          suffix="px"
          onChange={(blur) => patch({ blur })}
        />
        <RangeField
          id="shadow-spread"
          label="Spread"
          min={-40}
          max={40}
          value={options.spread}
          suffix="px"
          onChange={(spread) => patch({ spread })}
        />
        <RangeField
          id="shadow-opacity"
          label="Opacity"
          min={0}
          max={1}
          step={0.01}
          value={options.opacity}
          onChange={(opacity) => patch({ opacity })}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ColorInput
          id="shadow-color"
          label="Shadow color"
          value={options.color}
          onChange={(color) => patch({ color })}
        />
        <ColorInput
          id="shadow-preview-bg"
          label="Preview background"
          value={previewBg}
          onChange={setPreviewBg}
        />
        <ColorInput
          id="shadow-box-color"
          label="Preview box"
          value={boxColor}
          onChange={setBoxColor}
        />
      </div>

      <label className="mt-4 flex min-h-11 items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={options.inset}
          onChange={(event) => patch({ inset: event.target.checked })}
        />
        Inset shadow
      </label>

      <div className="mt-6 space-y-2 text-sm leading-6 text-muted-foreground">
        <p>Offset moves the shadow. Blur softens the edge. Spread grows or shrinks the shadow before blur.</p>
        <p>Opacity controls how strong the color appears. Inset draws the shadow inside the box.</p>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              writeShareUrl(new URLSearchParams());
              setPreviewBg("#f4f7fb");
              setBoxColor("#ffffff");
            }}
          >
            Reset
          </Button>
          <ShareLinkButton />
        </ToolActions>
      </div>

      <div className="mt-6 space-y-4">
        {built.ok ? (
          <>
            <div
              className="flex min-h-48 items-center justify-center rounded-2xl border border-border p-8"
              style={{ backgroundColor: previewBg }}
            >
              <div
                className="size-28 rounded-2xl"
                style={{ backgroundColor: boxColor, boxShadow: built.value }}
                role="img"
                aria-label="Box shadow preview"
              />
            </div>
            <CssCodeOutput css={built.css} />
          </>
        ) : (
          <ToolError>{built.error}</ToolError>
        )}
      </div>
    </ToolPanel>
  );
}
