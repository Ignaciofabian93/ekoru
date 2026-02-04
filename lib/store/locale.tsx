import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Base language codes (for translation file mapping)
export type BaseLocale = "es" | "en" | "fr";

// Regional locale codes (BCP-47 format)
export type Locale = "es-CL" | "en-US" | "fr-CA";

// Currency codes
export type Currency = "CLP" | "USD" | "EUR" | "GBP" | "CAD";

// Default and supported locales
export const DEFAULT_LOCALE: Locale = "es-CL";
export const SUPPORTED_LOCALES: Locale[] = ["es-CL", "en-US", "fr-CA"];

// Display names for locale selector UI
export const LOCALE_DISPLAY_NAMES: Record<Locale, { native: string; english: string }> = {
  "es-CL": { native: "Espanol (Chile)", english: "Spanish (Chile)" },
  "en-US": { native: "English (US)", english: "English (US)" },
  "fr-CA": { native: "Francais (Canada)", english: "French (Canada)" },
};

// Helper to extract base locale from regional locale
export function getBaseLocale(locale: Locale): BaseLocale {
  return locale.split("-")[0] as BaseLocale;
}

type CountryInfo = {
  country: string;
  countryCode: string;
  region: string;
  city: string;
  timezone: string;
  currency: Currency;
  locale: Locale;
};

type LocaleState = {
  locale: Locale;
  currency: Currency;
  countryInfo: CountryInfo | null;
  isDetecting: boolean;
  isDetected: boolean;
  setLocale: (locale: Locale) => void;
  setCurrency: (currency: Currency) => void;
  setCountryInfo: (info: CountryInfo) => void;
  setIsDetecting: (isDetecting: boolean) => void;
  detectUserLocation: () => Promise<void>;
};

const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: DEFAULT_LOCALE,
      currency: "CLP",
      countryInfo: null,
      isDetecting: false,
      isDetected: false,

      setLocale: (locale) => set({ locale }),

      setCurrency: (currency) => set({ currency }),

      setCountryInfo: (info) => set({ countryInfo: info }),

      setIsDetecting: (isDetecting) => set({ isDetecting }),

      detectUserLocation: async () => {
        if (get().isDetected) return;

        set({ isDetecting: true });

        try {
          // Try multiple geolocation APIs for redundancy
          const response = await fetch("https://ipapi.co/json/");

          if (!response.ok) {
            throw new Error("Failed to fetch location");
          }

          const data = await response.json();

          // Map country to locale and currency
          const countryCode = data.country_code as string;
          const locale = getLocaleFromCountry(countryCode);
          const currency = getCurrencyFromCountry(countryCode);

          const countryInfo: CountryInfo = {
            country: data.country_name || "Unknown",
            countryCode: countryCode || "XX",
            region: data.region || "Unknown",
            city: data.city || "Unknown",
            timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            currency,
            locale,
          };

          set({
            locale,
            currency,
            countryInfo,
            isDetecting: false,
            isDetected: true,
          });
        } catch (error) {
          console.error("Failed to detect location:", error);

          // Fallback: Use browser language with regional support
          const browserLang = navigator.language; // Full BCP-47 (e.g., "es-CL", "en-US")
          const baseLang = browserLang.split("-")[0];

          let locale: Locale = "es-CL";
          let currency: Currency = "CLP";

          // Check for exact match first
          if (SUPPORTED_LOCALES.includes(browserLang as Locale)) {
            locale = browserLang as Locale;
            currency = locale === "es-CL" ? "CLP" : locale === "fr-CA" ? "CAD" : "USD";
          } else if (baseLang === "es") {
            locale = "es-CL";
            currency = "CLP";
          } else if (baseLang === "fr") {
            locale = "fr-CA";
            currency = "CAD";
          } else if (baseLang === "en") {
            locale = "en-US";
            currency = "USD";
          }

          set({
            locale,
            currency,
            isDetecting: false,
            isDetected: true,
          });
        }
      },
    }),
    {
      name: "locale-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        locale: state.locale,
        currency: state.currency,
        countryInfo: state.countryInfo,
        isDetected: state.isDetected,
      }),
      // Migration for existing users with old locale codes
      migrate: (persistedState) => {
        const state = persistedState as Partial<LocaleState>;
        const oldLocale = state.locale as string | undefined;

        // Migrate old simple codes to regional codes
        if (oldLocale === "es") state.locale = "es-CL";
        else if (oldLocale === "en") state.locale = "en-US";
        else if (oldLocale === "fr") state.locale = "fr-CA";

        return state as LocaleState;
      },
      version: 1,
    }
  )
);

// Helper: Map country code to regional locale
function getLocaleFromCountry(countryCode: string): Locale {
  // Direct regional mappings for specific countries
  const regionalMap: Record<string, Locale> = {
    CL: "es-CL", // Chile
    US: "en-US", // United States
    CA: "fr-CA", // Canada (default to French-Canadian)
  };

  if (regionalMap[countryCode]) {
    return regionalMap[countryCode];
  }

  // Spanish-speaking countries (default to es-CL)
  const spanishCountries = [
    "ES", // Spain
    "MX", // Mexico
    "AR", // Argentina
    "CO", // Colombia
    "PE", // Peru
    "VE", // Venezuela
    "EC", // Ecuador
    "GT", // Guatemala
    "CU", // Cuba
    "BO", // Bolivia
    "DO", // Dominican Republic
    "HN", // Honduras
    "PY", // Paraguay
    "SV", // El Salvador
    "NI", // Nicaragua
    "CR", // Costa Rica
    "PA", // Panama
    "UY", // Uruguay
    "GQ", // Equatorial Guinea
  ];

  // French-speaking countries (default to fr-CA)
  const frenchCountries = [
    "FR", // France
    "BE", // Belgium
    "CH", // Switzerland
    "LU", // Luxembourg
    "MC", // Monaco
    "HT", // Haiti
    "CI", // Cote d'Ivoire
    "SN", // Senegal
    "ML", // Mali
    "BF", // Burkina Faso
    "NE", // Niger
    "CD", // DR Congo
    "CG", // Congo
    "GA", // Gabon
    "CM", // Cameroon
    "MG", // Madagascar
    "BJ", // Benin
    "TD", // Chad
    "GN", // Guinea
    "RW", // Rwanda
    "BI", // Burundi
    "TG", // Togo
    "CF", // Central African Republic
  ];

  if (spanishCountries.includes(countryCode)) return "es-CL";
  if (frenchCountries.includes(countryCode)) return "fr-CA";
  return "en-US";
}

// Helper: Map country code to currency
function getCurrencyFromCountry(countryCode: string): Currency {
  const currencyMap: Record<string, Currency> = {
    // Chilean Peso
    CL: "CLP",

    // US Dollar
    US: "USD",
    EC: "USD",
    SV: "USD",
    PA: "USD",

    // Canadian Dollar
    CA: "CAD",

    // Euro
    ES: "EUR",
    DE: "EUR",
    FR: "EUR",
    IT: "EUR",
    PT: "EUR",
    NL: "EUR",
    BE: "EUR",
    AT: "EUR",
    GR: "EUR",
    IE: "EUR",
    LU: "EUR",
    MC: "EUR",

    // British Pound
    GB: "GBP",
  };

  return currencyMap[countryCode] || "USD";
}

export default useLocaleStore;
