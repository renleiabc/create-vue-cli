/*
 * @Author: renlei
 * @Date: 2019-11-05 14:58:06
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-06 17:58:09
 * @Description: webpack打包文件
 */
module.exports = env => {
  console.log(env)
  //防止为空
  env = env || {}
  return {
    entry: './src/index.js',
    module: {
      rules: [
        { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
        { test: /\.vue$/, use: ['vue-loader'] }
      ]
    },
    devtool: env.development ? 'eval-source-map' : '',
    // 起了一个别名
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm'
      },
      //自动识别的扩展名
      extensions: ['.js', '.json', '.vue']
    },
    ...(env.development
      ? require('./config/webpack.development')
      : require('./config/webpack.production'))
  }
}
