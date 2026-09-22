import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  ariaLabelledby?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-14 sm:py-16 lg:py-20", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
