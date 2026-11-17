import Link from "next/link";

/** Renders [text](/internal-path) markers as Next links; other text is plain. */
export function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]+\))/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = /^\[([^\]]+)\]\((\/[^)\s]+)\)$/.exec(part);
        return match ? (
          <Link
            key={index}
            href={match[2]}
            className="font-medium text-foreground underline underline-offset-2"
          >
            {match[1]}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}
