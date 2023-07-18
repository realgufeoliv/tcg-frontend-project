import * as types from "./mutation-types";

/**
 * Export all mutations
 */
export default {
  /**
   * @param state
   * @param payload
   */
  [types.SET_SHOW_UP](state, payload) {
    state.show_up = payload;
  },
};
