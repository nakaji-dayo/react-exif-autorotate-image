const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./example/index.jsx"
  },
  output: {
    path: 'example/dist',
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js.*$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
};
