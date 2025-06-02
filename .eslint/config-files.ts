import { type Linter } from 'eslint'

import { configFiles } from './shared'

export const configFilesConfig: Linter.Config = {
  name: 'eslint/config-files',
  files: configFiles,
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-default-export': 'off',
    'import/default': 'off', // Allow missing default exports in config files
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
