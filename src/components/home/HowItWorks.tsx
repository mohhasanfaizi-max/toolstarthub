import { Section } from "@/components/ui/Section";
import { formatNumber, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";

export function HowItWorks({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  return (
    <Section
      id="how-it-works"
      className="scroll-mt-20 !bg-muted !py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {t.howTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
        {t.howDescription}
      </p>
      <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {t.steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-xl border border-border bg-card p-5"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-foreground">
              {formatNumber(locale, index + 1)}
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
