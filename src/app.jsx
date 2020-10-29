import "./styles/main.scss";

import { createApp } from "vue";

import router from "./router";
import store from "./store";

import { RouterLink, RouterView } from "vue-router";

const app = createApp({
    name: "App",
    setup() {
        return () => (
            <div>
                <div id="nav">
                    <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>
                </div>
                <RouterView />
            </div>
        );
    },
});

app.use(router).use(store).mount("#app");
