// 按需引入
const Cart = () => import("@/views/cart/Cart");

export default [
  {
    path: "/cart",
    name: "Cart",
    meta: {
      title: "购物车",
    },
    component: Cart,
  },
];
