/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
