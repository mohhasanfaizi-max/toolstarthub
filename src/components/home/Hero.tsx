import Link from "next/link";
import { ToolSearch } from "@/components/tools/ToolSearch";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { getToolBySlug } from "@/data/tools";
import { siteConfig } from "@/lib/site";

const shortcutSlugs = [
  "pdf-to-jpg",
  "pdf-to-text",
  "image-compressor",
  "markdown-to-html",
] as const;

const trustItems = [
  "Free to start",
  "No installation",
  "Fast browser tools",
  "Privacy focused",
];

export function Hero() {
  const shortcuts = shortcutSlugs.flatMap((slug) => {
    const tool = getToolBySlug(slug);
    return tool ? [tool] : [];
  });

  return (
    <section className="border-b border-border bg-background">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="home-enter mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            Powerful online tools. Simple, fast, and free.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {siteConfig.name} converts PDFs, compresses images, calculates
            everyday figures, and formats text or code in the browser. No
            installation and no account.
          </p>
          <div className="home-search mt-8 text-left">
            <ToolSearch variant="hero" placeholder="What do you want to do?" />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {shortcuts.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.route}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent/40 hover:bg-accent-soft"
              >
                {tool.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/tools" size="lg" className="home-btn">
              Explore All Tools
            </Button>
            <Button
              href="/tools/pdf-to-jpg"
              variant="secondary"
              size="lg"
              className="home-btn"
            >
              Try a Tool
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="size-4 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
