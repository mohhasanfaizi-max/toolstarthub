# Cloudflare Workers hosting (OpenNext)

Status: the build runs and works locally under `wrangler dev`, but the worker is
too big for the Workers Free plan.

- Measured with `npx wrangler deploy --dry-run`: about 33 MiB raw and **6.7 MiB gzip**.
- Free plan limit: 3 MiB gzip. Paid plan limit: 10 MiB gzip.
- The site's own server code (tool data, articles, translations) is about 4.4 MiB gzip
  by itself, so trimming the dependencies cannot get it under 3 MiB.

## Commands
- `npm run cf:build`: runs `opennextjs-cloudflare build`, which writes the output to `.open-next/`.
- `npm run cf:preview`: builds, then serves locally on workerd.
- `npm run cf:deploy`: builds, then deploys.
- Workers Builds settings:
  - build command: `npx opennextjs-cloudflare build`
  - deploy command: `npx opennextjs-cloudflare deploy`

## Variables
Set these as runtime variables or secrets on the Worker:
- `DATABASE_URL`: the Neon pooled URL. `POSTGRES_URL`, `STORAGE_DATABASE_URL` and `STORAGE_POSTGRES_URL` are also accepted.
- `ADMIN_PASSWORD`
- `COMMENTS_IP_SALT` (optional)
- `GEMINI_API_KEY`
- `GEMINI_MODEL` (optional)
- `AI_RATE_LIMIT_MAX` (optional)
- `AI_RATE_LIMIT_WINDOW_MS` (optional)

Set these as build variables, because they are inlined at build time:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

For local runs, put secrets in `.dev.vars`. That file is git-ignored.

## Notes
- No R2, KV or D1 is used. Pages are prerendered and served from static assets.
- OG images use an embedded font, because Workers has no filesystem.
- Comments use `postgres` over TCP (`nodejs_compat`), with one client per request on Workers.
