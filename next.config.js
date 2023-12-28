/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FORM_ACCESS_KEY: process.env.FORM_ACCESS_KEY,
  }
}

module.exports = nextConfig
