import { vi } from 'vitest'

import translation from '~/i18n/en/translation.json'

vi.mock('~/utils/i18n', () => ({
  getLocale: () => 'en',
  getPath: () => (href: string) => `/en${href}`,
  getUI: () => translation,
}))
