import { type Linter } from 'eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'

import { astroFiles, javascriptFiles, typescriptFiles } from './shared'

export const jsxA11yConfig: Linter.Config = {
  name: 'eslint/jsx-a11y',
  files: [
    ...astroFiles,
    ...typescriptFiles.filter(f => f.includes('tsx')),
    ...javascriptFiles.filter(f => f.includes('jsx')),
  ],
  plugins: {
    'jsx-a11y': jsxA11y,
  },
  rules: {
    ...jsxA11y.configs.recommended.rules,

    // Additional a11y rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/no-autofocus': 'warn',
  },
}
