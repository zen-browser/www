export const sharedFiles = [
  '**/*.js',
  '**/*.cjs',
  '**/*.mjs',
  '**/*.jsx',
  '**/*.ts',
  '**/*.cts',
  '**/*.mts',
  '**/*.tsx',
  '**/*.d.ts',
]

export const sharedTestFiles = [
  '**/*.test.{ts,tsx,js,jsx}',
  '**/*.spec.{ts,tsx,js,jsx}',
  '**/tests/**/*.{ts,tsx,js,jsx}',
  '**/__tests__/**/*.{ts,tsx,js,jsx}',
]

export const astroFiles = ['**/*.astro']

export const typescriptFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.d.ts']

export const javascriptFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs']

export const configFiles = [
  '*.config.{ts,js,mjs}',
  '**/*.config.{ts,js,mjs}',
  '**/vite.config.*',
  '**/vitest.config.*',
  '**/playwright.config.*',
  '**/astro.config.*',
  '**/tailwind.config.*',
  '**/eslint.config.*',
]
