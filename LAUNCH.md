# ToolsTartHub launch checklist

Canonical domain: `https://toolstarhub.com`
Hosting: Vercel  
This file is a launch runbook. Domain assignment is done in the Vercel dashboard, not in the app.

## Codebase status

- 50 tools, no accounts, no database, no payments
- Canonical URLs, sitemap, robots, and JSON-LD default to `https://toolstarhub.com`
- Analytics and ads are **not** active

## Vercel

Vercel only creates a Production Deployment after it can build a Git commit on the production branch.

1. This project lives on GitHub at `https://github.com/mohhasanfaizi-max/toolstarthub` on the `main` branch.
2. In Vercel, import that GitHub repository.
3. Framework preset: Next.js. Build command: `npm run build`. Output: default.
4. Production branch: `main`.
5. Node.js: 20.x or newer (`package.json` engines: `>=20.9.0`).
6. Confirm a production deployment succeeds before attaching the domain.

Do not add extra rewrites, serverless functions, or regions unless you have a reason.

If Vercel shows **No Production Deployment**, the usual cause is that the production branch is not `main`, or GitHub is not connected to the Vercel project.

## Domain

1. In the Vercel project, add `toolstarhub.com` as the only production domain.
2. Do not add `www.toolstarhub.com`. The app does not redirect between hosts. `https://toolstarhub.com` must serve the deployment directly.
3. Apply the DNS records Vercel shows in the dashboard (typically an A record and/or CNAME). Exact values come from your Vercel account — they are not hardcoded here.
4. Wait until HTTPS shows as active.
5. Visit `https://toolstarhub.com` and confirm it serves the site without redirecting to another host.

Do not treat the domain as live until those records are actually configured and verified in Vercel.

## Environment variables

None are required to build or run.

Optional (set in Vercel Production only):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Override the canonical origin. Leave unset unless you need a non-production canonical. Default is `https://toolstarhub.com`. Do **not** point this at a preview URL for production. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token only. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional override for the mailbox on `/contact`. The page already lists the public phone number and mailbox from `src/lib/site.ts`. |

Redeploy after changing `NEXT_PUBLIC_*` values.

## After deploy, verify

From your machine, against production:

```bash
npm run verify:production -- https://toolstarhub.com
```

Manually open:

- `https://toolstarhub.com/`
- `/tools`, `/categories`, `/guides`
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`
- `/opengraph-image`
- `/privacy`, `/terms`, `/disclaimer`, `/contact`
- One calculator, one PDF tool, one image tool

Confirm HTTPS, no mixed-content warnings, and that page titles/canonicals use `toolstarhub.com`.

## Google Search Console (manual)

The codebase cannot log into Google for you.

1. Create a **URL-prefix** property for `https://toolstarhub.com`.
2. Verify ownership with either:
   - HTML tag: paste the token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy, or
   - HTML file: save the file Search Console provides into `/public` (example: `public/googleXXXXXXXX.html`) and redeploy.
3. Submit `https://toolstarhub.com/sitemap.xml`.
4. Request indexing for the homepage after the sitemap is accepted.

Do not invent a verification token in the repository.

## Social preview

Share `https://toolstarhub.com` in a debugger after HTTPS is live (Facebook Sharing Debugger, LinkedIn Post Inspector, or similar). The OG image is the `/opengraph-image` route (1200×630).

## Legal before traffic

- `/privacy` describes browser-local processing, localStorage keys, and the current absence of ads/analytics.
- `/contact` lists the public phone number and email. `NEXT_PUBLIC_CONTACT_EMAIL` replaces the default mailbox only when it is set.
- Do not claim “we collect nothing” or “100% private.”

## Cookies / consent

No cookie banner is shown because analytics and advertising are off. If you later enable a tracker or ads that store non-essential cookies, add a real consent flow for the jurisdictions that require it. Do not add a fake banner now.

## Advertising

`AdSlot` exists and currently renders nothing. Do not load AdSense or other ad scripts until you are ready, and never place ads inside private file/text inputs.

## Analytics

`trackEvent` is a no-op. If you later enable a privacy-conscious product analytics tool, collect only product events (tool opened, tool completed, category viewed, guide viewed). Never collect passwords, files, PDF contents, QR payloads, or pasted private text.

## Post-launch monitoring

Watch, without installing a new platform unless you choose to:

- Vercel deployment failures
- 404s and broken tool routes
- Browser/JavaScript errors
- Search Console coverage, sitemap, and Core Web Vitals
- Which tools get impressions/clicks
- Contact/email feedback

## First content (do not mass-publish)

Existing guides already cover percentages, age, images, PDFs, text cleanup, JSON, and UTM links. Next articles to write, in order, based on tools already on the site:

1. How to compress a PDF in the browser
2. How to extract text from a PDF
3. How to compare two pieces of text
4. How to minify CSS/JS without a build step

Do not create a content farm. Add a page only when it answers a real question and links to a live tool.

## Future tools (51+)

Do not add the next batch until you have search, usage, or support evidence. Expand to solve demonstrated needs, not to raise the tool count.
