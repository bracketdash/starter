import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("../components/Home"),
        },
        {
            path: "/about",
            component: () => import("../components/About"),
        },
    ]
});
