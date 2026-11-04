import Link from "next/link";
import { getArticleBySlug } from "@/data/articles";
import { getGuideContent } from "@/data/guide-content";
import { getGuidesByCategory, getGuidesForTool } from "@/data/guides";
import type { Guide } from "@/data/types";
import type { Tool } from "@/data/types";

/** Picks the main guide and up to 4 information articles for a tool. */
export function getLearnMoreGuides(tool: Tool, relatedToolSlugs: string[]) {
  const forTool = getGuidesForTool(tool.slug);
  const own = forTool.filter((g) => getArticleBySlug(g.slug)?.toolSlug === tool.slug);
  const pool: Guide[] = [];
  const seen = new Set<string>();
  const push = (g: Guide) => {
    if (!seen.has(g.slug)) {
      seen.add(g.slug);
      pool.push(g);
    }
  };
  own.forEach(push);
  forTool.forEach(push);
  for (const s of relatedToolSlugs) getGuidesForTool(s).forEach(push);
  getGuidesByCategory(tool.category).forEach(push);
  const [main, ...rest] = pool;
  return { main, hasOwn: own.length > 0, articles: rest.slice(0, 4) };
}

function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:]$/, "") + "…";
}

const card =
  "min-w-0 rounded-2xl border-2 border-[#C9A227] bg-[#FBF8EC] p-5 sm:p-6 dark:border-[#A8841A] dark:bg-[#1f1a0c]";

export function ToolLearnMore({
  tool,
  topic,
  relatedToolSlugs,
}: {
  tool: Tool;
  topic: string;
  relatedToolSlugs: string[];
}) {
  const { main, hasOwn, articles } = getLearnMoreGuides(tool, relatedToolSlugs);
  if (!main) return null;
  const faqs = (getGuideContent(main.slug)?.faqs ?? []).slice(0, 5);

  return (
    <section aria-labelledby="learn-more-heading" className="mt-12">
      <h2 id="learn-more-heading" className="text-2xl font-semibold tracking-tight text-foreground">
        Learn more about {topic}
      </h2>
      <div className={`mt-6 grid gap-6 ${articles.length > 0 ? "lg:grid-cols-2" : ""}`}>
        <article className={card} aria-labelledby="learn-more-guide">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#A8841A] dark:text-[#D4AF37]">
            {hasOwn ? "Guide + FAQs" : "Related guide + FAQs"}
          </p>
          <h3 id="learn-more-guide" className="mt-2 break-words text-lg font-semibold text-foreground">
            {main.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{clamp(main.description, 240)}</p>
          <Link
            href={main.route}
            className="mt-4 inline-flex items-center rounded-xl bg-[#C9A227] px-4 py-2 text-sm font-semibold text-[#1a1405] hover:bg-[#A8841A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8841A]"
          >
            Read full guide<span className="sr-only">: {main.title}</span>
          </Link>
          {faqs.length > 0 ? (
            <div className="mt-5 space-y-2">
              {faqs.map((f) => (
                <details
                  key={f.question}
                  className="group rounded-xl border border-[#C9A227]/50 bg-white px-4 py-3 dark:bg-[#141108]"
                >
                  <summary className="cursor-pointer break-words text-sm font-medium text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A8841A]">
                    {f.question}
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.answer}</p>
                </details>
              ))}
            </div>
          ) : null}
        </article>
        {articles.length > 0 ? (
          <div className={card}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#A8841A] dark:text-[#D4AF37]">
              Information articles
            </h3>
            <ul className="mt-4 space-y-3">
              {articles.map((g) => (
                <li key={g.slug} className="rounded-xl border border-[#C9A227]/40 bg-[#F7F0D8] p-4 dark:bg-[#141108]">
                  <p className="break-words font-semibold text-foreground">{g.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">{g.description}</p>
                  <Link
                    href={g.route}
                    className="mt-2 inline-block text-sm font-semibold text-[#8a6c12] underline-offset-2 hover:underline dark:text-[#D4AF37]"
                  >
                    Read<span className="sr-only">: {g.title}</span> →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
