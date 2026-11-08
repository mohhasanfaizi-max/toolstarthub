import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache binding: every page is prerendered at build time and
// served from Workers static assets, so no R2/KV (and no paid service) is needed.
export default defineCloudflareConfig({});
