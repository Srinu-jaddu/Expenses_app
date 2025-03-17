/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVE this line ↓↓↓↓↓
  // output: 'export',

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
