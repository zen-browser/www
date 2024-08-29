const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
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
        }
      ],
      domains: ['cdn.jsdelivr.net', "raw.githubusercontent.com"],  // Allow images from jsDelivr
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
    output: 'export',
  };
};

