import type { AstroGlobal, GetStaticPaths } from 'astro'
import { CONSTANT } from '@/constants'
import UI_EN from '@/i18n/en.json'

export type Locale = (typeof locales)[number]

export const getPath =
  (locale?: Locale) =>
  (path: string) => {
    if (locale && !path.startsWith(`/${locale}`)) {
      return `/${locale}${path.startsWith('/') ? '' : '/'}${path}`
    }
    return path
  }

export const getLocale = (Astro: AstroGlobal) => {
  if (Astro.params.locale) {
    return Astro.params.locale as Locale
  }
}

export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value)

export const otherLocales = CONSTANT.I18N.LOCALES.map(
  ({ value }) => value,
).filter((locale) => locale !== CONSTANT.I18N.DEFAULT_LOCALE)

export type UI = typeof UI_EN

export const ui = { en: UI_EN }

export const getUI = (locale?: Locale | string): UI => {
  const validLocale = locales.includes(locale as Locale)
    ? locale
    : CONSTANT.I18N.DEFAULT_LOCALE
  const defaultUI = ui[CONSTANT.I18N.DEFAULT_LOCALE]
  const localeUI = ui[validLocale as Locale]

  function deepMerge<T>(defaultObj: T, overrideObj: Partial<T>): T {
    if (typeof defaultObj !== 'object' || defaultObj === null) return (overrideObj ?? defaultObj) as T
    if (typeof overrideObj !== 'object' || overrideObj === null) return (overrideObj ?? defaultObj) as T
    const result: any = Array.isArray(defaultObj) ? [...defaultObj] : { ...defaultObj }
    for (const key in defaultObj) {
      if (Object.prototype.hasOwnProperty.call(defaultObj, key)) {
        result[key] = deepMerge((defaultObj as any)[key], (overrideObj as any)?.[key])
      }
    }
    for (const key in overrideObj) {
      if (!(key in defaultObj)) {
        result[key] = (overrideObj as any)[key]
      }
    }
    return result as T
  }

  return deepMerge<UI>(defaultUI, localeUI)
}

export const getStaticPaths = (() => {
  return [
    {
      params: { locale: undefined },
      props: { locale: CONSTANT.I18N.DEFAULT_LOCALE },
    },
    ...CONSTANT.I18N.LOCALES.map(({ value }) => ({
      params: { locale: value },
      props: {
        locale: value,
      },
    })),
  ]
}) satisfies GetStaticPaths

export const getLocales = () => {
  return [...locales, ...otherLocales]
}
  