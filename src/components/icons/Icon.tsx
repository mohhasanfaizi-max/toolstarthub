import type { SVGProps } from "react";
import type { IconName } from "@/data/types";
import { cn } from "@/lib/cn";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  title?: string;
};

function Svg({
  className,
  children,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      className={cn("size-5 shrink-0", className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case "percentage":
      return (
        <Svg {...props}>
          <circle cx="7.5" cy="7.5" r="2.25" />
          <circle cx="16.5" cy="16.5" r="2.25" />
          <path d="M6 18 18 6" />
        </Svg>
      );
    case "calendar":
      return (
        <Svg {...props}>
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
        </Svg>
      );
    case "text":
      return (
        <Svg {...props}>
          <path d="M5 6h14M12 6v12M8 18h8" />
        </Svg>
      );
    case "code":
      return (
        <Svg {...props}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
        </Svg>
      );
    case "image":
      return (
        <Svg {...props}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m7.5 16.5 3.5-3.5 3 3 2-2 3.5 3.5" />
        </Svg>
      );
    case "encode":
      return (
        <Svg {...props}>
          <path d="M5 8h6M5 12h10M5 16h8M17 8v8M17 8l2.5 2.5M17 8 14.5 10.5" />
        </Svg>
      );
    case "link":
      return (
        <Svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.07.07l1.36-1.36a5 5 0 0 0-7.07-7.07L10 6" />
          <path d="M14 11a5 5 0 0 0-7.07-.07L5.57 12.3a5 5 0 0 0 7.07 7.07L14 18" />
        </Svg>
      );
    case "convert":
      return (
        <Svg {...props}>
          <path d="M7 7h10l-3-3M17 17H7l3 3" />
        </Svg>
      );
    case "file":
      return (
        <Svg {...props}>
          <path d="M7 4h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <path d="M14 4v5h5" />
        </Svg>
      );
    case "color":
      return (
        <Svg {...props}>
          <path d="M12 4.5 5 13a7 7 0 1 0 14 0z" />
          <circle cx="12" cy="16" r="1.25" />
        </Svg>
      );
    case "slug":
      return (
        <Svg {...props}>
          <path d="M5 8h14M5 12h9M5 16h6" />
          <path d="M15 14.5 18 12l-3-2.5" />
        </Svg>
      );
    case "palette":
      return (
        <Svg {...props}>
          <path d="M12 4a8 8 0 1 0 .4 16H15a1.5 1.5 0 0 0 0-3h-.5a1.5 1.5 0 0 1 0-3H16a3 3 0 0 0 3-3.4A8 8 0 0 0 12 4z" />
          <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="8.5" r="1" fill="currentColor" stroke="none" />
        </Svg>
      );
    case "calculator":
      return (
        <Svg {...props}>
          <rect x="5" y="3.5" width="14" height="17" rx="2" />
          <path d="M8 7h8M8 11.5h2M12 11.5h2M16 11.5h0.01M8 15h2M12 15h2M16 15h0.01" />
        </Svg>
      );
    case "search":
      return (
        <Svg {...props}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </Svg>
      );
    case "menu":
      return (
        <Svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </Svg>
      );
    case "close":
      return (
        <Svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </Svg>
      );
    case "arrow-right":
      return (
        <Svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </Svg>
      );
    case "sun":
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </Svg>
      );
    case "moon":
      return (
        <Svg {...props}>
          <path d="M16 3.3A8.5 8.5 0 1 1 3.3 16 7 7 0 0 0 16 3.3z" />
        </Svg>
      );
    case "bolt":
      return (
        <Svg {...props}>
          <path d="M13 3 5 14h7l-1 7 8-11h-7z" />
        </Svg>
      );
    case "gift":
      return (
        <Svg {...props}>
          <rect x="4" y="11" width="16" height="9" rx="1.5" />
          <path d="M4 11V8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5V11M12 7v13" />
          <path d="M12 7c0-2-1.2-3.5-3-3.5S7 6 12 7c0-2 1.2-3.5 3-3.5S17 6 12 7z" />
        </Svg>
      );
    case "shield":
      return (
        <Svg {...props}>
          <path d="M12 3.5 5 6.5v5.3c0 4 2.8 6.8 7 8.7 4.2-1.9 7-4.7 7-8.7V6.5z" />
          <path d="m9 12 2 2 4-4" />
        </Svg>
      );
    case "user":
      return (
        <Svg {...props}>
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
        </Svg>
      );
    case "device":
      return (
        <Svg {...props}>
          <rect x="7" y="3.5" width="10" height="17" rx="2" />
          <path d="M11 17.5h2" />
        </Svg>
      );
    case "check":
      return (
        <Svg {...props}>
          <path d="m5 12 5 5 9-10" />
        </Svg>
      );
    case "x":
      return (
        <Svg {...props}>
          <path d="M6 6 18 18M18 6 6 18" />
        </Svg>
      );
    case "github":
      return (
        <Svg {...props}>
          <path d="M9 19c-4 1.4-4-2.1-6-2.4M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6A5.1 5.1 0 0 0 19 5.1 4.8 4.8 0 0 0 18.9 2S17.7 1.6 15 3.4a12.3 12.3 0 0 0-6 0C6.3 1.6 5.1 2 5.1 2A4.8 4.8 0 0 0 5 5.1 5.1 5.1 0 0 0 3.8 8.9c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22" />
        </Svg>
      );
    case "linkedin":
      return (
        <Svg {...props}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M8 10.5V16.5M8 7.5h.01M12 16.5v-4a2 2 0 0 1 4 0v4" />
        </Svg>
      );
    case "copy":
      return (
        <Svg {...props}>
          <rect x="8" y="8" width="11" height="13" rx="2" />
          <path d="M5 16V5a2 2 0 0 1 2-2h8" />
        </Svg>
      );
    case "star":
      return (
        <Svg {...props}>
          <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.8 7.2 18.9l.9-5.4-3.9-3.8 5.4-.8z" />
        </Svg>
      );
    default: {
      const exhaustive: never = name;
      return exhaustive;
    }
  }
}
