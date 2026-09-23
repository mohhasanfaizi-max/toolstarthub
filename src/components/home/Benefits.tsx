import { HomeHeading } from "@/components/home/HomeHeading";
import { Icon } from "@/components/icons/Icon";
import { Section } from "@/components/ui/Section";
import { benefits } from "@/data/benefits";
import type { IconName } from "@/data/types";
import { siteConfig } from "@/lib/site";

const valueTitles = ["Fast", "Free", "Private", "No Signup"] as const;

const valueNotes: Record<(typeof valueTitles)[number], string> = {
  Fast: "Most tools run in the browser and return a result on the same page.",
  Free: "The tools on this site do not require payment.",
  Private: "Where possible, files and data are processed on your device.",
  "No Signup": "Open a tool and use it. An account is not required.",
};

export function Benefits() {
  const values = valueTitles.flatMap((title) => {
    const benefit = benefits.find((item) => item.title === title);
    return benefit ? [{ ...benefit, description: valueNotes[title] }] : [];
  });

  return (
    <Section className="!py-14 sm:!py-16 lg:!py-20" ariaLabelledby="benefits-heading">
      <HomeHeading
        id="benefits-heading"
        title={`Why ${siteConfig.name}?`}
        description="A straightforward set of utilities for work you would otherwise do in a separate app."
      />
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((benefit) => (
          <li
            key={benefit.title}
            className="rounded-xl border border-border bg-card p-5"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Icon name={benefit.icon as IconName} className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {benefit.title === "No Signup" ? "No account" : benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
