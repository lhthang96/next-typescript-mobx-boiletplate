const path = require('path');

const antdStyles = /antd\/.*?\/style.*?/;
const sassStyles = /\.scss$/;

exports.antdRule = {
  enforce: 'pre',
  test: antdStyles,
  use: 'null-loader',
};

exports.sassRule = {
  test: sassStyles,
  loader: 'sass-resources-loader',
  options: {
    resources: [
      path.resolve(__dirname, '../src/common/styles/variables.scss'),
    ],
  },
};

exports.resourceRule = {
  test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: 100000,
    name: '[name].[ext]',
  },
};