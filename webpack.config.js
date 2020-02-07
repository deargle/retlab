const path = require('path');

module.exports = {
  entry: ['./js/script.ts'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
