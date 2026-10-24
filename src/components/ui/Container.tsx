import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  /** Skip the page column width. Used by the header so the nav can stay on one line. */
  fullWidth?: boolean;
};

export function Container({
  children,
  className,
  as: Component = "div",
  fullWidth = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        fullWidth
          ? "mx-auto w-full px-4 sm:px-6 lg:px-8"
          : "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
