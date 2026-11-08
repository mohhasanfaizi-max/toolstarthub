// Same-origin check for admin form posts (cookie is also SameSite=Strict).
export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host || new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

export function redirectTo(request: Request, path: string): Response {
  return new Response(null, { status: 303, headers: { Location: new URL(path, request.url).toString(), "Cache-Control": "no-store" } });
}
