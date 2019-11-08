/*
 * @Author: renlei
 * @Date: 2019-11-07 14:59:58
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-07 15:06:48
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    //实时监听state值的变化(最新状态)
    isShow(state) {
      //承载变化的showFooter的值
      return state.count
    },
    getChangedNum() {
      //承载变化的changebleNum的值
      return state.changableNum
    }
  }
})
export default store
