import { type Linter } from 'eslint'

import { sharedTestFiles } from './shared'

export const testConfig: Linter.Config = {
  name: 'eslint/test',
  files: sharedTestFiles,
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
