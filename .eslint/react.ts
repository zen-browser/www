import { type Linter } from 'eslint'
import react from 'eslint-plugin-react'
import * as reactHooks from 'eslint-plugin-react-hooks'

import { javascriptFiles, typescriptFiles } from './shared'

export const reactConfig: Linter.Config = {
  name: 'eslint/react',
  files: [
    ...typescriptFiles.filter(f => f.includes('tsx')),
    ...javascriptFiles.filter(f => f.includes('jsx')),
  ],
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,

    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // Using TypeScript
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  settings: {
    react: {
      version: '18.2', // React version
    },
  },
}

export const reactHooksConfig: Linter.Config = {
  name: 'eslint/react-hooks',
  files: [
    ...typescriptFiles.filter(f => f.includes('tsx')),
    ...javascriptFiles.filter(f => f.includes('jsx')),
  ],
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
  },
}
