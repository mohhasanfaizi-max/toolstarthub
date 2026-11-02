"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolError, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { DEFAULT_RULES, calculateFantasyPoints, parseSavedRules, type ScoringRule, type Sport } from "@/lib/tools/fantasy-points";
import { goldBtn, goldCard, goldGhost, goldTab } from "./goldUi";

const SPORTS: Array<{ id: Sport; label: string }> = [
  { id: "cricket", label: "Cricket" },
  { id: "football", label: "Football (soccer)" },
  { id: "basketball", label: "Basketball" },
];
const storageKey = (sport: Sport) => `tsh-fantasy-rules-${sport}`;

export function FantasyPointCalculatorTool() {
  const [sport, setSport] = useState<Sport>("cricket");
  const [rules, setRules] = useState<ScoringRule[]>(DEFAULT_RULES.cricket);
  const [stats, setStats] = useState<Record<string, string>>({});
  const [editing, setEditing] = useState(false);
  const [notice, setNotice] = useState("");

  function loadSport(next: Sport) {
    let saved: ScoringRule[] | null = null;
    try {
      saved = parseSavedRules(window.localStorage.getItem(storageKey(next)));
    } catch {
      saved = null;
    }
    setSport(next);
    setRules(saved ?? DEFAULT_RULES[next]);
    setStats({});
    setNotice(saved ? "Loaded your saved custom rules for this sport." : "");
  }

  // Load saved cricket rules once after mount (localStorage is unavailable during server rendering).
  useEffect(() => {
    const id = window.setTimeout(() => loadSport("cricket"), 0);
    return () => window.clearTimeout(id);
  }, []);

  const result = calculateFantasyPoints(rules, stats);

  function updateRule(id: string, value: string) {
    const n = Number(value);
    setRules(rules.map((r) => (r.id === id ? { ...r, points: Number.isFinite(n) ? n : r.points } : r)));
  }
  function saveRules() {
    try {
      window.localStorage.setItem(storageKey(sport), JSON.stringify(rules));
      setNotice("Custom rules saved in this browser only.");
    } catch {
      setNotice("Your browser blocked local storage, so the rules could not be saved.");
    }
  }
  function resetRules() {
    try {
      window.localStorage.removeItem(storageKey(sport));
    } catch {
      /* ignore */
    }
    setRules(DEFAULT_RULES[sport]);
    setNotice("Rules reset to the illustrative defaults.");
  }

  const summary = result.ok
    ? [`${SPORTS.find((s) => s.id === sport)?.label} fantasy points: ${result.total}`, ...result.lines.map((l) => `${l.label}: ${l.quantity} × ${l.points} = ${l.subtotal}`)].join("\n")
    : "";

  return (
    <ToolPanel>
      <div role="tablist" aria-label="Sport" className="grid grid-cols-3 gap-2">
        {SPORTS.map((s) => (
          <button key={s.id} type="button" role="tab" aria-selected={sport === s.id} className={goldTab(sport === s.id)} onClick={() => loadSport(s.id)}>
            {s.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Default values are illustrative only and do not match any particular fantasy platform. Edit them to match your league.
      </p>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">Player stats for one match</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((r) => (
            <div key={r.id}>
              <label htmlFor={`fp-${r.id}`} className="block text-sm font-medium">
                {r.label} <span className="text-xs text-muted-foreground">({r.points > 0 ? "+" : ""}{r.points} each)</span>
              </label>
              <input
                id={`fp-${r.id}`}
                inputMode="decimal"
                value={stats[r.id] ?? ""}
                onChange={(e) => setStats({ ...stats, [r.id]: e.target.value })}
                className={toolControlClass}
              />
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className={goldGhost} aria-expanded={editing} onClick={() => setEditing(!editing)}>
          {editing ? "Hide scoring rules" : "Edit scoring rules"}
        </button>
        <CopyButton value={summary} label="Copy breakdown" />
        <button type="button" className={goldGhost} onClick={() => setStats({})}>Clear stats</button>
      </div>

      {editing ? (
        <div className="mt-4 rounded-2xl border border-[#C9A227]/40 p-4">
          <p className="text-sm font-semibold">Points per unit</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rules.map((r) => (
              <div key={r.id}>
                <label htmlFor={`fr-${r.id}`} className="block text-sm">{r.label}</label>
                <input id={`fr-${r.id}`} type="number" step="0.1" value={r.points} onChange={(e) => updateRule(r.id, e.target.value)} className={toolControlClass} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className={goldBtn} onClick={saveRules}>Save custom rules</button>
            <button type="button" className={goldGhost} onClick={resetRules}>Reset to defaults</button>
          </div>
        </div>
      ) : null}
      {notice ? <p className="mt-3 text-sm text-[#A8841A]" role="status">{notice}</p> : null}

      <div className="mt-6" aria-live="polite">
        {!result.ok ? (
          <ToolError>{result.error}</ToolError>
        ) : (
          <>
            <div className={goldCard}>
              <p className="text-sm font-medium text-[#A8841A]">Total fantasy points</p>
              <p className="mt-1 text-3xl font-semibold">{result.total}</p>
            </div>
            {result.lines.length ? (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[18rem] text-left text-sm">
                  <caption className="sr-only">Points breakdown</caption>
                  <thead>
                    <tr className="border-b border-border"><th className="py-2">Stat</th><th>Count</th><th>Points</th><th className="text-right">Subtotal</th></tr>
                  </thead>
                  <tbody>
                    {result.lines.map((l) => (
                      <tr key={l.id} className="border-b border-border/60">
                        <td className="py-2">{l.label}</td><td>{l.quantity}</td><td>{l.points}</td>
                        <td className={`text-right font-medium ${l.subtotal < 0 ? "text-red-600" : ""}`}>{l.subtotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">Enter at least one stat to see a breakdown.</p>
            )}
          </>
        )}
      </div>
    </ToolPanel>
  );
}
