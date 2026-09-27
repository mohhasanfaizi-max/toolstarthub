export type CronResult = { ok: true; expression: string; summary: string } | { ok: false; error: string };

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type CronField =
  | { kind: "any" }
  | { kind: "value"; value: number }
  | { kind: "range"; start: number; end: number }
  | { kind: "step"; step: number }
  | { kind: "list"; values: number[] };

const FIELDS = [
  { name: "minute", min: 0, max: 59 },
  { name: "hour", min: 0, max: 23 },
  { name: "day of month", min: 1, max: 31 },
  { name: "month", min: 1, max: 12 },
  { name: "day of week", min: 0, max: 6 },
] as const;

function fieldError(name: string, min: number, max: number): string {
  return `Enter a ${name} from ${min} to ${max}, a range, a list, a star, or a star step.`;
}

function parseField(raw: string, name: string, min: number, max: number): { ok: true; field: CronField } | { ok: false; error: string } {
  const token = raw.trim();
  if (token === "*") return { ok: true, field: { kind: "any" } };

  const step = /^\*\/(\d+)$/.exec(token);
  if (step) {
    const value = Number(step[1]);
    if (value < 1 || value > max) return { ok: false, error: `${capitalize(name)} step must be from 1 to ${max}.` };
    return { ok: true, field: { kind: "step", step: value } };
  }

  const range = /^(\d+)-(\d+)$/.exec(token);
  if (range) {
    const start = Number(range[1]);
    const end = Number(range[2]);
    if (start < min || start > max || end < min || end > max) {
      return { ok: false, error: `${capitalize(name)} ${start}-${end} is outside ${min} to ${max}.` };
    }
    if (start > end) return { ok: false, error: `The ${name} range must start at or before it ends.` };
    return { ok: true, field: { kind: "range", start, end } };
  }

  const list = /^(\d+)(,\d+)+$/.exec(token);
  if (list) {
    const values = token.split(",").map((part) => Number(part));
    if (values.length > 12) return { ok: false, error: `Use at most 12 ${name} values in a list.` };
    if (values.some((value) => value < min || value > max)) {
      return { ok: false, error: `A ${name} list value is outside ${min} to ${max}.` };
    }
    return { ok: true, field: { kind: "list", values } };
  }

  if (/^\d+$/.test(token)) {
    const value = Number(token);
    if (value < min || value > max) return { ok: false, error: `${capitalize(name)} ${value} is outside ${min} to ${max}.` };
    return { ok: true, field: { kind: "value", value } };
  }

  return { ok: false, error: fieldError(name, min, max) };
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

function joinOr(values: string[]): string {
  if (values.length <= 1) return values[0] ?? "";
  if (values.length === 2) return `${values[0]} or ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, or ${values[values.length - 1]}`;
}

function describe(field: CronField, dayNames = false): string {
  if (field.kind === "any") return "any";
  if (field.kind === "value") return dayNames ? DAY_NAMES[field.value] ?? String(field.value) : String(field.value);
  if (field.kind === "range") {
    return dayNames
      ? `${DAY_NAMES[field.start]} through ${DAY_NAMES[field.end]}`
      : `${field.start} through ${field.end}`;
  }
  if (field.kind === "step") return `every ${field.step}`;
  const values = dayNames ? field.values.map((value) => DAY_NAMES[value] ?? String(value)) : field.values.map(String);
  return joinOr(values);
}

function isAny(field: CronField): field is { kind: "any" } {
  return field.kind === "any";
}

function clock(hour: CronField, minute: CronField): string | null {
  if (hour.kind !== "value" || minute.kind !== "value") return null;
  return `${pad(hour.value)}:${pad(minute.value)}`;
}

export function explainCron(expression: string): CronResult {
  const trimmed = expression.trim();
  if (trimmed === "") return { ok: false, error: "Enter a cron expression." };
  if (trimmed.length > 200) return { ok: false, error: "Enter a cron expression of 200 characters or fewer." };
  const parts = trimmed.split(/\s+/);
  if (parts.length !== 5) {
    return { ok: false, error: "Enter five cron fields: minute, hour, day of month, month, and day of week." };
  }

  const parsed: CronField[] = [];
  for (let index = 0; index < FIELDS.length; index += 1) {
    const spec = FIELDS[index];
    if (!spec) return { ok: false, error: "Enter a cron expression." };
    const field = parseField(parts[index] ?? "", spec.name, spec.min, spec.max);
    if (!field.ok) return field;
    parsed.push(field.field);
  }

  const [minute, hour, dayOfMonth, month, dayOfWeek] = parsed;
  if (!minute || !hour || !dayOfMonth || !month || !dayOfWeek) {
    return { ok: false, error: "Enter a cron expression." };
  }

  const time = clock(hour, minute);
  let summary: string;
  if (parsed.every(isAny)) summary = "Every minute.";
  else if (minute.kind === "step" && [hour, dayOfMonth, month, dayOfWeek].every(isAny)) summary = `Every ${minute.step} minutes.`;
  else if (minute.kind === "value" && [hour, dayOfMonth, month, dayOfWeek].every(isAny)) summary = `At minute ${minute.value} of every hour.`;
  else if (time && [dayOfMonth, month, dayOfWeek].every(isAny)) summary = `At ${time} every day.`;
  else if (time && isAny(dayOfMonth) && isAny(month) && dayOfWeek.kind === "value") summary = `At ${time} on ${DAY_NAMES[dayOfWeek.value]}.`;
  else if (time && isAny(dayOfMonth) && isAny(month) && dayOfWeek.kind === "range") {
    summary = `At ${time} on ${DAY_NAMES[dayOfWeek.start]} through ${DAY_NAMES[dayOfWeek.end]}.`;
  } else if (time && dayOfMonth.kind === "value" && isAny(month) && isAny(dayOfWeek)) {
    summary = `At ${time} on day ${dayOfMonth.value} of every month.`;
  } else {
    summary = `Minute ${describe(minute)}, hour ${describe(hour)}, day of month ${describe(dayOfMonth)}, month ${describe(month)}, day of week ${describe(dayOfWeek, true)}.`;
    if (!isAny(dayOfMonth) && !isAny(dayOfWeek)) {
      summary += " Day of month and day of week are both set. Cron treats that as either day, not both.";
    }
  }

  return { ok: true, expression: parts.join(" "), summary };
}

export function buildCron(minute: string, hour: string, dayOfMonth: string, month: string, dayOfWeek: string): CronResult {
  return explainCron([minute, hour, dayOfMonth, month, dayOfWeek].join(" "));
}
