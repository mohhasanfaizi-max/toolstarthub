export type PageRangeResult =
  | { ok: true; pages: number[] }
  | { ok: false; error: string };

export function parsePageRanges(
  raw: string,
  pageCount?: number,
): PageRangeResult {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter pages such as 1-3,5,8-10." };
  }

  const parts = trimmed.split(",");
  const pages: number[] = [];
  const seen = new Set<number>();

  for (const part of parts) {
    const token = part.trim();
    if (token === "") {
      return { ok: false, error: "Remove the empty page range." };
    }

    if (token.includes("-")) {
      const [startRaw, endRaw, extra] = token.split("-");
      if (extra !== undefined || startRaw === undefined || endRaw === undefined) {
        return { ok: false, error: `“${token}” is not a valid range.` };
      }
      const start = parsePageNumber(startRaw);
      const end = parsePageNumber(endRaw);
      if (!start.ok) {
        return start;
      }
      if (!end.ok) {
        return end;
      }
      if (start.value > end.value) {
        return {
          ok: false,
          error: `Range ${token} is reversed. Use the lower page first.`,
        };
      }
      for (let page = start.value; page <= end.value; page += 1) {
        const bounded = boundPage(page, pageCount, token);
        if (!bounded.ok) {
          return bounded;
        }
        if (!seen.has(page)) {
          seen.add(page);
          pages.push(page);
        }
      }
      continue;
    }

    const single = parsePageNumber(token);
    if (!single.ok) {
      return single;
    }
    const bounded = boundPage(single.value, pageCount, token);
    if (!bounded.ok) {
      return bounded;
    }
    if (!seen.has(single.value)) {
      seen.add(single.value);
      pages.push(single.value);
    }
  }

  if (pages.length === 0) {
    return { ok: false, error: "Select at least one page." };
  }

  return { ok: true, pages };
}

function parsePageNumber(
  raw: string,
): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim();
  if (!/^[0-9]+$/.test(trimmed)) {
    return { ok: false, error: `“${trimmed}” is not a page number.` };
  }
  const value = Number(trimmed);
  if (!Number.isInteger(value) || value < 1) {
    return { ok: false, error: "Page numbers start at 1." };
  }
  return { ok: true, value };
}

function boundPage(
  page: number,
  pageCount: number | undefined,
  token: string,
): { ok: true } | { ok: false; error: string } {
  if (pageCount !== undefined && page > pageCount) {
    return {
      ok: false,
      error: `Page ${token} is outside this PDF (${pageCount} pages).`,
    };
  }
  return { ok: true };
}
