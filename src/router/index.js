import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () => import('../views/home/Home')
const Classification = () => import('../views/category/Classification')
const Shopping = () => import('../views/cart/Shopping')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1. 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/classification',
        component: Classification
      },
      {
        path: '/shopping',
        component: Shopping
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/detail/:iid',
        component: Detail
      }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router