/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'serverless', // add this line
  output: 'export',
  images: {
    domains: ["source.unsplash.com"],
  },
  
};

export default nextConfig;
