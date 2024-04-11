// import { ActionIcon, Button } from "@mantine/core";
// import { useFetcher } from "@remix-run/react";
// import { IconFlag, IconLoader } from "@tabler/icons-react";
// import { useLocale } from "remix-i18next/react";
// import { Locale } from "~/modules/intl/intl.setup";
// import { CZFlag } from "mantine-flagpack";

// export const LanguageSelector = () => {
//   const locale = useLocale();
//   const localeFetcher = useFetcher({ key: "locale" });

//   const isSubmitting = localeFetcher.state === "submitting";

//   return (
//     <ActionIcon
//       variant="transparent"
//       aria-label="Settings"
//       disabled={isSubmitting}
//       onClick={() => {
//         const current = (localeFetcher.formData?.get("locale")?.toString() ??
//           locale) as Locale;
//         localeFetcher.submit(
//           { locale: current === "en" ? "cs" : "en" },
//           { action: "/change-language", method: "POST" }
//         );
//       }}
//     >
//       <CZFlag w={100} radius="md" />
//     </ActionIcon>
//   );
// };
