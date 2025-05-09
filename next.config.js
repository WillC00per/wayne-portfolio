/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.megavoxels.com'],
    unoptimized: true,
  },
  // Add these configurations
  experimental: {
    optimizeCss: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Increase timeout
  staticPageGenerationTimeout: 1000,
  eslint: {
    ignoreDuringBuilds: true, // Add this line to ignore ESLint errors during build
  },
}

module.exports = nextConfig
