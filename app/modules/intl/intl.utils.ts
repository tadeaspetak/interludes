import { z } from "zod";
import { type Locale, locales } from "./intl.setup";

export const isLocale = (s: string): s is Locale =>
  locales.includes(s as Locale);

export const localeValidator = z.enum(locales);
