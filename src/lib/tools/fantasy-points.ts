export type Sport = "cricket" | "football" | "basketball";

export type ScoringRule = {
  id: string;
  label: string;
  /** Points awarded per unit of the stat (can be negative). */
  points: number;
};

/**
 * Illustrative starting rules only. They are not the official scoring of any
 * fantasy platform; every value is editable in the calculator.
 */
export const DEFAULT_RULES: Record<Sport, ScoringRule[]> = {
  cricket: [
    { id: "run", label: "Run scored", points: 1 },
    { id: "four", label: "Boundary (four) bonus", points: 1 },
    { id: "six", label: "Six bonus", points: 2 },
    { id: "wicket", label: "Wicket taken", points: 25 },
    { id: "maiden", label: "Maiden over", points: 8 },
    { id: "catch", label: "Catch", points: 8 },
    { id: "stumping", label: "Stumping or run out", points: 12 },
    { id: "duck", label: "Out for a duck", points: -2 },
  ],
  football: [
    { id: "goal", label: "Goal", points: 5 },
    { id: "assist", label: "Assist", points: 3 },
    { id: "clean-sheet", label: "Clean sheet", points: 4 },
    { id: "shot-on-target", label: "Shot on target", points: 1 },
    { id: "save", label: "Goalkeeper save", points: 1 },
    { id: "yellow", label: "Yellow card", points: -1 },
    { id: "red", label: "Red card", points: -3 },
    { id: "own-goal", label: "Own goal", points: -2 },
  ],
  basketball: [
    { id: "point", label: "Point scored", points: 1 },
    { id: "rebound", label: "Rebound", points: 1.2 },
    { id: "assist", label: "Assist", points: 1.5 },
    { id: "steal", label: "Steal", points: 3 },
    { id: "block", label: "Block", points: 3 },
    { id: "turnover", label: "Turnover", points: -1 },
  ],
};

export type BreakdownLine = { id: string; label: string; quantity: number; points: number; subtotal: number };
export type FantasyResult = { ok: true; total: number; lines: BreakdownLine[] } | { ok: false; error: string };

export function calculateFantasyPoints(rules: ScoringRule[], stats: Record<string, string>): FantasyResult {
  const lines: BreakdownLine[] = [];
  for (const rule of rules) {
    if (!Number.isFinite(rule.points)) return { ok: false, error: `The points value for “${rule.label}” must be a number.` };
    const raw = (stats[rule.id] ?? "").trim();
    if (raw === "") continue;
    const quantity = Number(raw);
    if (!Number.isFinite(quantity) || quantity < 0) {
      return { ok: false, error: `Enter a count of 0 or more for “${rule.label}”.` };
    }
    lines.push({ id: rule.id, label: rule.label, quantity, points: rule.points, subtotal: round2(quantity * rule.points) });
  }
  const total = round2(lines.reduce((sum, line) => sum + line.subtotal, 0));
  return { ok: true, total, lines };
}

export function parseSavedRules(json: string | null): ScoringRule[] | null {
  if (!json) return null;
  try {
    const data = JSON.parse(json) as unknown;
    if (!Array.isArray(data)) return null;
    const rules = data.filter(
      (r): r is ScoringRule =>
        typeof r === "object" && r !== null && typeof r.id === "string" && typeof r.label === "string" && typeof r.points === "number" && Number.isFinite(r.points),
    );
    return rules.length ? rules.slice(0, 60) : null;
  } catch {
    return null;
  }
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
