let webpack = require('webpack');

module.exports = {
  entry: 'index.tsx',
  output: {
    filename: 'assets/js/app.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'source-map-loader', enforce: 'pre' },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
  }
}
