// 按需引入
const Home = () => import("@/views/home/Home");

export default [
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: Home,
  },
];
