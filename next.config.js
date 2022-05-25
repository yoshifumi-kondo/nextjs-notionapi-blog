/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com',
      'https://www.google.com/maps/',
    ],
  },
};

module.exports = nextConfig;
