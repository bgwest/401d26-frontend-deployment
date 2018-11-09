const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { NamedModulesPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExcludeEmptyAssetsPlugin = require('html-webpack-exclude-empty-assets-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    //! Vinicio - cleans our build folder before every new transpilation
    new CleanWebpackPlugin(['build']),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
    }),
    new NamedModulesPlugin(),
    new HtmlWebpackExcludeEmptyAssetsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
