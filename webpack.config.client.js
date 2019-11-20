const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    app: ['./src/client/index.tsx']
  },
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
  }
};
