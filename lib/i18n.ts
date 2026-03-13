import ua from "@/i18n/ua.json";
import en from "@/i18n/en.json";

export type Locale = "ua" | "en";

const translations = { ua, en } as const;

export function t(locale: Locale) {
  return translations[locale] ?? translations.ua;
}

export const defaultLocale: Locale = "ua";
export const locales: Locale[] = ["ua", "en"];
