import { expect, test } from "@playwright/test"

test("clicking back button navigates to previous page", async ({ page }) => {
  await page.goto("/mods?created=asc")
  const currentUrl = page.url()
  const modCards = await page.locator(".mod-card").all()
  await modCards[0].click()
  await page.getByRole("button", { name: "Back" }).click()
  await page.waitForURL(currentUrl)
  expect(page.url()).toStrictEqual(currentUrl)
})
