// import type English from "../../../public/locales/en.json";
import type Czech from "../../../public/locales/cs.json";

export const locales = ["cs"] as const;
export type Locale = (typeof locales)[number];

export const defaultNS = "translation" as const;

type CzechTranslations = {
  [defaultNS]: typeof Czech;
};

// This is here so that typescript screams if translation keys in some languages are missing.
const resources: { [lang in Locale]: CzechTranslations } = {
  cs: {} as { [defaultNS]: typeof Czech },
  // en: {} as { [defaultNS]: typeof English },
};
export type Resources = typeof resources;

export const i18nSettings = {
  supportedLngs: ["cs"],
  fallbackLng: "cs",
  defaultNS,
};
