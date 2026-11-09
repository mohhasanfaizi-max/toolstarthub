import { Icon } from "@/components/icons/Icon";
import type { CategoryAccent } from "@/lib/category-accents";
import { cn } from "@/lib/cn";

export function ToolCardChecks({
  items,
  accent,
}: {
  items: string[];
  accent: CategoryAccent;
}) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-[13px] leading-5 text-[#3d4f66] dark:text-muted-foreground"
        >
          <span
            className={cn(
              "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full text-white",
              accent.solid,
            )}
          >
            <Icon name="check" className="size-2.5 text-white" strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
