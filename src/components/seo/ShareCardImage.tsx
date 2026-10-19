import Image from "next/image";
import { siteConfig } from "@/lib/site";

type ShareCardImageProps = {
  /** English route, for example `/guides/how-to-calculate-percentage`. */
  route: string;
  /** Page title before the site-name suffix in the document title. */
  title: string;
};

/** Visible share card for an English guide or tool page. */
export function ShareCardImage({ route, title }: ShareCardImageProps) {
  return (
    <Image
      src={`${route}/opengraph-image`}
      alt={`${title} — ${siteConfig.name}`}
      width={1200}
      height={630}
      unoptimized
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className="mt-8 h-auto w-full max-w-[560px] rounded-2xl"
    />
  );
}
