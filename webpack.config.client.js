const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/client')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/server/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx']
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

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
