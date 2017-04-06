const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ['./test/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
    library: 'Contiamo',
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        babelrc: true,
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
