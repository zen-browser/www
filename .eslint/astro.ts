import { type Linter } from 'eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'

import { astroFiles } from './shared'

export const astroConfig: Linter.Config = {
  name: 'eslint/astro',
  files: astroFiles,
  plugins: {
    'jsx-a11y': jsxA11y,
  },
  rules: {
    // Astro specific adjustments
    '@typescript-eslint/no-unused-vars': 'off', // Astro components can have unused props
    'import/no-unresolved': 'off',
    'no-undef': 'off', // Astro has global variables like Astro

    // A11y rules for Astro
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
  },
}
