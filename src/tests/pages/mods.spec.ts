import { expect, test } from '@playwright/test'

test('clicking back button navigates to previous page', async ({ page }) => {
  await page.goto('/mods?created=asc')
  const currentUrl = page.url()
  const firstModCard = page.locator('.mod-card').first()

  await expect(firstModCard).toBeVisible()
  await Promise.all([
    page.waitForURL(url => url.pathname.startsWith('/mods/') && url.href !== currentUrl),
    firstModCard.click(),
  ])
  await Promise.all([page.waitForURL(currentUrl), page.getByTestId('back-button').click()])

  expect(page.url()).toStrictEqual(currentUrl)
})
