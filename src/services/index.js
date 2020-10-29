import { reactive } from "vue";
import routes from "./routes";
import sharedState from "./sharedState";

export const sharedState = reactive(sharedState);
