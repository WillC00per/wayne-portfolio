/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.megavoxels.com',
      'cdn.jsdelivr.net',
      'cdn.simpleicons.org'
    ],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 1000,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
