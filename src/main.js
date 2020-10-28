import "./assets/global.scss";

import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import App from "./components/App.vue";

import { routes } from "./routes";
import { state, mutations } from "./store";

const store = createStore({ state, mutations });

const history = createWebHistory(process.env.BASE_URL);
const router = createRouter({ history, routes });

createApp(App).use(store).use(router).mount("#app");
