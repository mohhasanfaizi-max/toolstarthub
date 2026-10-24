import Link from "next/link";
import { freeDigitalToolSlugs } from "@/data/free-digital-tools-guide";

/** English tool pages link back to this tool's entry in the Free Digital Tools guide. */
export function FreeDigitalToolsBacklink({ slug }: { slug: string }) {
  if (!freeDigitalToolSlugs.has(slug)) return null;
  return (
    <p className="mt-3 text-sm leading-6">
      <Link
        href={`/guides/free-digital-tools#tool-${slug}`}
        className="font-medium text-accent hover:underline"
      >
        Read the guide: Free Digital Tools
      </Link>
    </p>
  );
}
