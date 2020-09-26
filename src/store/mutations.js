import * as types from './mutation-types';

export default {
  [types.ARROWTABSHOW]: (state, param) => {
    state.allowTabShow = param;
  }
};
