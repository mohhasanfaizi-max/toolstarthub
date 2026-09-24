export type UrlQueryParam = { key: string; value: string };

export type UrlParseResult =
  | {
      ok: true;
      protocol: string;
      hostname: string;
      port: string;
      pathname: string;
      hash: string;
      params: UrlQueryParam[];
    }
  | { ok: false; error: string };

const MAX_LENGTH = 100_000;

export function parseAbsoluteUrl(raw: string): UrlParseResult {
  const trimmed = raw.trim();
  if (trimmed === "") return { ok: false, error: "Enter an absolute URL." };
  if (trimmed.length > MAX_LENGTH) return { ok: false, error: "Enter a URL of 100000 characters or fewer." };
  if (!/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) {
    return { ok: false, error: "Enter an absolute URL that includes a protocol, such as https://." };
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return { ok: false, error: "That text is not a valid absolute URL." };
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { ok: false, error: "Enter an http or https URL." };
  }

  const params: UrlQueryParam[] = [];
  url.searchParams.forEach((value, key) => {
    params.push({ key, value });
  });

  return {
    ok: true,
    protocol: url.protocol.replace(":", ""),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    hash: url.hash.replace(/^#/, ""),
    params,
  };
}
