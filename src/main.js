import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router";
import store from "./services/store";

createApp(App).use(store).use(router).mount("#app");
