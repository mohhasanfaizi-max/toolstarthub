import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "All Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/#popular-tools", label: "Popular Tools" },
  { href: "/about", label: "About" },
];

export function HeaderNav() {
  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
