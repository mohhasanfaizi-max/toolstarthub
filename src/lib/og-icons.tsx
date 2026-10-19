import type { ReactNode } from "react";
import type { CategorySlug, IconName } from "@/data/types";

/** Simple marks drawn with SVG shapes. Satori renders these inside ImageResponse. */
export type OgIconName =
  | "percent"
  | "text"
  | "hub"
  | "grid"
  | "image"
  | "code"
  | "search"
  | "bolt"
  | "calculator"
  | "calendar"
  | "file"
  | "link"
  | "convert"
  | "shield"
  | "mail"
  | "user"
  | "palette"
  | "device"
  | "info";

const stroke = {
  fill: "none" as const,
  strokeWidth: 8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg width={128} height={128} viewBox="0 0 128 128" fill="none">
      {children}
    </svg>
  );
}

export function OgGlyph({ name, color }: { name: OgIconName; color: string }) {
  switch (name) {
    case "percent":
      return (
        <Mark>
          <circle cx="40" cy="40" r="16" stroke={color} {...stroke} />
          <circle cx="88" cy="88" r="16" stroke={color} {...stroke} />
          <path d="M96 28 L32 100" stroke={color} {...stroke} />
        </Mark>
      );
    case "text":
      return (
        <Mark>
          <rect x="22" y="30" width="84" height="12" rx="6" fill={color} />
          <rect x="22" y="58" width="66" height="12" rx="6" fill={color} />
          <rect x="22" y="86" width="46" height="12" rx="6" fill={color} />
        </Mark>
      );
    case "hub":
      return (
        <Mark>
          <rect x="18" y="18" width="40" height="40" rx="12" fill={color} />
          <rect x="70" y="18" width="40" height="40" rx="12" fill={color} />
          <rect x="18" y="70" width="40" height="40" rx="12" fill={color} />
          <rect x="70" y="70" width="40" height="40" rx="12" fill={color} />
        </Mark>
      );
    case "grid":
      return (
        <Mark>
          <rect x="16" y="22" width="28" height="28" rx="8" fill={color} />
          <rect x="50" y="22" width="28" height="28" rx="8" fill={color} />
          <rect x="84" y="22" width="28" height="28" rx="8" fill={color} />
          <rect x="16" y="78" width="28" height="28" rx="8" fill={color} />
          <rect x="50" y="78" width="28" height="28" rx="8" fill={color} />
          <rect x="84" y="78" width="28" height="28" rx="8" fill={color} />
        </Mark>
      );
    case "image":
      return (
        <Mark>
          <rect x="18" y="28" width="92" height="72" rx="14" stroke={color} {...stroke} />
          <circle cx="46" cy="52" r="8" fill={color} />
          <path d="M26 88 L50 66 L68 82 L84 68 L102 88" stroke={color} {...stroke} />
        </Mark>
      );
    case "code":
      return (
        <Mark>
          <path d="M48 36 L22 64 L48 92" stroke={color} {...stroke} />
          <path d="M80 36 L106 64 L80 92" stroke={color} {...stroke} />
        </Mark>
      );
    case "search":
      return (
        <Mark>
          <circle cx="54" cy="54" r="24" stroke={color} {...stroke} />
          <path d="M72 72 L104 104" stroke={color} {...stroke} />
        </Mark>
      );
    case "bolt":
      return (
        <Mark>
          <path d="M72 14 L34 68 H60 L50 114 L98 52 H70 Z" fill={color} />
        </Mark>
      );
    case "calculator":
      return (
        <Mark>
          <rect x="28" y="14" width="72" height="100" rx="14" stroke={color} {...stroke} />
          <rect x="42" y="28" width="44" height="14" rx="4" fill={color} />
          <circle cx="48" cy="64" r="5" fill={color} />
          <circle cx="64" cy="64" r="5" fill={color} />
          <circle cx="80" cy="64" r="5" fill={color} />
          <circle cx="48" cy="84" r="5" fill={color} />
          <circle cx="64" cy="84" r="5" fill={color} />
          <circle cx="80" cy="84" r="5" fill={color} />
        </Mark>
      );
    case "calendar":
      return (
        <Mark>
          <rect x="18" y="28" width="92" height="80" rx="14" stroke={color} {...stroke} />
          <path d="M18 52 H110" stroke={color} {...stroke} />
          <path d="M42 18 V38" stroke={color} {...stroke} />
          <path d="M86 18 V38" stroke={color} {...stroke} />
        </Mark>
      );
    case "file":
      return (
        <Mark>
          <path d="M34 16 H74 L106 48 V104 a10 10 0 0 1-10 10 H34 a10 10 0 0 1-10-10 V26 a10 10 0 0 1 10-10 Z" stroke={color} {...stroke} />
          <path d="M74 16 V48 H106" stroke={color} {...stroke} />
          <path d="M40 74 H86" stroke={color} {...stroke} />
          <path d="M40 92 H70" stroke={color} {...stroke} />
        </Mark>
      );
    case "link":
      return (
        <Mark>
          <path d="M54 74 L42 86 a18 18 0 1 1 0-26 L54 48" stroke={color} {...stroke} />
          <path d="M74 54 L86 42 a18 18 0 1 1 0 26 L74 80" stroke={color} {...stroke} />
        </Mark>
      );
    case "convert":
      return (
        <Mark>
          <path d="M22 46 H90 L74 30" stroke={color} {...stroke} />
          <path d="M106 82 H38 L54 98" stroke={color} {...stroke} />
        </Mark>
      );
    case "shield":
      return (
        <Mark>
          <path d="M64 16 L104 34 V66 C104 90 86 106 64 114 C42 106 24 90 24 66 V34 Z" stroke={color} {...stroke} />
          <path d="M46 66 L58 78 L84 52" stroke={color} {...stroke} />
        </Mark>
      );
    case "mail":
      return (
        <Mark>
          <rect x="14" y="32" width="100" height="68" rx="14" stroke={color} {...stroke} />
          <path d="M18 40 L64 72 L110 40" stroke={color} {...stroke} />
        </Mark>
      );
    case "user":
      return (
        <Mark>
          <circle cx="64" cy="44" r="18" stroke={color} {...stroke} />
          <path d="M26 108 a38 32 0 0 1 76 0" stroke={color} {...stroke} />
        </Mark>
      );
    case "palette":
      return (
        <Mark>
          <path d="M64 16 C40 16 24 40 24 66 C24 92 42 112 64 112 C80 112 88 100 88 90 C88 78 78 74 78 74 H92 C108 74 116 60 112 44 C106 24 88 16 64 16 Z" fill={color} />
        </Mark>
      );
    case "device":
      return (
        <Mark>
          <rect x="40" y="12" width="48" height="104" rx="12" stroke={color} {...stroke} />
          <path d="M56 100 H72" stroke={color} {...stroke} />
        </Mark>
      );
    case "info":
      return (
        <Mark>
          <circle cx="64" cy="64" r="42" stroke={color} {...stroke} />
          <circle cx="64" cy="42" r="6" fill={color} />
          <path d="M64 58 V92" stroke={color} {...stroke} />
        </Mark>
      );
    default:
      return (
        <Mark>
          <rect x="18" y="18" width="40" height="40" rx="12" fill={color} />
          <rect x="70" y="18" width="40" height="40" rx="12" fill={color} />
          <rect x="18" y="70" width="40" height="40" rx="12" fill={color} />
          <rect x="70" y="70" width="40" height="40" rx="12" fill={color} />
        </Mark>
      );
  }
}

const categoryIcons: Record<CategorySlug, OgIconName> = {
  calculators: "percent",
  "text-tools": "text",
  "developer-tools": "code",
  "image-tools": "image",
  "seo-utilities": "search",
  "ai-tools": "bolt",
};

const toolIcons: Record<IconName, OgIconName> = {
  percentage: "percent",
  calendar: "calendar",
  text: "text",
  code: "code",
  image: "image",
  encode: "code",
  link: "link",
  convert: "convert",
  file: "file",
  color: "palette",
  slug: "text",
  palette: "palette",
  calculator: "calculator",
  search: "search",
  menu: "grid",
  close: "info",
  "arrow-right": "convert",
  sun: "palette",
  moon: "palette",
  bolt: "bolt",
  gift: "hub",
  shield: "shield",
  user: "user",
  device: "device",
  check: "shield",
  x: "info",
  github: "code",
  linkedin: "user",
  copy: "file",
  star: "bolt",
  phone: "device",
  mail: "mail",
  globe: "search",
};

export function categoryOgIcon(slug: CategorySlug | undefined): OgIconName {
  return slug ? categoryIcons[slug] : "hub";
}

export function toolOgIcon(icon: IconName | undefined, category?: CategorySlug): OgIconName {
  if (icon && toolIcons[icon]) {
    return toolIcons[icon];
  }
  return categoryOgIcon(category);
}
