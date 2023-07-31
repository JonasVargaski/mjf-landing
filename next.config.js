/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aunidas.com.br',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
      },
    ],
  },
}

module.exports = nextConfig
