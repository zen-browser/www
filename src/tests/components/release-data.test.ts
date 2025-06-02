import { describe, expect, it } from 'vitest'

import { getReleasesWithChecksums } from '~/components/download/release-data'

describe('getReleasesWithChecksums', () => {
  it('returns correct structure with checksums', () => {
    const checksums = {
      'zen.macos-universal.dmg': 'macsum',
      'zen.installer.exe': 'winsum',
      'zen.installer-arm64.exe': 'winarmsum',
      'zen.linux-x86_64.tar.xz': 'linux86sum',
      'zen.linux-aarch64.tar.xz': 'linaarchsum',
    }
    const releases = getReleasesWithChecksums('en')(checksums)
    expect(releases.macos.universal.checksum).toBe('macsum')
    expect(releases.windows.x86_64.checksum).toBe('winsum')
    expect(releases.windows.arm64.checksum).toBe('winarmsum')
    expect(releases.linux.x86_64.tarball.checksum).toBe('linux86sum')
    expect(releases.linux.aarch64.tarball.checksum).toBe('linaarchsum')
    expect(releases.linux.flathub.all.label).toBe('Flathub')
    expect(releases.linux.flathub.all.link).toBe('https://flathub.org/apps/app.zen_browser.zen')
  })
})
