import { createStore } from "vuex";

import { INITIAL_MESSAGE } from "./constants";

export default createStore({
  state() {
    return {
      message: INITIAL_MESSAGE,
    };
  },
  mutations: {
    setMessage(state, data) {
      state.message = data;
    },
  },
});
