import type English from "../../../public/locales/en.json";
import type Czech from "../../../public/locales/cs.json";
import { z } from "zod";

export const locales = ["en", "cs"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (s: string): s is Locale =>
  locales.includes(s as Locale);
export const localeValidator = z.enum(locales);

export const defaultNS = "translation" as const;

type EnglishTranslations = {
  [defaultNS]: typeof English;
};
/**
 * This is here so that typescript screams if translation keys in some languages are missing.
 */

const resources: { [lang in Locale]: EnglishTranslations } = {
  cs: {} as { [defaultNS]: typeof Czech },
  en: {} as { [defaultNS]: typeof English },
};
export type Resources = typeof resources;

export const i18nSettings = {
  supportedLngs: ["en", "cs"],
  fallbackLng: "en",
  defaultNS,
};

export const localeLabels: { [key in Locale]: string } = {
  en: "English",
  cs: "Čeština",
};
