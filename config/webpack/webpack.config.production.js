const merge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config.base.js');
const path = require('path');
const webpack = require('webpack');

const config = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'template_ts.min.js',
    chunkFilename: 'template_ts-[name].min.js',
    path: path.resolve(__dirname, './../../dist/umd'),
    library: 'TemplateTS',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
});

module.exports = config;
