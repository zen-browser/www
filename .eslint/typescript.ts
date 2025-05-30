import { type Linter } from 'eslint'

import { typescriptFiles } from './shared'

export function createTypescriptConfig(tsConfigPath: string): Linter.Config {
  return {
    name: 'eslint/typescript',
    files: typescriptFiles,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: tsConfigPath,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      // Basic TypeScript rules that work without type information
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Override base rules for TypeScript
      'no-unused-vars': 'off', // Handled by TypeScript
      'no-undef': 'off', // TypeScript handles this
    },
  }
}
