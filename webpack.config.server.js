const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/server/index.ts',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/server')
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@loadable/babel-plugin']
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  plugins: [new LoadablePlugin()]
};
