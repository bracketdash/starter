import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const plugins = [createPersistedState({ storage: window.sessionStorage })];

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

export default createStore({ plugins, state, getters, mutations });
