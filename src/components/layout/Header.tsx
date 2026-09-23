import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header shadow-[0_1px_2px_rgb(15_39_68/0.05)]">
      <Container className="flex h-16 items-center gap-3">
        <Logo compact />
        <HeaderNav />
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <HeaderSearch />
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href="/tools" size="sm">
              Get Started
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
