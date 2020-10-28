import "./assets/global.scss";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./components/App.vue";

import routes from "./routes";
import store from "./store";

const history = createWebHistory(process.env.BASE_URL);
const router = createRouter({ history, routes });

createApp(App).use(store).use(router).mount("#app");
