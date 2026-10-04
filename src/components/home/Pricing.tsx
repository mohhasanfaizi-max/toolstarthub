import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";

export function Pricing({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
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
        {t.pricingTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
        {t.pricingBody}
      </p>
    </Section>
  );
}
