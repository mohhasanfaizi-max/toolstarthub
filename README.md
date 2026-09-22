# ToolsTartHub

Fast, free, private online tools. No signup required.

This is the website for [www.toolstarhub.com](https://www.toolstarhub.com): App Router, TypeScript, Tailwind CSS, a centralized tool registry, and production-ready layout pages.

The canonical production URL is `https://www.toolstarhub.com`. The root domain `https://toolstarhub.com` should redirect to the www host.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy on Vercel (GitLab)

Vercel creates a Production Deployment from Git. This app’s production branch is `main`.

1. Push this repository to GitLab (`main` branch).
2. In Vercel, import that GitLab project (or reconnect Git if the Vercel project already exists).
3. Framework Preset: Next.js. Build Command: `npm run build`. Output Directory: leave default.
4. Production Branch: `main`.
5. Environment variables are optional. Canonical URLs already default to `https://www.toolstarhub.com`.
6. Click Deploy. After a successful build, assign `www.toolstarhub.com` as the production domain and redirect `toolstarhub.com` to www.
