// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => !page.includes('mods/'),
    }),
  ],
  site: 'https://zen-browser.app',
  redirects: {
    '/themes/[...slug]': '/mods/[...slug]',
  }
})
