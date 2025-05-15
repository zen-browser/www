import type { GetStaticPaths } from "astro";
import { CONSTANT } from "~/constants";
import UI_EN from "~/i18n/en/translation.json";

export type Locale = (typeof locales)[number];

export const getPath = (locale?: Locale) => (path: string) => {
  if (locale && locale !== CONSTANT.I18N.DEFAULT_LOCALE && !path.startsWith(`/${locale}`)) {
    return `/${locale}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  return path;
};

export const getLocale = (Astro: { params?: { locale?: string } }) => {
  if (Astro.params?.locale) {
    return Astro.params.locale as Locale;
  }
  return CONSTANT.I18N.DEFAULT_LOCALE as Locale;
};

export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value);

const otherLocales = CONSTANT.I18N.LOCALES.filter(
  ({ value }) => value !== CONSTANT.I18N.DEFAULT_LOCALE,
);

export const getOtherLocales = () => otherLocales;

export type UI = typeof UI_EN;

export const ui = { en: UI_EN };

export const getUI = (locale?: Locale | string): UI => {
  const validLocale = locales.includes(locale as Locale) ? locale : CONSTANT.I18N.DEFAULT_LOCALE;
  const defaultUI = ui[CONSTANT.I18N.DEFAULT_LOCALE];
  const localeUI = ui[validLocale as Locale];

  function deepMerge<T extends object>(defaultObj: T, overrideObj: Partial<T>): T {
    // Handle non-object cases
    if (typeof defaultObj !== "object" || defaultObj === null) {
      return (overrideObj ?? defaultObj) as T;
    }
    if (typeof overrideObj !== "object" || overrideObj === null) {
      return (overrideObj ?? defaultObj) as T;
    }

    // Create a new object or array based on the default object's type
    const result = Array.isArray(defaultObj) ? [...defaultObj] : { ...defaultObj };

    // Merge properties from the default object
    for (const key of Object.keys(defaultObj) as Array<keyof T>) {
      const defaultValue = defaultObj[key];
      const overrideValue = overrideObj[key];

      // Recursively merge nested objects
      if (
        defaultValue !== null &&
        overrideValue !== null &&
        typeof defaultValue === "object" &&
        typeof overrideValue === "object"
      ) {
        // Type assertion to handle nested merging
        (result as Record<keyof T, unknown>)[key] = deepMerge(
          defaultValue as object,
          overrideValue as Partial<object>,
        );
      } else if (overrideValue !== undefined) {
        // Override with the new value if it exists
        (result as Record<keyof T, unknown>)[key] = overrideValue;
      }
    }

    // Add any new properties from overrideObj
    for (const key of Object.keys(overrideObj) as Array<keyof T>) {
      if (!(key in defaultObj)) {
        (result as Record<keyof T, unknown>)[key] = overrideObj[key];
      }
    }

    return result as T;
  }

  return deepMerge(defaultUI, localeUI);
};

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
  ];
}) satisfies GetStaticPaths;

export const getLocales = () => {
  return [...locales, ...otherLocales];
};
