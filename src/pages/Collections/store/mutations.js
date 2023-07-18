import * as types from "./mutation-types";

/**
 * Export all mutations
 */
export default {
  /**
   * @param state
   */
  [types.SET_ALL_SETS](state, payload) {
    state.all_sets = payload;
  },
};
