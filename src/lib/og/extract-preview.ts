export type OpenGraphPreview = {
  requestedUrl: string;
  finalUrl: string;
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

const MAX_FIELD = 2000;

function clip(value: string): string {
  const cleaned = value.replace(/\s+/g, " ").trim();
  return cleaned.length > MAX_FIELD ? cleaned.slice(0, MAX_FIELD) : cleaned;
}

function decodeEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, body: string) => {
    const lower = body.toLowerCase();
    if (lower === "amp") return "&";
    if (lower === "lt") return "<";
    if (lower === "gt") return ">";
    if (lower === "quot") return '"';
    if (lower === "apos") return "'";
    const codePoint = lower.startsWith("#x")
      ? Number.parseInt(lower.slice(2), 16)
      : lower.startsWith("#")
        ? Number.parseInt(lower.slice(1), 10)
        : Number.NaN;
    if (!Number.isInteger(codePoint) || codePoint < 0 || codePoint > 0x10ffff) return entity;
    return String.fromCodePoint(codePoint);
  });
}

function tagAttributes(tag: string): Map<string, string> {
  const attributes = new Map<string, string>();
  const pattern = /([^\s=/<>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of tag.matchAll(pattern)) {
    const name = match[1]?.toLowerCase();
    if (!name || name === "meta") continue;
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    if (!attributes.has(name)) attributes.set(name, decodeEntities(value));
  }
  return attributes;
}

function httpUrl(value: string, base: string): string {
  if (value.trim() === "") return "";
  try {
    const url = new URL(value, base);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    if (url.username !== "" || url.password !== "") return "";
    return url.href;
  } catch {
    return "";
  }
}

export function extractPreview(html: string, requestedUrl: string, finalUrl: string): OpenGraphPreview {
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  const title = clip(decodeEntities(titleMatch?.[1]?.replace(/<[^>]*>/g, "") ?? ""));
  const meta = new Map<string, string>();
  for (const tag of html.matchAll(/<meta\s[^>]*>/gi)) {
    const attributes = tagAttributes(tag[0]);
    const key = (attributes.get("property") ?? attributes.get("name") ?? "").toLowerCase();
    const content = attributes.get("content");
    if (key && content !== undefined && !meta.has(key)) meta.set(key, clip(content));
  }

  const description = meta.get("description") ?? "";
  return {
    requestedUrl,
    finalUrl,
    title,
    description,
    openGraph: {
      title: meta.get("og:title") ?? "",
      description: meta.get("og:description") ?? "",
      image: httpUrl(meta.get("og:image") ?? "", finalUrl),
      url: httpUrl(meta.get("og:url") ?? "", finalUrl),
      type: meta.get("og:type") ?? "",
      siteName: meta.get("og:site_name") ?? "",
    },
    twitter: {
      card: meta.get("twitter:card") ?? "",
      title: meta.get("twitter:title") ?? "",
      description: meta.get("twitter:description") ?? "",
      image: httpUrl(meta.get("twitter:image") ?? "", finalUrl),
    },
  };
}
