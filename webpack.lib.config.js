const path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './test/index.js'],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'contiamo.lib.js',
    sourceMapFilename: 'contiamo.lib.js.map',
    library: 'ContiamoClient',
    libraryTarget: 'commonjs2'
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
};
