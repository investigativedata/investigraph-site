/** @type {import('next').NextConfig} */
const nextConfig = {
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
