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
}

module.exports = nextConfig
