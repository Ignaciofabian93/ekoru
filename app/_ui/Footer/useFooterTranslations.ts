import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type FooterTranslations = typeof esCL;

const translations: Record<Locale, FooterTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useFooterTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    description: t.description,
    explore: t.explore,
    community: t.community,
    legal: t.legal,
    social: t.social,
  };
}

export type { FooterTranslations };
