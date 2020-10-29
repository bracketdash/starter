import { computed } from "vue";
import store from "../store";

export default {
    name: "ChangeMessage",
    setup() {
        const message = computed(() => store.state.message);
        const setMessage = (e) => {
            store.commit("setMessage", e.target.value);
        };
        return () => (
            <div>
                <p>Edit the home page message here:</p>
                <input value={message.value} onInput={setMessage} />
            </div>
        );
    },
};
