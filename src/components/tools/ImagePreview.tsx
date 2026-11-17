"use client";

import { useTx } from "@/i18n/tool-text";

type ImagePreviewProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImagePreview({ src, alt, caption }: ImagePreviewProps) {
  const tx = useTx();
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-muted">
      {/* Blob previews are local object URLs; next/image is not suitable here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={tx(alt)}
        className="mx-auto max-h-80 w-auto max-w-full object-contain"
      />
      {caption ? (
        <figcaption className="border-t border-border px-3 py-2 text-sm text-muted-foreground">
          {tx(caption)}
        </figcaption>
      ) : null}
    </figure>
  );
}

type FileInfoItem = {
  label: string;
  value: string;
};

export function FileInfo({ items }: { items: FileInfoItem[] }) {
  const tx = useTx();
  return (
    <dl className="grid gap-3 text-sm sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-muted-foreground">{tx(item.label)}</dt>
          <dd className="mt-0.5 break-all font-medium text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
