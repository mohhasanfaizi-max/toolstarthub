import Link from "next/link";
import { ToolSearch } from "@/components/tools/ToolSearch";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { getToolBySlug } from "@/data/tools";
import { siteConfig } from "@/lib/site";

const popularLinks = [
  { slug: "pdf-to-jpg", label: "PDF to JPG" },
  { slug: "image-compressor", label: "Image Compressor" },
  { slug: "word-counter", label: "Word Counter" },
  { slug: "qr-code-generator", label: "QR Code Generator" },
  { slug: "percentage-calculator", label: "Percentage Calculator" },
] as const;

const trustItems = [
  "Free to use",
  "No sign-up required",
  "Fast and easy",
  "Files stay in your browser",
];

export function Hero() {
  const popular = popularLinks.flatMap((item) => {
    const tool = getToolBySlug(item.slug);
    return tool ? [{ href: tool.route, label: item.label }] : [];
  });

  return (
    <section className="home-hero border-b border-border">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="home-enter mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-accent">{siteConfig.name}</p>
          <h1 className="mx-auto mt-3 max-w-[18ch] text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[2.375rem] md:text-[2.75rem] lg:text-5xl xl:text-6xl">
            Free Online Tools for Everyday Tasks
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Find a tool, use it, and get a result. {siteConfig.name} is a simple
            place for PDFs, images, calculations, and text, with no account.
          </p>
          <div className="home-search mt-8 text-left">
            <ToolSearch variant="hero" />
          </div>
          {popular.length > 0 ? (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
              <span className="font-medium text-foreground">Popular:</span>
              {popular.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2.5 py-1.5 text-muted-foreground hover:bg-card hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="size-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
