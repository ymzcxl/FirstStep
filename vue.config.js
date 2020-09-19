const autoprefixer = require("autoprefixer");
module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
          // '@':'src',//默认的
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'vue$': 'vue/dist/vue.esm.js',
          // 'rounter':'@/rounter'只在main.js引用，直接用，this.$rounter
          'views':'@/views',
          // 'store':'@/store',和rounter一样
      }
  }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/common.scss";'
      },
      // postcss: {
      //   plugins: [
      //     autoprefixer(),
      //     pxtorem({
      //       rootValue: 75, // 换算的基数(设计图750的根字体为32)
      //       selectorBlackList: [".van", ".not-rem"], // 要忽略的选择器并保留为px。
      //       propList: ["*"],
      //       minPixelValue: 2 // 设置要替换的最小像素值。
      //     })
      //   ]
      // }
    }
  },
   //警告 webpack 的性能提示
  //  configureWebpack : {
  //   performance: {
  //       hints:'warning',
  //       //入口起点的最大体积 整数类型（以字节为单位）
  //       maxEntrypointSize: 50000000,
  //       //生成文件的最大体积 整数类型（以字节为单位 300k）
  //       maxAssetSize: 30000000,
  //       //只给出 js 文件的性能提示
  //       assetFilter: function(assetFilename) {
  //           return assetFilename.endsWith('.js');
  //       }
  //   }
  // },

  devServer: {
    disableHostCheck: true,
    https: true,
    // host:'192.168.0.101',
    open: true,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_URL,// 重环境变量中拿代理的路径
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}