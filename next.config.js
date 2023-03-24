/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   // other exports
   target: 'serverless', // add this line
  images: {
    domains: ["source.unsplash.com"],
  },
  
};

module.exports = nextConfig;
