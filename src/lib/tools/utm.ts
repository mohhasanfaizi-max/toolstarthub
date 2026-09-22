export type UtmFields = {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
};

export type UtmResult =
  | { ok: true; url: string }
  | { ok: false; error: string };

function normalizeUrl(raw: string): URL | null {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return null;
  }

  const candidates = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
    ? [trimmed]
    : [`https://${trimmed}`];

  for (const candidate of candidates) {
    try {
      return new URL(candidate);
    } catch {
      // Try the next candidate.
    }
  }

  return null;
}

export function buildUtmUrl(fields: UtmFields): UtmResult {
  const url = normalizeUrl(fields.url);

  if (!url) {
    return {
      ok: false,
      error:
        fields.url.trim() === ""
          ? "Enter a website URL."
          : "Enter a valid website URL.",
    };
  }

  const utm: Array<[string, string]> = [
    ["utm_source", fields.source],
    ["utm_medium", fields.medium],
    ["utm_campaign", fields.campaign],
    ["utm_term", fields.term],
    ["utm_content", fields.content],
  ];

  for (const [key, value] of utm) {
    const trimmed = value.trim();
    if (trimmed) {
      url.searchParams.set(key, trimmed);
    }
  }

  return { ok: true, url: url.toString() };
}
