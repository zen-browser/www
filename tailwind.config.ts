import type { Config } from "tailwindcss"
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
   ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
         '2xl': '1400px',
      },
   },
   extend: {
      fontFamily: {
         sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
         border: 'hsl(var(--border))',
         input: 'hsl(var(--input))',
         ring: 'hsl(var(--ring))',
         background: 'hsl(var(--background))',
         foreground: 'hsl(var(--foreground))',
         primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
         },
         secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
         },
         destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
         },
         muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
         },
         accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
         },
         popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
         },
         card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
         },
      },
      borderRadius: {
         lg: 'var(--radius)',
         md: 'calc(var(--radius) - 2px)',
         sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
         orbit: {
            "0%": {
                transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
            },
            "100%": {
                transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
            },
        },
         "shine-pulse": {
            "0%": {
               "background-position": "0% 0%",
            },
            "50%": {
               "background-position": "100% 100%",
            },
            to: {
               "background-position": "0% 0%",
            },
         },
         'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
         },
         'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
         },
         'border-beam': {
            '100%': {
               'offset-distance': '100%',
            },
         },
         'image-glow': {
            '0%': {
               'opacity': '0',
               'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
            },
            '10%': {
               'opacity': '0.7',
               'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
            },
            '100%': {
               opacity: '0.4',
            },
         },
         'fade-in': {
            from: { opacity: '0', transform: 'translateY(-10px)' },
            to: { opacity: '1', transform: 'none' },
         },
         'fade-up': {
            from: { opacity: '0', transform: 'translateY(20px)' },
            to: { opacity: '1', transform: 'none' },
         },
         'shimmer': {
            '0%, 90%, 100%': {
               'background-position': 'calc(-100% - var(--shimmer-width)) 0',
            },
            '30%, 60%': {
               'background-position': 'calc(100% + var(--shimmer-width)) 0',
            },
         },
         'marquee': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(calc(-100% - var(--gap)))' },
         },
         'marquee-vertical': {
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(calc(-100% - var(--gap)))' },
         },
      },
      animation: {
         orbit: "orbit calc(var(--duration)*1s) linear infinite",
         'accordion-down': 'accordion-down 0.2s ease-out',
         'accordion-up': 'accordion-up 0.2s ease-out',
         'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
         'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
         'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
         'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
         'shimmer': 'shimmer 8s infinite',
         'marquee': 'marquee var(--duration) infinite linear',
         'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config