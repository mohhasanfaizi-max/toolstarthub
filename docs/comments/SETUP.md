# Tool comments — setup for Ali

Comments stay switched off ("Comments coming soon") until a database is connected.
Nothing breaks without it.

## Which Vercel project
The project that serves www.toolstarhub.com (preview URLs look like
`toolstarthub-z541-git-<branch>-tools-star.vercel.app`, so the project is
**toolstarthub-z541** in the **tools-star** team). Check it under
Project > Settings > Domains: `www.toolstarhub.com` should be listed.

## Steps
1. Vercel dashboard → project **toolstarthub-z541** → **Storage** tab → **Create Database** (or Connect Store).
2. Choose **Neon** (Serverless Postgres) from the Marketplace → accept → pick the free plan and a region close to your users (e.g. Frankfurt or Singapore).
3. Connect it to this project for **Production** and **Preview** environments. Keep the default env var prefix so it creates `DATABASE_URL` (the code also accepts `POSTGRES_URL`).
4. Project → **Settings → Environment Variables** → add:
   - `ADMIN_PASSWORD` = a long random password (20+ characters). Production (and Preview if you want to moderate there).
   - Optional: `COMMENTS_IP_SALT` = another long random string (used to hash IPs; if absent, ADMIN_PASSWORD is used, and changing it resets rate-limit history only).
5. **Deployments** → latest Production deployment → **⋯ → Redeploy** (env vars only apply to new deployments).
6. Open `https://www.toolstarhub.com/admin/comments`, sign in with `ADMIN_PASSWORD`.

The tables are created automatically on first use. `db/001_tool_comments.sql` is the same schema if you prefer to run it yourself in Neon's SQL editor.

## Moderation
- New comments are **pending** and not public.
- **Approve** → shows on the tool page (newest first, 10 per page).
- **Remove** → hidden (soft delete). In the **removed** tab: **Restore to pending** or **Delete permanently**.
- Removal requests from visitors arrive via /contact (privacy page says so).

## Protections
Honeypot field, minimum 3 s fill time, max 1 link, length limits (name 60, comment 1000),
3 comments per IP per 10 minutes, IP stored only as a keyed hash, admin login limited
to 5 failed tries per 15 minutes, HTTP-only SameSite=Strict signed session cookie (8 h),
same-origin check on admin actions. /admin is noindex and disallowed in robots.txt; not in the sitemap.
