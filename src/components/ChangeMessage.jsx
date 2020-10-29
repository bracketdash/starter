import { sharedState } from "../services";

const name = "ChangeMessage";

const setup = () => {
    const setMessage = (e) => {
        sharedState.message = e.target.value;
    };
    return () => (
        <div>
            <p>Edit the home page message here:</p>
            <input value={sharedState.message} onInput={setMessage} />
        </div>
    );
};

export default { name, setup };
