/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wb-zara',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
