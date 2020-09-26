// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import axios from '@/network/request'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible.js'
Vue.use(Vant)
Vue.prototype.$axios = axios
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
