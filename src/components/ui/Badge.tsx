import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "muted" | "new";
};

export function Badge({ children, className, tone = "muted" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "muted" && "bg-muted text-muted-foreground",
        tone === "new" && "bg-accent text-accent-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
