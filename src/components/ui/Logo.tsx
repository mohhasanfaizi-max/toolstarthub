import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
  href?: string;
  label?: string;
};

export function Logo({
  className,
  compact = false,
  inverted = false,
  href = "/",
  label = `${siteConfig.name} home`,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg",
        inverted ? "text-white" : "text-foreground",
        className,
      )}
      aria-label={label}
    >
      <span
        className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground"
        aria-hidden="true"
      >
        T
      </span>
      <span
        className={cn(
          "font-semibold tracking-tight max-[359px]:sr-only",
          compact ? "text-base" : "text-lg",
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
