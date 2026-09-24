export type CsvJsonResult =
  | { ok: true; json: string; rows: number }
  | { ok: false; error: string };

export function parseCsv(raw: string): { ok: true; rows: string[][] } | { ok: false; error: string } {
  if (raw.trim() === "") {
    return { ok: false, error: "Paste CSV text first." };
  }

  const text = raw.charCodeAt(0) === 0xfeff ? raw.slice(1) : raw;
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];

    if (inQuotes) {
      if (char === '"') {
        if (text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      if (field.length > 0) {
        return { ok: false, error: "A quote appears inside an unquoted cell." };
      }
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (char === "\n" || char === "\r") {
      if (char === "\r" && text[index + 1] === "\n") {
        index += 1;
      }
      row.push(field);
      field = "";
      rows.push(row);
      row = [];
      continue;
    }

    field += char;
  }

  if (inQuotes) {
    return { ok: false, error: "A quoted cell is missing its closing quote." };
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const filled = rows.filter((item) => !(item.length === 1 && item[0] === ""));
  if (filled.length === 0) {
    return { ok: false, error: "Paste CSV text first." };
  }

  return { ok: true, rows: filled };
}

function uniqueHeaders(headers: string[]): string[] {
  const counts = new Map<string, number>();
  return headers.map((header, index) => {
    const base = header.trim() === "" ? `column_${index + 1}` : header;
    const seen = counts.get(base) ?? 0;
    counts.set(base, seen + 1);
    return seen === 0 ? base : `${base}_${seen + 1}`;
  });
}

export function csvToJson(raw: string, pretty: boolean): CsvJsonResult {
  const parsed = parseCsv(raw);
  if (!parsed.ok) {
    return parsed;
  }

  const [headerRow, ...dataRows] = parsed.rows;
  if (!headerRow || headerRow.every((cell) => cell.trim() === "")) {
    return { ok: false, error: "The first row needs column names." };
  }

  const headers = uniqueHeaders(headerRow);
  const objects: Array<Record<string, string>> = [];

  for (let index = 0; index < dataRows.length; index += 1) {
    const cells = dataRows[index];
    if (cells.length > headers.length) {
      return {
        ok: false,
        error: `Row ${index + 2} has more cells than the header.`,
      };
    }
    const record: Record<string, string> = {};
    headers.forEach((header, column) => {
      record[header] = cells[column] ?? "";
    });
    objects.push(record);
  }

  return {
    ok: true,
    json: pretty ? JSON.stringify(objects, null, 2) : JSON.stringify(objects),
    rows: objects.length,
  };
}
