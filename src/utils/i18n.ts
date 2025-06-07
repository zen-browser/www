import { type AstroGlobal, type GetStaticPaths } from 'astro'

import { CONSTANT } from '~/constants'
import { locales, translations } from '~/constants/i18n'
import { type I18nType, type Locale } from '~/types/i18n'

/**
 * Generates a localized path by prefixing the locale if necessary.
 */
export const getPath = (locale?: Locale) => (path: string) => {
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
 */
export const getLocale = (Astro: AstroGlobal): Locale => {
  return Astro.currentLocale as Locale
}

/**
 * List of locales excluding the default locale.
 */
export const otherLocales = locales.filter(locale => locale !== CONSTANT.I18N.DEFAULT_LOCALE)

/**
 * Recursively checks for missing keys in the translation objects.
 */
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

/**
 * Deep merges two translation objects.
 * localeUI overrides defaultUI, fallback to defaultUI for missing keys.
 */
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

/**
 * Default UI translation for the default locale.
 */
const defaultUI = translations[CONSTANT.I18N.DEFAULT_LOCALE]

if (!defaultUI) {
  throw new Error('Default UI translation is missing!')
}

/**
 * Retrieves UI translations for a given locale.
 */
export const getUI = (locale?: Locale): I18nType => {
  const validLocale = locale && locales.includes(locale) ? locale : CONSTANT.I18N.DEFAULT_LOCALE

  return translations[validLocale] ?? defaultUI
}

/**
 * Generates static paths for internationalization.
 */
export const getStaticPaths = (() => {
  return [
    {
      params: { locale: undefined },
      props: { locale: CONSTANT.I18N.DEFAULT_LOCALE },
    },
    ...otherLocales.map(locale => ({
      params: { locale },
      props: {
        locale,
      },
    })),
  ]
}) satisfies GetStaticPaths
