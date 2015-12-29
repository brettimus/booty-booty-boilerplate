const React = require("react");
const ReactDOM = require("react-dom");

const App = () => ({
    render() {
        return (
            <p style={{textAlign: "center", position: "absolute", top: "20%", width: "100%"}}>
                <b>Hello!</b> And welcome to hot-boilerplate.
            </p>
        );
    },
});

const appMount = document.getElementById("tada");

global.RD = ReactDOM;

ReactDOM.render(<App />, appMount);