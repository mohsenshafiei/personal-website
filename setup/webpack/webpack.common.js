const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackShower = require('webpack-shower');
const pathTo = require('../util');

module.exports = {
  entry: pathTo.entryPointSrc,
  output: {
    filename: '[name].[hash].js',
    path: pathTo.distDir,
    publicPath: '/',
  },
  stats: {
    all: false
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
    new WebpackShower(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      { from: pathTo.publicDir, to: pathTo.dist },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),
    new HtmlWebpackPlugin({
      title: 'I\'m Mohsen Shafiei',
      filename: 'index.html',
      languageCode: 'en-US',
      template: pathTo.htmlTemplateSrc,
      inject: true,
      favicon: pathTo.favIconSrc,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: `
          This is my (Mohsen Shafiei) official website.
          I am a frontend engineer. I am from Iran and I live in Singapore.
          I really like to contribute on open source project and build tools for
          other developers to make frontend developement faster and more effective.

          My skills are:
            Backend:
              NodeJS, Python, Golang
            Frontend:
              Javascript, HTML, CSS
            Frameworks:
              React, Vue, Express, Django
            Web tooling:
              Webpack, Rollup, Gulp, Grunt and etc
            CI / CD:
              Jenkins, Travis, Docker, Kubernetes and etc
            Familiar with:
              Functional Programming, Design Patterns, System Design, Platform Design and etc

          NOTE - Mohsen Shafiei Official Website.
          NOTE - Mohsen Shafiei is a frontend engineer.
          NOTE - Mohsen Shafiei works at Shopee.sg.
        `,
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
