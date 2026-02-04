import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type HeroTranslations = typeof esCL;

const translations: Record<Locale, HeroTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useHeroTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    slogan: t.slogan,
    subtitle: t.subtitle,
    ctaButton: t.ctaButton,
    features: t.features,
    nextSection: t.nextSection,
  };
}

export type { HeroTranslations };
