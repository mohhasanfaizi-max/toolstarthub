export type TimestampUnit = "seconds" | "milliseconds";
export type TimestampZone = "local" | "utc";

export type TimestampFromUnixResult =
  | {
      ok: true;
      milliseconds: number;
      iso: string;
      local: string;
      utc: string;
      warning?: string;
    }
  | { ok: false; error: string };

export type TimestampToUnixResult =
  | {
      ok: true;
      seconds: number;
      milliseconds: number;
      iso: string;
    }
  | { ok: false; error: string };

const MS_THRESHOLD = 1e12;

export function parseUnixTimestamp(
  raw: string,
  unit: TimestampUnit,
): TimestampFromUnixResult {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter a Unix timestamp." };
  }

  const value = Number(trimmed);
  if (!Number.isFinite(value)) {
    return { ok: false, error: "Enter a valid number for the timestamp." };
  }

  const milliseconds = unit === "seconds" ? value * 1000 : value;
  const date = new Date(milliseconds);

  if (!Number.isFinite(date.getTime())) {
    return { ok: false, error: "That timestamp is outside the range this browser can represent." };
  }

  let warning: string | undefined;
  if (unit === "seconds" && Math.abs(value) >= MS_THRESHOLD) {
    warning = "This number looks like milliseconds. Switch the unit if the date is wrong.";
  } else if (unit === "milliseconds" && Math.abs(value) > 0 && Math.abs(value) < 1e11) {
    warning = "This number looks like seconds. Switch the unit if the date is wrong.";
  }

  return {
    ok: true,
    milliseconds: date.getTime(),
    iso: date.toISOString(),
    local: formatDateTime(date, "local"),
    utc: formatDateTime(date, "utc"),
    warning,
  };
}

export function dateTimeToUnix(
  dateRaw: string,
  timeRaw: string,
  zone: TimestampZone,
): TimestampToUnixResult {
  const date = dateRaw.trim();
  if (date === "") {
    return { ok: false, error: "Enter a date." };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { ok: false, error: "Use a valid date." };
  }

  const time = timeRaw.trim() === "" ? "00:00:00" : normalizeTime(timeRaw.trim());
  if (!time) {
    return { ok: false, error: "Use a valid time such as 14:30 or 14:30:00." };
  }

  const isoLocal = `${date}T${time}`;
  const next = zone === "utc" ? new Date(`${isoLocal}Z`) : new Date(isoLocal);

  if (!Number.isFinite(next.getTime())) {
    return { ok: false, error: "That date and time could not be converted." };
  }

  return {
    ok: true,
    milliseconds: next.getTime(),
    seconds: next.getTime() / 1000,
    iso: next.toISOString(),
  };
}

export function currentUnix(): { seconds: number; milliseconds: number } {
  const milliseconds = Date.now();
  return {
    milliseconds,
    seconds: Math.floor(milliseconds / 1000),
  };
}

export function looksLikeMilliseconds(value: number): boolean {
  return Math.abs(value) >= MS_THRESHOLD;
}

function normalizeTime(value: string): string | null {
  const match = value.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  const seconds = Number(match[3] ?? "0");
  if (hours > 23 || minutes > 59 || seconds > 59) {
    return null;
  }

  return `${match[1]}:${match[2]}:${String(seconds).padStart(2, "0")}`;
}

function formatDateTime(date: Date, zone: TimestampZone): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: zone === "utc" ? "UTC" : undefined,
  }).format(date);
}
