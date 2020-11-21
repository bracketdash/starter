import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../vue/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("../vue/About.vue"),
    },
  ],
});
