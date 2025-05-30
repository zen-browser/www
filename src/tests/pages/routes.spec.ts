import { expect, test } from '@playwright/test'

test('all routes do not return 404', async ({ page }) => {
  const routes = ['/', '/welcome', '/about', '/privacy-policy', '/download', '/donate', '/whatsnew']
  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
    expect(response?.status()).not.toBe(404)
  }
})
