import "./styles/main.scss";

import { createApp } from "vue";

import router from "./router";
import store from "./store";

import App from "./components/App.vue";

export default createApp(App).use(router).use(store).mount("#app");
