import { type i18nSchema } from '~/schemas/i18n'

import type languages from '~/i18n/locales.json'

/**
 * Represents the inferred type of the I18n schema.
 */
export type I18nType = typeof i18nSchema.I18n.infer

/**
 * List of all supported locale keys as defined in locales.json.
 */
export type Locale = keyof typeof languages
