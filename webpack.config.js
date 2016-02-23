module.exports = {
  entry: {
    all: './assets/index.js'
  },
  output: {
    path: 'js',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      'assets',
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(woff(2?)|svg|eot|ttf)$/, loader: 'file'}
    ]
  }
}
