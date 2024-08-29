/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/usmall-asos design',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
