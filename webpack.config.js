module.exports = {
  entry: __dirname + '/public/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader!jsx-loader?harmony'
    }]
  }
};