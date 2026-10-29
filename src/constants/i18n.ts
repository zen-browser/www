const UI_EN = (await import('~/i18n/en/translation.json', { with: { type: 'json' } })).default
const UI_JA = (await import('~/i18n/ja/translation.json', { with: { type: 'json' } })).default
const UI_KO = (await import('~/i18n/ko/translation.json', { with: { type: 'json' } })).default

export const i18n = {
  DEFAULT_LOCALE: 'en',
  LOCALES: [
    { label: 'English', value: 'en', ui: UI_EN, intl: 'en-US' },
    { label: '日本語', value: 'ja', ui: UI_JA, intl: 'ja-JP' },
    { label: '한국어', value: 'ko', ui: UI_KO, intl: 'ko-KR' },
  ],
}

/**
 * Type definition for UI translations based on the English translation
 */
export type UIProps = typeof UI_EN | typeof UI_JA | typeof UI_KO

export const getIntlLocale = (locale: string) => {
  return i18n.LOCALES.find(l => l.value === locale)?.intl
}
