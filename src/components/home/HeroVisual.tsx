import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/data/types";
import { cn } from "@/lib/cn";

type Mini = {
  title: string;
  subtitle: string;
  icon: IconName;
  tile: string;
  card: string;
  border: string;
  titleColor: string;
  className: string;
};

const minis: Mini[] = [
  {
    title: "Writing",
    subtitle: "Clean & rewrite",
    icon: "text",
    tile: "bg-[#2563eb]",
    card: "bg-[#eef4ff]",
    border: "border-[#b7cffc]",
    titleColor: "text-[#1d4ed8]",
    className: "start-0 top-2 -rotate-3",
  },
  {
    title: "Images",
    subtitle: "Compress & convert",
    icon: "image",
    tile: "bg-[#db2777]",
    card: "bg-[#fff0f5]",
    border: "border-[#f9b4d0]",
    titleColor: "text-[#be185d]",
    className: "end-0 top-6 rotate-3",
  },
  {
    title: "Calc",
    subtitle: "Everyday numbers",
    icon: "calculator",
    tile: "bg-[#0d9488]",
    card: "bg-[#ebf9fb]",
    border: "border-[#9ee3e8]",
    titleColor: "text-[#0f766e]",
    className: "bottom-4 start-4 rotate-2",
  },
  {
    title: "Dev",
    subtitle: "Format & encode",
    icon: "code",
    tile: "bg-[#ea580c]",
    card: "bg-[#fff3ea]",
    border: "border-[#fdc89a]",
    titleColor: "text-[#c2410c]",
    className: "bottom-2 end-2 -rotate-2",
  },
];

/**
 * Decorative floating pastel mini-cards around a central mark.
 * Purely visual (aria-hidden); CSS-only, no images.
 */
export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[28rem]"
    >
      {/* soft orbit rings */}
      <div className="absolute inset-[12%] rounded-full border border-[#cfe0f8]/80 dark:border-[#1e3a8a]/50" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-[#d7e4f6] dark:border-[#243044]" />

      {/* pastel blobs behind cards */}
      <div className="absolute start-[18%] top-[20%] size-24 rounded-full bg-[#bfdbfe]/50 blur-2xl dark:bg-[#1e3a8a]/40" />
      <div className="absolute end-[14%] top-[28%] size-20 rounded-full bg-[#fbcfe8]/50 blur-2xl dark:bg-[#9d174d]/30" />
      <div className="absolute bottom-[18%] start-[28%] size-24 rounded-full bg-[#bbf7d0]/45 blur-2xl dark:bg-[#166534]/30" />

      {minis.map((m) => (
        <div
          key={m.title}
          className={cn(
            "absolute w-[9.5rem] rounded-2xl border p-3 shadow-[0_8px_24px_rgb(15_39_68/0.08)]",
            m.card,
            m.border,
            m.className,
          )}
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-lg text-white",
                m.tile,
              )}
            >
              <Icon name={m.icon} className="size-4 text-white" />
            </span>
            <div className="min-w-0">
              <p className={cn("truncate text-sm font-extrabold", m.titleColor)}>
                {m.title}
              </p>
              <p className="truncate text-[11px] text-[#6b7c90]">{m.subtitle}</p>
            </div>
          </div>
          <div className="mt-2 space-y-1 rounded-xl bg-white/90 p-2 dark:bg-[#0f172a]/70">
            <span className={cn("block h-1.5 w-full rounded-full opacity-70", m.tile)} />
            <span className="block h-1.5 w-4/5 rounded-full bg-slate-200 dark:bg-slate-600" />
            <span className="block h-1.5 w-3/5 rounded-full bg-slate-100 dark:bg-slate-700" />
          </div>
        </div>
      ))}

      {/* central star / brand mark */}
      <div className="absolute left-1/2 top-1/2 flex size-[5.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.35rem] border border-[#cfe0f8] bg-white shadow-[0_12px_32px_rgb(37_99_235/0.18)] dark:border-[#1e3a8a] dark:bg-[#101827]">
        <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-xl font-extrabold text-white">
          T
        </span>
      </div>
    </div>
  );
}
