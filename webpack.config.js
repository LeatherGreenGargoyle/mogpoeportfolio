const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'client/index.js')
const BUILD_DIR = path.resolve(__dirname, 'app/build')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: SRC_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
}
