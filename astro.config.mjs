// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import preact from '@astrojs/preact'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    preact({ compat: true }),
    sitemap({
      // TODO: Maybe? Maybe not?
      //   filter: (page) => !page.includes('mods/'),
    }),
  ],
  site: 'https://zen-browser.app',
  redirects: {
    '/themes/[...slug]': '/mods/[...slug]',
  },
})
