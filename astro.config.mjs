import { readFileSync } from 'node:fs'

import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

const SITE = 'https://zen-browser.app'

/**
 * Pages that are redirects/onboarding screens and are marked `noindex`, so they are kept out of the sitemap.
 * - /welcome and /whatsnew: shown inside the browser after install/update.
 * - /release-notes/<version>: meta-refresh redirects to an anchor on /release-notes.
 */
const EXCLUDED_FROM_SITEMAP = [/\/(welcome|whatsnew|404)\/?$/, /\/release-notes\/[^/]+\/?$/]

/** Pages whose content changes with every release. */
const RELEASE_DRIVEN_PAGES = /^\/(?:ja\/)?(?:download\/?|release-notes\/?)?$/

/** Date (dd/mm/yyyy) of the latest stable release, used as `lastmod` for release-driven pages. */
function getLatestReleaseDate() {
  const releases = JSON.parse(
    readFileSync(new URL('./src/release-notes/stable.json', import.meta.url), 'utf-8')
  )
  const date = releases.at(-1)?.date
  const [day, month, year] = (date ?? '').split('/').map(Number)
  if (!day || !month || !year) return undefined
  return new Date(Date.UTC(year, month - 1, day))
}

const latestReleaseDate = getLatestReleaseDate()

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', ja: 'ja-JP' },
      },
      filter: page => !EXCLUDED_FROM_SITEMAP.some(pattern => pattern.test(page)),
      serialize(item) {
        const { pathname } = new URL(item.url)
        if (latestReleaseDate && RELEASE_DRIVEN_PAGES.test(pathname)) {
          item.lastmod = latestReleaseDate.toISOString()
        }
        return item
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      fallbackType: 'rewrite',
      prefixDefaultLocale: false,
    },
  },
})
