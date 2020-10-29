import ChangeMessage from "./ChangeMessage";

const name = "About";

const setup = () => () => (
    <div>
        <div>
            <i className="fas fa-info-circle fa-3x"></i>
        </div>
        <h1>This is the about page.</h1>
        <ChangeMessage />
    </div>
);

export default { name, setup };
