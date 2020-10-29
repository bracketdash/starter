import MessageDisplay from "./MessageDisplay";

export default {
    name: "Home",
    setup() {
        return () => (
            <div>
                <img alt="Vue logo" src="/images/logo.png" />
                <MessageDisplay />
            </div>
        );
    },
};
