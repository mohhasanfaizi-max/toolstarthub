"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { Tool } from "@/data/types";
import { ToolPlaceholder } from "@/components/tools/ToolPlaceholder";

function WorkspaceFallback() {
  return (
    <div
      className="rounded-2xl border border-border bg-card px-4 py-8 text-sm text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      Loading tool…
    </div>
  );
}

function lazyTool(loader: () => Promise<ComponentType>) {
  return dynamic(async () => ({ default: await loader() }), {
    loading: WorkspaceFallback,
  });
}

const workspaces: Record<string, ComponentType> = {
  "percentage-calculator": lazyTool(async () => (await import("./workspace/PercentageCalculatorTool")).PercentageCalculatorTool),
  "age-calculator": lazyTool(async () => (await import("./workspace/AgeCalculatorTool")).AgeCalculatorTool),
  "percentage-change-calculator": lazyTool(async () => (await import("./workspace/PercentageChangeCalculatorTool")).PercentageChangeCalculatorTool),
  "discount-calculator": lazyTool(async () => (await import("./workspace/DiscountCalculatorTool")).DiscountCalculatorTool),
  "word-counter": lazyTool(async () => (await import("./workspace/WordCounterTool")).WordCounterTool),
  "character-counter": lazyTool(async () => (await import("./workspace/CharacterCounterTool")).CharacterCounterTool),
  "json-formatter": lazyTool(async () => (await import("./workspace/JsonFormatterTool")).JsonFormatterTool),
  "base64-encoder": lazyTool(async () => (await import("./workspace/Base64EncoderTool")).Base64EncoderTool),
  "unit-converter": lazyTool(async () => (await import("./workspace/UnitConverterTool")).UnitConverterTool),
  "utm-builder": lazyTool(async () => (await import("./workspace/UtmBuilderTool")).UtmBuilderTool),
  "image-compressor": lazyTool(async () => (await import("./workspace/ImageCompressorTool")).ImageCompressorTool),
  "image-resizer": lazyTool(async () => (await import("./workspace/ImageResizerTool")).ImageResizerTool),
  "image-cropper": lazyTool(async () => (await import("./workspace/ImageCropperTool")).ImageCropperTool),
  "image-converter": lazyTool(async () => (await import("./workspace/ImageConverterTool")).ImageConverterTool),
  "uuid-generator": lazyTool(async () => (await import("./workspace/UuidGeneratorTool")).UuidGeneratorTool),
  "url-encoder": lazyTool(async () => (await import("./workspace/UrlEncoderTool")).UrlEncoderTool),
  "timestamp-converter": lazyTool(async () => (await import("./workspace/TimestampConverterTool")).TimestampConverterTool),
  "slug-generator": lazyTool(async () => (await import("./workspace/SlugGeneratorTool")).SlugGeneratorTool),
  "case-converter": lazyTool(async () => (await import("./workspace/CaseConverterTool")).CaseConverterTool),
  "lorem-ipsum-generator": lazyTool(async () => (await import("./workspace/LoremIpsumGeneratorTool")).LoremIpsumGeneratorTool),
  "pdf-to-jpg": lazyTool(async () => (await import("./workspace/PdfToJpgTool")).PdfToJpgTool),
  "hex-to-rgb": lazyTool(async () => (await import("./workspace/HexToRgbTool")).HexToRgbTool),
  "color-picker": lazyTool(async () => (await import("./workspace/ColorPickerTool")).ColorPickerTool),
  "qr-code-generator": lazyTool(async () => (await import("./workspace/QrCodeGeneratorTool")).QrCodeGeneratorTool),
  "qr-code-scanner": lazyTool(async () => (await import("./workspace/QrCodeScannerTool")).QrCodeScannerTool),
  "html-encoder": lazyTool(async () => (await import("./workspace/HtmlEncoderTool")).HtmlEncoderTool),
  "html-minifier": lazyTool(async () => (await import("./workspace/HtmlMinifierTool")).HtmlMinifierTool),
  "css-minifier": lazyTool(async () => (await import("./workspace/CssMinifierTool")).CssMinifierTool),
  "javascript-minifier": lazyTool(async () => (await import("./workspace/JavaScriptMinifierTool")).JavaScriptMinifierTool),
  "password-generator": lazyTool(async () => (await import("./workspace/PasswordGeneratorTool")).PasswordGeneratorTool),
  "image-to-pdf": lazyTool(async () => (await import("./workspace/ImageToPdfTool")).ImageToPdfTool),
  "pdf-merger": lazyTool(async () => (await import("./workspace/PdfMergerTool")).PdfMergerTool),
  "pdf-splitter": lazyTool(async () => (await import("./workspace/PdfSplitterTool")).PdfSplitterTool),
  "pdf-page-counter": lazyTool(async () => (await import("./workspace/PdfPageCounterTool")).PdfPageCounterTool),
  "image-color-analyzer": lazyTool(async () => (await import("./workspace/ImageColorAnalyzerTool")).ImageColorAnalyzerTool),
  "color-contrast-checker": lazyTool(async () => (await import("./workspace/ColorContrastCheckerTool")).ColorContrastCheckerTool),
  "css-gradient-generator": lazyTool(async () => (await import("./workspace/CssGradientGeneratorTool")).CssGradientGeneratorTool),
  "box-shadow-generator": lazyTool(async () => (await import("./workspace/BoxShadowGeneratorTool")).BoxShadowGeneratorTool),
  "qr-code-generator-pro": lazyTool(async () => (await import("./workspace/QrCodeGeneratorProTool")).QrCodeGeneratorProTool),
  "random-number-generator": lazyTool(async () => (await import("./workspace/RandomNumberGeneratorTool")).RandomNumberGeneratorTool),
  "pdf-compressor": lazyTool(async () => (await import("./workspace/PdfCompressorTool")).PdfCompressorTool),
  "pdf-to-text": lazyTool(async () => (await import("./workspace/PdfToTextTool")).PdfToTextTool),
  "pdf-metadata": lazyTool(async () => (await import("./workspace/PdfMetadataTool")).PdfMetadataTool),
  "text-to-pdf": lazyTool(async () => (await import("./workspace/TextToPdfTool")).TextToPdfTool),
  "markdown-to-html": lazyTool(async () => (await import("./workspace/MarkdownToHtmlTool")).MarkdownToHtmlTool),
  "html-to-markdown": lazyTool(async () => (await import("./workspace/HtmlToMarkdownTool")).HtmlToMarkdownTool),
  "text-diff": lazyTool(async () => (await import("./workspace/TextDiffTool")).TextDiffTool),
  "duplicate-line-remover": lazyTool(async () => (await import("./workspace/DuplicateLineRemoverTool")).DuplicateLineRemoverTool),
  "whitespace-remover": lazyTool(async () => (await import("./workspace/WhitespaceRemoverTool")).WhitespaceRemoverTool),
  "line-sorter": lazyTool(async () => (await import("./workspace/LineSorterTool")).LineSorterTool),
};

type ToolWorkspaceProps = {
  tool: Tool;
};

export function ToolWorkspace({ tool }: ToolWorkspaceProps) {
  const Workspace = workspaces[tool.slug];

  if (!Workspace) {
    return <ToolPlaceholder tool={tool} />;
  }

  return <Workspace />;
}
