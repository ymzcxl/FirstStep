import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

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

const router = new Router({
  mode: 'history',
  base: '',
  routes
})

router.beforeEach(async (to, from, next) => {
  let arr = [
    {
      path: '/mine'
    }
  ]
  let isFlag = arr.find(item => {
    return to.path === item.path
  })
  // 判断是否在一级页面
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
