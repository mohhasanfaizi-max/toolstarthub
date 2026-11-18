import type { Locale } from "@/i18n/config";
import type { ToolTextDictionary } from "@/i18n/tool-text";
import es from "./ui-es";
import ar from "./ui-ar";
import ptBr from "./ui-pt-br";

export const imageWorkspaceText: Partial<Record<Locale, ToolTextDictionary>> = {
  es,
  ar,
  "pt-br": ptBr,
};
