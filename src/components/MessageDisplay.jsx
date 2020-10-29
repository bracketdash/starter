import { computed } from "vue";
import store from "../store";

export default {
    name: "MessageDisplay",
    setup() {
        const message = computed(() => store.state.message);
        return () => (
            <div>
                <h1>{message.value}</h1>
            </div>
        );
    },
};
