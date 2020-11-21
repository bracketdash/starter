import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "../css/index.css";

import { createApp } from "vue";
import App from "../vue/App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
