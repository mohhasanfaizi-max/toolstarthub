"use client";

import { useState, useSyncExternalStore, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { CodeOutputWithCopy } from "@/components/tools/CodeOutputWithCopy";
import { ColorInput } from "@/components/tools/ColorInput";
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
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import {
  buildGradientCss,
  buildGradientHtml,
  buildGradientTextCss,
  createStop,
  defaultGradient,
  defaultTextStyle,
  FONT_FAMILIES,
  FONT_SIZE_MAX,
  FONT_SIZE_MIN,
  FONT_WEIGHTS,
  GRADIENT_TEXT_MAX_LENGTH,
  normalizeTextStyle,
  type FontFamilyKey,
  type GradientMode,
  type GradientOptions,
  type GradientStop,
  type GradientType,
  type HtmlFormat,
  type RadialShape,
  type TextAlign,
} from "@/lib/tools/gradient";
import { moveItem, removeAt } from "@/lib/tools/list";
import {
  gradientDesignFromParams,
  gradientFromParams,
  serializeGradientParams,
  type GradientDesignState,
} from "@/lib/tools/url-state";

type Preset = { label: string; options: GradientOptions };

function linear(angle: number, ...colors: Array<[string, number]>): GradientOptions {
  return {
    type: "linear",
    angle,
    stops: colors.map(([color, position], index) => createStop(color, position, `p${index}`)),
  };
}

const PRESETS: Preset[] = [
  { label: "Blue to white", options: defaultGradient() },
  { label: "Sunset", options: linear(135, ["#ff7e5f", 0], ["#feb47b", 100]) },
  { label: "Aurora", options: linear(120, ["#00c9ff", 0], ["#92fe9d", 100]) },
  { label: "Lavender", options: linear(135, ["#a18cd1", 0], ["#fbc2eb", 100]) },
  { label: "Royal", options: linear(135, ["#4776e6", 0], ["#8e54e9", 100]) },
  { label: "Fire", options: linear(45, ["#f12711", 0], ["#f5af19", 100]) },
  { label: "Mint", options: linear(135, ["#d4fc79", 0], ["#96e6a1", 100]) },
  { label: "Midnight", options: linear(180, ["#0f2027", 0], ["#203a43", 50], ["#2c5364", 100]) },
  {
    label: "Radial dusk",
    options: {
      ...linear(0, ["#1e3a5f", 0], ["#0b1220", 100]),
      type: "radial",
      shape: "circle",
    },
  },
  {
    label: "Spotlight",
    options: {
      ...linear(0, ["#ffffff", 0], ["#dbeafe", 35], ["#1e3a8a", 100]),
      type: "radial",
      shape: "ellipse",
      positionX: 50,
      positionY: 0,
    },
  },
  {
    label: "Color wheel",
    options: {
      ...linear(0, ["#ff6b6b", 0], ["#feca57", 25], ["#48dbfb", 50], ["#ff9ff3", 75], ["#ff6b6b", 100]),
      type: "conic",
    },
  },
  {
    label: "Pie chart",
    options: {
      ...linear(
        0,
        ["#2563eb", 0],
        ["#2563eb", 40],
        ["#f59e0b", 40],
        ["#f59e0b", 70],
        ["#10b981", 70],
        ["#10b981", 100],
      ),
      type: "conic",
    },
  },
];

const WEIGHT_LABELS: Record<number, string> = {
  400: "400 Regular",
  500: "500 Medium",
  600: "600 Semibold",
  700: "700 Bold",
  800: "800 Extra bold",
  900: "900 Black",
};

function presetSwatch(options: GradientOptions): string | undefined {
  const built = buildGradientCss(options);
  return built.ok ? built.gradient : undefined;
}

export function CssGradientGeneratorTool() {
  const search = useSyncExternalStore(
    subscribeShareUrl,
    getShareUrlSnapshot,
    getEmptyShareUrlSnapshot,
  );
  const params = new URLSearchParams(search);
  const options = gradientFromParams(params);
  const design = gradientDesignFromParams(params);
  const [text, setText] = useState(defaultTextStyle().text);
  const textStyle = normalizeTextStyle({ ...design.textStyle, text });
  const built = buildGradientCss(options);

  function write(nextOptions: GradientOptions, nextDesign: GradientDesignState) {
    writeShareUrl(serializeGradientParams(nextOptions, nextDesign));
  }

  function setOptions(update: (current: GradientOptions) => GradientOptions) {
    write(update(options), design);
  }

  function setDesign(update: (current: GradientDesignState) => GradientDesignState) {
    write(options, update(design));
  }

  function setTextStyle(patch: Partial<GradientDesignState["textStyle"]>) {
    setDesign((current) => ({ ...current, textStyle: { ...current.textStyle, ...patch } }));
  }

  function updateStop(index: number, patch: Partial<GradientStop>) {
    setOptions((current) => ({
      ...current,
      stops: current.stops.map((stop, currentIndex) =>
        currentIndex === index ? { ...stop, ...patch } : stop,
      ),
    }));
  }

  function reset() {
    setText(defaultTextStyle().text);
    writeShareUrl(new URLSearchParams());
  }

  const css = built.ok
    ? design.mode === "text"
      ? buildGradientTextCss(built, textStyle)
      : built.css
    : "";
  const html = built.ok ? buildGradientHtml(built, design.mode, design.htmlFormat, textStyle) : "";

  const textPreviewStyle: CSSProperties | undefined = built.ok
    ? {
        color: built.fallbackColor,
        backgroundImage: built.gradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: FONT_FAMILIES[textStyle.fontFamily].css,
        fontSize: `min(${textStyle.fontSize}px, 14vw)`,
        fontWeight: textStyle.fontWeight,
        lineHeight: 1.1,
        textAlign: textStyle.align,
        overflowWrap: "anywhere",
      }
    : undefined;

  return (
    <ToolPanel>
      {/* Mobile order: preview, controls, code. Desktop: controls left, preview and code right. */}
      <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-10">
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          {built.ok ? (
            <div>
              <p className="text-sm font-medium text-foreground">Preview</p>
              {design.mode === "text" ? (
                <div className="mt-2 flex min-h-40 items-center rounded-2xl border border-border bg-background p-5 sm:min-h-48 sm:p-6">
                  <p className="w-full" style={textPreviewStyle}>
                    {textStyle.text}
                  </p>
                </div>
              ) : (
                <div
                  className="mt-2 h-40 rounded-2xl border border-border sm:h-56"
                  style={{ backgroundColor: built.fallbackColor, backgroundImage: built.gradient }}
                  role="img"
                  aria-label={`Gradient preview: ${built.gradient}`}
                />
              )}
            </div>
          ) : (
            <ToolError>{built.error}</ToolError>
          )}
        </div>

        <div className="min-w-0 space-y-6 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <ToolChoiceGroup
            legend="Apply gradient to"
            name="gradient-mode"
            value={design.mode}
            onChange={(mode: GradientMode) => setDesign((current) => ({ ...current, mode }))}
            columns="grid grid-cols-2 gap-2"
            options={[
              { id: "box", label: "Background" },
              { id: "text", label: "Text" },
            ]}
          />

          <ToolChoiceGroup
            legend="Gradient type"
            name="gradient-type"
            value={options.type}
            onChange={(type: GradientType) => setOptions((current) => ({ ...current, type }))}
            columns="grid grid-cols-3 gap-2"
            options={[
              { id: "linear", label: "Linear" },
              { id: "radial", label: "Radial" },
              { id: "conic", label: "Conic" },
            ]}
          />

          {options.type === "radial" ? (
            <div className="space-y-2">
              <ToolChoiceGroup
                legend="Shape"
                name="gradient-shape"
                value={options.shape ?? "circle"}
                onChange={(shape: RadialShape) => setOptions((current) => ({ ...current, shape }))}
                columns="grid grid-cols-2 gap-2"
                options={[
                  { id: "circle", label: "Circle" },
                  { id: "ellipse", label: "Ellipse" },
                ]}
              />
              <p className="text-sm text-muted-foreground">
                Radial gradients have no angle in CSS. Set the shape and center instead.
              </p>
            </div>
          ) : (
            <RangeField
              id="gradient-angle"
              label={options.type === "conic" ? "Start angle" : "Angle"}
              min={0}
              max={359}
              value={options.angle}
              suffix="deg"
              onChange={(angle) => setOptions((current) => ({ ...current, angle }))}
            />
          )}

          {options.type !== "linear" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <RangeField
                id="gradient-center-x"
                label="Center X"
                min={0}
                max={100}
                value={options.positionX ?? 50}
                suffix="%"
                onChange={(positionX) => setOptions((current) => ({ ...current, positionX }))}
              />
              <RangeField
                id="gradient-center-y"
                label="Center Y"
                min={0}
                max={100}
                value={options.positionY ?? 50}
                suffix="%"
                onChange={(positionY) => setOptions((current) => ({ ...current, positionY }))}
              />
            </div>
          ) : null}

          {design.mode === "text" ? (
            <fieldset className="space-y-4 rounded-2xl border border-border p-4">
              <legend className="px-1 text-sm font-medium text-foreground">Text settings</legend>
              <ToolField
                id="gradient-text"
                label="Text"
                hint={`Up to ${GRADIENT_TEXT_MAX_LENGTH} characters. The text stays on this page and is not added to share links.`}
              >
                <input
                  id="gradient-text"
                  value={text}
                  maxLength={GRADIENT_TEXT_MAX_LENGTH}
                  onChange={(event) => setText(event.target.value)}
                  className={toolControlClass}
                  autoComplete="off"
                />
              </ToolField>
              <RangeField
                id="gradient-font-size"
                label="Font size"
                min={FONT_SIZE_MIN}
                max={FONT_SIZE_MAX}
                step={2}
                value={design.textStyle.fontSize}
                suffix="px"
                onChange={(fontSize) => setTextStyle({ fontSize })}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <ToolField id="gradient-font-weight" label="Font weight">
                  <select
                    id="gradient-font-weight"
                    value={design.textStyle.fontWeight}
                    onChange={(event) => setTextStyle({ fontWeight: Number(event.target.value) })}
                    className={toolControlClass}
                  >
                    {FONT_WEIGHTS.map((weight) => (
                      <option key={weight} value={weight}>
                        {WEIGHT_LABELS[weight]}
                      </option>
                    ))}
                  </select>
                </ToolField>
                <ToolField id="gradient-font-family" label="Font family">
                  <select
                    id="gradient-font-family"
                    value={design.textStyle.fontFamily}
                    onChange={(event) =>
                      setTextStyle({ fontFamily: event.target.value as FontFamilyKey })
                    }
                    className={toolControlClass}
                  >
                    {(Object.keys(FONT_FAMILIES) as FontFamilyKey[]).map((key) => (
                      <option key={key} value={key}>
                        {FONT_FAMILIES[key].label}
                      </option>
                    ))}
                  </select>
                </ToolField>
              </div>
              <ToolChoiceGroup
                legend="Alignment"
                name="gradient-align"
                value={design.textStyle.align}
                onChange={(align: TextAlign) => setTextStyle({ align })}
                columns="grid grid-cols-3 gap-2"
                options={[
                  { id: "left", label: "Left" },
                  { id: "center", label: "Center" },
                  { id: "right", label: "Right" },
                ]}
              />
            </fieldset>
          ) : null}

          <fieldset className="space-y-4">
            <legend className="text-sm font-medium text-foreground">Color stops</legend>
            {options.stops.map((stop, index) => (
              <div key={stop.id} className="rounded-2xl border border-border p-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ColorInput
                    id={`stop-color-${stop.id}`}
                    label={`Stop ${index + 1} color`}
                    value={stop.color}
                    onChange={(color) => updateStop(index, { color })}
                  />
                  <RangeField
                    id={`stop-position-${stop.id}`}
                    label={`Stop ${index + 1} position`}
                    min={0}
                    max={100}
                    value={stop.position}
                    suffix="%"
                    onChange={(position) => updateStop(index, { position })}
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    aria-label={`Move stop ${index + 1} up`}
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
                    aria-label={`Move stop ${index + 1} down`}
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
                    aria-label={`Remove stop ${index + 1}`}
                    onClick={() =>
                      setOptions((current) => ({
                        ...current,
                        stops: removeAt(current.stops, index),
                      }))
                    }
                    disabled={options.stops.length <= 2}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="secondary"
              disabled={options.stops.length >= 8}
              onClick={() =>
                setOptions((current) => ({
                  ...current,
                  stops: [...current.stops, createStop("#94a3b8", 50, crypto.randomUUID())],
                }))
              }
            >
              Add color stop
            </Button>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-foreground">Presets</legend>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() =>
                    setOptions(() => ({
                      ...preset.options,
                      stops: preset.options.stops.map((stop) => ({ ...stop })),
                    }))
                  }
                  className="flex min-h-11 items-center gap-2 rounded-xl border border-border bg-card px-2.5 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span
                    aria-hidden="true"
                    className="size-7 shrink-0 rounded-lg border border-border"
                    style={{ backgroundImage: presetSwatch(preset.options) }}
                  />
                  <span className="min-w-0">{preset.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <ToolActions>
            <Button type="button" variant="ghost" onClick={reset}>
              Reset
            </Button>
            <ShareLinkButton />
          </ToolActions>
        </div>

        <div className="min-w-0 space-y-6 lg:col-start-2 lg:row-start-2">
          {built.ok ? (
            <>
              <CodeOutputWithCopy
                id="gradient-css-output"
                label={design.mode === "text" ? "CSS for gradient text" : "CSS"}
                value={css}
                copyLabel="Copy CSS"
                what="CSS"
              />

              <CodeOutputWithCopy
                id="gradient-html-output"
                label="HTML snippet"
                value={html}
                copyLabel="Copy HTML"
                what="HTML"
              >
                <div className="mt-2">
                  <ToolChoiceGroup
                    legend="HTML style"
                    name="gradient-html-format"
                    value={design.htmlFormat}
                    onChange={(htmlFormat: HtmlFormat) =>
                      setDesign((current) => ({ ...current, htmlFormat }))
                    }
                    columns="grid grid-cols-2 gap-2"
                    options={[
                      { id: "class", label: "CSS class" },
                      { id: "inline", label: "Inline style" },
                    ]}
                  />
                </div>
              </CodeOutputWithCopy>
            </>
          ) : null}
        </div>
      </div>
    </ToolPanel>
  );
}
