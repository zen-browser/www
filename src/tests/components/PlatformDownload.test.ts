import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { beforeEach, describe, expect, it } from 'vitest'

import PlatformDownload from '~/components/download/PlatformDownload.astro'

const mockIcon = ['<svg></svg>']

describe('<PlatformDownload />', () => {
  let container: Awaited<ReturnType<typeof AstroContainer.create>>
  beforeEach(async () => {
    container = await AstroContainer.create()
  })

  it('renders linux platform with flathub and tarball', async () => {
    const linuxReleases = {
      flathub: { all: { label: 'Flathub', link: '/flathub' } },
      x86_64: {
        tarball: {
          label: 'Tarball x86_64',
          link: '/tarball-x86_64',
          checksum: 'sha256',
        },
      },
    }
    const result = await container.renderToString(PlatformDownload, {
      props: {
        platform: 'linux',
        icon: mockIcon,
        releases: linuxReleases,
      },
    })
    expect(result).toContain('Flathub')
  })

  it('renders linux platform with all branches', async () => {
    const linuxReleases = {
      flathub: { all: { label: 'Flathub', link: '/flathub' } },
      x86_64: {
        tarball: {
          label: 'Tarball x86_64',
          link: '/tarball-x86_64',
          checksum: 'sha256',
        },
      },
      aarch64: {
        tarball: {
          label: 'Tarball ARM64',
          link: '/tarball-arm64',
          checksum: 'sha256-arm64',
        },
      },
    }
    const result = await container.renderToString(PlatformDownload, {
      props: {
        platform: 'linux',
        icon: mockIcon,
        releases: linuxReleases,
      },
    })

    // Test Flathub section
    expect(result).toContain('/flathub')
  })
})
