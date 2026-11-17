"use client";

import { useTx } from "@/i18n/tool-text";
import { CodeMinifierTool } from "@/components/tools/CodeMinifierTool";
import { minifyJavaScript } from "@/lib/tools/javascript-minify";

const SAMPLE = `function greet(name) {
  const message = "Hello, " + name + "!";
  console.log(message);
  return message;
}

greet("Tools Star Hub");
`;

export function JavaScriptMinifierTool() {
  const tx = useTx();

  return (
    <CodeMinifierTool
      id="javascript-minifier"
      label="JavaScript source"
      placeholder="function hello() { return true; }"
      sample={SAMPLE}
      minify={minifyJavaScript}
    />
  );
}
