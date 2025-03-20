/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        '-sm': '@media (max-width: 639px)',
        '-md': '@media (max-width: 767px)',
        '-lg': '@media (max-width: 1023px)',
      },
      colors: {
        paper: 'var(--zen-paper)',
        coral: '#F76F53',
        dark: 'var(--zen-dark)',
        subtle: 'var(--zen-subtle)',
        muted: 'var(--zen-muted)',
        'zen-blue': '#6287f5',
        'zen-green': '#63f78b',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        breathe: {
          '50%': { transform: 'scale(1.2)' },
          '0%, 100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        breathe: 'breathe 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
