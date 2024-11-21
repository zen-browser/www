/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"paper": "#F2F0E3",
				"coral": "#F76F53",
				"dark": "#202020",
				"button-primary": "#c95d47",
				"zen-blue": "#537CF7",
				"zen-green": "#53F77F",
			},
		},
	},
	plugins: [],
}
