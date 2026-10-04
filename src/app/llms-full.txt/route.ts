import { buildLlmsFullTxt } from "@/lib/llms";

// Rebuilt at most hourly so newly scheduled guides appear without a deploy.
export const revalidate = 3600;

export function GET() {
  return new Response(buildLlmsFullTxt(new Date()), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      // The same text is on the HTML pages; keep this copy out of search results.
      "X-Robots-Tag": "noindex",
    },
  });
}
