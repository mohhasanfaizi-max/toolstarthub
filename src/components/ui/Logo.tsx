import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

/** Visible header wordmark — Ali's gradient styling. */
export const HEADER_WORDMARK = "Tools Star Hub";

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
        "inline-flex items-center gap-2 rounded-lg",
        inverted ? "text-white" : "text-foreground",
        className,
      )}
      aria-label={label}
    >
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground"
        aria-hidden="true"
      >
        T
      </span>
      {inverted ? (
        // Footer / dark surfaces: keep the existing site name styling.
        <span
          className={cn(
            "whitespace-nowrap font-semibold tracking-tight max-[359px]:sr-only",
            compact ? "text-sm" : "text-lg",
          )}
        >
          {siteConfig.name}
        </span>
      ) : (
        <span
          className={cn(
            "gradient-text max-[359px]:sr-only",
            // Slightly smaller on narrow phones so it fits beside header actions.
            compact && "gradient-text--compact",
          )}
        >
          {HEADER_WORDMARK}
        </span>
      )}
    </Link>
  );
}
