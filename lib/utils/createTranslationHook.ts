import { useMemo } from "react";
import useLocale from "@/hooks/useLocale";
import type { Locale, BaseLocale } from "@/lib/store/locale";
import { getBaseLocale } from "@/lib/store/locale";

/**
 * Configuration for component-level translations.
 * Supports base translations with optional regional overrides.
 */
type TranslationConfig<T> = {
  /** Base translations for each language (es, en, fr) */
  base: Record<BaseLocale, T>;
  /** Optional regional overrides (es-CL, en-US, fr-CA, etc.) */
  regional?: Partial<Record<Locale, Partial<T>>>;
};

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
 * Creates a reusable translation hook for component-level translations.
 * Supports base translations with optional regional overrides.
 *
 * @param config - Translation configuration with base and optional regional translations
 * @returns A hook that returns the translations for the current locale
 *
 * @example
 * // Basic usage with base translations only
 * const useMyComponentTranslations = createTranslationHook({
 *   base: {
 *     en: enTranslations,
 *     es: esTranslations,
 *     fr: frTranslations,
 *   },
 * });
 *
 * @example
 * // With regional overrides
 * const useMyComponentTranslations = createTranslationHook({
 *   base: {
 *     en: enTranslations,
 *     es: esTranslations,
 *     fr: frTranslations,
 *   },
 *   regional: {
 *     "es-MX": esMxOverrides, // Only include keys that differ
 *   },
 * });
 */
export function createTranslationHook<T extends Record<string, unknown>>(
  config: TranslationConfig<T>
) {
  return function useComponentTranslations() {
    const { locale } = useLocale();

    const t = useMemo(() => {
      const baseLocale = getBaseLocale(locale);
      const baseTranslations = config.base[baseLocale];

      // Check for regional overrides
      const regionalOverrides = config.regional?.[locale];
      if (regionalOverrides) {
        return deepMerge(baseTranslations, regionalOverrides);
      }

      return baseTranslations;
    }, [locale]);

    return { t, locale };
  };
}

export default createTranslationHook;
