/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 👈 disables Turbopack, uses Webpack
  },
};

module.exports = nextConfig;
