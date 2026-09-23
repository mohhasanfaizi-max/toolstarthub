import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

type HomeHeadingProps = {
  id: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export function HomeHeading({
  id,
  title,
  description,
  href,
  linkLabel,
}: HomeHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <h2
          id={id}
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          {linkLabel}
          <Icon name="arrow-right" className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
