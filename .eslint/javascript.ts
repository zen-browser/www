import { type Linter } from 'eslint'

import { javascriptFiles } from './shared'

export const javascriptConfig: Linter.Config = {
  name: 'eslint/javascript',
  files: javascriptFiles,
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-implicit-coercion': 'error',
  },
}
