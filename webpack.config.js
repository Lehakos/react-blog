const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
        components: path.resolve('./src/components'),
        containers: path.resolve('./src/containers'),
        actions: path.resolve('./src/actions'),
        reducers: path.resolve('./src/reducers')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
