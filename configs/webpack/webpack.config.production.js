import path from 'path';
import webpack from 'webpack';
import {merge} from 'webpack-merge';
import baseConfig from './webpack.config.base.js';

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
