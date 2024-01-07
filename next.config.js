/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'funko.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
