-- Tool comments (also auto-created on first use by src/lib/comments/db.ts).
CREATE TABLE IF NOT EXISTS tool_comments (
  id BIGSERIAL PRIMARY KEY,
  tool_slug TEXT NOT NULL,
  name VARCHAR(60) NOT NULL,
  rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
  body VARCHAR(1000) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'removed')),
  ip_hash CHAR(64) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  moderated_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS tool_comments_public_idx ON tool_comments (tool_slug, status, created_at DESC);
CREATE INDEX IF NOT EXISTS tool_comments_ip_idx ON tool_comments (ip_hash, created_at DESC);

CREATE TABLE IF NOT EXISTS admin_login_attempts (
  ip_hash CHAR(64) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS admin_login_attempts_idx ON admin_login_attempts (ip_hash, created_at DESC);
