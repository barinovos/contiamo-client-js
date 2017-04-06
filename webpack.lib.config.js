const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'contiamo.lib.js',
    sourceMapFilename: 'contiamo.lib.js.map',
    library: 'ContiamoClient',
    libraryTarget: 'commonjs2'
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
  }
};
