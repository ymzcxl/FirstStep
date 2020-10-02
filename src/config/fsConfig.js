/**
 * fs项目其他文件的配置
 */
import Vue from "vue";
import axios from "@/network/request";
import Vant, { Toast } from "vant";
import config from "@/config/vuels/VueLs";
import Storage from "vue-ls";
Vue.use(Storage, config.storageOptions);
Vue.prototype.$axios = axios;
Vue.prototype.$toast = Toast;
Vue.use(Toast);
Vue.use(Vant);
