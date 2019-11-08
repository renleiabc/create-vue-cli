/*
 * @Author: renlei
 * @Date: 2019-11-01 17:30:46
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-07 15:07:44
 * @Description:
 */
import Vue from 'vue'
import App from './App'
import router from "./router";
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

