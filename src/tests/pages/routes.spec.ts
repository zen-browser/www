import { expect, test } from '@playwright/test'

const routes = [
  '/',
  '/welcome',
  '/about',
  '/privacy-policy',
  '/download',
  '/donate',
  '/whatsnew',
  '/mods',
  '/release-notes',
  '/feed.xml',
]

routes.forEach(route => {
  test(`route ${route} does not return 404`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
    expect(response?.status()).not.toBe(404)
  })
})
