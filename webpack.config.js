var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: {
    vendors: ['angular']
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.less$/, loader: 'style!css!less' },
       { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
