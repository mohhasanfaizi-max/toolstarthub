"use client";

import { useSyncExternalStore } from "react";
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
  ToolChoiceGroup,
  ToolError,
  ToolPanel,
} from "@/components/tools/ToolForm";
import {
  buildGradientCss,
  createStop,
  defaultGradient,
  type GradientOptions,
  type GradientStop,
  type GradientType,
} from "@/lib/tools/gradient";
import { moveItem, removeAt } from "@/lib/tools/list";
import {
  gradientFromParams,
  serializeGradientParams,
} from "@/lib/tools/url-state";

const PRESETS: Array<{ label: string; options: GradientOptions }> = [
  { label: "Blue to white", options: defaultGradient() },
  {
    label: "Sunset",
    options: {
      type: "linear",
      angle: 135,
      stops: [createStop("#ff7e5f", 0, "s1"), createStop("#feb47b", 100, "s2")],
    },
  },
  {
    label: "Radial dusk",
    options: {
      type: "radial",
      angle: 0,
      stops: [createStop("#1e3a5f", 0, "r1"), createStop("#0b1220", 100, "r2")],
    },
  },
];

export function CssGradientGeneratorTool() {
  const search = useSyncExternalStore(
    subscribeShareUrl,
    getShareUrlSnapshot,
    getEmptyShareUrlSnapshot,
  );
  const options = gradientFromParams(new URLSearchParams(search));
  const built = buildGradientCss(options);

  function setOptions(
    next: GradientOptions | ((current: GradientOptions) => GradientOptions),
  ) {
    const resolved = typeof next === "function" ? next(options) : next;
    writeShareUrl(serializeGradientParams(resolved));
  }

  function updateStop(index: number, patch: Partial<GradientStop>) {
    setOptions((current) => ({
      ...current,
      stops: current.stops.map((stop, currentIndex) =>
        currentIndex === index ? { ...stop, ...patch } : stop,
      ),
    }));
  }

  return (
    <ToolPanel>
      <ToolChoiceGroup
        legend="Gradient type"
        name="gradient-type"
        value={options.type}
        onChange={(type: GradientType) => setOptions((current) => ({ ...current, type }))}
        options={[
          { id: "linear", label: "Linear" },
          { id: "radial", label: "Radial" },
        ]}
      />

      {options.type === "linear" ? (
        <div className="mt-4">
          <RangeField
            id="gradient-angle"
            label="Angle"
            min={0}
            max={360}
            value={options.angle}
            suffix="deg"
            onChange={(angle) => setOptions((current) => ({ ...current, angle }))}
          />
        </div>
      ) : null}

      <div className="mt-6 space-y-4">
        {options.stops.map((stop, index) => (
          <div key={stop.id} className="rounded-2xl border border-border p-4">
            <ColorInput
              id={`stop-color-${stop.id}`}
              label={`Stop ${index + 1} color`}
              value={stop.color}
              onChange={(color) => updateStop(index, { color })}
            />
            <RangeField
              id={`stop-position-${stop.id}`}
              label="Position"
              min={0}
              max={100}
              value={stop.position}
              suffix="%"
              onChange={(position) => updateStop(index, { position })}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() =>
                  setOptions((current) => ({
                    ...current,
                    stops: moveItem(current.stops, index, index - 1),
                  }))
                }
                disabled={index === 0}
              >
                Up
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() =>
                  setOptions((current) => ({
                    ...current,
                    stops: moveItem(current.stops, index, index + 1),
                  }))
                }
                disabled={index === options.stops.length - 1}
              >
                Down
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() =>
                  setOptions((current) => ({
                    ...current,
                    stops: removeAt(current.stops, index),
                  }))
                }
                disabled={options.stops.length <= 2}
              >
                Remove stop
              </Button>
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          onClick={() =>
            setOptions((current) => ({
              ...current,
              stops: [
                ...current.stops,
                createStop("#94a3b8", 50, crypto.randomUUID()),
              ],
            }))
          }
        >
          Add color stop
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <Button
            key={preset.label}
            type="button"
            variant="secondary"
            size="sm"
            onClick={() =>
              setOptions({
                ...preset.options,
                stops: preset.options.stops.map((stop) => ({ ...stop })),
              })
            }
          >
            {preset.label}
          </Button>
        ))}
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" variant="ghost" onClick={() => writeShareUrl(new URLSearchParams())}>
            Reset
          </Button>
          <ShareLinkButton />
        </ToolActions>
      </div>

      <div className="mt-6 space-y-4">
        {built.ok ? (
          <>
            <div
              className="h-40 rounded-2xl border border-border"
              style={{
                backgroundImage:
                  options.type === "radial"
                    ? `radial-gradient(circle, ${built.preview})`
                    : `linear-gradient(${options.angle}deg, ${built.preview})`,
              }}
              role="img"
              aria-label="Gradient preview"
            />
            <CssCodeOutput css={built.css} />
          </>
        ) : (
          <ToolError>{built.error}</ToolError>
        )}
      </div>
    </ToolPanel>
  );
}
