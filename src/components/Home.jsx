import MessageDisplay from "./MessageDisplay";
import ChangeMessage from "./ChangeMessage";

const name = "Home";

const setup = () => () => (
    <div>
        <img alt="Vue logo" src="/images/logo.png" />
        <MessageDisplay />
        <ChangeMessage />
    </div>
);

export default { name, setup };
