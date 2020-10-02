import Vue from "vue";
import * as types from "./mutation-types";

export default {
  [types.ARROWTABSHOW]: (state, param) => {
    state.allowTabShow = param;
  },
  [types.SETTOKEN]: (state, param) => {
    state.userToken = param;
    Vue.ls.set(types.SETTOKEN, param);
  },
};
