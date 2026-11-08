# Cloudflare Workers hosting: free plan

## How it works
- **Pages.** `npm run cf:build` makes a Next.js static export of every page into `dist/cloudflare/static`. That covers HTML, OG/Twitter images, icons, robots.txt, sitemap.xml, llms*.txt and the manifest. Cloudflare serves it from Workers Static Assets. Static requests are free and unlimited, and they never run the Worker.
- **Build copy.** The export runs on a patched copy of the source in `.cf-export/` (see `scripts/cf/build-static.mjs`). The real `src/` and the Vercel build are unchanged.
- **Worker.** `cloudflare/worker.ts` serves only:
  - `/api/*`, using the same route handlers as Next;
  - `/admin/comments`, as plain HTML that posts to the same `/api/admin/*` routes;
  - `/tools` and `/<locale>/tools`, to add `noindex, nofollow` when there is a search, filter, sort or view query, matching `toolsMetadata()`.
- **Worker size.** About 190 KiB gzip. The free-plan limit is 3 MiB.
- **Headers and redirects.**
  - `_headers` is generated from `src/config/headers.mjs`. `next.config.ts` uses the same module.
  - `_redirects` sends a 308 for a trailing slash, like Next.
  - Unknown paths get `404.html` with a 404 status.
- **Database.** Comments use `postgres` over TCP (`cloudflare:sockets`, `nodejs_compat`) to Neon, with one client per request.

## Workers Builds (Cloudflare dashboard → Workers & Pages → Create → Import a repository)
- Build command: `npm run cf:build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Runtime variables. Add these under Settings → Variables and secrets, as Secrets:
- `DATABASE_URL`: the Neon pooled connection string. `POSTGRES_URL`, `STORAGE_DATABASE_URL` and `STORAGE_POSTGRES_URL` are also read.
- `ADMIN_PASSWORD`
- `GEMINI_API_KEY`
- Optional: `COMMENTS_IP_SALT`, `GEMINI_MODEL`, `AI_RATE_LIMIT_MAX`, `AI_RATE_LIMIT_WINDOW_MS`

Build variables. Add these under Settings → Build → Variables; they are baked into the pages:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## Local
```
npm run cf:build
printf 'DATABASE_URL=postgres://...\nADMIN_PASSWORD=...\n' > .dev.vars
npx wrangler dev
npx wrangler deploy --dry-run --outdir /tmp/cfw   # prints the worker size
```

## Things to know
- **Guides are fixed at build time.** On Vercel, guides and the sitemap are rendered per request so a scheduled guide appears at its publishAt time. Here a scheduled guide appears only after the next build (push to GitHub, or Retry build in the dashboard). No guide is scheduled today.
- **Free limits:**
  - 100k Worker requests a day. Only API, admin and /tools index requests count.
  - 10 ms CPU per request. The API routes mostly wait on I/O (Open Food Facts, Gemini, Postgres), which does not count toward CPU.
  - 20,000 static files. About 14.5k are used now.
- **Rate limits.** The AI rate limits are kept in memory, so on Workers each isolate counts separately. They are looser than on a single Node server.
