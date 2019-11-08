/*
 * @Author: renlei
 * @Date: 2019-11-01 15:12:54
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-07 14:20:41
 * @Description: 生产模式
 */
/* 
webpack4.x 不支持使用extract-text-webpack-plugin问题
解决方法：

第一种：使用extract-text-webpack-plugin@next 和原本的使用一样

第二种：使用mini-css-extract-plugin代替
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//webpck 4+ 已经将 ExtractTextPlugin 废弃了, 官网也支持使用 MiniCssExtractPlugin 来分离 css, 它相对 ExtractTextPlugin 有更多的优点
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  mode: 'production', //生产模式
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        //处理js中引入的css
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      }
    ]
  },
  plugins: [
    new vueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      hash: true,
      chunks: ['index', 'main'],
      minify: {
        collapseWhitespace: true, //删除空格、换行
        //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
        minifyCSS: true,
        //是否压缩html里的js（使用uglify-js进行的压缩）
        minifyJS: true
      }
    }),
    new CleanWebpackPlugin(), //设置清除的打包目录
    // new webpack.LoaderOptionsPlugin({
    //   test: /\.vue$/,
    //   options: {
    //     vue: {
    //       loaders: {
    //         css: ExtractTextPlugin.extract({
    //           fallback: 'vue-style-loader',
    //           use: 'css-loader',
    //           publicPath: '../'
    //         })
    //       }
    //     }
    //   }
    // })
    //这个不添加allChunks参数的话，不会抽离chunk的css
    new ExtractTextPlugin({
      filename: 'css/[name].[hash:5].min.css',
      allChunks: false
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, //一个正则表达式，指示应优化\最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
      cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano。这应该是一个跟随cssnano.process接口的函数（接收CSS和选项参数并返回一个Promise）。
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
      canPrint: true //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
    })
  ]
}
