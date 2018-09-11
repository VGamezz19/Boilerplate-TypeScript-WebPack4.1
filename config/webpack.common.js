const commonPaths = require('./common-paths');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: commonPaths.src,
  output: {
    path: commonPaths.build,
    filename: '[name].js',
    chunkFilename: 'chunks/[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.css', '.scss']
  },
  module: {
    rules: [
      //TSLINT- webpack stopper
      {
          enforce: 'pre',
          test: /\.ts$/,
          exclude: /(node_modules|scripts|assets)/,
          loader: 'tslint-loader',
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { 
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader" 
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`,
      favicon: `${commonPaths.public}/favicon.ico`,
      hash: true
    })
  ]
};
