"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/icons/Icon";
import { getToolSlugSet } from "@/data/tools";
import { useI18n } from "@/i18n/client";
import { formatMessage } from "@/i18n/config";
import { getLocalStorage } from "@/lib/storage/safe-storage";
import {
  FAVORITES_EVENT,
  readFavoriteSlugs,
  toggleFavoriteSlug,
} from "@/lib/storage/favorites";
import { cn } from "@/lib/cn";

type FavoriteButtonProps = {
  slug: string;
  name: string;
  className?: string;
};

const validSlugs = getToolSlugSet();

function subscribeFavorites(callback: () => void) {
  window.addEventListener(FAVORITES_EVENT, callback);
  return () => window.removeEventListener(FAVORITES_EVENT, callback);
}

function getFavoritesSnapshot() {
  return readFavoriteSlugs(getLocalStorage(), validSlugs).join(",");
}

function getEmptyFavoritesSnapshot() {
  return "";
}

export function FavoriteButton({ slug, name, className }: FavoriteButtonProps) {
  const snapshot = useSyncExternalStore(
    subscribeFavorites,
    getFavoritesSnapshot,
    getEmptyFavoritesSnapshot,
  );
  const { messages } = useI18n();
  const favorited = snapshot.split(",").filter(Boolean).includes(slug);

  return (
    <button
      type="button"
      className={cn(
        "relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground",
        favorited && "text-accent hover:text-accent",
        className,
      )}
      aria-pressed={favorited}
      aria-label={formatMessage(
        favorited ? messages.favorites.remove : messages.favorites.add,
        { name },
      )}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavoriteSlug(getLocalStorage(), slug, validSlugs);
      }}
    >
      <Icon name="star" className={cn("size-5", favorited && "fill-current")} />
    </button>
  );
}
