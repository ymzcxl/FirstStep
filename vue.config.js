const autoprefixer = require("autoprefixer");
console.log( process.env.VUE_APP_BASE_URL);
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
  devServer: {
    https: true, 
    open: false, 
    proxy: {
      "/api": {
        target: "",
        ws: false,
        changeOrigin: true
      }
    }
  }
}