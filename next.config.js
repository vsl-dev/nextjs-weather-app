/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.weatherapi.com", "cdn.vsldev.tk"],
  },
};

module.exports = nextConfig;
