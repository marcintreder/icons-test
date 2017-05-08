const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*','.js','.jsx']
  },
  devServer: {
		historyApiFallback: true
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
       test: /\.scss$/,
       loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
     },
     {
       test: /\.(jpe?g|png|gif|svg)$/,
       loader: 'url-loader'
     },
     /*{
       test: /\.svg$/,
       loader: 'svg-inline-loader',
    },*/
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'url-loader'
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};


module.exports = config;
