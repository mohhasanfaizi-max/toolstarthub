import { HomeHeading } from "@/components/home/HomeHeading";
import { Icon } from "@/components/icons/Icon";
import { Section } from "@/components/ui/Section";
import { benefits } from "@/data/benefits";
import type { IconName } from "@/data/types";
import { formatMessage, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

const valueKeys = [
  { key: "fast", title: "Fast" },
  { key: "free", title: "Free" },
  { key: "private", title: "Private" },
  { key: "noAccount", title: "No Signup" },
] as const;

export function Benefits({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  const values = valueKeys.flatMap(({ key, title }) => {
    const benefit = benefits.find((item) => item.title === title);
    return benefit ? [{ key, icon: benefit.icon, ...t.values[key] }] : [];
  });

  return (
    <Section
      className="!py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="benefits-heading"
    >
      <HomeHeading
        id="benefits-heading"
        title={formatMessage(t.whyTitle, { name: siteConfig.name })}
        description={t.whyDescription}
      />
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <li
            key={value.key}
            className="rounded-xl border border-border bg-card p-5"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Icon name={value.icon as IconName} className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {value.note}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
