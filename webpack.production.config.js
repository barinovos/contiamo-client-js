const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'contiamo.js',
    sourceMapFilename: 'contiamo.js.map',
    library: 'ContiamoClient',
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
  }
};
