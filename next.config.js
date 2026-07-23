/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://plausible.io",
              "frame-src 'self' https://challenges.cloudflare.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/api/og',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'none'; style-src 'none'; img-src 'self' data:; font-src 'none'",
          },
        ],
      },
    ]
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