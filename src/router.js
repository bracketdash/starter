import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: "/",
        component: () => import("./components/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("./components/About.vue"),
    },
];

export default createRouter({ history, routes });
