import * as types from "./mutation-types";

export default {
  allowTabShow({ commit }, params) {
    commit(types.ARROWTABSHOW, params);
  },
  setToKen({ commit }, params) {
    commit(types.SETTOKEN, params);
  },
};
