/**
 * @type {import('prettier').Config}
 */
export default {
  // Basic formatting
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',

  // Language-specific formatting
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.json', '*.jsonc'],
      options: {
        trailingComma: 'none',
        singleQuote: false,
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
        proseWrap: 'never',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],

  // Plugins
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // Must be last
  ],

  // Plugin-specific options
  tailwindFunctions: ['clsx', 'cn', 'twMerge'],

  // Astro-specific options
  astroAllowShorthand: false,
}
