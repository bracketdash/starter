import { createRouter, createWebHistory } from "vue-router";
import About from "./vue/About.vue";
import Home from "./vue/Home.vue";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];

export default createRouter({ history, routes });