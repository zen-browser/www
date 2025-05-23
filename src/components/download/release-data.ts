import { getUI } from '~/utils/i18n'

/**
 * Returns the releases object, injecting checksums dynamically.
 * @param locale The locale to use for labels
 * @param checksums Record<string, string> mapping filenames to SHA-256 hashes
 */
export function getReleasesWithChecksums(locale: string) {
  const {
    routes: {
      download: {
        links: { macos, windows, linux },
      },
    },
  } = getUI(locale)
  return (checksums: Record<string, string>) => {
    return {
      macos: {
        universal: {
          link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.macos-universal.dmg',
          label: macos.universal,
          checksum: checksums['zen.macos-universal.dmg'],
        },
      },
      windows: {
        x86_64: {
          link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.installer.exe',
          label: windows['64bit'],
          checksum: checksums['zen.installer.exe'],
        },
        arm64: {
          link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.installer-arm64.exe',
          label: windows.ARM64,
          checksum: checksums['zen.installer-arm64.exe'],
        },
      },
      linux: {
        x86_64: {
          tarball: {
            link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.linux-x86_64.tar.xz',
            label: linux.x86_64,
            checksum: checksums['zen.linux-x86_64.tar.xz'],
          },
        },
        aarch64: {
          tarball: {
            link: 'https://github.com/zen-browser/desktop/releases/latest/download/zen.linux-aarch64.tar.xz',
            label: linux.aarch64,
            checksum: checksums['zen.linux-aarch64.tar.xz'],
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
  }
}
