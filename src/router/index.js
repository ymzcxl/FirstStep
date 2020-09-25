import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const Mine = () => import('@/views/mine/Mine')
const Classify = () => import('@/views/classify/Classify')
const Login = () => import('@/views/login/Login')
let Home = () => import('@/views/home/Home')
const routes = [
  {
    path: '',
    redirect: '/mine'
  },
  {
    path: '/mine',
    component: Mine,
    meta: { title: '我的页面咯' }
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录页面咯' }
  },
  {
    path: '/home',
    component: Home, // 引入上面Home
    meta: { title: '首页' }
  },
  {
    path: '/classify',
    component: Classify, // 引入上面Home
    meta: { title: '分类' }
  }
]

const router = new Router({
  mode: 'history',
  base: '',
  routes
})

router.beforeEach(async (to, from, next) => {
  // 定义一个数组
  let arr = [
    {
      path: '/mine'
    },
    {
      path: '/home'
    }
  ]
  let isFlag = arr.find(item => {
    return to.path === item.path
  })
  // 判断是否在一级页面
  // 如果是真store.dispatch('allowTabShow', true) 否则store.dispatch('allowTabShow', false)
  isFlag
    ? store.dispatch('allowTabShow', true)
    : store.dispatch('allowTabShow', false)
  // 判断目标路由是否需要登录验证
  // if (to.meta.requireAuth) {
  //   // if (Vue.ls.get(ACCESS_TOKEN)) {
  //   //   next()
  //   // } else {
  //   //   next({ path: '/login', query: { redirect: to.fullPath } })
  //   // }
  // } else {
  next()
  // }
  if (to.meta.title) {
    // 设置标题
    document.title = to.meta.title
  }
})

// window.$router = router
export default router

// export default new Router({
//   routes,
//   mode: 'history'
// })
