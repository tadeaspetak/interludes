/**
 * Get the cookie header from the given request.
 *
 * This is just a shorthand utility method to avoid having to type
 * `request.headers.get('Cookie')` all the time, which is both cumbersome
 * and prone to typos.
 */

export function getCookieHeader(request: Request) {
  return request.headers.get("Cookie");
}
