const path = require('path');

module.exports = {
  devtool: '#inline-source-map',

  entry: {
    app: path.join(__dirname, 'src', 'main.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://127.0.0.1:8081/assets/',
    filename: 'app.bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass',
        ],
      },
    ],
  },
};
