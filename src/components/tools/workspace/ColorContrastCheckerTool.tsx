"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { ColorInput } from "@/components/tools/ColorInput";
import { CopyButton } from "@/components/tools/CopyButton";
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
import { evaluateContrast, type ContrastResult, type WcagLevel } from "@/lib/tools/contrast";
import {
  contrastDefaults,
  parseContrastParams,
  serializeContrastParams,
} from "@/lib/tools/url-state";

export function ColorContrastCheckerTool() {
  const search = useSyncExternalStore(
    subscribeShareUrl,
    getShareUrlSnapshot,
    getEmptyShareUrlSnapshot,
  );
  const defaults = contrastDefaults();
  const parsed = parseContrastParams(new URLSearchParams(search));
  const foreground = parsed.foreground ?? defaults.foreground;
  const background = parsed.background ?? defaults.background;
  const result = evaluateContrast(foreground, background);

  function setForeground(next: string) {
    writeShareUrl(serializeContrastParams({ foreground: next, background }));
  }

  function setBackground(next: string) {
    writeShareUrl(serializeContrastParams({ foreground, background: next }));
  }

  function reset() {
    writeShareUrl(new URLSearchParams());
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ColorInput
          id="contrast-fg"
          label="Foreground"
          value={foreground}
          onChange={setForeground}
        />
        <ColorInput
          id="contrast-bg"
          label="Background"
          value={background}
          onChange={setBackground}
        />
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              writeShareUrl(
                serializeContrastParams({
                  foreground: background,
                  background: foreground,
                }),
              );
            }}
          >
            Swap colors
          </Button>
          <Button type="button" variant="ghost" onClick={reset}>
            Reset
          </Button>
          <ShareLinkButton />
        </ToolActions>
      </div>

      <div className="mt-6">
        {result.ok ? (
          <ContrastPreview result={result.result} />
        ) : (
          <ToolError>{result.error}</ToolError>
        )}
      </div>

      <div className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
        <p>
          WCAG 2.1 contrast uses relative luminance. Normal text needs 4.5:1 for
          AA and 7:1 for AAA. Large text (18pt or 14pt bold) needs 3:1 for AA
          and 4.5:1 for AAA.
        </p>
        <p>
          A pass means the pair meets the selected WCAG contrast criterion.
          Contrast is only one part of accessibility. Spacing, size, motion and
          keyboard use still matter.
        </p>
      </div>
    </ToolPanel>
  );
}

function ContrastPreview({ result }: { result: ContrastResult }) {
  return (
    <div className="space-y-4">
      <div
        className="rounded-2xl border border-border p-6"
        style={{ backgroundColor: result.background.hex, color: result.foreground.hex }}
      >
        <p className="text-sm">Normal sample text</p>
        <p className="mt-2 text-2xl font-semibold">Large sample text</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-2xl font-semibold tabular-nums text-foreground">
          {result.ratioLabel}
        </p>
        <CopyButton value={result.ratioLabel} label="Copy ratio" />
        <CopyButton value={result.foreground.hex} label="Copy foreground" />
        <CopyButton value={result.background.hex} label="Copy background" />
      </div>
      <p className="text-sm text-muted-foreground">
        Foreground {result.foreground.hex} ({result.foreground.rgbCss}, {result.foreground.hslCss})
        on {result.background.hex} ({result.background.rgbCss}).
      </p>
      <ul className="space-y-2">
        <Criterion label="Normal text AA (4.5:1)" level={result.normalAa} />
        <Criterion label="Normal text AAA (7:1)" level={result.normalAaa} />
        <Criterion label="Large text AA (3:1)" level={result.largeAa} />
        <Criterion label="Large text AAA (4.5:1)" level={result.largeAaa} />
      </ul>
    </div>
  );
}

function Criterion({ label, level }: { label: string; level: WcagLevel }) {
  const passed = level === "pass";
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border px-4 py-3">
      <span className="text-sm text-foreground">{label}</span>
      <span
        className={
          passed
            ? "rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
            : "rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-900 dark:bg-red-950 dark:text-red-200"
        }
      >
        {passed ? "Pass — meets the selected WCAG contrast criterion." : "Fail — below this WCAG contrast criterion."}
      </span>
    </li>
  );
}
