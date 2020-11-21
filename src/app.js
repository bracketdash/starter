import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";

import "./assets/styles.css";

import { createApp } from "vue";

import App from "./components/App.vue";
import router from "./services/router";
import store from "./services/store";

createApp(App).use(router).use(store).mount("#app");
