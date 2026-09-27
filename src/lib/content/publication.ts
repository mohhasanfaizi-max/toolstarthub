export const ARTICLE_STATUSES = [
  "DRAFT",
  "READY",
  "SCHEDULED",
  "PUBLISHED",
  "PAUSED",
] as const;

export type ArticleStatus = (typeof ARTICLE_STATUSES)[number];

type SchedulableArticle = {
  status: ArticleStatus;
  publishAt?: string;
};

const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

export type PublishSchedule = {
  timezone: string;
  slots: [string, string];
};

export function isArticleStatus(value: string): value is ArticleStatus {
  return (ARTICLE_STATUSES as readonly string[]).includes(value);
}

export function publishSchedule(
  env: Record<string, string | undefined> = process.env,
): PublishSchedule {
  const timezone = env.ARTICLE_PUBLISH_TIMEZONE?.trim() || "UTC";
  const parsed = (env.ARTICLE_PUBLISH_SLOTS ?? "09:00,18:00")
    .split(",")
    .map((slot) => slot.trim())
    .filter((slot) => TIME_PATTERN.test(slot));
  const slots: [string, string] =
    parsed.length >= 2 ? [parsed[0], parsed[1]] : ["09:00", "18:00"];
  return { timezone, slots };
}

export function isPubliclyVisible(article: SchedulableArticle, now: Date): boolean {
  if (article.status === "PAUSED" || article.status === "DRAFT" || article.status === "READY") {
    return false;
  }
  if (article.publishAt) {
    const publishAt = new Date(article.publishAt);
    if (Number.isNaN(publishAt.getTime()) || publishAt.getTime() > now.getTime()) {
      return false;
    }
  }
  if (article.status === "PUBLISHED") return true;
  return article.status === "SCHEDULED" && Boolean(article.publishAt);
}

export function zonedDateTimeToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string,
): Date {
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(utcGuess);
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const zonedAsUtc = Date.UTC(
    value("year"),
    value("month") - 1,
    value("day"),
    value("hour"),
    value("minute"),
    value("second"),
  );
  return new Date(utcGuess.getTime() - (zonedAsUtc - utcGuess.getTime()));
}

export function publicationInstantForQueueIndex(
  index: number,
  anchorDate: string,
  schedule: PublishSchedule = publishSchedule(),
): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(anchorDate);
  if (!match || index < 0 || !Number.isInteger(index)) {
    throw new Error("Queue scheduling needs a non-negative index and a YYYY-MM-DD anchor date.");
  }
  const dayOffset = Math.floor(index / schedule.slots.length);
  const slot = schedule.slots[index % schedule.slots.length];
  const [hour, minute] = slot.split(":").map(Number);
  const anchor = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  anchor.setUTCDate(anchor.getUTCDate() + dayOffset);
  return zonedDateTimeToUtc(
    anchor.getUTCFullYear(),
    anchor.getUTCMonth() + 1,
    anchor.getUTCDate(),
    hour,
    minute,
    schedule.timezone,
  );
}
