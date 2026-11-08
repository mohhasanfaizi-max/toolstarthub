// Cloudflare Worker for the free-plan deployment.
// Static pages, images and files are served straight from Workers Static
// Assets (dist/cloudflare/static) and never reach this code. Only paths listed
// in wrangler.jsonc "run_worker_first" do: the API routes, /admin/comments and
// the /tools index pages (for their query-string noindex rule).
import * as adminComments from "../src/app/api/admin/comments/route";
import * as adminLogin from "../src/app/api/admin/login/route";
import * as adminLogout from "../src/app/api/admin/logout/route";
import * as aiGenerate from "../src/app/api/ai/generate/route";
import * as almaCoach from "../src/app/api/alma/coach/route";
import * as almaFoods from "../src/app/api/alma/foods/route";
import * as almaProduct from "../src/app/api/alma/product/route";
import * as comments from "../src/app/api/comments/route";
import * as ogPreview from "../src/app/api/og/preview/route";
import * as urduNews from "../src/app/api/urdu-news-translator/route";
import { prefixedLocales } from "../src/i18n/config";
import { securityHeaders } from "../src/config/headers.mjs";
import { renderAdminPage } from "./admin-page";

type Handler = (request: Request) => Response | Promise<Response>;
type RouteModule = Partial<Record<"GET" | "POST" | "PUT" | "PATCH" | "DELETE", Handler>>;

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const routes: Record<string, RouteModule> = {
  "/api/admin/comments": adminComments,
  "/api/admin/login": adminLogin,
  "/api/admin/logout": adminLogout,
  "/api/ai/generate": aiGenerate,
  "/api/alma/coach": almaCoach,
  "/api/alma/foods": almaFoods,
  "/api/alma/product": almaProduct,
  "/api/comments": comments,
  "/api/og/preview": ogPreview,
  "/api/urdu-news-translator": urduNews,
};

const LOCALES = new Set<string>(prefixedLocales);

function withSecurityHeaders(response: Response): Response {
  const out = new Response(response.body, response);
  for (const { key, value } of securityHeaders) if (!out.headers.has(key)) out.headers.set(key, value);
  return out;
}

/**
 * The API code reads the visitor IP (rate limits, comment IP hashes) from
 * x-forwarded-for. On Cloudflare the trusted value is cf-connecting-ip, so it
 * replaces whatever the client sent.
 */
function withClientIp(request: Request): Request {
  const ip = request.headers.get("cf-connecting-ip");
  if (!ip) return request;
  const headers = new Headers(request.headers);
  headers.set("x-forwarded-for", ip);
  headers.delete("x-real-ip");
  return new Request(request, { headers });
}

/** Same rule as toolsMetadata(): a discovery query makes /tools noindex. */
function isDiscoveryQuery(params: URLSearchParams): boolean {
  const filter = params.get("filter");
  const sort = params.get("sort");
  return Boolean(params.get("q") || (filter && filter !== "all") || (sort && sort !== "name") || params.get("view"));
}

function isToolsIndex(pathname: string): boolean {
  if (pathname === "/tools") return true;
  const [, locale, rest, ...more] = pathname.split("/");
  return more.length === 0 && rest === "tools" && LOCALES.has(locale);
}

async function toolsIndex(request: Request, env: Env, url: URL): Promise<Response> {
  const response = await env.ASSETS.fetch(request);
  if (!isDiscoveryQuery(url.searchParams) || !response.headers.get("content-type")?.includes("text/html")) return response;
  return new HTMLRewriter()
    .on('meta[name="robots"]', { element: (el) => el.replace('<meta name="robots" content="noindex, nofollow"/>', { html: true }) })
    .transform(response);
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    // Same as Next.js: strip a trailing slash with a permanent (308) redirect.
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      return new Response(null, { status: 308, headers: { Location: url.pathname + url.search } });
    }
    const route = routes[url.pathname];
    if (route) {
      const method = (request.method === "HEAD" ? "GET" : request.method) as keyof RouteModule;
      const handler = route[method];
      if (!handler) {
        const allow = Object.keys(route).filter((k) => /^[A-Z]+$/.test(k)).join(", ");
        return withSecurityHeaders(new Response(null, { status: 405, headers: { Allow: allow } }));
      }
      return withSecurityHeaders(await handler(withClientIp(request)));
    }
    if (url.pathname === "/admin/comments" && (request.method === "GET" || request.method === "HEAD")) {
      return withSecurityHeaders(await renderAdminPage(withClientIp(request)));
    }
    if (isToolsIndex(url.pathname)) return toolsIndex(request, env, url);
    return env.ASSETS.fetch(request);
  },
};

export default worker;
