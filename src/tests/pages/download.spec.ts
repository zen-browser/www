import { expect, test, type BrowserContextOptions, type Page } from '@playwright/test'

import checksumMock from './checksum-mock.json' with { type: 'json' }

/**
 * Helper to get the platform section by id.
 */
const getPlatformSection = (page: Page, platform: string) =>
  page.locator(`#${platform}-downloads.platform-section[data-active='true']`)

/**
 * Helper to get the platform tab button.
 */
const getPlatformButton = (page: Page, platform: string) =>
  page.locator(`button.platform-selector[data-platform='${platform}']`)

const platformConfigs: { name: string; userAgent: string; platform: string }[] = [
  {
    name: 'windows',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    platform: 'Win32',
  },
  {
    name: 'mac',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15',
    platform: 'MacIntel',
  },
  {
    name: 'linux',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    platform: 'Linux x86_64',
  },
]

test.describe('Download page default tab per platform', () => {
  for (const { name, userAgent, platform } of platformConfigs) {
    test(`shows correct default tab for ${name} platform`, async ({ browser }) => {
      const context = await browser.newContext({
        userAgent,
        locale: 'en-US',
        platform,
      } as BrowserContextOptions)
      const page = await context.newPage()
      await page.goto('/download')
      await expect(getPlatformSection(page, name)).toBeVisible()
      await expect(getPlatformButton(page, name)).toHaveAttribute('data-active', 'true')
      // Other platforms should not be active
      for (const other of platformConfigs.filter(p => p.name !== name)) {
        await expect(getPlatformSection(page, other.name)).toBeHidden()
        await expect(getPlatformButton(page, other.name)).not.toHaveAttribute('data-active', 'true')
      }
      await context.close()
    })
  }
})

test.describe('Download page platform detection and tab switching', () => {
  test('shows correct platform section and tab when switching platforms', async ({ page }) => {
    await page.goto('/download')
    const platforms = ['windows', 'mac', 'linux']
    for (const platform of platforms) {
      await getPlatformButton(page, platform).click()
      await expect(getPlatformSection(page, platform)).toBeVisible()
      await expect(getPlatformButton(page, platform)).toHaveAttribute('data-active', 'true')
      // other platform sections should be hidden
      for (const otherPlatform of platforms.filter(p => p !== platform)) {
        await expect(getPlatformSection(page, otherPlatform)).toBeHidden()
        await expect(getPlatformButton(page, otherPlatform)).not.toHaveAttribute(
          'data-active',
          'true'
        )
      }
    }
  })
})

test.describe('Download page download links', () => {
  function getPlatformLinks() {
    return {
      mac: [checksumMock.macos.universal],
      windows: [checksumMock.windows.x86_64, checksumMock.windows.arm64],
      linux: [
        checksumMock.linux.x86_64.tarball,
        checksumMock.linux.aarch64.tarball,
        checksumMock.linux.flathub.all,
      ],
    }
  }

  test('all platform download links are correct', async ({ page }) => {
    const platforms = ['windows', 'mac', 'linux']
    const platformLinkSelectors = getPlatformLinks()

    await page.goto('/download')
    await page.waitForLoadState('domcontentloaded')
    for (const platform of platforms) {
      await getPlatformButton(page, platform).click()
      for (const { label, link } of platformLinkSelectors[
        platform as keyof typeof platformLinkSelectors
      ]) {
        const downloadLink = page.locator(`#${platform}-downloads .download-link[href="${link}"]`)
        await expect(downloadLink).toContainText(label)
        await expect(downloadLink).toHaveAttribute('href', link)
      }
    }
  })
})
