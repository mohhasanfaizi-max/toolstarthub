import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header">
      <Container className="relative flex h-16 items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-8">
          <Logo compact />
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <HeaderSearch />
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
