import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type FeaturesTranslations = typeof esCL;

const translations: Record<Locale, FeaturesTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useFeaturesTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
  };
}

export type { FeaturesTranslations };
