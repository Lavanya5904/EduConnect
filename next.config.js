/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**', // This allows access to all image paths on 'utfs.io'
      },
    ],
  },
};

module.exports = nextConfig;

