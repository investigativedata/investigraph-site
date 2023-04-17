/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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
