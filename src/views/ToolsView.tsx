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
    description: t.toolsDescription,
    path: "/tools",
    noIndex: hasDiscoveryQuery,
    locale,
    hreflang: true,
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
      <Breadcrumbs
        label={b.label}
        items={[{ name: b.home, href: home }, { name: b.tools }]}
      />
      <PageHeader
        className="mt-6"
        title={messages.toolsPage.title}
        description={messages.toolsPage.description}
      />
      <div className="mt-8">
        <Suspense fallback={<ToolsFallback tools={tools} />}>
          <ToolsCatalog tools={tools} />
        </Suspense>
      </div>
    </Container>
  );
}
