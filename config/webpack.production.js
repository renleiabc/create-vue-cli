/*
 * @Author: renlei
 * @Date: 2019-11-01 15:12:54
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-05 18:19:33
 * @Description: 生产模式
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production', //生产模式
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
