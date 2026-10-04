import type { Locale } from "../config.ts";
import type { LocalizedToolPage } from "./types.ts";
import ar from "./content/ar.ts";
import de from "./content/de.ts";
import en from "./content/en.ts";
import es from "./content/es.ts";
import fr from "./content/fr.ts";
import hi from "./content/hi.ts";
import id from "./content/id.ts";
import it from "./content/it.ts";
import ja from "./content/ja.ts";
import ko from "./content/ko.ts";
import nl from "./content/nl.ts";
import ptBr from "./content/pt-br.ts";
import ru from "./content/ru.ts";
import tr from "./content/tr.ts";
import ur from "./content/ur.ts";

export { cpsTestDescription, cpsTestName } from "./content/en.ts";

/** Full CPS Test page text per language (server only: long-form content). */
export const cpsTestPages: Record<Locale, LocalizedToolPage> = {
  en,
  "pt-br": ptBr,
  nl,
  ar,
  es,
  fr,
  id,
  de,
  it,
  tr,
  ru,
  hi,
  ur,
  ja,
  ko,
};
