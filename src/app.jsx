import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import { createApp } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "./services/router";

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
