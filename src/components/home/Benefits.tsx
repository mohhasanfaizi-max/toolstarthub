import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/icons/Icon";
import { benefits } from "@/data/benefits";

export function Benefits() {
  return (
    <Section ariaLabelledby="benefits-heading">
      <h2
        id="benefits-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Why Use Our Tools?
      </h2>
      <p className="mt-2 max-w-xl text-muted-foreground">
        A lightweight collection of utilities designed to be useful immediately.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={benefit.icon} className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {benefit.title}
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
