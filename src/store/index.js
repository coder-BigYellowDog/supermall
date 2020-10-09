import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1、安装插件
Vue.use(Vuex)

// 2、创建store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  // mutations 可被跟踪
  mutations,
  getters,
  actions
})

// 3、挂载Vue实例上
export default store