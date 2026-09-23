import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export function FinalCTA() {
  return (
    <Section className="!pb-16 !pt-2 sm:!pb-20">
      <div className="rounded-xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Ready to get things done faster?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground">
          Explore {siteConfig.name}&apos;s collection of simple online tools.
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href="/tools" size="lg" className="home-btn">
            Explore All Tools
          </Button>
          <Button href="/tools/pdf-to-jpg" variant="secondary" size="lg" className="home-btn">
            Try a Tool
          </Button>
        </div>
      </div>
    </Section>
  );
}
