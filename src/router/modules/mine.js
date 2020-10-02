// 按需引入
const Mine = () => import("@/views/mine/Mine");
const Login = () => import("@/views/login/Login");

export default [
  {
    path: "/mine",
    name: "Mine",
    meta: {
      title: "个人中心", //页面标题名
      requireAuth: true, //需要登录验证
    },
    component: Mine,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录/注册",
    },
    component: Login,
  },
];
