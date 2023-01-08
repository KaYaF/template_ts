import path from 'path';
import webpack from 'webpack';
import {merge} from 'webpack-merge';
import baseConfig from './webpack.config.base.js';

const config = merge(baseConfig, {
  target: 'node',
  mode: 'development',
  output: {
    filename: 'index.js',
    chunkFilename: 'template_ts-[name].js',
    path: path.resolve(__dirname, './../../dist/esm'),
    libraryTarget: 'commonjs-module',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
});

module.exports = config;
