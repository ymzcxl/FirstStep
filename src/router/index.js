import Vue from "vue";
import Router from "vue-router";
import { routes } from "./router";
import { SETTOKEN } from "@/store/mutation-types";

import store from "@/store";

Vue.use(Router);

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
const router = new Router({
  mode: "history",
  base: "",
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 定义一个数组：包含下面路径的就去掉底部菜单栏[白名单]
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
  let redirect = decodeURIComponent(from.query.redirect || to.fullPath || "/");
  // 判断是否在一级页面
  isFlag
    ? store.dispatch("allowTabShow", true)
    : store.dispatch("allowTabShow", false);
  // 判断目标路由是否需要登录验证
  if (to.meta.requireAuth) {
    if (Vue.ls.get(SETTOKEN)) {
      next();
    } else {
      next({ path: "/login", query: { redirect } });
    }
  } else {
    next();
  }
  if (to.meta.title) {
    // 设置标题
    document.title = to.meta.title;
  }
});

export default router;
