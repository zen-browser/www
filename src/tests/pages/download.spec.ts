import { expect, test, type BrowserContextOptions, type Page } from '@playwright/test'

import { CHECKSUMS } from '~/constants/checksum'
import en from '~/i18n/en/translation.json' with { type: 'json' }

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
  const {
    routes: {
      download: {
        links: { macos, windows, linux },
      },
    },
  } = en

  const releases = {
    macos: {
      universal: {
        link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.macos-universal.dmg',
        label: macos.universal,
        checksum: CHECKSUMS['zen.macos-universal.dmg'],
      },
    },
    windows: {
      x86_64: {
        link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.installer.exe',
        label: windows['64bit'],
        checksum: CHECKSUMS['zen.installer.exe'],
      },
      arm64: {
        link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.installer-arm64.exe',
        label: windows.ARM64,
        checksum: CHECKSUMS['zen.installer-arm64.exe'],
      },
    },
    linux: {
      x86_64: {
        tarball: {
          link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.linux-x86_64.tar.xz',
          label: linux.x86_64,
          checksum: CHECKSUMS['zen.linux-x86_64.tar.xz'],
        },
      },
      aarch64: {
        tarball: {
          link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.linux-aarch64.tar.xz',
          label: linux.aarch64,
          checksum: CHECKSUMS['zen.linux-aarch64.tar.xz'],
        },
      },
      flathub: {
        all: {
          link: 'https://flathub.org/apps/app.zen_browser.zen',
          label: linux.flathub,
        },
      },
    },
  }

  const platformLinkSelectors = {
    'mac-x86_64': [releases.macos.universal],
    'mac-arm64': [releases.macos.universal],
    'windows-x86_64': [releases.windows.x86_64],
    'windows-arm64': [releases.windows.arm64],
    'linux-x86_64': [releases.linux.x86_64.tarball, releases.linux.flathub.all],
    'linux-aarch64': [releases.linux.aarch64.tarball, releases.linux.flathub.all],
  }

  test('all platform download links are correct', async ({ page }) => {
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
