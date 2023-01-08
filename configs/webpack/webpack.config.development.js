import path from 'path';
import webpack from 'webpack';
import {merge} from 'webpack-merge';
import baseConfig from './webpack.config.base.js';

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
