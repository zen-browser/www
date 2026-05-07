import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
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
