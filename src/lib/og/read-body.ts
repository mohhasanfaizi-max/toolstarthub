import { Readable } from "node:stream";
import { createBrotliDecompress, createGunzip, createInflate, type Zlib } from "node:zlib";

/** Cap for the decompressed response body. Compressed wire size is not this limit. */
export const OG_MAX_BODY_BYTES = 512 * 1024;

const TOO_LARGE = "That page is too large to preview.";
const UNREADABLE = "That page could not be previewed.";

function readLimited(stream: Readable, max: number, stop: () => void): Promise<{ bytes: Buffer; truncated: boolean }> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let total = 0;
    let settled = false;
    let truncated = false;

    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      stream.removeAllListeners();
      if (error && !truncated) {
        reject(error);
        return;
      }
      resolve({ bytes: Buffer.concat(chunks, total), truncated });
    };

    const halt = () => {
      truncated = true;
      stop();
      stream.destroy();
      finish();
    };

    stream.on("data", (chunk: Buffer | string) => {
      if (settled) return;
      const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      const room = max - total;
      if (buf.length > room) {
        if (room > 0) chunks.push(buf.subarray(0, room));
        total = max;
        halt();
        return;
      }
      chunks.push(buf);
      total += buf.length;
    });
    stream.on("end", () => finish());
    stream.on("error", (error: Error) => finish(truncated ? undefined : error));
  });
}

function encodingName(contentEncoding: string | undefined): "identity" | "gzip" | "deflate" | "br" | "unsupported" {
  const tokens = (contentEncoding ?? "")
    .split(",")
    .map((token) => token.trim().toLowerCase())
    .filter((token) => token !== "" && token !== "identity");
  if (tokens.length === 0) return "identity";
  if (tokens.length > 1) return "unsupported";
  const token = tokens[0];
  if (token === "gzip" || token === "x-gzip") return "gzip";
  if (token === "deflate") return "deflate";
  if (token === "br") return "br";
  return "unsupported";
}

function decoderFor(encoding: "gzip" | "deflate" | "br"): Zlib {
  if (encoding === "gzip") return createGunzip();
  if (encoding === "deflate") return createInflate();
  return createBrotliDecompress();
}

export async function readCappedBody(
  source: Readable,
  contentEncoding: string | undefined,
  contentLength: number | undefined,
): Promise<{ ok: true; bytes: Buffer; truncated: boolean } | { ok: false; error: string }> {
  const encoding = encodingName(contentEncoding);
  if (encoding === "unsupported") {
    source.destroy();
    return { ok: false, error: UNREADABLE };
  }
  if (contentLength !== undefined && contentLength > OG_MAX_BODY_BYTES) {
    source.destroy();
    return { ok: false, error: TOO_LARGE };
  }

  try {
    if (encoding === "identity") {
      const read = await readLimited(source, OG_MAX_BODY_BYTES, () => source.destroy());
      return { ok: true, bytes: read.bytes, truncated: read.truncated };
    }

    const decoder = decoderFor(encoding);
    const read = readLimited(decoder, OG_MAX_BODY_BYTES, () => {
      source.unpipe(decoder);
      source.destroy();
      decoder.destroy();
    });
    source.pipe(decoder);
    const result = await read;
    source.destroy();
    decoder.destroy();
    return { ok: true, bytes: result.bytes, truncated: result.truncated };
  } catch {
    source.destroy();
    return { ok: false, error: UNREADABLE };
  }
}
