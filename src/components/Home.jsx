import MessageDisplay from "./MessageDisplay";
import ChangeMessage from "./ChangeMessage";

export default {
    name: "Home",
    setup() {
        return () => (
            <div>
                <img alt="Vue logo" src="/images/logo.png" />
                <MessageDisplay />
                <ChangeMessage />
            </div>
        );
    },
};
