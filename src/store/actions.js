import * as types from './mutation-types';

export default {
  // addCart (context, payLoad) {
  //   return new Promise((resolve, reject) => {
  //     let oldProduct = null
  //     for (let item of context.state.cartList) {
  //       if (item.iid === payLoad.iid) {
  //         oldProduct = item
  //       }
  //     }
  //     if (oldProduct) {
  //       // oldProduct.count += 1
  //       context.commit('AddCounter', oldProduct)
  //     } else {
  //       payLoad.count = 1
  //       context.commit('addToCart', payLoad)
  //     }
  //   })
  // },
  allowTabShow({ commit }, params) {
    commit(types.ARROWTABSHOW, params);
  }
};
