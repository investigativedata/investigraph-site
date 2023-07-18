/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.investigativedata.org",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
