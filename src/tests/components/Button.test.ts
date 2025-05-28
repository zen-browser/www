import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { beforeEach, describe, expect, it } from 'vitest'

import Button from '~/components/Button.astro'

describe('<Button />', () => {
  let container: Awaited<ReturnType<typeof AstroContainer.create>>

  beforeEach(async () => {
    container = await AstroContainer.create()
  })

  describe('as <button>', () => {
    it('renders default <button> with slot', async () => {
      const result = await container.renderToString(Button, {
        props: {},
        slots: { default: 'Click me' },
      })
      expect(result).toContain('<button')
      expect(result).toContain('Click me')
    })

    it.each([
      ['isPrimary', { isPrimary: true }, 'bg-dark'],
      ['isAlert', { isAlert: true }, 'bg-red-300'],
      ['isBordered', { isBordered: true }, 'border-2'],
    ])('applies %s style', async (_label, propObj, expectedClass) => {
      const result = await container.renderToString(Button, {
        props: { ...propObj },
        slots: { default: 'Test' },
      })
      expect(result).toContain('<button')
      expect(result).toContain(expectedClass)
    })

    it('applies id and extra props', async () => {
      const result = await container.renderToString(Button, {
        props: {
          id: 'my-btn',
          extra: { 'data-test': 'foo' },
        },
        slots: { default: 'Test' },
      })
      expect(result).toContain('id="my-btn"')
      expect(result).toContain('data-test="foo"')
    })
  })

  describe('as <a>', () => {
    it('renders <a> with slot and href', async () => {
      const result = await container.renderToString(Button, {
        props: { href: '/link' },
        slots: { default: 'Go' },
      })
      expect(result).toContain('<a')
      expect(result).toContain('Go')
      expect(result).toContain('href="/en/link"')
    })

    it.each([
      ['isPrimary', { isPrimary: true }, 'bg-dark'],
      ['isAlert', { isAlert: true }, 'bg-red-300'],
      ['isBordered', { isBordered: true }, 'border-2'],
    ])('applies %s style', async (_label, propObj, expectedClass) => {
      const result = await container.renderToString(Button, {
        props: { href: '/link', ...propObj },
        slots: { default: 'Test' },
      })
      expect(result).toContain('<a')
      expect(result).toContain(expectedClass)
    })

    it('applies id and extra props', async () => {
      const result = await container.renderToString(Button, {
        props: {
          href: '/link',
          id: 'my-link',
          extra: { 'data-test': 'bar' },
        },
        slots: { default: 'Test' },
      })
      expect(result).toContain('id="my-link"')
      expect(result).toContain('data-test="bar"')
    })
  })

  it('applies custom className', async () => {
    const result = await container.renderToString(Button, {
      props: { class: 'custom-class' },
      slots: { default: 'Test' },
    })
    expect(result).toContain('custom-class')
  })

  it('uses locale path for href', async () => {
    const result = await container.renderToString(Button, {
      props: { href: '/foo' },
      slots: { default: 'Test' },
    })
    expect(result).toContain('href="/en/foo"')
  })
})
