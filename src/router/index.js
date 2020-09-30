import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

// 一级菜单
// const Home = () => import("@/views/home/Home");
// const Classify = () => import("@/views/classify/Classify");
// const Cart = () => import("@/views/cart/Cart");
// const Mine = () => import("@/views/mine/Mine");

// 二级页面
const Login = () => import("@/views/login/Login");

const routes = [
  // 一级菜单
  {
    path: "",
    redirect: "/mine",
  },
  {
    path: "/mine",
    component: () =>
      import(/* webpackChunkName: "artisticTalent" */ "@/views/mine/Mine.vue"),
    meta: { title: "个人中心" },
  },
  {
    path: "/cart",
    component: Cart,
    meta: { title: "购物车" },
  },
  {
    path: "/classify",
    component: Classify,
    meta: { title: "分类" },
  },
  {
    path: "/home",
    component: Home,
    meta: { title: "首页" },
  },
  // 二级菜单
  {
    path: "/login",
    component: Login,
    meta: { title: "登录/注册" },
  },
];

const router = new Router({
  mode: "history",
  base: "",
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 定义一个数组：包含下面路径的就去掉底部菜单栏
  const arr = [
    {
      path: "/home",
    },
    {
      path: "/classify",
    },
    {
      path: "/cart",
    },
    {
      path: "/mine",
    },
  ];
  const isFlag = arr.find(item => {
    return to.path === item.path;
  });
  // 判断是否在一级页面
  // 如果是真store.dispatch('allowTabShow', true) 否则store.dispatch('allowTabShow', false)
  isFlag
    ? store.dispatch("allowTabShow", true)
    : store.dispatch("allowTabShow", false);
  // 判断目标路由是否需要登录验证
  // if (to.meta.requireAuth) {
  //   // if (Vue.ls.get(ACCESS_TOKEN)) {
  //   //   next()
  //   // } else {
  //   //   next({ path: '/login', query: { redirect: to.fullPath } })
  //   // }
  // } else {
  next();
  // }
  if (to.meta.title) {
    // 设置标题
    document.title = to.meta.title;
  }
});

// window.$router = router
export default router;

// export default new Router({
//   routes,
//   mode: 'history'
// })
