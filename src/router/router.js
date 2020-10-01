let moduleRoutes = [];
const routerContext = require.context("./modules/", true, /\.js$/);
routerContext.keys().forEach(filePath => {
  const routerModule = routerContext(filePath);
  moduleRoutes = [...moduleRoutes, ...(routerModule.default || routerModule)];
});

// 默认登录展示页面
const firstShow = [
  {
    path: "",
    redirect: "/home",
  },
];

moduleRoutes = [...moduleRoutes, ...firstShow];

export const routes = moduleRoutes;
