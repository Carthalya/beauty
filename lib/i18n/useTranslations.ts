'use client'

import { useCallback } from 'react'
import { Locale } from '@/types'
import en from '@/messages/en.json'
import fr from '@/messages/fr.json'
import ar from '@/messages/ar.json'

type Messages = typeof en

const messages: Record<Locale, Messages> = { en, fr, ar }

type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string
      ? T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}` | K
        : K
      : never
    }[keyof T]
  : never

export function useTranslations(locale: Locale) {
  const t = useCallback((key: string): string => {
    const keys = key.split('.')
    let value: unknown = messages[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        // Fallback to English
        value = messages.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = (value as Record<string, unknown>)[fallbackKey]
          } else {
            return key
          }
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : key
  }, [locale])
  
  return { t }
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: unknown = messages[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}
