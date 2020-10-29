import ChangeMessage from "./ChangeMessage";
import logo from "../assets/images/logo.png";
import MessageDisplay from "./MessageDisplay";

const name = "Home";

const setup = () => () => (
    <div>
        <img alt="Vue logo" src={logo} />
        <MessageDisplay />
        <ChangeMessage />
    </div>
);

export default { name, setup };
