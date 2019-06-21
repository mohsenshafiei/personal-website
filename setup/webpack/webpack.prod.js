const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const pathTo = require('../util');
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackBundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: pathTo.reportSrc,
      defaultSizes: 'gzip',
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_API_URL': JSON.stringify('https://api.prod.url'),
    }),
    new InjectManifest({
      swDest: 'service-worker.js',
      importWorkboxFrom: 'local',
      importsDirectory: 'wb-assets',
      swSrc: pathTo.swSrc,
    }),
  ],
});
