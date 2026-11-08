// Comments are enabled only when a database URL is configured.
export function databaseUrl(): string | undefined {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_DATABASE_URL || process.env.STORAGE_POSTGRES_URL || undefined;
}

export function commentsEnabled(): boolean {
  return Boolean(databaseUrl());
}

export function adminPassword(): string | undefined {
  return process.env.ADMIN_PASSWORD || undefined;
}

/** Secret for hashing IPs; falls back to other server-only secrets. */
export function ipSalt(): string {
  return process.env.COMMENTS_IP_SALT || process.env.ADMIN_PASSWORD || databaseUrl() || "tsh";
}

export const PAGE_SIZE = 10;
export const RATE_LIMIT = { comments: 3, windowMinutes: 10 };
export const LOGIN_LIMIT = { attempts: 5, windowMinutes: 15 };
