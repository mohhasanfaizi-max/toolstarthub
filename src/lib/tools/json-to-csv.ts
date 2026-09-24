export type JsonCsvResult =
  | { ok: true; csv: string; rows: number; columns: string[] }
  | { ok: false; error: string };

function cellValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "";
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return JSON.stringify(value);
}

function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

export function jsonToCsv(raw: string): JsonCsvResult {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Paste a JSON array of objects." };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    return { ok: false, error: "This is not valid JSON." };
  }

  if (!Array.isArray(parsed)) {
    return { ok: false, error: "Paste an array of objects, such as [{\"name\":\"Ada\"}]." };
  }
  if (parsed.length === 0) {
    return { ok: false, error: "The array is empty, so there are no rows to convert." };
  }

  const records: Array<Record<string, unknown>> = [];
  for (let index = 0; index < parsed.length; index += 1) {
    const item = parsed[index];
    if (item === null || typeof item !== "object" || Array.isArray(item)) {
      return {
        ok: false,
        error: `Item ${index + 1} is not an object. This converter expects an array of objects.`,
      };
    }
    records.push(item as Record<string, unknown>);
  }

  const columns: string[] = [];
  const seen = new Set<string>();
  for (const record of records) {
    for (const key of Object.keys(record)) {
      if (!seen.has(key)) {
        seen.add(key);
        columns.push(key);
      }
    }
  }

  if (columns.length === 0) {
    return { ok: false, error: "The objects have no keys, so there is nothing to put in a header." };
  }

  const lines = [
    columns.map((column) => csvEscape(column)).join(","),
    ...records.map((record) =>
      columns.map((column) => csvEscape(cellValue(record[column]))).join(","),
    ),
  ];

  return { ok: true, csv: lines.join("\n"), rows: records.length, columns };
}
