import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { beforeEach, describe, expect, it } from 'vitest'
import PlatformDownload from '~/components/download/PlatformDownload.astro'

const mockIcon = ['<svg></svg>']
const mockReleases = {
  universal: { label: 'Universal', link: '/universal', checksum: 'abc123' },
  x86_64: { label: 'x86_64', link: '/x86_64', checksum: 'def456' },
  arm64: { label: 'ARM64', link: '/arm64', checksum: 'ghi789' },
  flathub: { all: { label: 'Flathub', link: '/flathub' } },
}

describe('<PlatformDownload />', () => {
  let container: Awaited<ReturnType<typeof AstroContainer.create>>
  beforeEach(async () => {
    container = await AstroContainer.create()
  })

  it('renders mac platform', async () => {
    const result = await container.renderToString(PlatformDownload, {
      props: {
        platform: 'mac',
        icon: mockIcon,
        title: 'Mac Title',
        description: 'Mac Desc',
        releases: mockReleases,
      },
    })
    expect(result).toContain('Mac Title')
    expect(result).toContain('Mac Desc')
    expect(result).toContain('Universal')
  })

  it('renders windows platform', async () => {
    const result = await container.renderToString(PlatformDownload, {
      props: {
        platform: 'windows',
        icon: mockIcon,
        title: 'Win Title',
        description: 'Win Desc',
        releases: mockReleases,
      },
    })
    expect(result).toContain('Win Title')
    expect(result).toContain('Win Desc')
    expect(result).toContain('x86_64')
    expect(result).toContain('ARM64')
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
        title: 'Linux Title',
        description: 'Linux Desc',
        releases: linuxReleases,
      },
    })
    expect(result).toContain('Linux Title')
    expect(result).toContain('Linux Desc')
    expect(result).toContain('Flathub')
    expect(result).toContain('Tarball')
    expect(result).toContain('x86_64')
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
        title: 'Linux Title',
        description: 'Linux Desc',
        releases: linuxReleases,
      },
    })

    // Test basic content
    expect(result).toContain('Linux Title')
    expect(result).toContain('Linux Desc')

    // Test Flathub section
    expect(result).toContain('Flathub')
    expect(result).toContain('/flathub')

    // Test x86_64 section
    expect(result).toContain('x86_64')
    expect(result).toContain('Tarball x86_64')
    expect(result).toContain('/tarball-x86_64')
    expect(result).toContain('sha256')

    // Test ARM64 section
    expect(result).toContain('ARM64')
    expect(result).toContain('Tarball ARM64')
    expect(result).toContain('/tarball-arm64')
    expect(result).toContain('sha256-arm64')
  })
})
