import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/data/types";
import type { CategoryAccent } from "@/lib/category-accents";
import { cn } from "@/lib/cn";

/** Decorative CSS mini-mockup inside tool cards. Purely visual; aria-hidden. */
export function ToolCardPreview({
  accent,
  icon,
}: {
  accent: CategoryAccent;
  icon: IconName;
}) {
  return (
    <div
      aria-hidden="true"
      className="mt-4 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_1px_2px_rgb(15_39_68/0.04)] dark:border-white/5 dark:bg-[#0f172a]/80"
    >
      <div className="mb-2.5 flex items-center gap-2">
        <span
          className={cn(
            "flex size-6 items-center justify-center rounded-md text-white",
            accent.solid,
          )}
        >
          <Icon name={icon} className="size-3.5 text-white" />
        </span>
        <span className={cn("h-2 w-20 rounded-full", accent.bar)} />
        <span className={cn("ms-auto h-2 w-8 rounded-full", accent.barMuted)} />
      </div>
      <div className="space-y-1.5">
        <span className={cn("block h-2 w-full rounded-full", accent.barMuted)} />
        <span className={cn("block h-2 w-[88%] rounded-full", accent.bar)} />
        <span className={cn("block h-2 w-[64%] rounded-full", accent.barMuted)} />
        <div className="flex gap-1.5 pt-1">
          <span className={cn("h-5 w-12 rounded-md", accent.bar)} />
          <span className={cn("h-5 w-10 rounded-md", accent.barMuted)} />
        </div>
      </div>
    </div>
  );
}
