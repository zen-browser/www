/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate=59",
          },
        ],
      },
    ]
  }
};

export default nextConfig;
