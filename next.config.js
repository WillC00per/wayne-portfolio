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
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  optimizeFonts: false,
  poweredByHeader: false,
}

module.exports = nextConfig
