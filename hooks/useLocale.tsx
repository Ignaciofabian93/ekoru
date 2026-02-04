import useLocaleStore, { type Locale, type Currency, getBaseLocale } from "@/lib/store/locale";
import { useTranslations, type TranslationKey } from "@/lib/utils/Translations";
import { resolveInlineTranslation, type InlineTranslations } from "@/lib/utils/localeHelpers";

export default function useLocale() {
  const { locale, currency, countryInfo, isDetecting, setLocale, setCurrency } = useLocaleStore();

  const { t: translate } = useTranslations(locale);

  /**
   * Translation function that supports:
   * - Translation keys from global translations (e.g., "common.welcome")
   * - Inline translations with regional keys (e.g., { "es-CL": "Hola", "en-US": "Hello" })
   * - Inline translations with legacy base keys (e.g., { es: "Hola", en: "Hello" })
   */
  const t = (key: TranslationKey | InlineTranslations): string => {
    // If it's a string, use the global translation system
    if (typeof key === "string") {
      return translate(key);
    }
    // Otherwise, resolve inline translation with fallback support
    return resolveInlineTranslation(key, locale);
  };

  const formatPrice = (amount: number): string => {
    const currencySymbols: Record<Currency, string> = {
      CLP: "$",
      USD: "$",
      CAD: "$",
      EUR: "€",
      GBP: "£",
    };

    const symbol = currencySymbols[currency];

    // Use the regional locale directly for formatting (BCP-47 codes work with Intl)
    const formatted = new Intl.NumberFormat(locale, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: currency === "CLP" ? 0 : 2,
    }).format(amount);

    return `${symbol}${formatted}`;
  };

  const formatDate = (date: Date | string): string => {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    // Use the regional locale directly for date formatting (BCP-47 codes work with Intl)
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj);
  };

  return {
    locale,
    baseLocale: getBaseLocale(locale), // Expose base locale for backwards compatibility
    currency,
    countryInfo,
    isDetecting,
    setLocale,
    setCurrency,
    t,
    formatPrice,
    formatDate,
  };
}
