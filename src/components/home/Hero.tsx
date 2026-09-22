import { ToolSearch } from "@/components/tools/ToolSearch";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#101827_0%,#0b1220_100%)]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {siteConfig.shortDescription}
          </p>
          <div className="mt-8">
            <ToolSearch variant="hero" />
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {siteConfig.positioning.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
