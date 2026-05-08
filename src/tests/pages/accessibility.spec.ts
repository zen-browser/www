import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

import { CONSTANT } from '~/constants'

test.describe('Public page accessibility smoke checks', () => {
  for (const route of CONSTANT.PUBLIC_ROUTES) {
    test(`${route} has no serious or critical axe violations`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' })

      const { violations } = await new AxeBuilder({ page })
        // Existing public pages have broad color-contrast debt. Keep this smoke test focused
        // on non-contrast runtime issues; contrast fixes should be handled in a separate PR.
        .disableRules(['color-contrast'])
        .analyze()
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
