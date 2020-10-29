export default [
    {
        path: "/",
        component: () => import("../components/Home"),
    },
    {
        path: "/about",
        component: () => import("../components/About"),
    },
];
