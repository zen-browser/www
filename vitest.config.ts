import { getViteConfig } from 'astro/config'

const config = {
  plugins: [],
  test: {
    include: ['src/tests/**/*.test.ts'],
    setupFiles: ['./src/tests/vitest.setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
    },
  },
}

export default getViteConfig(config)
