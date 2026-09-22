import { PDFDocument } from "pdf-lib";
import { validatePdfFile } from "./pdf.ts";

export const MAX_METADATA_PAGES = 80;

export type PdfMetadataFields = {
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
  producer: string;
  creationDate: string;
  modificationDate: string;
};

export type PdfMetadataView = PdfMetadataFields & {
  filename: string;
  fileSize: number;
  pageCount: number;
};

const EMPTY_FIELDS: PdfMetadataFields = {
  title: "",
  author: "",
  subject: "",
  keywords: "",
  creator: "",
  producer: "",
  creationDate: "",
  modificationDate: "",
};

export function emptyMetadataFields(): PdfMetadataFields {
  return { ...EMPTY_FIELDS };
}

export async function readPdfMetadata(file: {
  name: string;
  type: string;
  size: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
}): Promise<{ ok: true; meta: PdfMetadataView; bytes: Uint8Array } | { ok: false; error: string }> {
  const validated = validatePdfFile(file);
  if (!validated.ok) {
    return validated;
  }

  try {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const document = await PDFDocument.load(bytes, { ignoreEncryption: false });
    const pageCount = document.getPageCount();
    if (pageCount < 1) {
      return { ok: false, error: "This PDF has no pages." };
    }
    if (pageCount > MAX_METADATA_PAGES) {
      return {
        ok: false,
        error: `This tool opens PDFs with up to ${MAX_METADATA_PAGES} pages.`,
      };
    }

    return {
      ok: true,
      bytes,
      meta: {
        filename: file.name,
        fileSize: file.size,
        pageCount,
        title: document.getTitle() ?? "",
        author: document.getAuthor() ?? "",
        subject: document.getSubject() ?? "",
        keywords: keywordsToString(document.getKeywords()),
        creator: document.getCreator() ?? "",
        producer: document.getProducer() ?? "",
        creationDate: formatPdfDate(document.getCreationDate()),
        modificationDate: formatPdfDate(document.getModificationDate()),
      },
    };
  } catch (error) {
    return { ok: false, error: metaError(error, file.name) };
  }
}

export async function stripPdfMetadata(
  bytes: Uint8Array,
): Promise<{ ok: true; bytes: Uint8Array; pageCount: number } | { ok: false; error: string }> {
  try {
    const source = await PDFDocument.load(bytes, { ignoreEncryption: false });
    const pageCount = source.getPageCount();
    if (pageCount < 1) {
      return { ok: false, error: "This PDF has no pages." };
    }

    const output = await PDFDocument.create();
    const copied = await output.copyPages(source, source.getPageIndices());
    for (const page of copied) {
      output.addPage(page);
    }

    output.setTitle("");
    output.setAuthor("");
    output.setSubject("");
    output.setKeywords([]);
    output.setCreator("");
    output.setProducer("");

    return { ok: true, pageCount, bytes: await output.save({ useObjectStreams: true }) };
  } catch (error) {
    return { ok: false, error: metaError(error, "this PDF") };
  }
}

export function hasDocumentMetadata(fields: PdfMetadataFields): boolean {
  return (Object.keys(EMPTY_FIELDS) as Array<keyof PdfMetadataFields>).some(
    (key) => fields[key].trim() !== "",
  );
}

function keywordsToString(value: string | string[] | undefined): string {
  if (!value) {
    return "";
  }
  return Array.isArray(value) ? value.join(", ") : value;
}

function formatPdfDate(value: Date | undefined): string {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
    return "";
  }
  return value.toISOString();
}

function metaError(error: unknown, label: string): string {
  const message = error instanceof Error ? error.message : "";
  if (/password|encrypt/i.test(message)) {
    return `${label} is password-protected. Unlock it first.`;
  }
  if (/invalid|corrupt|failed to parse/i.test(message)) {
    return `${label} could not be read as a PDF. It may be damaged.`;
  }
  return `${label} could not be processed. Try a smaller file.`;
}
