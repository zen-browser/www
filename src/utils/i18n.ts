import type { GetStaticPaths } from 'astro'
import { CONSTANT } from '~/constants'
import UI_EN from '~/i18n/en/translation.json'

/**
 * Represents the available locales in the application
 * @typedef {string} Locale
 */
export type Locale = (typeof locales)[number]

/**
 * Generates a localized path by prefixing the locale if necessary
 * @param {Locale} [locale] - The current locale
 * @returns {function(string): string} A function that transforms paths based on the locale
 */
export const getPath = (locale?: Locale) => (path: string) => {
  if (locale && locale !== CONSTANT.I18N.DEFAULT_LOCALE && !path.startsWith(`/${locale}`)) {
    return `/${locale}${path.startsWith('/') ? '' : '/'}${path}`
  }
  return path
}

/**
 * Extracts the current locale from Astro's params, defaulting to the default locale
 * @param {Object} Astro - Astro's context object
 * @param {Object} [Astro.params] - Routing parameters
 * @param {string} [Astro.params.locale] - The current locale parameter
 * @returns {Locale} The determined locale
 */
export const getLocale = (Astro: { params?: { locale?: string } }) => {
  if (Astro.params?.locale) {
    return Astro.params.locale as Locale
  }
  return CONSTANT.I18N.DEFAULT_LOCALE as Locale
}

/**
 * List of all supported locales
 * @type {Locale[]}
 */
export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value)

/**
 * List of locales excluding the default locale
 * @type {Locale[]}
 */
const otherLocales = CONSTANT.I18N.LOCALES.filter(
  ({ value }) => value !== CONSTANT.I18N.DEFAULT_LOCALE,
)

/**
 * Retrieves locales other than the default locale
 * @returns {Locale[]} Array of non-default locales
 */
export const getOtherLocales = () => otherLocales

/**
 * Type definition for UI translations based on the English translation
 * @typedef {Object} UI
 */
export type UI = typeof UI_EN

/**
 * Mapping of locales to their UI translation objects
 * @type {Object.<Locale, UI>}
 */
export const ui = { en: UI_EN }

/**
 * Retrieves UI translations for a given locale, merging with default translations
 * @param {Locale} [locale] - The target locale for translations
 * @returns {UI} Merged UI translations
 */
export const getUI = (locale?: Locale | string): UI => {
  const validLocale = locales.includes(locale as Locale) ? locale : CONSTANT.I18N.DEFAULT_LOCALE
  const defaultUI = ui[CONSTANT.I18N.DEFAULT_LOCALE]
  const localeUI = ui[validLocale as Locale]

  /**
   * Recursively merges two objects, with the override object taking precedence
   * @template T
   * @param {T} defaultObj - The default object to merge from
   * @param {Partial<T>} overrideObj - The object to merge over the default
   * @returns {T} The deeply merged object
   */
  function deepMerge<T extends object>(defaultObj: T, overrideObj: Partial<T>): T {
    // Handle non-object cases
    if (typeof defaultObj !== 'object' || defaultObj === null) {
      return (overrideObj ?? defaultObj) as T
    }
    if (typeof overrideObj !== 'object' || overrideObj === null) {
      return (overrideObj ?? defaultObj) as T
    }

    // Create a new object or array based on the default object's type
    const result = Array.isArray(defaultObj) ? [...defaultObj] : { ...defaultObj }

    // Merge properties from the default object
    for (const key of Object.keys(defaultObj) as Array<keyof T>) {
      const defaultValue = defaultObj[key]
      const overrideValue = overrideObj[key]

      // Recursively merge nested objects
      if (
        defaultValue !== null &&
        overrideValue !== null &&
        typeof defaultValue === 'object' &&
        typeof overrideValue === 'object'
      ) {
        // Type assertion to handle nested merging
        ;(result as Record<keyof T, unknown>)[key] = deepMerge(
          defaultValue as object,
          overrideValue as Partial<object>,
        )
      } else if (overrideValue !== undefined) {
        // Override with the new value if it exists
        ;(result as Record<keyof T, unknown>)[key] = overrideValue
      }
    }

    // Add any new properties from overrideObj
    for (const key of Object.keys(overrideObj) as Array<keyof T>) {
      if (!(key in defaultObj)) {
        ;(result as Record<keyof T, unknown>)[key] = overrideObj[key]
      }
    }

    return result as T
  }

  return deepMerge(defaultUI, localeUI)
}

/**
 * Generates static paths for internationalization
 * @type {GetStaticPaths}
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
      }),
    ),
  ]
}) satisfies GetStaticPaths

/**
 * Retrieves all available locales, including both default and non-default
 * @returns {Locale[]} Combined array of all locales
 */
export const getLocales = () => {
  return [...locales, ...otherLocales]
}
