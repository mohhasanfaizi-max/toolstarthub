"use client";

import { createContext, useContext } from "react";
import { defaultLocale, localizePath, type Locale } from "./config";
import { enClient, type ClientMessages } from "./messages/en-client";

type I18nValue = {
  locale: Locale;
  messages: ClientMessages;
};

const I18nContext = createContext<I18nValue>({
  locale: defaultLocale,
  messages: enClient,
});

export function I18nProvider({
  locale,
  messages,
  children,
}: I18nValue & { children: React.ReactNode }) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  return {
    ...value,
    href: (path: string) => localizePath(path, value.locale),
  };
}
