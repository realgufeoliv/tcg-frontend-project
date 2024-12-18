import state from "./state";
import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

/**
 * export all modules from store
 */
export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
