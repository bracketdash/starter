import { createRouter, createWebHistory } from "vue-router";
import { reactive } from "vue";
import routes from "./routes";
import sharedStateSrc from "./sharedStateSrc";

const history = createWebHistory(process.env.BASE_URL);

export const router = createRouter({ history, routes });

export const sharedState = reactive(sharedStateSrc);
