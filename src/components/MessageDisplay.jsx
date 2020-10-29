import sharedState from "../services/sharedState";

export default {
    name: "MessageDisplay",
    setup() {
        return () => (
            <div>
                <h1>{sharedState.message}</h1>
            </div>
        );
    },
};
