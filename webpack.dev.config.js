const { WebpackPluginServe } = require('webpack-plugin-serve')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const outputDir = path.resolve(process.cwd(), 'dist')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'src'), 'webpack-plugin-serve/client'],
  output: {
    path: outputDir,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new WebpackPluginServe({
      static: outputDir,
      progress: 'minimal',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
    }),
  ],
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
  },
}
