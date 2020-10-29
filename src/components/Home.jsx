import ChangeMessage from "./ChangeMessage";
import logo from "../assets/images/logo.png";
import MessageDisplay from "./MessageDisplay";

export default {
    name: "Home",
    setup() {
        return () => (
            <div>
                <img alt="Vue logo" src={logo} />
                <MessageDisplay />
                <ChangeMessage />
            </div>
        );
    },
};
