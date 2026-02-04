import type { Locale, BaseLocale } from "@/lib/store/locale";
import { getBaseLocale, SUPPORTED_LOCALES } from "@/lib/store/locale";

/**
 * Type for inline translations that supports both:
 * - Regional locale keys (es-CL, en-US, fr-CA)
 * - Legacy base locale keys (es, en, fr) for backwards compatibility
 */
export type InlineTranslations = {
  [K in Locale]?: string;
} & {
  // Backwards compatibility: allow base locale keys
  es?: string;
  en?: string;
  fr?: string;
};

/**
 * Resolves an inline translation object to a string for the given locale.
 * Supports fallback from regional to base locale to English.
 *
 * @param translations - Object with locale keys mapping to translated strings
 * @param locale - The current regional locale (e.g., "es-CL")
 * @returns The resolved translation string
 *
 * @example
 * // Regional keys
 * resolveInlineTranslation({ "es-CL": "Hola", "en-US": "Hello" }, "es-CL") // "Hola"
 *
 * // Legacy base keys (backwards compatible)
 * resolveInlineTranslation({ es: "Hola", en: "Hello" }, "es-CL") // "Hola"
 *
 * // Fallback to English
 * resolveInlineTranslation({ en: "Hello" }, "es-CL") // "Hello"
 */
export function resolveInlineTranslation(
  translations: InlineTranslations,
  locale: Locale
): string {
  // Try exact regional match first (es-CL, en-US, fr-CA)
  if (translations[locale]) {
    return translations[locale]!;
  }

  // Try base locale fallback (es, en, fr)
  const baseLocale = getBaseLocale(locale);
  if (translations[baseLocale as keyof InlineTranslations]) {
    return translations[baseLocale as keyof InlineTranslations] as string;
  }

  // Fallback to English (regional then base)
  if (translations["en-US"]) {
    return translations["en-US"];
  }
  if (translations.en) {
    return translations.en;
  }

  // Return empty string if nothing found
  return "";
}

/**
 * Checks if a locale code is a supported regional locale.
 */
export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Gets the base locale code from any locale string.
 * Works with both regional (es-CL) and base (es) formats.
 */
export function extractBaseLocale(locale: string): BaseLocale {
  const base = locale.split("-")[0];
  if (base === "es" || base === "en" || base === "fr") {
    return base;
  }
  return "en"; // Default fallback
}
