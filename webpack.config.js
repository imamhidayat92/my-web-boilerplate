var webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      './public/js/src/index.js'
    ],
    other: [
      './public/js/src/other.js'
    ]
  },
  output: {
    filename: '[name].public.js',
    path: __dirname + '/public/js/build/',
    publicPath: '/js/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false
    })
  ]
};
