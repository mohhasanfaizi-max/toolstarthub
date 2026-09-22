import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Page not found",
  description: "That ToolsTartHub page does not exist. Browse tools or return home.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        That page does not exist on ToolsTartHub. Search the tools, pick a
        category, or go back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/tools" variant="secondary">
          Browse tools
        </Button>
        <Button href="/guides" variant="secondary">
          Read guides
        </Button>
      </div>
      <nav aria-label="Popular categories" className="mt-10">
        <p className="text-sm font-medium text-foreground">Categories</p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={category.route}
                className="inline-flex min-h-9 items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground hover:border-accent/40 hover:text-foreground"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
