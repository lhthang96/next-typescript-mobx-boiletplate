const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');

const webpackConfig = require('./webpack.config');

const nextConfig = {
  webpack: webpackConfig,
}

const less = [
  withLess,
  {
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  },
];

const sass = [
  withSass,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    }
  }
]

module.exports = withPlugins([less, sass], nextConfig);