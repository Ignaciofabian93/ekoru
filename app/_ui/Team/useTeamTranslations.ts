import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type TeamTranslations = typeof esCL;

const translations: Record<Locale, TeamTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useTeamTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    sectionId: t.sectionId,
    banner: t.banner,
    members: t.members,
    ui: t.ui,
  };
}

export type { TeamTranslations };
