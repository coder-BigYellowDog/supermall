import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from 'components/common/toast'
// 解决点击300ms延迟
import FastClick from 'fastclick'
// 图片懒加载
import LazyLoad from 'vue-lazyload'



Vue.config.productionTip = false

// 为 $bus赋值 Vue实例
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

Vue.use(LazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
