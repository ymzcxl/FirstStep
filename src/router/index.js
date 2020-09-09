import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Mine = () => import('@/views/mine/Mine')
const Login = () => import('@/views/login/Login')
const routes = [
  {
    path: '',
    redirect: '/mine'
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/login',
    component: Login
  }

]
export default new Router({
  routes,
  mode: 'history'
})
