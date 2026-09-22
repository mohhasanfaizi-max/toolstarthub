import { cn } from "@/lib/cn";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </header>
  );
}
