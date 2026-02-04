import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type AboutTranslations = typeof esCL;

const translations: Record<Locale, AboutTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useAboutTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    highlights: t.highlights,
    sectionId: t.sectionId,
    banner: t.banner,
    content: t.content,
  };
}

export type { AboutTranslations };
