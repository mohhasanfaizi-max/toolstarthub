import { minify } from "terser";

export type MinifyResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

const MAX_SOURCE = 400_000;

export async function minifyJavaScript(input: string): Promise<MinifyResult> {
  if (input.trim() === "") {
    return { ok: false, error: "Enter some JavaScript." };
  }
  if (input.length > MAX_SOURCE) {
    return {
      ok: false,
      error: "Keep JavaScript under 400,000 characters so the browser stays responsive.",
    };
  }

  try {
    const result = await minify(input, {
      compress: {
        defaults: true,
        evaluate: false,
        reduce_vars: false,
        reduce_funcs: false,
        inline: 0,
      },
      mangle: true,
      module: false,
      format: { comments: false },
    });
    if (typeof result.code !== "string") {
      return { ok: false, error: "The code could not be minified." };
    }
    return { ok: true, output: result.code };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "That JavaScript could not be parsed.";
    return { ok: false, error: message };
  }
}
