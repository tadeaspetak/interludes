import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next/server";
import { i18nSettings } from "./intl.setup";

// TODO: All is prepped for English, but let's start with the Czech version 👌

export const i18NextServer = new RemixI18Next({
  detection: {
    supportedLanguages: i18nSettings.supportedLngs,
    fallbackLanguage: i18nSettings.fallbackLng,
  },
  i18next: {
    ...i18nSettings,
    backend: { loadPath: resolve("./public/locales/{{lng}}.json") },
  },
  plugins: [Backend],
});
