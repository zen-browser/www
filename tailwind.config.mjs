/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'-md': '@media (min-width: 768px)',
				'-lg': '@media (min-width: 1024px)',
			},
			colors: {
				"paper": "var(--zen-paper)",
				"coral": "#F76F53",
				"dark": "var(--zen-dark)",
				"muted": "var(--zen-muted)",
				"zen-blue": "#6287f5",
				"zen-green": "#63f78b",
			},
		},
	},
	plugins: [],
}
