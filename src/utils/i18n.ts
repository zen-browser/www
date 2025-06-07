import { type AstroGlobal, type GetStaticPaths } from 'astro'

import { CONSTANT } from '~/constants'
import { languages, type I18nType, type Locale } from '~/constants/i18n'

/**
 * List of all supported locales
 */
export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value)

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

// Helper to recursively check for missing keys
export function checkMismatch(
  defaultObj: I18nType,
  localeObj: Partial<I18nType> = {},
  path: string[] = [],
  validLocale: Locale
): void {
  if (typeof defaultObj !== 'object' || defaultObj === null) return
  for (const key of Object.keys(defaultObj) as (keyof I18nType)[]) {
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
      checkMismatch(defaultObj[key], localeObj[key], [...path, key as string], validLocale)
    }
  }
}

// Deep merge: localeUI overrides defaultUI, fallback to defaultUI for missing keys
export function deepMerge(defaultObj: I18nType, localeObj: Partial<I18nType> = {}): I18nType {
  if (
    typeof defaultObj !== 'object' ||
    defaultObj === null ||
    typeof localeObj !== 'object' ||
    localeObj === null
  ) {
    return defaultObj
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = Array.isArray(defaultObj) ? [...defaultObj] : { ...defaultObj }
  for (const key of Object.keys(defaultObj) as (keyof I18nType)[]) {
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

const defaultUI = languages[CONSTANT.I18N.DEFAULT_LOCALE]

if (!defaultUI) {
  throw new Error('Default UI translation is missing!')
}

/**
 * Retrieves UI translations for a given locale
 * @param {Locale} [locale] - The target locale for translations
 * @returns {I18nType} UI translations
 */
export const getUI = (locale?: Locale): I18nType => {
  const validLocale = locale && locales.includes(locale) ? locale : CONSTANT.I18N.DEFAULT_LOCALE

  return languages[validLocale] ?? defaultUI
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
