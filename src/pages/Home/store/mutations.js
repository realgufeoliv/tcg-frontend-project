import * as types from "./mutation-types";

/**
 * Export all mutations
 */
export default {
  /**
   * @param state
   * @param payload
   */
  [types.SIGNUP_SERVICE](state, payload) {
    state.signup = payload;
  },
};
