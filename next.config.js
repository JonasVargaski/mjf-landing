/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aunidas.com.br',
      },
    ],
  },
}

module.exports = nextConfig
