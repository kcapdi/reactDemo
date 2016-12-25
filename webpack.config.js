'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'src/dist');
const PUBLIC_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/app');

module.exports = {
  entry: {
    app: APP_DIR + '/index.jsx'
  },

  output: {
    path: BUILD_DIR,
    //TODO fix path
    publicPath: '/react-demo/src/dist/',
    filename: 'bundle.js'
  },
  devtool: '#cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader:'style-loader!css-loader!resolve-url!sass?sourceMap'
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader?minimize'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[name].[ext]'
        ]
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  // sassLoader: {
  //   includePaths: [
  //     path.resolve(__dirname, './src/public/scss')
  //   ]
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new ExtractTextPlugin('styles.css', {
    //   allChunks: true
    // }),
    // new CopyWebpackPlugin([
    //   { from: PUBLIC_DIR + '/assets', to: BUILD_DIR + '/assets'}
    // ], {
    //   copyUnmodified: true
    // })
  ],
  watch: true,

  devServer: {
    host: 'localhost',
    port: 8080
  }
};
