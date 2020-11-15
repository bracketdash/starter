import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";

import "./styles/main.css";

import { createApp } from "vue";

import App from "./components/_App.vue";
import router from "./services/router";

createApp(App).use(router).mount("#app");
