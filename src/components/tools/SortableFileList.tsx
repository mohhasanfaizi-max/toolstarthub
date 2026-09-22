"use client";

import { Button } from "@/components/ui/Button";

export type SortableItem = {
  id: string;
  title: string;
  subtitle?: string;
  previewUrl?: string;
};

type SortableFileListProps = {
  items: SortableItem[];
  onMove: (from: number, to: number) => void;
  onRemove: (index: number) => void;
};

export function SortableFileList({ items, onMove, onRemove }: SortableFileListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li
          key={item.id}
          className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-muted/40 px-3 py-2"
        >
          {item.previewUrl ? (
            // Local object URL preview; next/image is not suitable here.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.previewUrl}
              alt=""
              className="size-12 rounded-lg object-cover"
            />
          ) : null}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
            {item.subtitle ? (
              <p className="truncate text-sm text-muted-foreground">{item.subtitle}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => onMove(index, index - 1)}
              disabled={index === 0}
              aria-label={`Move ${item.title} up`}
            >
              Up
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => onMove(index, index + 1)}
              disabled={index === items.length - 1}
              aria-label={`Move ${item.title} down`}
            >
              Down
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onRemove(index)}
              aria-label={`Remove ${item.title}`}
            >
              Remove
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
