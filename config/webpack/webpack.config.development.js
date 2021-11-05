const merge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config.base.js');
const path = require('path');
const webpack = require('webpack');

const config = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: 'template_ts.js',
    chunkFilename: 'template_ts-[name].js',
    path: path.resolve(__dirname, './../../dist/umd'),
    library: 'TemplateTS',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
});

module.exports = config;
