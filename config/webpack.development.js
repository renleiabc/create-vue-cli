/*
 * @Author: renlei
 * @Date: 2019-11-01 15:12:12
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-06 16:52:41
 * @Description: 开发模式
 */
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development', //开发模式
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    hot: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new vueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
