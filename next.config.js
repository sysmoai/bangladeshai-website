const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages needs a complete `out/` static export, not `.next/static`.
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  webpack: (config) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias['@'] = path.resolve(__dirname);
    }
    return config;
  },
  // Next headers/redirects are unavailable with static export.
  // Cloudflare Pages reads public/_headers and public/_redirects.
};

module.exports = nextConfig;
