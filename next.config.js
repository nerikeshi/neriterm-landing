/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/neriterm-landing',
  assetPrefix: '/neriterm-landing/',
}

module.exports = nextConfig
