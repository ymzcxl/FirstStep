// 按需引入
const Classify = () => import("@/views/classify/Classify");

export default [
  {
    path: "/classify",
    name: "Classify",
    meta: {
      title: "商品分类",
    },
    component: Classify,
  },
];
