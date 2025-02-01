/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        '-md': '@media (min-width: 768px)',
        '-lg': '@media (min-width: 1024px)',
      },
      colors: {
        paper: 'var(--zen-paper)',
        coral: '#F76F53',
        dark: 'var(--zen-dark)',
        muted: 'var(--zen-muted)',
        'zen-blue': '#6287f5',
        'zen-green': '#63f78b',
      },
      fontFamily: {
        instrument: ['Instrument Serif', 'serif'],
      },
      fontStyle: {
        italic: ['Instrument Serif Italic', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
