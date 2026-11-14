import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolsCatalog } from "@/components/tools/ToolsCatalog";
import { ToolCard } from "@/components/tools/ToolCard";
import type { Tool } from "@/data/types";
import { localizePath, type Locale } from "@/i18n/config";
import { getMessages, getTools } from "@/i18n/server";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { collectionPageJsonLd } from "@/lib/structured-data";
import { toolsIndexMetaDescription } from "@/data/page-meta";
import { categories } from "@/data/categories";
import { ToolsStatsStrip } from "@/components/tools/ToolsStatsStrip";

type SearchParams = Record<string, string | string[] | undefined>;

export function toolsMetadata(locale: Locale, params: SearchParams) {
  const t = getMessages(locale).meta;
  const hasDiscoveryQuery = Boolean(
    params.q ||
    (params.filter && params.filter !== "all") ||
    (params.sort && params.sort !== "name") ||
    params.view,
  );
  return createPageMetadata({
    title: t.toolsTitle,
    description: locale === "en" ? toolsIndexMetaDescription : t.toolsDescription,
    path: "/tools",
    noIndex: hasDiscoveryQuery,
    locale,
    hreflang: true,
    shareImage: { route: "/tools", alt: t.toolsTitle },
  });
}

function ToolsFallback({ tools }: { tools: Tool[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} headingAs="h2" />
      ))}
    </div>
  );
}

export function ToolsView({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const b = messages.breadcrumbs;
  const tools = getTools(locale);
  const home = localizePath("/", locale);
  const toolsPath = localizePath("/tools", locale);
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: b.home, path: home },
          { name: b.tools, path: toolsPath },
        ])}
      />
      <JsonLd
        data={collectionPageJsonLd({
          name: messages.toolsPage.title,
          description: messages.meta.toolsDescription,
          path: toolsPath,
          locale,
          items: tools.map((tool) => ({ name: tool.name, path: tool.route })),
        })}
      />
      <Breadcrumbs
        label={b.label}
        items={[{ name: b.home, href: home }, { name: b.tools }]}
      />
      <PageHeader
        className="mt-6"
        title={messages.toolsPage.title}
        description={messages.toolsPage.description}
      />
      <ToolsStatsStrip
        locale={locale}
        toolCount={tools.length}
        categoryCount={categories.length}
      />
      {locale === "en" || locale === "es" ? (
        <section aria-labelledby="security-privacy-tools" className="mt-8 rounded-2xl border border-border bg-muted/40 px-4 py-4 sm:px-5">
          <h2 id="security-privacy-tools" className="text-base font-semibold text-foreground">
            {locale === "es" ? "Herramientas de seguridad y privacidad" : "Security and privacy tools"}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            {locale === "es"
              ? "Crea una contraseña o frase segura, comprueba una que ya uses, genera un código QR o calcula un hash, todo en tu navegador. El generador de contraseñas es una herramienta de contraseñas, no un gestor ni una bóveda cifrada. Para guardarlas, usa un gestor de confianza; el registro offline gratuito solo sirve como un control privado de cuentas y pistas."
              : "Create a secure password or passphrase, check a password you already use, make a QR code, or hash text — all in your browser. The password generator is a password tool, not a password manager or encrypted vault. Prefer a reputable manager for storage, and use the free offline password log only as a private tracker of accounts and hints."}
          </p>
        </section>
      ) : null}
      <div className="mt-8">
        <Suspense fallback={<ToolsFallback tools={tools} />}>
          <ToolsCatalog tools={tools} />
        </Suspense>
      </div>
    </Container>
  );
}
