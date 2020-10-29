import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: "/",
        component: () => import("../components/Home"),
    },
    {
        path: "/about",
        component: () => import("../components/About"),
    },
];

export default createRouter({ history, routes });
