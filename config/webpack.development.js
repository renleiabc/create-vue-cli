/*
 * @Author: renlei
 * @Date: 2019-11-01 15:12:12
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-08 09:56:52
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
    hot: true,
    //contentBase: './appout',
    // host: '0.0.0.0',
    // port: 8899,
    historyApiFallback: true, // is it enabled ?
    inline: true
  },
  //devtool: 'source-map',
  //cssSourceMap: true, //开启    是否开启 cssSourceMap默认为false
  // dev: { // dev 环境
  //   assetsSubDirectory: 'static', // 编译输出的二级目录
  //   assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
  //   proxyTable: {}, // 需要 proxyTable 代理的接口（可跨域）
  //   cssSourceMap: false // 是否开启 cssSourceMap(因为一些 bug 此选项默认关闭，详情可参考 https://github.com/webpack/css-loader#sourcemaps)
  // },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new vueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
/* 
    1. contentBase："./" // 本地服务器在哪个目录搭建页面，一般我们在当前目录即可；

    2. historyApiFallback：true // 当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面；

    3. inline：true // 用来支持dev-server自动刷新的配置，webpack有两种模式支持自动刷新，一种是iframe模式，一种是inline模式；使用iframe模式是不需要在devServer进行配置的，只需使用特定的URL格式访问即可；不过我们一般还是常用inline模式，在devServer中对inline设置为true后，当我们启动webpack-dev-server时仍要需要配置inline才能生效，这一点我们之后再说；

    4. hot：true // 启动webpack热模块替换特性，这里也是坑最多的地方，不少博客都将hot设置了true，我们姑且也设置为true，之后再看；

    5. port：端口号(默认8080) // 这就不用我多说了吧；
*/
