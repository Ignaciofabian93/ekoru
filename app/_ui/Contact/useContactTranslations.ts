import useLocaleStore, { type Locale } from "@/lib/store/locale";

import esCL from "./locales/es-CL.json";
import enUS from "./locales/en-US.json";
import frCA from "./locales/fr-CA.json";

type ContactTranslations = typeof esCL;

const translations: Record<Locale, ContactTranslations> = {
  "es-CL": esCL,
  "en-US": enUS,
  "fr-CA": frCA,
};

export function useContactTranslations() {
  const { locale } = useLocaleStore();

  const t = translations[locale];

  return {
    locale,
    t,
    sectionId: t.sectionId,
    banner: t.banner,
    description: t.description,
    form: t.form,
    messages: t.messages,
  };
}

export type { ContactTranslations };
