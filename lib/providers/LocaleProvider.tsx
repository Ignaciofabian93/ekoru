"use client";
import { useEffect, useLayoutEffect } from "react";
import type { ReactNode } from "react";
import useLocaleStore from "../store/locale";
import type { Locale } from "../store/locale";

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const { isDetected, detectUserLocation, setLocale } = useLocaleStore();

  // Try to synchronously read persisted locale from localStorage before paint.
  // This reduces flash-of-wrong-language by ensuring the store has the user's
  // saved locale prior to the first paint.
  useLayoutEffect(() => {
    try {
      const raw = localStorage.getItem("locale-storage");
      if (raw) {
        const parsed = JSON.parse(raw) as {
          state?: { locale?: string };
        } | null;
        const persistedLocale = parsed?.state?.locale;
        if (persistedLocale) {
          setLocale(persistedLocale as Locale);
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Ignore errors
    }
  }, [setLocale]);

  useEffect(() => {
    // Only detect once on initial load
    if (!isDetected) {
      detectUserLocation();
    }
  }, [isDetected, detectUserLocation]);

  return <>{children}</>;
}
