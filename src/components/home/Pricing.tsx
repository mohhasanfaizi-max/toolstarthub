import { Section } from "@/components/ui/Section";

export function Pricing() {
  return (
    <Section
      id="pricing"
      className="scroll-mt-20 !py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="pricing-heading"
    >
      <h2
        id="pricing-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Pricing
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
        The tools are free to use. There is no account, no installation, and no
        paid plan.
      </p>
    </Section>
  );
}
