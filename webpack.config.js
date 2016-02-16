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
  }
}
