const path = require('path');

const StylelintPlugin = require('stylelint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
      },
    ],
  },
};

module.exports = nextConfig;
