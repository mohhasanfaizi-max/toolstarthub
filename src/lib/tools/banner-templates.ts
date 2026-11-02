/** Data model and 15 original starter templates for the YouTube Banner Maker. */

export const BANNER_WIDTH = 2560;
export const BANNER_HEIGHT = 1440;
/** Area visible on every device (YouTube's minimum safe area), centred on the canvas. */
export const SAFE_AREA = { width: 1546, height: 423 } as const;
export const SAFE_RECT = {
  x: (BANNER_WIDTH - SAFE_AREA.width) / 2,
  y: (BANNER_HEIGHT - SAFE_AREA.height) / 2,
  width: SAFE_AREA.width,
  height: SAFE_AREA.height,
};
export const MAX_EXPORT_BYTES = 6 * 1024 * 1024;

export type Fill = { kind: "solid"; color: string } | { kind: "linear"; from: string; to: string; angle: number };

type LayerBase = { id: string; name: string; x: number; y: number; w: number; h: number; opacity: number; hidden?: boolean };
export type TextLayer = LayerBase & {
  type: "text";
  text: string;
  color: string;
  fontSize: number;
  fontWeight: 400 | 600 | 800;
  fontFamily: string;
  align: "left" | "center" | "right";
};
export type ShapeLayer = LayerBase & { type: "rect" | "ellipse"; fill: Fill; radius: number };
export type ImageLayer = LayerBase & { type: "image"; src: string };
export type Layer = TextLayer | ShapeLayer | ImageLayer;
export type BannerDoc = { background: Fill; layers: Layer[] };
export type BannerTemplate = { id: string; name: string; doc: BannerDoc };

export const FONT_OPTIONS = [
  { label: "Sans", value: "Inter, Arial, Helvetica, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
  { label: "Mono", value: "'Courier New', ui-monospace, monospace" },
  { label: "Condensed", value: "'Arial Narrow', 'Roboto Condensed', Arial, sans-serif" },
];

const SANS = FONT_OPTIONS[0].value;
const SERIF = FONT_OPTIONS[1].value;
const MONO = FONT_OPTIONS[2].value;
const COND = FONT_OPTIONS[3].value;
const cx = BANNER_WIDTH / 2;
const cy = BANNER_HEIGHT / 2;

let seq = 0;
export function newId(prefix = "l"): string {
  seq += 1;
  return `${prefix}${Date.now().toString(36)}${seq}`;
}

function title(text: string, color: string, fontFamily = SANS, y = cy - 90, fontSize = 150, w = 1500): TextLayer {
  return { id: `t-${text}`, name: "Title", type: "text", text, color, fontSize, fontWeight: 800, fontFamily, align: "center", x: cx - w / 2, y, w, h: fontSize * 1.25, opacity: 1 };
}
function sub(text: string, color: string, fontFamily = SANS, y = cy + 90, fontSize = 64, w = 1400): TextLayer {
  return { id: `s-${text}`, name: "Tagline", type: "text", text, color, fontSize, fontWeight: 400, fontFamily, align: "center", x: cx - w / 2, y, w, h: fontSize * 1.3, opacity: 1 };
}
function rect(name: string, x: number, y: number, w: number, h: number, fill: Fill, radius = 0, opacity = 1): ShapeLayer {
  return { id: `r-${name}`, name, type: "rect", x, y, w, h, fill, radius, opacity };
}
function ellipse(name: string, x: number, y: number, w: number, h: number, fill: Fill, opacity = 1): ShapeLayer {
  return { id: `e-${name}`, name, type: "ellipse", x, y, w, h, fill, radius: 0, opacity };
}
const solid = (color: string): Fill => ({ kind: "solid", color });
const lin = (from: string, to: string, angle = 135): Fill => ({ kind: "linear", from, to, angle });

export const BANNER_TEMPLATES: BannerTemplate[] = [
  { id: "gold-studio", name: "Gold Studio", doc: { background: lin("#141210", "#2b2414"), layers: [rect("Gold bar", cx - 360, cy + 40, 720, 10, solid("#D4AF37")), title("YOUR CHANNEL", "#F7F0D8", SERIF), sub("New videos every Friday", "#D4AF37")] } },
  { id: "sunrise-vlog", name: "Sunrise Vlog", doc: { background: lin("#ff9a5a", "#ffd66b", 90), layers: [ellipse("Sun", cx - 260, cy - 260, 520, 520, solid("#fff3c4"), 0.55), title("Daily Vlog Diaries", "#3b1f0e"), sub("Life, travel and coffee", "#5a3215")] } },
  { id: "tech-grid", name: "Tech Grid", doc: { background: lin("#0b1730", "#123a6b"), layers: [rect("Frame", SAFE_RECT.x + 20, SAFE_RECT.y + 20, SAFE_RECT.width - 40, SAFE_RECT.height - 40, solid("#ffffff"), 24, 0.06), title("BUILD WITH CODE", "#e6f1ff", MONO, cy - 80, 130), sub("Tutorials · Reviews · Deep dives", "#7cc4ff", MONO)] } },
  { id: "gaming-neon", name: "Neon Arena", doc: { background: lin("#120024", "#3a0063", 160), layers: [rect("Slash", cx - 900, cy - 20, 1800, 40, lin("#00f0ff", "#ff2bd6", 0), 20, 0.8), title("GAME NIGHT LIVE", "#ffffff", COND, cy - 150, 170), sub("Streams Tue · Thu · Sat", "#ff9cf0", COND, cy + 70)] } },
  { id: "minimal-mono", name: "Minimal Mono", doc: { background: solid("#f5f5f2"), layers: [title("studio notes", "#111111", SANS, cy - 70, 140), sub("design · process · ideas", "#555555")] } },
  { id: "kitchen-warm", name: "Warm Kitchen", doc: { background: lin("#7a2e12", "#c8572a", 120), layers: [ellipse("Plate", cx - 650, cy - 180, 360, 360, solid("#f7e3c8"), 0.25), title("Home Cooking Club", "#fff6ea", SERIF), sub("Easy recipes for busy weeks", "#ffd9b0", SERIF)] } },
  { id: "fitness-bold", name: "Fitness Bold", doc: { background: solid("#101010"), layers: [rect("Accent", cx - 780, cy - 190, 24, 380, solid("#c6ff3d")), title("TRAIN DAILY", "#ffffff", COND, cy - 110, 180), sub("Workouts you can do anywhere", "#c6ff3d", COND, cy + 90)] } },
  { id: "podcast-wave", name: "Podcast Wave", doc: { background: lin("#1d1b38", "#4b2a6b"), layers: [ellipse("Ring", cx - 700, cy - 150, 300, 300, solid("#D4AF37"), 0.9), title("The Long Talk", "#ffffff", SANS, cy - 90, 140, 1200), sub("Conversations, weekly", "#d8c8ff", SANS, cy + 80, 60, 1200)] } },
  { id: "ocean-calm", name: "Ocean Calm", doc: { background: lin("#0f4c75", "#3fc1c9", 180), layers: [rect("Wave", 0, cy + 180, BANNER_WIDTH, 540, solid("#ffffff"), 0, 0.08), title("Slow Travel Stories", "#ffffff", SERIF), sub("Coastlines and quiet towns", "#e0fbfc", SERIF)] } },
  { id: "education-chalk", name: "Chalkboard", doc: { background: solid("#1f3b2d"), layers: [rect("Border", SAFE_RECT.x, SAFE_RECT.y, SAFE_RECT.width, SAFE_RECT.height, solid("#ffffff"), 12, 0.05), title("Math Made Simple", "#f4f1de", SERIF), sub("Short lessons, clear steps", "#c9e4ca", SERIF)] } },
  { id: "beauty-blush", name: "Soft Blush", doc: { background: lin("#f8d7da", "#fdecef", 45), layers: [ellipse("Bubble", cx + 520, cy - 220, 300, 300, solid("#ffffff"), 0.6), title("Glow Up Corner", "#7a2f44", SERIF), sub("Skincare · makeup · routines", "#a14d63", SANS)] } },
  { id: "music-vinyl", name: "Vinyl Night", doc: { background: lin("#0d0d0d", "#2a1a12"), layers: [ellipse("Record", cx - 760, cy - 200, 400, 400, solid("#222222")), ellipse("Label", cx - 620, cy - 60, 120, 120, solid("#C9A227")), title("Late Night Sessions", "#f3e9d2", SANS, cy - 90, 130, 1300), sub("Covers and originals", "#C9A227", SANS, cy + 80, 60, 1300)] } },
  { id: "business-clean", name: "Clean Business", doc: { background: solid("#ffffff"), layers: [rect("Band", 0, cy - 230, BANNER_WIDTH, 460, solid("#0f2440")), title("Small Business Playbook", "#ffffff", SANS, cy - 90, 120), sub("Practical marketing and money tips", "#D4AF37")] } },
  { id: "nature-forest", name: "Forest Trail", doc: { background: lin("#1b4332", "#52b788", 200), layers: [title("Into the Woods", "#f1faee", SERIF, cy - 90, 150), sub("Hikes, camping and gear", "#d8f3dc", SANS)] } },
  { id: "retro-pop", name: "Retro Pop", doc: { background: solid("#ffcf33"), layers: [ellipse("Dot A", cx - 900, cy - 250, 220, 220, solid("#ff4f5a")), ellipse("Dot B", cx + 680, cy + 30, 220, 220, solid("#2e86de")), title("WEEKEND CRAFTS", "#1d1d1d", COND, cy - 120, 170), sub("Make something fun", "#1d1d1d", COND, cy + 80)] } },
];

export function cloneDoc(doc: BannerDoc): BannerDoc {
  return JSON.parse(JSON.stringify(doc)) as BannerDoc;
}

/** Start and end points of a CSS-style linear gradient angle across a box. */
export function gradientPoints(angleDeg: number, x: number, y: number, w: number, h: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const half = (Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad))) / 2;
  const mx = x + w / 2;
  const my = y + h / 2;
  return { x0: mx - Math.cos(rad) * half, y0: my - Math.sin(rad) * half, x1: mx + Math.cos(rad) * half, y1: my + Math.sin(rad) * half };
}

/** Split text into lines that fit a width, using a measuring callback. */
export function wrapText(text: string, maxWidth: number, measure: (s: string) => number): string[] {
  const out: string[] = [];
  for (const para of text.split("\n")) {
    const words = para.split(/\s+/).filter(Boolean);
    if (!words.length) {
      out.push("");
      continue;
    }
    let line = words[0];
    for (const word of words.slice(1)) {
      const next = `${line} ${word}`;
      if (measure(next) <= maxWidth) line = next;
      else {
        out.push(line);
        line = word;
      }
    }
    out.push(line);
  }
  return out;
}
