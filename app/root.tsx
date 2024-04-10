// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";
import { localeFromRequest } from "./modules/intl/intl.utils.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ locale: await localeFromRequest(request) });
}

export const handle = { i18n: "translation" };

export function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html
      lang={locale}
      dir={i18n.dir()} // https://github.com/mantinedev/mantine/issues/5253
      data-mantine-color-scheme="light"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
