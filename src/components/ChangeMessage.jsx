import { reactive } from "vue";
import sharedState from "../services/sharedState";

export default {
    name: "ChangeMessage",
    setup() {
        const localState = reactive({
            message: sharedState.message,
        });
        const setLocalMessage = (e) => {
            localState.message = e.target.value;
        };
        const setSharedMessage = () => {
            sharedState.message = localState.message;
        };
        return () => (
            <div>
                <p>Edit the home page message here:</p>
                <input value={localState.message} onInput={setLocalMessage} />
                <div style="text-align: center;">
                    <button onClick={setSharedMessage}>Save Message</button>
                </div>
            </div>
        );
    },
};
