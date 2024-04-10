import { type Resources, type defaultNS } from "~/modules/intl/intl.setup";

declare module "i18next" {
  interface CustomTypeOptions {
    // ensure only existing keys can be passed to the `t` function
    resources: Resources["en"];
    keySeparator: ".";
    defaultNS: typeof defaultNS;
  }
}
