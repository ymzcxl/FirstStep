// 按需引入
const GoodsDetail = () => import("@/views/detail/GoodsDetail");

export default [
  {
    path: "/detail",
    name: "Detail",
    meta: {
      title: "商品详情页面",
    },
    component: GoodsDetail,
  },
];
