import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const history = createWebHistory(process.env.BASE_URL);

export default createRouter({ history, routes });
