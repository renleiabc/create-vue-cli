/*
 * @Author: renlei
 * @Date: 2019-11-05 15:11:55
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-05 18:21:31
 * @Description: 入口文件
 */
//vue.esm预编译调试的时候调用，支持最新标准的语法
import Vue from "vue/dist/vue.esm";

new Vue({
  el: '#app',
  data: {},
  template: `<lcc></lcc>`,

  //局部文件
  components: {
    lcc: {
      data() {
        return {
          name: 're'
        }
      },
      template: `
      <div><h1>{{name}}</h1></div>
      `
    }
  }
})
