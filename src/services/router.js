import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("../views/About.vue"),
    },
];

export default createRouter({ history, routes });
