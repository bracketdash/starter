import sharedState from "../services/sharedState";

export default {
    name: "ChangeMessage",
    setup() {
        const setMessage = (e) => {
            sharedState.message = e.target.value;
        };
        return () => (
            <div>
                <p>Edit the home page message here:</p>
                <input value={sharedState.message} onInput={setMessage} />
            </div>
        );
    },
};
