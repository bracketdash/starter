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
                <div>
                    <button onClick={setSharedMessage}>Change "{sharedState.message}" to "{localState.message}"</button>
                </div>
            </div>
        );
    },
};
