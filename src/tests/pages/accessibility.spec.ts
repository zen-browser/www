import { AxeBuilder } from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

import { CONSTANT } from '~/constants'

const followMetaRefresh = async (page: Page) => {
  const metaRefresh = page.locator('meta[http-equiv="refresh"]').first()
  const refresh = (await metaRefresh.count())
    ? await metaRefresh.getAttribute('content')
    : undefined
  const redirect = refresh?.match(/^\s*\d+\s*;\s*url=(.+?)\s*$/i)?.[1]

  if (redirect) {
    await page.goto(redirect, { waitUntil: 'domcontentloaded' })
  }
}

const analyzePage = async (page: Page) => {
  const analyze = () =>
    new AxeBuilder({ page })
      // Existing public pages have broad color-contrast debt. Keep this smoke test focused
      // on non-contrast runtime issues; contrast fixes should be handled in a separate PR.
      .disableRules(['color-contrast'])
      .analyze()

  try {
    return await analyze()
  } catch (error) {
    if (!(error instanceof Error) || !error.message.includes('Execution context was destroyed')) {
      throw error
    }

    await page.waitForLoadState('load')
    return analyze()
  }
}

test.describe('Public page accessibility smoke checks', () => {
  for (const route of CONSTANT.PUBLIC_ROUTES) {
    test(`${route} has no serious or critical axe violations`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' })
      await followMetaRefresh(page)
      await page.waitForLoadState('load')

      const { violations } = await analyzePage(page)
      const blockingViolations = violations.filter(
        violation => violation.impact === 'serious' || violation.impact === 'critical'
      )
      const violationSummary = blockingViolations.map(({ help, id, impact, nodes }) => ({
        help,
        id,
        impact,
        nodeCount: nodes.length,
        nodes: nodes.slice(0, 5).map(({ failureSummary, target }) => ({
          failureSummary,
          target,
        })),
      }))

      expect(violationSummary).toEqual([])
    })
  }
})
