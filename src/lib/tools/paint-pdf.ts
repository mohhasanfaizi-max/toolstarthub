/** Existing paginated PDF implementation; no extra library or server upload. */
export async function buildPaintPdf(summary: string): Promise<Uint8Array> {
  const { buildTextPdf } = await import("./text-to-pdf.ts");
  const result = await buildTextPdf(summary, {
    pageSize: "a4",
    margin: "medium",
    fontSize: 11,
    lineSpacing: "1.15",
    title: "Paint Calculator estimate",
    pageNumbers: true,
  });
  if (!result.ok) throw new Error(result.error);
  return result.bytes;
}
