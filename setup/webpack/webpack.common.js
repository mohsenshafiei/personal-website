const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const pathTo = require('../util');

module.exports = {
  entry: pathTo.entryPointSrc,
  output: {
    filename: '[name].[hash].js',
    path: pathTo.distDir,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]',
              importLoaders: 3,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|jpg|jpeg|png|pdf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'I\'m Mohsen Shafiei',
      filename: 'index.html',
      languageCode: 'en-US',
      template: pathTo.htmlTemplateSrc,
      inject: true,
      favicon: pathTo.favIconSrc,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: 'Mohsen Shafiei Tafreshi Official Website',
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: pathTo.typescriptConfigSrc,
      async: false,
    }),
  ],
  resolve: {
    modules: [
      'node_modules',
      pathTo.srcDir,
    ],
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
  target: 'web',
}
