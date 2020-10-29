import { sharedState } from "../services";

const name = "MessageDisplay";

const setup = () => () => (
    <div>
        <h1>{sharedState.message}</h1>
    </div>
);

export default { name, setup };
