/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    domains: ["storage.googleapis.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
