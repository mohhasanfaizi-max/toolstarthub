/** Gold accent classes shared by the five tools added in November 2026. */
export const goldBtn =
  "inline-flex min-h-11 items-center justify-center rounded-xl bg-[#C9A227] px-4 py-2 text-sm font-semibold text-[#1f1a08] shadow-sm transition hover:bg-[#A8841A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:opacity-50";
export const goldGhost =
  "inline-flex min-h-11 items-center justify-center rounded-xl border border-[#C9A227]/60 bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-[#FBF8EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] dark:hover:bg-[#C9A227]/10 disabled:opacity-50";
export const goldTab = (active: boolean) =>
  `min-h-11 rounded-xl border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
    active ? "border-[#C9A227] bg-[#F7F0D8] font-semibold text-[#1f1a08]" : "border-border bg-background text-foreground hover:bg-[#FBF8EC] dark:hover:bg-[#C9A227]/10"
  }`;
export const goldCard = "rounded-2xl border border-[#C9A227]/40 bg-[#FBF8EC] px-4 py-4 text-[#1f1a08] dark:bg-[#C9A227]/10 dark:text-foreground";
