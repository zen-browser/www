import { describe, expect, it } from 'vitest'
import { getReleasesWithChecksums } from '~/components/download/release-data.astro'

describe('getReleasesWithChecksums', () => {
  it('returns correct structure with checksums', () => {
    const checksums = {
      'zen.macos-universal.dmg': 'macsum',
      'zen.installer.exe': 'winsum',
      'zen.installer-arm64.exe': 'winarmsum',
      'zen.linux-x86_64.tar.xz': 'linx86sum',
      'zen-x86_64.AppImage': 'linx86appsum',
      'zen.linux-aarch64.tar.xz': 'linaarchsum',
      'zen-aarch64.AppImage': 'linaarchappsum',
    }
    const releases = getReleasesWithChecksums(checksums)
    expect(releases.macos.universal.checksum).toBe('macsum')
    expect(releases.windows.x86_64.checksum).toBe('winsum')
    expect(releases.windows.arm64.checksum).toBe('winarmsum')
    expect(releases.linux.x86_64.tarball.checksum).toBe('linx86sum')
    expect(releases.linux.x86_64.appImage.checksum).toBe('linx86appsum')
    expect(releases.linux.aarch64.tarball.checksum).toBe('linaarchsum')
    expect(releases.linux.aarch64.appImage.checksum).toBe('linaarchappsum')
    expect(releases.linux.flathub.all.label).toBe('Flathub')
    expect(releases.linux.flathub.all.link).toBe('https://flathub.org/apps/app.zen_browser.zen')
  })
})
