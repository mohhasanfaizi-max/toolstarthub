"use client";

import { CodeMinifierTool } from "@/components/tools/CodeMinifierTool";
import { minifyCss } from "@/lib/tools/css-minify";

const SAMPLE = `/* layout */
.hero {
  color: #2563eb;
  background: url("/images/hero.png");
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .hero {
    padding: calc(1rem + 2px);
  }
}
`;

export function CssMinifierTool() {
  return (
    <CodeMinifierTool
      id="css-minifier"
      label="CSS source"
      placeholder=".hero { color: blue; }"
      sample={SAMPLE}
      minify={minifyCss}
    />
  );
}
