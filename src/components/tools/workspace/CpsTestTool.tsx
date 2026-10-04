"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { ToolPanel } from "@/components/tools/ToolForm";
import { useI18n } from "@/i18n/client";
import { formatMessage, localeInfo } from "@/i18n/config";
import { cpsUi } from "@/i18n/cps-test/ui";
import { cn } from "@/lib/cn";
import {
  CPS_BEST_KEY,
  CPS_COOLDOWN_MS,
  CPS_DEFAULT_DURATION,
  CPS_DURATIONS,
  CPS_MODES,
  CPS_TIERS,
  bestKey,
  calculateCps,
  getCpsTier,
  getCpsTierMax,
  keyCounts,
  liveCps,
  pointerCounts,
  recordBestScore,
  sanitizeBestScores,
  type CpsBestScores,
  type CpsDuration,
  type CpsMode,
  type CpsTier,
} from "@/lib/tools/cps-test";
import { getLocalStorage } from "@/lib/storage/safe-storage";

type Phase = "idle" | "running" | "done";

type RunResult = {
  clicks: number;
  cps: number;
  tier: CpsTier;
  duration: CpsDuration;
  mode: CpsMode;
  isNewBest: boolean;
};

export const CPS_GUIDE_PATH = "/guides/how-to-click-faster";

const BEST_EVENT = "tsh-cps-best-changed";
/** Session fallback when local storage is blocked (private mode, policies). */
let memoryBest = "";

function readBestRaw(): string {
  const storage = getLocalStorage();
  if (!storage) return memoryBest;
  try {
    return storage.getItem(CPS_BEST_KEY) ?? "";
  } catch {
    return memoryBest;
  }
}

function parseBest(raw: string): CpsBestScores {
  if (!raw) return {};
  try {
    return sanitizeBestScores(JSON.parse(raw));
  } catch {
    return {};
  }
}

function writeBest(scores: CpsBestScores | null) {
  const raw = scores && Object.keys(scores).length > 0 ? JSON.stringify(scores) : "";
  memoryBest = raw;
  const storage = getLocalStorage();
  try {
    if (raw) storage?.setItem(CPS_BEST_KEY, raw);
    else storage?.removeItem(CPS_BEST_KEY);
  } catch {
    // Quota or policy errors: the in-memory copy still works for this visit.
  }
  window.dispatchEvent(new Event(BEST_EVENT));
}

function subscribeBest(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === CPS_BEST_KEY) callback();
  };
  window.addEventListener(BEST_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(BEST_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

function emptyBest() {
  return "";
}

export function CpsTestTool() {
  const { locale } = useI18n();
  const ui = cpsUi[locale] ?? cpsUi.en;
  const info = localeInfo[locale];

  const [duration, setDuration] = useState<CpsDuration>(CPS_DEFAULT_DURATION);
  const [mode, setMode] = useState<CpsMode>("left");
  const [phase, setPhase] = useState<Phase>("idle");
  const [clicks, setClicks] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [result, setResult] = useState<RunResult | null>(null);
  const [coolingDown, setCoolingDown] = useState(false);
  const bestRaw = useSyncExternalStore(subscribeBest, readBestRaw, emptyBest);
  const best = useMemo(() => parseBest(bestRaw), [bestRaw]);
  const [announcement, setAnnouncement] = useState("");
  const [pressed, setPressed] = useState(false);

  const phaseRef = useRef<Phase>("idle");
  const clicksRef = useRef(0);
  const startRef = useRef(0);
  const cooldownUntilRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const endTimerRef = useRef<number | null>(null);
  const cooldownTimerRef = useRef<number | null>(null);
  const pressTimerRef = useRef<number | null>(null);
  const settingsRef = useRef({ duration, mode });
  const padRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    settingsRef.current = { duration, mode };
  }, [duration, mode]);

  const decimal = useMemo(
    () =>
      new Intl.NumberFormat(`${info.tag}-u-nu-latn`, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [info.tag],
  );
  const oneDecimal = useMemo(
    () =>
      new Intl.NumberFormat(`${info.tag}-u-nu-latn`, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }),
    [info.tag],
  );
  const integer = useMemo(
    () => new Intl.NumberFormat(`${info.tag}-u-nu-latn`),
    [info.tag],
  );
  const secondsLabel = useCallback(
    (value: number) => formatMessage(ui.seconds, { n: integer.format(value) }),
    [ui.seconds, integer],
  );

  const clearTimers = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    if (endTimerRef.current !== null) window.clearTimeout(endTimerRef.current);
    if (cooldownTimerRef.current !== null) window.clearTimeout(cooldownTimerRef.current);
    frameRef.current = null;
    endTimerRef.current = null;
    cooldownTimerRef.current = null;
  }, []);

  useEffect(
    () => () => {
      clearTimers();
      if (pressTimerRef.current !== null) window.clearTimeout(pressTimerRef.current);
    },
    [clearTimers],
  );

  const finish = useCallback(() => {
    if (phaseRef.current !== "running") return;
    const { duration: length, mode: input } = settingsRef.current;
    clearTimers();
    phaseRef.current = "done";
    const total = clicksRef.current;
    const cps = calculateCps(total, length);
    const tier = getCpsTier(cps);
    const recorded = recordBestScore(parseBest(readBestRaw()), input, length, total);
    if (recorded.isNewBest) {
      writeBest(recorded.scores);
    }
    cooldownUntilRef.current = performance.now() + CPS_COOLDOWN_MS;
    setCoolingDown(true);
    cooldownTimerRef.current = window.setTimeout(() => setCoolingDown(false), CPS_COOLDOWN_MS);
    setPhase("done");
    setElapsedMs(length * 1000);
    setClicks(total);
    setResult({ clicks: total, cps, tier, duration: length, mode: input, isNewBest: recorded.isNewBest });
    const rating = ui.tiers[tier.id];
    setAnnouncement(
      `${formatMessage(ui.finished, {
        clicks: integer.format(total),
        cps: decimal.format(cps),
        rating,
      })}${recorded.isNewBest ? ` ${ui.newBest}` : ""}`,
    );
  }, [clearTimers, decimal, integer, ui]);

  const start = useCallback(
    (now: number) => {
      clearTimers();
      phaseRef.current = "running";
      clicksRef.current = 1;
      startRef.current = now;
      setPhase("running");
      setClicks(1);
      setElapsedMs(0);
      setResult(null);
      setCoolingDown(false);
      setAnnouncement(ui.started);
      const limit = settingsRef.current.duration * 1000;
      endTimerRef.current = window.setTimeout(finish, limit);
      const loop = () => {
        if (phaseRef.current !== "running") return;
        const elapsed = performance.now() - startRef.current;
        if (elapsed >= limit) {
          finish();
          return;
        }
        setElapsedMs(elapsed);
        frameRef.current = requestAnimationFrame(loop);
      };
      frameRef.current = requestAnimationFrame(loop);
    },
    [clearTimers, finish, ui.started],
  );

  const hit = useCallback(() => {
    const now = performance.now();
    if (phaseRef.current === "running") {
      if (now - startRef.current >= settingsRef.current.duration * 1000) {
        finish();
        return;
      }
      clicksRef.current += 1;
      setClicks(clicksRef.current);
    } else if (phaseRef.current === "idle" || now >= cooldownUntilRef.current) {
      start(now);
    } else {
      return;
    }
    setPressed(true);
    if (pressTimerRef.current !== null) window.clearTimeout(pressTimerRef.current);
    pressTimerRef.current = window.setTimeout(() => setPressed(false), 70);
  }, [finish, start]);

  const reset = useCallback(() => {
    clearTimers();
    phaseRef.current = "idle";
    clicksRef.current = 0;
    cooldownUntilRef.current = 0;
    setPhase("idle");
    setClicks(0);
    setElapsedMs(0);
    setResult(null);
    setCoolingDown(false);
    setAnnouncement("");
  }, [clearTimers]);

  function chooseDuration(value: CpsDuration) {
    setDuration(value);
    reset();
  }

  function chooseMode(value: CpsMode) {
    setMode(value);
    reset();
    if (value === "space") {
      window.requestAnimationFrame(() => padRef.current?.focus());
    }
  }

  function clearBest() {
    writeBest(null);
    setAnnouncement(ui.cleared);
  }

  function onPointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    if (mode === "space") return;
    if (!pointerCounts(mode, event.button)) return;
    // Stops text selection and focus jumps; touch taps still scroll via CSS.
    event.preventDefault();
    hit();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const isSpace = event.key === " " || event.key === "Spacebar";
    if (keyCounts(mode, event.key, event.repeat)) {
      event.preventDefault();
      hit();
      return;
    }
    if (isSpace || event.key === "Enter") {
      // In click modes the keyboard never counts (anti-cheat); in space mode
      // a held key is ignored.
      event.preventDefault();
    }
  }

  const limitMs = duration * 1000;
  const remainingMs = phase === "running" ? Math.max(0, limitMs - elapsedMs) : phase === "done" ? 0 : limitMs;
  const shownCps =
    phase === "done" && result ? result.cps : phase === "running" ? liveCps(clicks, elapsedMs) : 0;
  const currentBest = best[bestKey(mode, duration)];
  const progress = phase === "idle" ? 0 : Math.min(100, (elapsedMs / limitMs) * 100);

  const padText =
    phase === "running"
      ? ui.padRunning[mode]
      : phase === "done"
        ? coolingDown
          ? ui.padDone
          : ui.padAgain[mode]
        : ui.padStart[mode];

  return (
    <div lang={info.tag} dir={info.dir}>
      <ToolPanel>
        <p className="text-sm leading-6 text-muted-foreground">{ui.intro}</p>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]">
          <fieldset disabled={phase === "running"}>
            <legend className="text-sm font-medium text-foreground">{ui.durationLegend}</legend>
            <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {CPS_DURATIONS.map((value) => (
                <label
                  key={value}
                  className={cn(
                    "flex min-h-11 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium tabular-nums transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
                    duration === value
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background text-foreground hover:bg-muted",
                    phase === "running" && "cursor-not-allowed opacity-60",
                  )}
                >
                  <input
                    type="radio"
                    name="cps-duration"
                    className="sr-only"
                    checked={duration === value}
                    onChange={() => chooseDuration(value)}
                  />
                  {secondsLabel(value)}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset disabled={phase === "running"}>
            <legend className="text-sm font-medium text-foreground">{ui.modeLegend}</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {CPS_MODES.map((value) => (
                <label
                  key={value}
                  className={cn(
                    "flex min-h-11 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
                    mode === value
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border bg-background text-foreground hover:bg-muted",
                    phase === "running" && "cursor-not-allowed opacity-60",
                  )}
                >
                  <input
                    type="radio"
                    name="cps-mode"
                    className="sr-only"
                    checked={mode === value}
                    onChange={() => chooseMode(value)}
                  />
                  {ui.modes[value]}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: ui.timeLeft, value: `${oneDecimal.format(remainingMs / 1000)}` },
            { label: ui.clicks, value: integer.format(clicks) },
            { label: ui.cps, value: decimal.format(shownCps) },
            { label: ui.best, value: currentBest ? decimal.format(currentBest.cps) : "–" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-accent-soft px-4 py-3">
              <dt className="text-xs font-medium text-muted-foreground sm:text-sm">{item.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground sm:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${progress}%`, transition: phase === "running" ? "none" : "width 200ms ease" }}
          />
        </div>

        <button
          ref={padRef}
          type="button"
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          onContextMenu={(event) => event.preventDefault()}
          onDragStart={(event) => event.preventDefault()}
          aria-describedby="cps-pad-hint"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", WebkitTouchCallout: "none" }}
          className={cn(
            "mt-4 flex h-64 w-full cursor-pointer select-none flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed px-4 text-center outline-none transition-[transform,background-color,border-color] duration-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:h-80",
            phase === "running"
              ? "border-accent bg-accent-soft"
              : phase === "done"
                ? "border-border bg-muted"
                : "border-border bg-background hover:border-accent hover:bg-accent-soft/60",
            pressed && "scale-[0.985]",
          )}
        >
          {phase === "running" ? (
            <span className="text-6xl font-semibold tabular-nums text-accent sm:text-7xl" aria-hidden="true">
              {integer.format(clicks)}
            </span>
          ) : phase === "done" && result ? (
            <span className="text-5xl sm:text-6xl" aria-hidden="true">
              {result.tier.emoji}
            </span>
          ) : (
            <span className="text-5xl sm:text-6xl" aria-hidden="true">
              🖱️
            </span>
          )}
          <span className="text-base font-medium text-foreground sm:text-lg">{padText}</span>
        </button>
        <p id="cps-pad-hint" className="mt-2 text-sm leading-6 text-muted-foreground">
          {ui.hints[mode]}
        </p>

        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </div>

        {phase === "done" && result ? (
          <section aria-labelledby="cps-result-heading" className="mt-6 rounded-2xl border border-border bg-card px-5 py-5">
            <h3 id="cps-result-heading" className="text-sm font-medium text-accent">
              {ui.resultHeading}
            </h3>
            <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-3">
              <p className="text-foreground">
                <span className="text-4xl font-semibold tabular-nums sm:text-5xl">
                  {decimal.format(result.cps)}
                </span>{" "}
                <span className="text-sm text-muted-foreground">{ui.cpsLong}</span>
              </p>
              <p className="text-foreground">
                <span className="text-sm text-muted-foreground">{ui.rating}: </span>
                <span className="text-xl font-semibold">
                  <span aria-hidden="true">{result.tier.emoji} </span>
                  {ui.tiers[result.tier.id]}
                </span>
              </p>
              {result.isNewBest ? (
                <p className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                  {ui.newBest}
                </p>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {ui.clicks}: <span className="tabular-nums">{integer.format(result.clicks)}</span>
              {" · "}
              {ui.durationLegend}: {secondsLabel(result.duration)}
              {" · "}
              {formatMessage(ui.bestFor, {
                seconds: secondsLabel(result.duration),
                mode: ui.modes[result.mode],
              })}
              :{" "}
              <span className="tabular-nums">
                {decimal.format(best[bestKey(result.mode, result.duration)]?.cps ?? result.cps)}
              </span>
            </p>
          </section>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="button" onClick={reset}>
            {ui.reset}
          </Button>
          <Button type="button" variant="secondary" onClick={clearBest} disabled={Object.keys(best).length === 0}>
            {ui.clearBest}
          </Button>
        </div>

        <section aria-labelledby="cps-scale-heading" className="mt-8">
          <h3 id="cps-scale-heading" className="text-sm font-medium text-foreground">
            {ui.scaleHeading}
          </h3>
          <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {CPS_TIERS.map((tier) => {
              const max = getCpsTierMax(tier.id);
              const active = phase === "done" && result?.tier.id === tier.id;
              return (
                <li
                  key={tier.id}
                  className={cn(
                    "rounded-xl border px-3 py-2 text-sm",
                    active ? "border-accent bg-accent-soft" : "border-border",
                  )}
                  aria-current={active ? "true" : undefined}
                >
                  <span className="font-medium text-foreground">
                    <span aria-hidden="true">{tier.emoji} </span>
                    {ui.tiers[tier.id]}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {tier.min === 0 && max !== undefined
                      ? formatMessage(ui.scaleBelow, { max: integer.format(max) })
                      : formatMessage(ui.scaleFrom, { min: integer.format(tier.min) })}
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          {ui.privacy}{" "}
          <Link href={CPS_GUIDE_PATH} className="font-medium text-accent hover:underline" hrefLang="en">
            {ui.guideLink}
          </Link>
        </p>
      </ToolPanel>
    </div>
  );
}
