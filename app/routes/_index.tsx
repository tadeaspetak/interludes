import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Header } from "components/Header";
import { useTranslation } from "react-i18next";
import { i18NextServer } from "~/modules/intl/intl.server";
import { localeFromRequest } from "~/modules/intl/intl.utils.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18NextServer.getFixedT(await localeFromRequest(request));
  return json({ title: t("home.title") });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data!.title }];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      {/* <Welcome /> */}

      <h1>Welcome to Remix</h1>
      <h2>{t("greeting")}</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
