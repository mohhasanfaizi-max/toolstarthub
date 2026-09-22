export const MAX_DIFF_CHARS = 200_000;
export const MAX_DIFF_TOKENS = 4000;

export type DiffMode = "lines" | "words";
export type DiffKind = "equal" | "add" | "remove";

export type DiffHunk = {
  kind: DiffKind;
  text: string;
};

export type DiffResult =
  | {
      ok: true;
      hunks: DiffHunk[];
      added: number;
      removed: number;
      unchanged: number;
    }
  | { ok: false; error: string };

export function diffText(
  original: string,
  modified: string,
  mode: DiffMode,
): DiffResult {
  if (original.length > MAX_DIFF_CHARS || modified.length > MAX_DIFF_CHARS) {
    return {
      ok: false,
      error: "Keep each side under 200,000 characters so comparison stays responsive.",
    };
  }

  const left = tokenize(original, mode);
  const right = tokenize(modified, mode);
  if (left.length > MAX_DIFF_TOKENS || right.length > MAX_DIFF_TOKENS) {
    return {
      ok: false,
      error: `This comparison handles up to ${MAX_DIFF_TOKENS} ${mode}. Shorten the input or split it.`,
    };
  }

  if (original === "" && modified === "") {
    return { ok: true, hunks: [], added: 0, removed: 0, unchanged: 0 };
  }

  const hunks = mergeHunks(diffTokens(left, right), mode === "lines" ? "\n" : "");
  let added = 0;
  let removed = 0;
  let unchanged = 0;
  for (const hunk of hunks) {
    const count = mode === "lines" ? hunk.text.split("\n").filter((line, index, all) => !(index === all.length - 1 && line === "")).length || (hunk.text === "" ? 0 : 1) : hunk.text.split(/\s+/).filter(Boolean).length;
    if (hunk.kind === "add") {
      added += Math.max(1, count);
    } else if (hunk.kind === "remove") {
      removed += Math.max(1, count);
    } else {
      unchanged += Math.max(1, count);
    }
  }

  return { ok: true, hunks, added, removed, unchanged };
}

export function formatDiffPlain(hunks: DiffHunk[]): string {
  return hunks
    .map((hunk) => {
      const prefix = hunk.kind === "add" ? "+ " : hunk.kind === "remove" ? "- " : "  ";
      return hunk.text
        .split("\n")
        .map((line) => `${prefix}${line}`)
        .join("\n");
    })
    .join("\n");
}

function tokenize(text: string, mode: DiffMode): string[] {
  if (mode === "words") {
    return text.trim() === "" ? [] : text.split(/(\s+)/).filter((token) => token !== "");
  }
  if (text === "") {
    return [];
  }
  return text.replace(/\r\n/g, "\n").split("\n");
}

function diffTokens(a: string[], b: string[]): DiffHunk[] {
  if (a.length === 0) {
    return b.map((text) => ({ kind: "add" as const, text }));
  }
  if (b.length === 0) {
    return a.map((text) => ({ kind: "remove" as const, text }));
  }

  const product = a.length * b.length;
  if (product <= 1_200_000) {
    return lcsDiff(a, b);
  }
  return greedyDiff(a, b);
}

function lcsDiff(a: string[], b: string[]): DiffHunk[] {
  const rows = a.length;
  const cols = b.length;
  const table: number[][] = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = cols - 1; j >= 0; j -= 1) {
      table[i]![j] = a[i] === b[j] ? (table[i + 1]![j + 1] ?? 0) + 1 : Math.max(table[i + 1]![j] ?? 0, table[i]![j + 1] ?? 0);
    }
  }

  const hunks: DiffHunk[] = [];
  let i = 0;
  let j = 0;
  while (i < rows && j < cols) {
    if (a[i] === b[j]) {
      hunks.push({ kind: "equal", text: a[i]! });
      i += 1;
      j += 1;
    } else if ((table[i]![j + 1] ?? 0) >= (table[i + 1]![j] ?? 0)) {
      hunks.push({ kind: "add", text: b[j]! });
      j += 1;
    } else {
      hunks.push({ kind: "remove", text: a[i]! });
      i += 1;
    }
  }
  while (i < rows) {
    hunks.push({ kind: "remove", text: a[i]! });
    i += 1;
  }
  while (j < cols) {
    hunks.push({ kind: "add", text: b[j]! });
    j += 1;
  }
  return hunks;
}

function greedyDiff(a: string[], b: string[]): DiffHunk[] {
  const hunks: DiffHunk[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      hunks.push({ kind: "equal", text: a[i]! });
      i += 1;
      j += 1;
      continue;
    }
    const inB = b.indexOf(a[i]!, j + 1);
    const inA = a.indexOf(b[j]!, i + 1);
    if (inB !== -1 && (inA === -1 || inB - j <= inA - i)) {
      hunks.push({ kind: "add", text: b[j]! });
      j += 1;
    } else if (inA !== -1) {
      hunks.push({ kind: "remove", text: a[i]! });
      i += 1;
    } else {
      hunks.push({ kind: "remove", text: a[i]! });
      hunks.push({ kind: "add", text: b[j]! });
      i += 1;
      j += 1;
    }
  }
  while (i < a.length) {
    hunks.push({ kind: "remove", text: a[i]! });
    i += 1;
  }
  while (j < b.length) {
    hunks.push({ kind: "add", text: b[j]! });
    j += 1;
  }
  return hunks;
}

function mergeHunks(hunks: DiffHunk[], separator: string): DiffHunk[] {
  const merged: DiffHunk[] = [];
  for (const hunk of hunks) {
    const last = merged[merged.length - 1];
    if (last && last.kind === hunk.kind) {
      last.text += `${separator}${hunk.text}`;
    } else {
      merged.push({ ...hunk });
    }
  }
  return merged;
}
