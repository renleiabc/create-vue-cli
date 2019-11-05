/*
 * @Author: renlei
 * @Date: 2019-11-05 14:58:06
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-05 17:30:13
 * @Description: webpack打包文件
 */
module.exports = env => {
  console.log(env)
  //防止为空
  env = env || {}
  return {
    entry: './src/component.js',
    ...(env.development
      ? require('./config/webpack.development')
      : require('./config/webpack.production'))
  }
}
