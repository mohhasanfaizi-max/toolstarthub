import { brandMarkImage } from "@/lib/brand-mark";

type IconSize = "icon-192.png" | "icon-512.png";

export async function GET(
  _request: Request,
  context: { params: Promise<{ size: string }> },
) {
  const { size } = await context.params;
  if (size === "icon-192.png") {
    return brandMarkImage(192);
  }
  if (size === "icon-512.png") {
    return brandMarkImage(512);
  }
  return new Response("Not found", { status: 404 });
}

export function generateStaticParams(): Array<{ size: IconSize }> {
  return [{ size: "icon-192.png" }, { size: "icon-512.png" }];
}
