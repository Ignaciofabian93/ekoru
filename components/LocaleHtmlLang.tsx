"use client";

import { useEffect } from "react";
import useLocaleStore from "@/lib/store/locale";

export default function LocaleHtmlLang() {
  const locale = useLocaleStore((state) => state.locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
