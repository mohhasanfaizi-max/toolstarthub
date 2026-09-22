import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/icons/Icon";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/tools", label: "All Tools" },
  { href: "/tools?view=favorites", label: "Favorites" },
  { href: "/categories", label: "Categories" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-footer text-footer-foreground">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Fast, simple online tools for calculations, text, developers,
              images, SEO and everyday tasks.
            </p>
            <p className="mt-4 text-sm font-medium text-white/90">
              {siteConfig.footerTagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Categories</h2>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={category.route}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Legal</h2>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Social</p>
              <p className="mt-2 text-sm text-white/70">
                Profiles will be added here when they are available.
              </p>
              <div className="mt-3 flex gap-2" aria-hidden="true">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-white/15 text-white/50">
                  <Icon name="x" className="size-4" />
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-white/15 text-white/50">
                  <Icon name="github" className="size-4" />
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-white/15 text-white/50">
                  <Icon name="linkedin" className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
