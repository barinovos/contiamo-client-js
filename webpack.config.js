const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './test/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
    library: 'Contiamo',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /lib/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'flow'] }
        }],
      }
    ]
  },
  devServer: {
    // Unlike the cli flag, this doesn't set
    // HotModuleReplacementPlugin!
    hot: true,
    inline: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: 'localhost', // Defaults to `localhost`
    port: 8080 // Defaults to 8080
  },
  plugins: [
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};
