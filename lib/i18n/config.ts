import { LocaleConfig, Locale } from '@/types'

export const locales: Locale[] = ['en', 'fr', 'ar']
export const defaultLocale: Locale = 'en'

export const localeConfigs: Record<Locale, LocaleConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇬🇧'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    flag: '🇫🇷'
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇸🇦'
  }
}

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return localeConfigs[locale] || localeConfigs[defaultLocale]
}

export function isRTL(locale: Locale): boolean {
  return getLocaleConfig(locale).direction === 'rtl'
}
