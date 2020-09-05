import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Mine = () => import('@/views/mine/Mine')
const routes = [
  {
    path: '',
    redirect: '/mine'
  },
  {
    path: '/mine',
    component: Mine
  }

]
export default new Router({
  routes,
  mode: 'history'
})
