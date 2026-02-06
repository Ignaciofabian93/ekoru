import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type MissionAndVisionTranslations = typeof esCL;

const translations: Record<Locale, MissionAndVisionTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useMissionAndVisionTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    sectionId: t.sectionId,
    banners: t.banners,
    introText: t.introText,
    imageAlt: t.imageAlt,
    mission: t.mission,
    vision: t.vision,
    values: t.values,
  };
}

export type { MissionAndVisionTranslations };
