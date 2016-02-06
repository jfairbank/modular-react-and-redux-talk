/* eslint no-var:0 */
var path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'code', 'main.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://127.0.0.1:8081/assets/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
};
