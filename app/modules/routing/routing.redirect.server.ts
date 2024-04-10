import { redirect } from "@remix-run/node";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/register pages). This avoids
 * open-redirect vulnerabilities.
 *
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */

export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * Redirect back to wherever the request came from.
 */

export function redirectBack(request: Request, defaultRedirect = "/") {
  const referer = request.headers.get("referer");
  return redirect(referer ? new URL(referer).pathname : defaultRedirect);
}
