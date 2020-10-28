import { createStore } from "vuex";

const state = {
    message: "Hello, World!",
};

const mutations = {
    setMessage(state, message) {
        state.message = message;
    },
};

export default createStore({ state, mutations });
