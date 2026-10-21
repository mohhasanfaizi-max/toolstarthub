# Urdu News Translator

The tool is public. It has no password. It reuses the Gemini client already on this site.

## Vercel environment

Ali does not add a new key name. The route reads the existing variables:

| Variable | Required | Notes |
|---|---|---|
| `GEMINI_API_KEY` | Yes, for translation to run | Same server-only key the other AI buttons use. If it is already set in Vercel, leave it. Never use `NEXT_PUBLIC_GEMINI_API_KEY`. |
| `GEMINI_MODEL` | No | Optional model override. When unset, the server uses `gemini-3.5-flash-lite`. |

If `GEMINI_API_KEY` is missing, the page still builds and renders. The tool shows “temporarily unavailable” and does not call Gemini.

The article text is not logged and is not stored. There is no database.

Humanize rewrites only the news body, or the expanded body. It does not write the title, subtitle, permalink, meta title, or meta description into that text. Those stay in their own fields, and each field has its own copy button. Copy all, after approval, is the labeled package.

## Rate limit

`/api/urdu-news-translator` allows about 20 requests per 15 minutes per IP. The counter is in memory on each server instance, so it is best-effort and resets when that instance restarts. It stores a count and a reset time, not the article. This limit is fixed in code. It is separate from the other AI buttons, which stay at their own limit.
