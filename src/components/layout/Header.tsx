import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header/95 backdrop-blur-sm">
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
        <Logo compact />
        <div className="justify-self-center">
          <HeaderNav />
        </div>
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <HeaderSearch />
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button href="/tools" size="sm">
              Explore Tools
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
