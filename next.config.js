/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
