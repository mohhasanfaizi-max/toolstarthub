import { buildLlmsTxt } from "@/lib/llms";

// Rebuilt at most hourly so newly scheduled guides appear without a deploy.
export const revalidate = 3600;

export function GET() {
  return new Response(buildLlmsTxt(new Date()), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
