import "./styles/main.scss";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { routes } from "./routes";
import { state } from "./state";

import App from "./components/App.vue";

const app = createApp(App);
const history = createWebHistory(process.env.BASE_URL);

app.use(createRouter({ history, routes }));
app.use(createStore({ actions, getters, mutations, state }));

app.mount("#app");
