module.exports = {
  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: ['json-loader'],
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
  },
  output: {
    publicPath: './../../dist/',
  },
  optimization: {
    chunkIds: 'named',
  },
};
