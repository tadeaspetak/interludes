import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { z } from "zod";

import { localeToCookie } from "~/modules/intl/intl.utils.server";
import { localeValidator } from "~/modules/intl/intl.setup";
import { redirectBack } from "~/modules/routing/routing.redirect.server";

const parser = z.object({ locale: localeValidator });

export const action = async ({ request }: ActionFunctionArgs) => {
  const parsed = parser.safeParse(Object.fromEntries(await request.formData()));

  if (!parsed.success) {
    throw new Response("Invalid locale.", { status: 500 });
  }

  return redirect(request.url, {
    headers: { "Set-Cookie": await localeToCookie(parsed.data.locale) },
  });
};

export const loader = async ({ request }: LoaderFunctionArgs) =>
  redirectBack(request);
