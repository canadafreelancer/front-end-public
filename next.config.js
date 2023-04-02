/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["source.unsplash.com"],
  },
  
};

module.exports = nextConfig;
