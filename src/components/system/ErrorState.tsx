import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry?: () => void;
  digest?: string;
};

export function ErrorState({
  title = "Something went wrong",
  description = "The page could not be loaded. You can try again, or go back to the tools.",
  onRetry,
  digest,
}: ErrorStateProps) {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-medium text-accent">Error</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">{description}</p>
      {digest ? (
        <p className="mt-3 text-xs text-muted-foreground">Reference {digest}</p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {onRetry ? (
          <Button type="button" onClick={onRetry}>
            Try again
          </Button>
        ) : null}
        <Button href="/" variant={onRetry ? "secondary" : "primary"}>
          Go home
        </Button>
        <Button href="/tools" variant="secondary">
          Browse tools
        </Button>
      </div>
    </Container>
  );
}
