import Link from "next/link";

const aiSlugs = new Set([
  "ai-prompt-generator",
  "prompt-to-image",
  "prompt-to-video",
  "ai-article-detector",
  "ai-article-compressor",
]);

export function ToolPrivacyNote({ slug }: { slug?: string }) {
  const usesGemini = slug ? aiSlugs.has(slug) : false;
  return (
    <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
      {usesGemini
        ? "The original buttons stay in your browser. Generate with AI, Analyze with AI, and Compress with AI send the text you submit to Google's Gemini API through ToolStarHub. That text is not saved here. On the free tier, Google may use it to improve its products. Favorites store only tool names."
        : "This tool runs in your browser. Inputs, files and generated values stay on this device. Favorites and recently used tools, if you use them, store only tool names in local storage — never passwords, documents or QR contents."}{" "}
      See the{" "}
      <Link href="/privacy" className="font-medium text-accent hover:underline">
        privacy policy
      </Link>
      .
    </p>
  );
}
