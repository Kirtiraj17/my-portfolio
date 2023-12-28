/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random/**',
      },
    ],
  },
  env: {
    FORM_ACCESS_KEY: process.env.FORM_ACCESS_KEY,
  }
}

module.exports = nextConfig
