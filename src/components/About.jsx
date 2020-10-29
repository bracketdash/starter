import ChangeMessage from "./ChangeMessage";

export default {
    name: "About",
    setup() {
        return () => (
            <div>
                <div>
                    <i class="fas fa-info-circle fa-3x"></i>
                </div>
                <h1>This is the about page.</h1>
                <ChangeMessage />
            </div>
        );
    },
};
