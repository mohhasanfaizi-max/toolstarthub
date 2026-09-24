export type TimeZoneResult =
  | {
      ok: true;
      sourceZone: string;
      targetZone: string;
      sourceDateTime: string;
      targetDateTime: string;
      sourceOffset: string;
      targetOffset: string;
      ambiguous: boolean;
    }
  | { ok: false; error: string };

type Wall = { year: number; month: number; day: number; hour: number; minute: number };

function offsetMinutes(date: Date, timeZone: string): number {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second),
  );
  return Math.round((asUtc - date.getTime()) / 60000);
}

function wallParts(date: Date, timeZone: string): Wall {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour) % 24,
    minute: Number(parts.minute),
  };
}

function sameWall(left: Wall, right: Wall): boolean {
  return left.year === right.year && left.month === right.month && left.day === right.day && left.hour === right.hour && left.minute === right.minute;
}

function formatOffset(minutes: number): string {
  const sign = minutes >= 0 ? "+" : "-";
  const absolute = Math.abs(minutes);
  const hours = String(Math.floor(absolute / 60)).padStart(2, "0");
  const mins = String(absolute % 60).padStart(2, "0");
  return `UTC${sign}${hours}:${mins}`;
}

function formatWall(date: Date, timeZone: string): string {
  const wall = wallParts(date, timeZone);
  const month = String(wall.month).padStart(2, "0");
  const day = String(wall.day).padStart(2, "0");
  const hour = String(wall.hour).padStart(2, "0");
  const minute = String(wall.minute).padStart(2, "0");
  return `${wall.year}-${month}-${day} ${hour}:${minute}`;
}

function instantsForWall(wall: Wall, timeZone: string): number[] {
  const guess = Date.UTC(wall.year, wall.month - 1, wall.day, wall.hour, wall.minute, 0);
  const base = offsetMinutes(new Date(guess), timeZone);
  const found = new Set<number>();
  for (const extra of [-120, -60, 0, 60, 120]) {
    const instant = guess - (base + extra) * 60000;
    if (sameWall(wallParts(new Date(instant), timeZone), wall)) found.add(instant);
  }
  return [...found].sort((left, right) => left - right);
}

export function listTimeZones(): string[] {
  return Intl.supportedValuesOf("timeZone");
}

export function convertTimeZone(input: {
  dateRaw: string;
  timeRaw: string;
  sourceZone: string;
  targetZone: string;
}): TimeZoneResult {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.dateRaw) || !/^\d{2}:\d{2}$/.test(input.timeRaw)) {
    return { ok: false, error: "Enter a date as YYYY-MM-DD and a time as HH:MM." };
  }
  const [year, month, day] = input.dateRaw.split("-").map(Number);
  const [hour, minute] = input.timeRaw.split(":").map(Number);
  const probe = new Date(Date.UTC(year, month - 1, day));
  if (probe.getUTCFullYear() !== year || probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day || hour > 23 || minute > 59) {
    return { ok: false, error: "Enter a valid date and time." };
  }

  const zones = new Set(listTimeZones());
  if (!zones.has(input.sourceZone) || !zones.has(input.targetZone)) {
    return { ok: false, error: "Choose a time zone from the list." };
  }

  const matches = instantsForWall({ year, month, day, hour, minute }, input.sourceZone);
  if (matches.length === 0) {
    return {
      ok: false,
      error: "That local time does not exist in the source time zone because clocks spring forward.",
    };
  }

  const instant = new Date(matches[0]);
  return {
    ok: true,
    sourceZone: input.sourceZone,
    targetZone: input.targetZone,
    sourceDateTime: formatWall(instant, input.sourceZone),
    targetDateTime: formatWall(instant, input.targetZone),
    sourceOffset: formatOffset(offsetMinutes(instant, input.sourceZone)),
    targetOffset: formatOffset(offsetMinutes(instant, input.targetZone)),
    ambiguous: matches.length > 1,
  };
}
