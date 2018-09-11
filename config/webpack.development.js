const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonPaths = require('./common-paths');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
module.exports = {
  entry: {
    vendor: [
      // Required to support async/await
      '@babel/polyfill',
    ],
    main: [
      commonPaths.src,
    ]
  },
  mode:'development',
  devServer: {
    port: '3000',
    // Change it if other port needs to be used
    historyApiFallback: true,
    hot: true,
    // enable HMR on the server
    // contentBase: commonPaths.src,
    // // match the output path
    // publicPath: '/'
    // // match the output `publicPath`
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /(\.scss|\.css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  }
};
