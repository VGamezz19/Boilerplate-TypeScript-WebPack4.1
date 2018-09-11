const commonPaths = require('./common-paths');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: commonPaths.src,
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 5,
          mangle: true,
          // Eliminate comments
          comments: false,
          // Compression specific options
          compress: {
          // remove warnings
            warnings: false,
            // Drop console statements
            drop_console: true
          },
        }
      }),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.build], { root: commonPaths.root }),
    new CopyWebpackPlugin([
      {
        from: `${commonPaths.assets}`,
        to: `${commonPaths.build}/assets`,
      },
      {
        from: `${commonPaths.public}/favicon.ico`,
        to: `${commonPaths.build}/favicon.ico`,
        toType: 'file'
      }
    ]),
    new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' })
  ]
};
