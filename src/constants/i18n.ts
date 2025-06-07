import { type } from 'arktype'

import languages from '~/i18n/locales.json' with { type: 'json' }
import { i18nSchema } from '~/schemas/i18n'
import { type I18nType, type Locale } from '~/types/i18n'

/**
 * List of all supported locales.
 */
export const locales = Object.keys(languages) as Locale[]

/**
 * Maps locale keys to their corresponding translation objects.
 */
export const translations: Record<string, I18nType> = Object.fromEntries(
  Object.entries(import.meta.glob('~/i18n/**/translation.json', { eager: true })).map(
    ([key, value]) => {
      const result = i18nSchema.I18n(value)

      if (result instanceof type.errors) {
        throw new Error(`Invalid translation file (${key}):\n${' '.repeat(2)}${result.summary}`)
      }

      return [/i18n\/([A-z]{2})\/translation.json/.exec(key)?.[1], result]
    }
  )
)

/**
 * Constants for i18n configuration.
 */
export const i18n = {
  DEFAULT_LOCALE: 'en',
  LOCALES: Object.entries(languages).map(([key, locale]) => {
    return {
      ...locale,
      ui: translations[key],
    }
  }),
} as const

/**
 * Retrieves the intl locale string for a given locale.
 */
export const getIntlLocale = (locale: Locale) => {
  return languages[locale]?.intl
}
