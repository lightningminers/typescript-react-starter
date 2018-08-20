var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader');
var ROOT = path.resolve(__dirname)

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: ROOT + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map.js',
    publicPath: '//localhost:8889/dist/',
  },
  devServer: {
    inline: true,
    quiet: true,
    contentBase: "./",
    port: 8889
  },
  module: {
    rules: [
      { test: /\.ts[x]?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.ts[x]$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024*20
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
    alias: {
      '@': path.resolve(ROOT,'src')
    }
  },
  plugins: [
    new CheckerPlugin(),
  ]
}
