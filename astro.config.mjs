import tailwind from '@astrojs/tailwind'
// @ts-check
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true }), sitemap()],
  site: 'https://zen-browser.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      fallbackType: 'rewrite',
      prefixDefaultLocale: false,
    },
  },
})
