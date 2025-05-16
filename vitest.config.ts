/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { defaultExclude } from 'vitest/config'

export default getViteConfig({
  test: {
    exclude: [...defaultExclude, '**/*.spec.ts'],
    setupFiles: ['./src/tests/vitest.setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
    },
  },
})
