/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/insights',
        destination: '/en/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
