/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
