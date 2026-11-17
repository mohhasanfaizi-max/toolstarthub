/**
 * Build an uncompressed (store-only) ZIP in the browser.
 * Images are already encoded, so deflate would add size and code for little gain.
 */

export type ZipEntry = {
  name: string;
  data: Uint8Array;
};

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let crc = i;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
    table[i] = crc >>> 0;
  }
  return table;
})();

export function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i += 1) {
    crc = CRC_TABLE[(crc ^ data[i]!) & 0xff]! ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()): { time: number; date: number } {
  const year = Math.max(1980, date.getFullYear());
  return {
    time:
      (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
  };
}

function writeU16(view: DataView, offset: number, value: number) {
  view.setUint16(offset, value, true);
}

function writeU32(view: DataView, offset: number, value: number) {
  view.setUint32(offset, value, true);
}

/** Make ZIP entry names unique and safe for common unzip tools. */
export function uniqueZipName(used: Set<string>, original: string): string {
  const trimmed = original.replace(/[/\\]+/g, "-").replace(/^\.+/, "") || "image";
  const match = trimmed.match(/^(.*?)(\.[^.]+)?$/);
  const base = (match?.[1] || "image").slice(0, 80) || "image";
  const ext = match?.[2] ?? "";
  let candidate = `${base}${ext}`;
  let n = 2;
  while (used.has(candidate.toLowerCase())) {
    candidate = `${base}-${n}${ext}`;
    n += 1;
  }
  used.add(candidate.toLowerCase());
  return candidate;
}

export function createStoreZip(entries: ZipEntry[], now = new Date()): Blob {
  const { time, date } = dosDateTime(now);
  const locals: Uint8Array[] = [];
  const centrals: Uint8Array[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = new TextEncoder().encode(entry.name);
    const data = entry.data;
    const crc = crc32(data);
    const size = data.byteLength;
    // Language encoding bit so UTF-8 names are honored.
    const flags = 0x0800;

    const local = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(local.buffer);
    writeU32(localView, 0, 0x04034b50);
    writeU16(localView, 4, 20);
    writeU16(localView, 6, flags);
    writeU16(localView, 8, 0); // store
    writeU16(localView, 10, time);
    writeU16(localView, 12, date);
    writeU32(localView, 14, crc);
    writeU32(localView, 18, size);
    writeU32(localView, 22, size);
    writeU16(localView, 26, nameBytes.length);
    writeU16(localView, 28, 0);
    local.set(nameBytes, 30);

    const central = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(central.buffer);
    writeU32(centralView, 0, 0x02014b50);
    writeU16(centralView, 4, 20);
    writeU16(centralView, 6, 20);
    writeU16(centralView, 8, flags);
    writeU16(centralView, 10, 0);
    writeU16(centralView, 12, time);
    writeU16(centralView, 14, date);
    writeU32(centralView, 16, crc);
    writeU32(centralView, 20, size);
    writeU32(centralView, 24, size);
    writeU16(centralView, 28, nameBytes.length);
    writeU16(centralView, 30, 0);
    writeU16(centralView, 32, 0);
    writeU16(centralView, 34, 0);
    writeU16(centralView, 36, 0);
    writeU32(centralView, 38, 0);
    writeU32(centralView, 42, offset);
    central.set(nameBytes, 46);

    locals.push(local, data);
    centrals.push(central);
    offset += local.length + size;
  }

  const centralSize = centrals.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  writeU32(endView, 0, 0x06054b50);
  writeU16(endView, 4, 0);
  writeU16(endView, 6, 0);
  writeU16(endView, 8, entries.length);
  writeU16(endView, 10, entries.length);
  writeU32(endView, 12, centralSize);
  writeU32(endView, 16, offset);
  writeU16(endView, 20, 0);

  const parts: BlobPart[] = [];
  for (const part of [...locals, ...centrals, end]) {
    const copy = new Uint8Array(part.byteLength);
    copy.set(part);
    parts.push(copy.buffer);
  }
  return new Blob(parts, { type: "application/zip" });
}

export async function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
  return new Uint8Array(await blob.arrayBuffer());
}
