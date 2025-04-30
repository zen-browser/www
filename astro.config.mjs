// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import preact from '@astrojs/preact'

import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true }), sitemap({})],
  site: 'https://zen-browser.app',

  vite: {
    plugins: [tailwindcss()],
  },
})
