import { createStore } from "vuex";

import c from "./constants";

export default createStore({
  state() {
    return {
      message: c.INITIAL_MESSAGE,
    };
  },
  mutations: {
    setMessage(state, data) {
      state.message = data;
    },
  },
});
