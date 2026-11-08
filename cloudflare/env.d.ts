// Minimal Workers runtime types used by worker.ts (avoids a types dependency).
interface CfElement {
  replace(content: string, options?: { html?: boolean }): void;
}
declare class HTMLRewriter {
  on(selector: string, handlers: { element?: (element: CfElement) => void }): HTMLRewriter;
  transform(response: Response): Response;
}
