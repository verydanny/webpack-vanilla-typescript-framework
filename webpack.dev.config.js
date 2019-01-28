const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const outputDir = path.resolve(process.cwd(), 'dist')

module.exports = {
  mode: 'development',
  watch: true,
  entry: ['./src/index.ts', 'webpack-plugin-serve/client'],
  output: {
    path: outputDir,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new Serve({
      static: outputDir,
      log: {
        level: 'warn',
      },
      progress: 'minimal',
      historyFallback: true,
    }),
    new HtmlWebpackPlugin(),
  ],
}
