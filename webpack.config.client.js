const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/client/index.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/client')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          enforce: true,
          name: 'vendor',
          test: /node_modules/
        }
      }
    }
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [new LoadablePlugin()]
};
