import { createStore } from "vuex";

const state = {
    message: "Hello, World!",
};

const getters = {
    message: (state) => state.message,
};

const mutations = {
    updateMessage(state, message) {
        state.message = message;
    },
};

export default createStore({ state, getters, mutations });
