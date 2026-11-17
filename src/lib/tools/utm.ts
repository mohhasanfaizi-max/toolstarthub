export type UtmFields = {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  id?: string;
  sourcePlatform?: string;
  creativeFormat?: string;
  marketingTactic?: string;
};

export type UtmResult =
  | { ok: true; url: string }
  | { ok: false; error: string };

const MAX_UTM_VALUE = 200;

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

function readUtmValue(raw: string | undefined, field: string): { ok: true; value: string } | { ok: false; error: string } {
  const trimmed = (raw ?? "").trim();
  if (trimmed === "") {
    return { ok: true, value: "" };
  }
  if (trimmed.length > MAX_UTM_VALUE) {
    return { ok: false, error: `Enter a shorter ${field}.` };
  }
  if (/[\u0000-\u001F\u007F]/.test(trimmed)) {
    return { ok: false, error: `The ${field} cannot include line breaks or other control characters.` };
  }
  return { ok: true, value: trimmed };
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

  const utm: Array<[string, string | undefined, string]> = [
    ["utm_source", fields.source, "campaign source"],
    ["utm_medium", fields.medium, "campaign medium"],
    ["utm_campaign", fields.campaign, "campaign name"],
    ["utm_term", fields.term, "campaign term"],
    ["utm_content", fields.content, "campaign content"],
    ["utm_id", fields.id, "campaign ID"],
    ["utm_source_platform", fields.sourcePlatform, "source platform"],
    ["utm_creative_format", fields.creativeFormat, "creative format"],
    ["utm_marketing_tactic", fields.marketingTactic, "marketing tactic"],
  ];

  for (const [key, raw, field] of utm) {
    const parsed = readUtmValue(raw, field);
    if (!parsed.ok) return parsed;
    if (parsed.value) {
      url.searchParams.set(key, parsed.value);
    }
  }

  return { ok: true, url: url.toString() };
}
