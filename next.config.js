/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ["source.unsplash.com"],
  },
  
};

module.exports = nextConfig;
