import { expect, test, type BrowserContextOptions, type Page } from '@playwright/test'

import { getReleasesWithChecksums } from '~/components/download/release-data'
import { CONSTANT } from '~/constants'

const getPlatformSection = (page: Page, platform: string, cpu: string) => {
  return page.locator(`#${platform}-${cpu}-downloads.platform-section`)
}

const platformConfigs: {
  name: string
  userAgent: string
  platform: string
  expectedCpu: string
}[] = [
  {
    name: 'windows',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    platform: 'Win32',
    expectedCpu: 'x86_64',
  },
  {
    name: 'mac',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15',
    platform: 'MacIntel',
    expectedCpu: 'x86_64',
  },
  {
    name: 'linux',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    platform: 'Linux x86_64',
    expectedCpu: 'x86_64',
  },
]

test.describe('Download page shows correct platform section per platform', () => {
  for (const { name, userAgent, platform, expectedCpu } of platformConfigs) {
    test(`shows correct platform section for ${name} ${expectedCpu} platform`, async ({
      browser,
    }) => {
      const context = await browser.newContext({
        userAgent,
        locale: 'en-US',
        platform,
      } as BrowserContextOptions)
      const page = await context.newPage()
      await page.goto('/download')

      await page.waitForLoadState('domcontentloaded')

      await expect(getPlatformSection(page, name, expectedCpu)).toBeVisible()

      for (const other of platformConfigs.filter(
        p => !(p.name === name && p.expectedCpu === expectedCpu)
      )) {
        const otherSection = page.locator(
          `#${other.name}-${other.expectedCpu}-downloads.platform-section`
        )
        await expect(otherSection).toBeHidden()
      }
      await context.close()
    })
  }
})

test.describe('Download page download links', () => {
  const releases = getReleasesWithChecksums('en')(CONSTANT.CHECKSUMS)

  type Releases = ReturnType<ReturnType<typeof getReleasesWithChecksums>>
  function getPlatformLinks(releases: Releases) {
    return {
      'mac-x86_64': [releases.macos.universal],
      'mac-arm64': [releases.macos.universal],
      'windows-x86_64': [releases.windows.x86_64],
      'windows-arm64': [releases.windows.arm64],
      'linux-x86_64': [releases.linux.x86_64.tarball, releases.linux.flathub.all],
      'linux-aarch64': [releases.linux.aarch64.tarball, releases.linux.flathub.all],
    }
  }

  test('all platform download links are correct', async ({ page }) => {
    const platformLinkSelectors = getPlatformLinks(releases)
    await page.goto('/download')
    await page.waitForLoadState('domcontentloaded')

    for (const [platformCpu, links] of Object.entries(platformLinkSelectors)) {
      const platform = platformCpu.split('-')[0] as 'mac' | 'windows' | 'linux'

      for (const { link } of links) {
        const downloadLink = page.locator(
          `#${platformCpu}-downloads .download-button[href="${link}"]`
        )

        const isFlathubLink = link.includes('flathub.org')

        if (isFlathubLink) {
          await expect(downloadLink).toContainText('Flathub')
        } else {
          await expect(downloadLink).toContainText(
            `Download for ${
              platform === 'mac' ? 'MacOS' : platform.charAt(0).toUpperCase() + platform.slice(1)
            }`
          )
        }

        await expect(downloadLink).toHaveAttribute('href', link)
      }
    }
  })
})
