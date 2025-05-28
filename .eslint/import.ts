import { type Linter } from 'eslint'
// @ts-expect-error - no types available
import importPlugin from 'eslint-plugin-import'

import { sharedFiles } from './shared'

export const importConfigArray: Linter.Config[] = [
  {
    name: 'eslint/import',
    files: sharedFiles,
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/no-unresolved': 'off', // TypeScript handles this
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-default-export': 'off', // Allow default exports
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
]
