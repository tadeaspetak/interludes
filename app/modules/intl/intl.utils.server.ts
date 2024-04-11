import { createCookie } from "@remix-run/node";

import { type Locale } from "~/modules/intl/intl.setup";

import { getCookieHeader } from "~/modules/cookies.utils.server";
import { i18NextServer } from "./intl.server";
import { isLocale } from "./intl.utils";

// the cookie for saving explicit changes to the locale
const intlPrefsCookie = createCookie("intl-prefs", {
  maxAge: 31_536_000, // one year
});

/**
 * Extract the `locale` from the `request` (=cookie).
 */

const localeFromCookie = async (
  request: Request
): Promise<Locale | undefined> => {
  const cookie = await intlPrefsCookie.parse(getCookieHeader(request));
  const locale = cookie?.locale;
  return locale && isLocale(locale) ? locale : undefined;
};

/**
 * Store the given `locale` in a cookie.
 *
 * Note that you still need to set the cookie on the response manually, e.g.:
 * ```
 * return redirect(request.url, {
 *  headers: { 'Set-Cookie': await localeToCookie(parsed.data.locale) },
 * });
 * ```
 */

export const localeToCookie = async (locale: Locale) =>
  await intlPrefsCookie.serialize({ locale });

/**
 * First, use our own cookie to detect locale. If that fails,
 * let the default language detector decide.
 */

export const localeFromRequest = async (request: Request) =>
  (await localeFromCookie(request)) ?? (await i18NextServer.getLocale(request));
