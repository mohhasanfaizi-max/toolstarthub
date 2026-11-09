// Shared by next.config.ts (Vercel/Node) and the Cloudflare build/Worker.
// Content Security Policy.
// - 'unsafe-inline' scripts: Next.js inline bootstrap scripts, the theme and
//   consent-default scripts, and JSON-LD blocks (no nonces, pages are static).
// - 'wasm-unsafe-eval': WebAssembly used by the OCR and PDF tools.
// - googletagmanager / google-analytics: GA4, loaded only after consent.
// - Gemini is called server-side through /api/ai/generate and
//   /api/urdu-news-translator, so 'self' covers it.
// - img-src https:: the Open Graph preview tool shows remote share images.
export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' blob: data: https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.google.com",
  "worker-src 'self' blob:",
  "media-src 'self' blob: data:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

export const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(self), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
  },
];

/** Long-lived cache rules for static folders. */
export const cacheRules = [
  // HTML must revalidate so deploys never leave browsers on stale markup
  // that points at removed /_next/static/*.css hashes (unstyled page).
  {
    source: "/",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate, no-cache",
      },
    ],
  },
  {
    source: "/*.html",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate, no-cache",
      },
    ],
  },
  {
    source: "/tesseract/*",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ],
  },
  {
    source: "/pdfjs/*",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ],
  },
  {
    source: "/icons/*",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=86400",
      },
    ],
  },
];
