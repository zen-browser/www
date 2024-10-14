const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
	const defaultConfigWWW = {
		images: {
			remotePatterns: [
				{
					protocol: "https",
					hostname: "raw.githubusercontent.com",
				},
				{
					protocol: "https",
					hostname: "cdn.jsdelivr.net",
					port: "",
					pathname: "/gh/zen-browser/**",
				},
			],
			domains: ["localhost", "cdn.jsdelivr.net", "raw.githubusercontent.com"], // Allow images from jsDelivr
		},
		experimental: {
			serverActions: {
				// edit: updated to new key. Was previously `allowedForwardedHosts`
				allowedOrigins: ["localhost:3000", "get-zen.vercel.app"],
			},
		},
		compiler: {
			styledComponents: true,
		},
	};
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			...defaultConfigWWW,
			// development only config options here
		};
	}
	return {
		...defaultConfigWWW,
		// production only config options here
		output: "export",
	};
};

// Test
module.exports = {
	async redirects() {
		return [
			{
				source: '/themes/:theme',  // dynamic route with :theme parameter
				destination: '/mods/:theme',  // redirect to corresponding /mods path
				permanent: true,  // 301 status code for permanent redirect
			},
			{
				source: '/themes',  // base /themes path
				destination: '/mods',  // redirect to /mods
				permanent: true,  // 301 status code for permanent redirect
			},
		]
	},
}

module.exports = nextConfig;