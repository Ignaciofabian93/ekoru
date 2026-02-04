import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type HeaderTranslations = typeof esCL;

const translations: Record<Locale, HeaderTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useHeaderTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    navigation: t.navigation,
    information: t.information,
    ids: t.ids,
  };
}

export type { HeaderTranslations };
