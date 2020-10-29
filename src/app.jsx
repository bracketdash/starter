import "./styles/main.scss";
import { createApp } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { router } from "./services";

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

app.use(router).mount("#app");
