export const routes = [
    {
        path: "/",
        component: () => import("./components/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("./components/About.vue"),
    },
];
