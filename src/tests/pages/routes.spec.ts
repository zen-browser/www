import { expect, test } from '@playwright/test'

import { CONSTANT } from '~/constants'

test('all routes do not return 404', async ({ page }) => {
  for (const route of CONSTANT.PUBLIC_ROUTES) {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
    expect(response?.status()).not.toBe(404)
  }
})
