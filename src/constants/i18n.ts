const UI_EN = (await import('~/i18n/en/translation.json', { with: { type: 'json' } })).default
const UI_ZH = (await import('~/i18n/zh/translation.json', { with: { type: 'json' } })).default
const UI_ES = (await import('~/i18n/es/translation.json', { with: { type: 'json' } })).default
const UI_DE = (await import('~/i18n/de/translation.json', { with: { type: 'json' } })).default
const UI_JA = (await import('~/i18n/ja/translation.json', { with: { type: 'json' } })).default

export const i18n = {
  DEFAULT_LOCALE: 'en',
  LOCALES: [
    { label: 'English', value: 'en', ui: UI_EN, intl: 'en-US' },
    { label: '简体中文', value: 'zh', ui: UI_ZH, intl: 'zh-CN' },
    { label: 'Español', value: 'es', ui: UI_ES, intl: 'es-ES' },
    { label: 'Deutsch', value: 'de', ui: UI_DE, intl: 'de-DE' },
    { label: '日本語', value: 'ja', ui: UI_JA, intl: 'ja-JP' },
  ],
}

/**
 * Type definition for UI translations based on the English translation
 */
export type UIProps = typeof UI_EN | typeof UI_ZH | typeof UI_ES | typeof UI_DE | typeof UI_JA

export const getIntlLocale = (locale: string) => {
  return i18n.LOCALES.find(l => l.value === locale)?.intl
}
