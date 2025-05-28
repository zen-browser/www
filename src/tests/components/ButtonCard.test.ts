import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { beforeEach, describe, expect, it } from 'vitest'

import ButtonCard from '~/components/download/ButtonCard.astro'

describe('<ButtonCard />', () => {
  let container: Awaited<ReturnType<typeof AstroContainer.create>>
  beforeEach(async () => {
    container = await AstroContainer.create()
  })

  it('renders with required props', async () => {
    const result = await container.renderToString(ButtonCard, {
      props: {
        label: 'Download',
        href: '/download',
      },
    })
    expect(result).toContain('Download')
    expect(result).toContain('href="/download"')
    expect(result).not.toContain('Show SHA-256')
  })

  it('renders with checksum', async () => {
    const result = await container.renderToString(ButtonCard, {
      props: {
        label: 'Download',
        href: '/download',
        checksum: 'sha256sum',
      },
    })
    expect(result).toContain('Show SHA-256')
    expect(result).toContain('sha256sum')
    expect(result).toContain('Copy')
  })

  it('renders with variant', async () => {
    const result = await container.renderToString(ButtonCard, {
      props: {
        label: 'Download',
        href: '/download',
        variant: 'flathub',
      },
    })
    expect(result).toContain('Download')
    expect(result).toContain('Beta')
  })
})
