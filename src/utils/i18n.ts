import { type AstroGlobal, type GetStaticPaths } from 'astro'

import { CONSTANT } from '~/constants'
import { type UIProps } from '~/constants/i18n'

/**
 * Represents the available locales in the application
 */
export type Locale = (typeof locales)[number]

/**
 * Generates a localized path by prefixing the locale if necessary
 * @param {Locale} [locale] - The current locale
 * @returns {function(string): string} A function that transforms paths based on the locale
 */
export const getPath =
  (locale?: Locale): ((arg0: string) => string) =>
  (path: string) => {
    // Return external URLs unchanged
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path
    }

    // Check if path already contains any locale prefix
    const existingLocale = locales.find(l => path.startsWith(`/${l}/`))

    if (locale && locale !== CONSTANT.I18N.DEFAULT_LOCALE) {
      if (existingLocale) {
        // Replace existing locale with new locale
        return path.replace(`/${existingLocale}/`, `/${locale}/`)
      }
      // Add new locale prefix
      return `/${locale}${path.startsWith('/') ? '' : '/'}${path}`
    }
    // Remove locale prefix if switching to default locale
    if (existingLocale && locale === CONSTANT.I18N.DEFAULT_LOCALE) {
      return path.replace(`/${existingLocale}/`, '/')
    }
    return path
  }

/**
 * Retrieves the current locale from the Astro object.
 *
 * @param Astro - The Astro object containing the current locale information
 * @param Astro.currentLocale - The current locale string from Astro
 * @returns The current locale cast as a Locale type
 */
export const getLocale = (Astro: AstroGlobal): Locale => {
  return Astro.currentLocale as Locale
}

/**
 * List of all supported locales
 */
export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value)

/**
 * List of locales excluding the default locale
 */
const otherLocales = CONSTANT.I18N.LOCALES.filter(
  ({ value }) => value !== CONSTANT.I18N.DEFAULT_LOCALE
).map(({ value }) => value)

/**
 * Retrieves locales other than the default locale
 * @returns {Locale[]} Array of non-default locales
 */
export const getOtherLocales = (): Locale[] => otherLocales

/**
 * Retrieves UI translations for a given locale, merging with default translations
 * @param {Locale} [locale] - The target locale for translations
 * @returns {UI} Merged UI translations
 */
export const getUI = (locale?: Locale | string): UIProps => {
  const validLocale = locales.includes(locale as Locale) ? locale : CONSTANT.I18N.DEFAULT_LOCALE
  const defaultUI = CONSTANT.I18N.LOCALES.find(
    ({ value }) => value === CONSTANT.I18N.DEFAULT_LOCALE
  )?.ui
  const localeUI = CONSTANT.I18N.LOCALES.find(({ value }) => value === validLocale)?.ui

  // Helper to recursively check for missing keys
  function checkMismatch(
    defaultObj: UIProps,
    localeObj: Partial<UIProps> = {},
    path: string[] = []
  ): void {
    if (typeof defaultObj !== 'object' || defaultObj === null) return
    for (const key of Object.keys(defaultObj) as (keyof UIProps)[]) {
      if (!(key in localeObj)) {
        console.error(
          `[i18n] Missing translation key: ${[...path, key as string].join('.')} in locale '\x1b[1m${validLocale}\x1b[0m'. See src/i18n/${validLocale}/translation.json`
        )
      } else if (
        typeof defaultObj[key] === 'object' &&
        defaultObj[key] !== null &&
        typeof localeObj[key] === 'object' &&
        localeObj[key] !== null
      ) {
        // @ts-expect-error: recursive structure
        checkMismatch(defaultObj[key], localeObj[key], [...path, key as string])
      }
    }
  }

  // Deep merge: localeUI overrides defaultUI, fallback to defaultUI for missing keys
  function deepMerge(defaultObj: UIProps, localeObj: Partial<UIProps> = {}): UIProps {
    if (typeof defaultObj !== 'object' || defaultObj === null) return defaultObj
    if (typeof localeObj !== 'object' || localeObj === null) return defaultObj
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = Array.isArray(defaultObj) ? [...defaultObj] : { ...defaultObj }
    for (const key of Object.keys(defaultObj) as (keyof UIProps)[]) {
      if (key in localeObj) {
        if (
          typeof defaultObj[key] === 'object' &&
          defaultObj[key] !== null &&
          typeof localeObj[key] === 'object' &&
          localeObj[key] !== null
        ) {
          // @ts-expect-error: recursive structure
          result[key] = deepMerge(defaultObj[key], localeObj[key])
        } else {
          result[key] = localeObj[key]
        }
      } else {
        result[key] = defaultObj[key]
      }
    }
    return result
  }

  if (!defaultUI) {
    throw new Error('Default UI translation is missing!')
  }

  if (localeUI && validLocale !== CONSTANT.I18N.DEFAULT_LOCALE) {
    checkMismatch(defaultUI, localeUI)
    return deepMerge(defaultUI, localeUI) as UIProps
  }

  // If localeUI is undefined or locale is default, just return defaultUI
  return defaultUI
}

/**
 * Generates static paths for internationalization
 * @returns {Array} An array of static paths for different locales
 */
export const getStaticPaths = (() => {
  return [
    {
      params: { locale: undefined },
      props: { locale: CONSTANT.I18N.DEFAULT_LOCALE },
    },
    ...CONSTANT.I18N.LOCALES.filter(({ value }) => value !== CONSTANT.I18N.DEFAULT_LOCALE).map(
      ({ value }) => ({
        params: { locale: value },
        props: {
          locale: value,
        },
      })
    ),
  ]
}) satisfies GetStaticPaths

/**
 * Retrieves all available locales, including both default and non-default
 * @returns {Locale[]} Combined array of all locales
 */
export const getLocales = (): Locale[] => {
  return [...locales, ...otherLocales]
}
