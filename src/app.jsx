import "./styles/main.scss";
import { createApp } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { router } from "./services";

const name = "App";

const setup = () => () => (
    <div>
        <div id="nav">
            <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView />
    </div>
);

createApp({ name, setup }).app.use(router).mount("#app");
