import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getter';
// 1.安装插件
Vue.use(Vuex);
// 2.创建store对象
const state = {
  cartList: [],
  allowTabShow: true // 是否显示底部菜单栏
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
// 挂载到vue实例上
export default store;
