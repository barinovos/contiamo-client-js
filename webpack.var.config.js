const path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './test/index.js'],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'contiamo.js',
    sourceMapFilename: 'contiamo.js.map',
    library: 'ContiamoClient',
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
};
