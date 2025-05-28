import tailwind from '@astrojs/tailwind'
// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  site: 'https://zen-browser.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      fallbackType: 'rewrite',
      prefixDefaultLocale: false,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            astro: ['astro'],
          },
        },
      },
    },
  },
})
