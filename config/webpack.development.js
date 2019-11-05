/*
 * @Author: renlei
 * @Date: 2019-11-01 15:12:12
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-05 18:21:12
 * @Description: 开发模式
 */
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development', //打包模式
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
