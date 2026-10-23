export class UrduNewsCallError extends Error {
  readonly kind: "unconfigured" | "safety" | "rate" | "unavailable" | "empty" | "api" | "bad_json" | "timeout";

  constructor(kind: UrduNewsCallError["kind"]) {
    super(kind);
    this.name = "UrduNewsCallError";
    this.kind = kind;
  }
}

export function stripJsonFence(text: string): string {
  const trimmed = text.trim();
  const fenced = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  return fenced?.[1]?.trim() || trimmed;
}

/** Parse model JSON. One retry, then fail. A call error is not retried. */
export async function readJsonWithRetry<T>(
  request: (attempt: number) => Promise<string>,
  parse: (value: unknown) => T,
): Promise<T> {
  let last: unknown;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const text = await request(attempt);
    try {
      return parse(JSON.parse(stripJsonFence(text)));
    } catch (error) {
      if (error instanceof UrduNewsCallError) throw error;
      last = error;
    }
  }
  if (last instanceof UrduNewsCallError) throw last;
  throw new UrduNewsCallError("bad_json");
}

/** Stop a hung model call. The article is not included in the error. */
export function withDeadline<T>(work: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new UrduNewsCallError("timeout")), ms);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
