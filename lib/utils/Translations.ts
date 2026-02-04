import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import frTranslations from "@/locales/fr.json";
import type { Locale, BaseLocale } from "@/lib/store/locale";
import { getBaseLocale } from "@/lib/store/locale";

type Translations = typeof esTranslations;
type TranslationKey = {
  [K in keyof Translations]: {
    [P in keyof Translations[K]]: `${K & string}.${P & string}`;
  }[keyof Translations[K]];
}[keyof Translations];

// Base translations (language-level)
const baseTranslations: Record<BaseLocale, Translations> = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations,
};

// Regional overrides (empty initially - populate as needed for regional variants)
// Example: When es-CL needs different translations than es-MX
// const regionalOverrides: Partial<Record<Locale, Partial<Translations>>> = {
//   "es-CL": esClOverrides,
// };

/**
 * Deep merge utility for translation objects
 */
function deepMerge<T extends Record<string, unknown>>(base: T, overrides: Partial<T>): T {
  const result = { ...base };
  for (const key in overrides) {
    if (Object.prototype.hasOwnProperty.call(overrides, key)) {
      const overrideValue = overrides[key];
      const baseValue = base[key];
      if (
        overrideValue &&
        typeof overrideValue === "object" &&
        !Array.isArray(overrideValue) &&
        baseValue &&
        typeof baseValue === "object" &&
        !Array.isArray(baseValue)
      ) {
        result[key] = deepMerge(
          baseValue as Record<string, unknown>,
          overrideValue as Record<string, unknown>
        ) as T[Extract<keyof T, string>];
      } else if (overrideValue !== undefined) {
        result[key] = overrideValue as T[Extract<keyof T, string>];
      }
    }
  }
  return result;
}

/**
 * Get translations for a regional locale.
 * Falls back to base language translations, with optional regional overrides.
 */
export function getTranslationsForLocale(locale: Locale): Translations {
  const base = getBaseLocale(locale);
  const translations = baseTranslations[base];

  // Future: merge regional overrides when they exist
  // const overrides = regionalOverrides[locale];
  // if (overrides) {
  //   return deepMerge(translations, overrides);
  // }

  return translations;
}

export function getTranslation(locale: Locale, key: TranslationKey): string {
  const translations = getTranslationsForLocale(locale);
  const [section, item] = key.split(".") as [keyof Translations, string];
  const translationSection = translations[section] as Record<string, string>;
  return translationSection[item] || key;
}

export function useTranslations(locale: Locale) {
  return {
    t: (key: TranslationKey) => getTranslation(locale, key),
    translations: getTranslationsForLocale(locale),
  };
}

export type { TranslationKey };
