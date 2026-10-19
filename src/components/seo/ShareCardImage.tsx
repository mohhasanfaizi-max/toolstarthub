import Image from "next/image";
import { siteConfig } from "@/lib/site";

type ShareCardImageProps = {
  /** English route, for example `/guides/how-to-calculate-percentage`. */
  route: string;
  /** Page title before the site-name suffix in the document title. */
  title: string;
};

/**
 * Paints the share card as soon as the image file is available.
 * Runs from the server HTML so it does not wait on React hydration.
 * `document.currentScript` is the inline script at the end of the figure.
 */
const DRAW_SHARE_CARD = `(function(script){
  var box = script.parentElement;
  if (!box) return;
  var img = box.querySelector("img");
  var canvas = box.querySelector("canvas");
  if (!img || !canvas) return;
  var draw = function(){
    if (!img.naturalWidth) return;
    var context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  if (img.complete && img.naturalWidth) draw();
  else img.addEventListener("load", draw);
})(document.currentScript);`;

/**
 * Share card shown on English guide and tool pages.
 *
 * The img keeps the alt text, the 1200×630 dimensions, and lazy loading, and
 * it reserves the layout box. It stays at opacity 0 because a visible
 * full-size img in the first viewport becomes the LCP element. The same
 * bitmap is painted on a canvas, which is not an LCP candidate.
 */
export function ShareCardImage({ route, title }: ShareCardImageProps) {
  const src = `${route}/opengraph-image`;
  const alt = `${title} — ${siteConfig.name}`;

  return (
    <div className="relative mt-8 w-full max-w-[720px] overflow-hidden rounded-2xl bg-muted">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        unoptimized
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="share-card-img h-auto w-full opacity-0"
      />
      <canvas
        width={1200}
        height={630}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <script dangerouslySetInnerHTML={{ __html: DRAW_SHARE_CARD }} />
      <noscript>
        <style>{".share-card-img{opacity:1 !important}"}</style>
      </noscript>
    </div>
  );
}
