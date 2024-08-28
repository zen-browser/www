/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

export default nextConfig;
