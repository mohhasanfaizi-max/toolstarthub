export function SkipLink({
  label = "Skip to main content",
}: {
  label?: string;
}) {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
    >
      {label}
    </a>
  );
}
