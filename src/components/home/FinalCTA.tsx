import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section className="pb-20">
      <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)] px-6 py-12 text-center dark:bg-[linear-gradient(180deg,#15233d_0%,#101827_100%)] sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Find the right tool for your task
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Fast, simple and free online tools for everyday work.
        </p>
        <div className="mt-6">
          <Button href="/tools" size="lg">
            Explore All Tools
          </Button>
        </div>
      </div>
    </Section>
  );
}
