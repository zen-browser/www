import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://zen-browser.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
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

    plugins: [tailwindcss()],
  },
})
