"use client";

import { useTx } from "@/i18n/tool-text";
import { CodeMinifierTool } from "@/components/tools/CodeMinifierTool";
import { minifyHtml } from "@/lib/tools/html-minify";

const SAMPLE = `<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <!-- note -->
    <h1>Hello</h1>
    <pre>
      Keep
      this
    </pre>
  </body>
</html>
`;

export function HtmlMinifierTool() {
  const tx = useTx();

  return (
    <CodeMinifierTool
      id="html-minifier"
      label="HTML source"
      placeholder="<div>Hello</div>"
      sample={SAMPLE}
      minify={minifyHtml}
    />
  );
}
